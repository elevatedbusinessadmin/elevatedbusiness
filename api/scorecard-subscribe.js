const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api/subscribers';

const json = (response, statusCode, payload) => {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(payload));
};

const getRequestIp = (request) => {
  const forwardedFor = request.headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string' && forwardedFor.trim()) {
    return forwardedFor.split(',')[0].trim();
  }

  return request.socket?.remoteAddress;
};

const formatMailerLiteDate = (date) => date.toISOString().slice(0, 19).replace('T', ' ');

const getBody = (request) => {
  if (!request.body) return {};
  if (typeof request.body === 'string') {
    try {
      return JSON.parse(request.body);
    } catch (error) {
      return {};
    }
  }

  return request.body;
};

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return json(response, 405, { ok: false, message: 'Method not allowed.' });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    return json(response, 500, {
      ok: false,
      message: 'The scorecard signup is not configured yet.'
    });
  }

  const { name, email, consent } = getBody(request);
  const firstName = typeof name === 'string' ? name.trim() : '';
  const emailAddress = typeof email === 'string' ? email.trim().toLowerCase() : '';

  if (!firstName || !emailAddress || consent !== true) {
    return json(response, 400, {
      ok: false,
      message: 'Please enter your name, email address and consent before continuing.'
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailAddress)) {
    return json(response, 400, {
      ok: false,
      message: 'Please enter a valid email address.'
    });
  }

  const requestIp = getRequestIp(request);
  const payload = {
    email: emailAddress,
    fields: {
      name: firstName
    },
    groups: [groupId],
    opted_in_at: formatMailerLiteDate(new Date())
  };

  if (requestIp) {
    payload.optin_ip = requestIp;
  }

  try {
    const mailerLiteResponse = await fetch(MAILERLITE_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!mailerLiteResponse.ok) {
      return json(response, 502, {
        ok: false,
        message: 'MailerLite could not accept the signup right now.'
      });
    }

    return json(response, 200, { ok: true });
  } catch (error) {
    return json(response, 502, {
      ok: false,
      message: 'MailerLite could not be reached right now.'
    });
  }
};

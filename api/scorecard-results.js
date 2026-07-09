const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api/subscribers';

const json = (response, statusCode, payload) => {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(payload));
};

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

const isAllowedResult = (value) => ['Hidden Potential', 'Building Momentum', 'Ready to Elevate'].includes(value);
const isAllowedBand = (value) => ['Lower', 'Middle', 'Higher'].includes(value);
const isAllowedPriority = (value) => [
  'Visibility',
  'Credibility',
  'Profitability',
  'Visibility + Credibility',
  'Visibility + Profitability',
  'Credibility + Profitability',
  'Balanced'
].includes(value);

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return json(response, 405, { ok: false, message: 'Method not allowed.' });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;

  if (!apiKey) {
    return json(response, 500, {
      ok: false,
      message: 'The scorecard result update is not configured yet.'
    });
  }

  const {
    email,
    totalScore,
    overallResult,
    visibilityResult,
    credibilityResult,
    profitabilityResult,
    priority
  } = getBody(request);

  const emailAddress = typeof email === 'string' ? email.trim().toLowerCase() : '';
  const numericTotal = Number(totalScore);

  if (!emailAddress || !Number.isInteger(numericTotal) || numericTotal < 0 || numericTotal > 48) {
    return json(response, 400, {
      ok: false,
      message: 'The scorecard result update was missing required information.'
    });
  }

  if (
    !isAllowedResult(overallResult) ||
    !isAllowedBand(visibilityResult) ||
    !isAllowedBand(credibilityResult) ||
    !isAllowedBand(profitabilityResult) ||
    !isAllowedPriority(priority)
  ) {
    return json(response, 400, {
      ok: false,
      message: 'The scorecard result update contained an unexpected value.'
    });
  }

  try {
    const mailerLiteResponse = await fetch(MAILERLITE_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailAddress,
        fields: {
          scorecard_total_score: numericTotal,
          scorecard_result: overallResult,
          scorecard_visibility_result: visibilityResult,
          scorecard_credibility_result: credibilityResult,
          scorecard_profitability_result: profitabilityResult,
          scorecard_priority: priority,
          scorecard_completed: 'Yes'
        }
      })
    });

    if (!mailerLiteResponse.ok) {
      return json(response, 502, {
        ok: false,
        message: 'MailerLite could not accept the scorecard result update right now.'
      });
    }

    return json(response, 200, { ok: true });
  } catch (error) {
    return json(response, 502, {
      ok: false,
      message: 'MailerLite could not be reached for the scorecard result update right now.'
    });
  }
};

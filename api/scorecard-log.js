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

  const webhookUrl = process.env.SCORECARD_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return json(response, 500, {
      ok: false,
      message: 'The scorecard response log is not configured yet.'
    });
  }

  const body = getBody(request);
  const {
    submitted_at,
    first_name,
    email,
    overall_score,
    overall_result,
    priority_area,
    visibility_score,
    visibility_result,
    credibility_score,
    credibility_result,
    profitability_score,
    profitability_result
  } = body;

  const answers = Array.from({ length: 12 }, (_, index) => body[`q${index + 1}_answer`]);
  const scoreFields = [overall_score, visibility_score, credibility_score, profitability_score];

  if (
    typeof submitted_at !== 'string' ||
    typeof first_name !== 'string' ||
    typeof email !== 'string' ||
    !scoreFields.every((score) => Number.isInteger(Number(score))) ||
    !isAllowedResult(overall_result) ||
    !isAllowedPriority(priority_area) ||
    !isAllowedBand(visibility_result) ||
    !isAllowedBand(credibility_result) ||
    !isAllowedBand(profitability_result) ||
    !answers.every((answer) => typeof answer === 'string' && answer.trim())
  ) {
    return json(response, 400, {
      ok: false,
      message: 'The scorecard response log was missing required information.'
    });
  }

  try {
    const makeResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!makeResponse.ok) {
      return json(response, 502, {
        ok: false,
        message: 'Make could not accept the scorecard response log right now.'
      });
    }

    return json(response, 200, { ok: true });
  } catch (error) {
    return json(response, 502, {
      ok: false,
      message: 'Make could not be reached for the scorecard response log right now.'
    });
  }
};

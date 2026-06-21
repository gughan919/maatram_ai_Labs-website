import nodemailer from 'nodemailer';

type EnquiryPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
};

const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

function jsonResponse(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

function asText(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const POST = async (request: Request) => {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');
  const toEmail = process.env.ENQUIRY_TO_EMAIL;

  if (!gmailUser || !gmailAppPassword || !toEmail) {
    return jsonResponse({ error: 'Email service is not configured.' }, 500);
  }

  let payload: EnquiryPayload;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  if (asText(payload.website)) {
    return jsonResponse({ ok: true });
  }

  const name = asText(payload.name);
  const email = asText(payload.email);
  const company = asText(payload.company);
  const message = asText(payload.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !message) {
    return jsonResponse({ error: 'Name, email, and message are required.' }, 400);
  }

  if (!isValidEmail(email)) {
    return jsonResponse({ error: 'Enter a valid email address.' }, 400);
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const subject = `New project enquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || 'Not provided'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
      <h2>New project enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Maatrm AI Labs" <${gmailUser}>`,
      to: toEmail.split(',').map((item) => item.trim()).filter(Boolean),
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch {
    return jsonResponse({ error: 'Unable to send enquiry right now.' }, 502);
  }

  return jsonResponse({ ok: true });
};

export const GET = () => jsonResponse({ error: 'Method not allowed.' }, 405);

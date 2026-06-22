import nodemailer from 'nodemailer';

type EnquiryPayload = {
  name?: unknown;
  email?: unknown;
  contact?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
};

const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

function cleanEnv(value: string | undefined) {
  return value?.trim().replace(/^["']|["']$/g, '');
}

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

function isValidPhone(value: string) {
  return /^[+\d][\d\s().-]{6,}$/.test(value);
}

export const POST = async (request: Request) => {
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
  const contact = asText(payload.contact || payload.email);
  const company = asText(payload.company);
  const message = asText(payload.message, MAX_MESSAGE_LENGTH);
  const welcomeMessage = `Hi ${name || 'there'}, thank you for contacting Maatrm AI Labs. We have received your enquiry and our team will get back to you soon. We're excited to explore how AI can help your business.`;

  if (!name || !contact || !company) {
    return jsonResponse({ error: 'Name, phone number / email, and business name are required.' }, 400);
  }

  if (!isValidEmail(contact) && !isValidPhone(contact)) {
    return jsonResponse({ error: 'Enter a valid email address or phone number.' }, 400);
  }

  const gmailUser = cleanEnv(process.env.GMAIL_USER);
  const gmailAppPassword = cleanEnv(process.env.GMAIL_APP_PASSWORD)?.replace(/\s/g, '');
  const toEmail = cleanEnv(process.env.ENQUIRY_TO_EMAIL);

  if (!gmailUser || !gmailAppPassword || !toEmail) {
    return jsonResponse({ error: 'Email service is not configured.', welcomeMessage }, 500);
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const subject = `New product enquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Phone / Email: ${contact}`,
    `Business: ${company}`,
    '',
    'Description:',
    message || 'Not provided',
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
      <h2>New product enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone / Email:</strong> ${escapeHtml(contact)}</p>
      <p><strong>Business:</strong> ${escapeHtml(company)}</p>
      <p><strong>Description:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message || 'Not provided')}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Maatrm AI Labs" <${gmailUser}>`,
      to: toEmail.split(',').map((item) => item.trim()).filter(Boolean),
      replyTo: isValidEmail(contact) ? contact : undefined,
      subject,
      text,
      html,
    });

    if (isValidEmail(contact)) {
      await transporter.sendMail({
        from: `"Maatrm AI Labs" <${gmailUser}>`,
        to: contact,
        subject: 'Thank you for contacting Maatrm AI Labs',
        text: welcomeMessage,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
            <p>${escapeHtml(welcomeMessage)}</p>
          </div>
        `,
      });
    }
  } catch (error) {
    console.error('Failed to send enquiry email:', {
      gmailUser,
      appPasswordLength: gmailAppPassword.length,
      error,
    });
    return jsonResponse({ error: 'Unable to send enquiry right now.' }, 502);
  }

  return jsonResponse({ ok: true, welcomeMessage });
};

export const GET = () => jsonResponse({ error: 'Method not allowed.' }, 405);

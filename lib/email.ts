import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST as string,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export function sanitize(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return map[char] || char;
  });
}

// Verify transporter on startup (optional)
async function verifyTransporterOnce() {
  try {
    await transporter.verify();
    console.log('Email transporter verified');
  } catch (err) {
    console.error('Email transporter verification failed:', err);
  }
}
verifyTransporterOnce();

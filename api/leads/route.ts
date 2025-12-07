import { NextRequest, NextResponse } from 'next/server';
import { transporter, sanitize } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, mobile, email, message, currentPartner } = formData;

    const html = `
      <h2>New Lead from Green Cabs</h2>
      <p><strong>Name:</strong> ${sanitize(name)}</p>
      <p><strong>Mobile:</strong> ${sanitize(mobile)}</p>
      <p><strong>Email:</strong> ${sanitize(email)}</p>
      <p><strong>Current Partner:</strong> ${sanitize(currentPartner)}</p>
      <p><strong>Message:</strong> ${sanitize(message)}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER!,
      to: process.env.ADMIN_EMAIL!,
      subject: `New Lead: ${sanitize(name)}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}

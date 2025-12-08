import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { sanitize } from "@/lib/utils";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const message = sanitize(body.message);

  try {
    await sendEmail({
      from: process.env.SMTP_USER!,
      to: process.env.ADMIN_EMAIL!,
      subject: `New Lead from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { sanitize } from "@/lib/utils";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    await sendEmail({
      from: process.env.SMTP_USER!,
      to: process.env.ADMIN_EMAIL!,
      subject: `New message from ${sanitize(name)}`,
      text: `Name: ${sanitize(name)}\nEmail: ${sanitize(email)}\nMessage: ${sanitize(message)}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}

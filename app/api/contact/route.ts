import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contactEmailTemplate } from "@/lib/email/contactTemplate";
import { SITE } from "@/constants/site";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: `"${SITE.name}" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      subject: `New message from ${name} - ${SITE.name}`,
      // replyTo: email,
      html: contactEmailTemplate(name, email, message)
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
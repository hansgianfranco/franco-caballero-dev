import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contactEmailTemplate } from "@/lib/email/contactTemplate";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
                pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
            }
        });

        await transporter.sendMail({
            from: `"francocaballero.dev" <${process.env.NEXT_PUBLIC_SMTP_EMAIL}>`,
            to: process.env.NEXT_PUBLIC_SMTP_EMAIL,
            subject: `New message from ${name} - francocaballero.dev`,
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
import { NextResponse } from "next/server";
import { sendMail } from "@/lib/send-email";

export async function POST(req: Request) {
  const { email, subject, message, name } = await req.json();

  const notifyOwner = sendMail({
    email: "Daniel Saunders <saundersdaniel.coding@gmail.com",
    sendTo: "saundersdaniel.coding@gmail.com",
    subject: `${subject}`,
    html: `
        <p><strong>You have received a new message from your website.</strong></p>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>This is an automated notification. Please do not reply to this email.</p>
        `,
  });

  try {
    await Promise.all([notifyOwner]);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "There was an error!" }, { status: 500 });
  }
}

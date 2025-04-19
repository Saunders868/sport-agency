import { NextResponse } from "next/server";
import { sendMail } from "@/lib/send-email";

export async function POST(req: Request) {
  const { email } = await req.json();

  const notifyOwner = sendMail({
    email: "Daniel Saunders <saundersdaniel.coding@gmail.com>",
    sendTo: "saundersdaniel.coding@gmail.com",
    subject: "New Follower!",
    html: `
    <p><strong>You have received a new message follower from website.</strong></p>
    <p><strong>From:</strong> ${email}</p>
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

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, location, phone, email, message } = await req.json();

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Exists" : "Not Found");

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || "",
        pass: process.env.EMAIL_PASS || "",
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "arbreshazeqiri0@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nLocation: ${location}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, business, message, preferredContact } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Log the contact submission (in production, you could:
    // 1. Send to an email service (EmailJS, SendGrid, etc.)
    // 2. Send to a webhook (Slack, Discord, etc.)
    // 3. Store in a third-party service (Airtable, Google Sheets, etc.)
    console.log("📧 Contact Form Submission:", {
      name,
      email,
      phone,
      business,
      message,
      preferredContact,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your message! We'll get back to you soon.",
      data: { name, email }
    });
  } catch (_error) {
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 });
  }
}

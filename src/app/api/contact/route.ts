import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email/contact-email";
import { siteConfig } from "@/config/site.config";

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

    // Log the contact submission
    console.log("📧 Contact Form Submission:", {
      name,
      email,
      phone,
      business,
      message,
      preferredContact,
      timestamp: new Date().toISOString(),
    });

    // Send email using AWS SES
    const emailResponse = await sendContactEmail(
      { name, email, phone, business, message, preferredContact },
      siteConfig.toemails.contactForm,
      siteConfig.fromEmails.publicContact
    );

    if (!emailResponse.success) {
      console.error("❌ Email sending failed:", emailResponse.message);
      return NextResponse.json(
        { error: "Failed to send message. Please try again.", details: emailResponse.message },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
      data: { name, email },
      messageId: emailResponse.messageId
    });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}

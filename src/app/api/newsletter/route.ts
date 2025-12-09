import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Log the newsletter subscription (in production, you could:
    // 1. Add to Mailchimp, ConvertKit, etc.
    // 2. Send to a webhook
    // 3. Store in a third-party service
    console.log("📬 Newsletter Subscription:", {
      email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ 
      success: true, 
      message: "Subscribed successfully! Thank you for joining." 
    });
  } catch (_error) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}

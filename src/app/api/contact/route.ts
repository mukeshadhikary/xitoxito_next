import { db, contactSubmissions } from "@/db";
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

    const result = await db.insert(contactSubmissions).values({
      name,
      email,
      phone,
      business,
      message,
      preferredContact,
    }).returning();

    return NextResponse.json({ success: true, data: result[0] });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 });
  }
}

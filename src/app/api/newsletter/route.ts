import { db, newsletter } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await db.insert(newsletter).values({ email }).onConflictDoNothing();

    return NextResponse.json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}

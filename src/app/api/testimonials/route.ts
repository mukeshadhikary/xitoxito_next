import { db, testimonials } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allTestimonials = await db.select().from(testimonials);
    return NextResponse.json(allTestimonials);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { TESTIMONIALS } from "@/data/constants";

export async function GET() {
  try {
    // Return static testimonials from constants
    const testimonials = TESTIMONIALS.map((t, index) => ({
      id: index + 1,
      name: t.name,
      business: t.business,
      businessNp: t.businessNp,
      text: t.text,
      textNp: t.textNp,
      rating: t.rating,
    }));
    
    return NextResponse.json(testimonials);
  } catch (_error) {
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

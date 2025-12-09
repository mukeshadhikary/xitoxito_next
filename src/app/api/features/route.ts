import { db, features } from "@/db";
import { NextResponse } from "next/server";
import { asc } from "drizzle-orm";

export async function GET() {
  try {
    const allFeatures = await db.select().from(features).orderBy(asc(features.order));
    return NextResponse.json(allFeatures);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch features" }, { status: 500 });
  }
}

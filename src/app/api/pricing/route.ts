import { db, pricingPlans, pricingFeatures } from "@/db";
import { NextResponse } from "next/server";
import { asc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const plans = await db.select().from(pricingPlans).orderBy(asc(pricingPlans.order));
    
    const plansWithFeatures = await Promise.all(
      plans.map(async (plan) => {
        const features = await db
          .select()
          .from(pricingFeatures)
          .where(eq(pricingFeatures.planId, plan.id))
          .orderBy(asc(pricingFeatures.order));
        return { ...plan, features };
      })
    );
    
    return NextResponse.json(plansWithFeatures);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch pricing" }, { status: 500 });
  }
}

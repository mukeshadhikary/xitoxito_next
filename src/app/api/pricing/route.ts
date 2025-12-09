import { NextResponse } from "next/server";
import { PRICING_PLANS } from "@/data/constants";

export async function GET() {
  try {
    // Return static pricing plans from constants
    const plans = PRICING_PLANS.map((plan, index) => ({
      id: index + 1,
      name: plan.name,
      nameNp: plan.nameNp,
      price: plan.price,
      priceNpr: plan.priceNpr,
      popular: plan.popular,
      features: plan.features.map((f, i) => ({
        id: i + 1,
        text: f,
        textNp: plan.featuresNp[i] || f,
      })),
    }));
    
    return NextResponse.json(plans);
  } catch (_error) {
    return NextResponse.json({ error: "Failed to fetch pricing" }, { status: 500 });
  }
}

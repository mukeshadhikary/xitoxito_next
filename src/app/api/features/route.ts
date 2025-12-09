import { NextResponse } from "next/server";
import { FEATURES } from "@/data/constants";

// Icon name mapping based on index (matches the order in constants.tsx)
const ICON_NAMES = ["ShoppingCart", "Smartphone", "Zap", "Globe", "Shield", "BarChart3"];

export async function GET() {
  try {
    // Return static features from constants
    const features = FEATURES.map((feature, index) => ({
      id: index + 1,
      title: feature.title,
      titleNp: feature.titleNp,
      description: feature.description,
      iconName: ICON_NAMES[index] || "Star",
    }));
    
    return NextResponse.json(features);
  } catch (_error) {
    return NextResponse.json({ error: "Failed to fetch features" }, { status: 500 });
  }
}

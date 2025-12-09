import { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  titleNp: string;
  description: string;
}

export interface Testimonial {
  name: string;
  business: string;
  businessNp: string;
  text: string;
  textNp: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  nameNp: string;
  price: string;
  priceNpr: string;
  features: string[];
  featuresNp: string[];
  popular: boolean;
}

export interface NavItem {
  label: string;
  sectionId: string;
}

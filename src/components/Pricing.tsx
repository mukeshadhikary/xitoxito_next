"use client";

import { CheckCircle, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site.config";

const PRICING_PLANS = [
  {
    name: "Basic",
    nameNp: "आधारभूत",
    price: "¥29,800",
    priceNpr: "NPR 24,000",
    description: "Perfect for getting started",
    features: [
      "Complete online store setup",
      "Up to 100 products",
      "Mobile responsive design",
      "Basic analytics dashboard",
      "Email support",
      "Free 3 months hosting",
    ],
    popular: false,
    icon: Sparkles,
  },
  {
    name: "Professional",
    nameNp: "व्यावसायिक",
    price: "¥49,800",
    priceNpr: "NPR 39,000",
    description: "Best for growing businesses",
    features: [
      "Everything in Basic",
      "Unlimited products",
      "Advanced analytics & reports",
      "Multiple payment methods",
      "Priority support",
      "Free 6 months hosting",
      "Custom domain included",
      "SEO optimization",
    ],
    popular: true,
    icon: Zap,
  },
  {
    name: "Enterprise",
    nameNp: "उद्यम",
    price: "¥79,800",
    priceNpr: "NPR 62,000",
    description: "For large scale operations",
    features: [
      "Everything in Professional",
      "Multi-store management",
      "Advanced inventory system",
      "Wholesale pricing options",
      "24/7 phone support",
      "Free 1 year hosting",
      "Custom features development",
      "Dedicated account manager",
    ],
    popular: false,
    icon: Sparkles,
  },
];

interface PricingProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Pricing({ onScrollToSection }: PricingProps) {
  const { pricing, translations } = siteConfig;
  
  return (
    <section id="pricing" className="py-24 bg-slate-100 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-800 dark:text-white">
              {pricing.title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-400">{translations.pricing.subtitle}</p>
          <p className="text-lg text-slate-500 dark:text-gray-400 mt-2">
            {pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {PRICING_PLANS.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-900 ${
                  plan.popular
                    ? "border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105 z-10"
                    : "border border-slate-200/60 dark:border-slate-800 shadow-lg hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-linear-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        plan.popular
                          ? "bg-linear-to-br from-blue-500 to-cyan-500"
                          : "bg-slate-200 dark:bg-slate-800"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          plan.popular ? "text-white" : "text-slate-600 dark:text-gray-400"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{plan.name}</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400">{plan.nameNp}</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-slate-800 dark:text-white">{plan.price}</span>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-gray-400">{plan.priceNpr}</p>
                    <p className="text-sm text-slate-500 dark:text-gray-400">{plan.description}</p>
                  </div>
                </CardHeader>

                <Separator />

                <CardContent className="pt-6">
                  <p className="text-sm font-medium mb-4 text-slate-800 dark:text-white">What&apos;s included:</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            plan.popular ? "text-blue-500" : "text-green-500"
                          }`}
                        />
                        <span className="text-sm text-slate-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => onScrollToSection("contact")}
                    className={`w-full h-12 font-semibold ${
                      plan.popular
                        ? "bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/25"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="inline-block border-0 bg-slate-200/60 dark:bg-slate-800 shadow-none">
            <CardContent className="py-6 px-8 flex flex-col sm:flex-row items-center gap-4">
              <p className="text-slate-600 dark:text-gray-400">
                Not sure which plan is right for you?
              </p>
              <Button
                variant="link"
                onClick={() => onScrollToSection("contact")}
                className="text-blue-600 font-semibold p-0 h-auto"
              >
                Contact us for a free consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

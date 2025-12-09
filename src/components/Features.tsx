"use client";

import {
  ShoppingCart,
  Smartphone,
  Zap,
  Globe,
  Shield,
  BarChart3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/site.config";

const FEATURES = [
  {
    icon: ShoppingCart,
    title: "Complete E-Commerce Solution",
    titleNp: "पूर्ण ई-कमर्स समाधान",
    description: "Ready-to-use online store with product management, shopping cart, and checkout",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    titleNp: "मोबाइल-फ्रेन्डली",
    description: "Perfect display on all devices - mobile, tablet, and desktop",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/50",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    titleNp: "अति द्रुत",
    description: "Built with Next.js for superior speed and performance",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/50",
  },
  {
    icon: Globe,
    title: "Japanese & Nepali Support",
    titleNp: "जापानी र नेपाली भाषा",
    description: "Fully supports both languages for your customers",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-950/50",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    titleNp: "सुरक्षित भुक्तानी",
    description: "Accept credit cards, digital wallets, and cash on delivery",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50 dark:bg-red-950/50",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    titleNp: "बिक्री विश्लेषण",
    description: "Track your sales, customers, and inventory in real-time",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/50",
  },
];

const FEATURE_CATEGORIES = [
  {
    id: "store",
    label: "Store",
    features: ["Product catalog", "Shopping cart", "Wishlist", "Search & filters"],
  },
  {
    id: "payments",
    label: "Payments",
    features: ["Credit cards", "Digital wallets", "COD", "Multi-currency"],
  },
  {
    id: "management",
    label: "Management",
    features: ["Inventory tracking", "Order management", "Customer CRM", "Reports"],
  },
];

export default function Features() {
  const { features, translations } = siteConfig;
  
  return (
    <section id="features" className="py-24 bg-slate-100 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-800 dark:text-white">
              {features.title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-400">{translations.features.subtitle}</p>
          <p className="text-lg text-slate-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            {features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="absolute inset-0 bg-linear-to-br from-transparent to-slate-200/30 dark:to-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6 relative">
                  <div
                    className={`w-14 h-14 rounded-2xl ${feature.bgColor} dark:bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <div className={`bg-linear-to-br ${feature.color} p-2.5 rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium">
                    {feature.titleNp}
                  </p>
                  <p className="text-slate-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Categories Tabs */}
        <div className="bg-slate-100/80 dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-lg p-8">
          <Tabs defaultValue="store" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-200/60 dark:bg-slate-800">
              {FEATURE_CATEGORIES.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="text-sm md:text-base data-[state=active]:bg-slate-50 dark:data-[state=active]:bg-slate-700">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {FEATURE_CATEGORIES.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cat.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-200/50 dark:bg-slate-800 text-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span className="font-medium text-slate-800 dark:text-white">{feat}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Star, Store, Package, Laptop, Wallet, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { siteConfig } from "@/config/site.config";

const TESTIMONIALS = [
  {
    name: "Ramesh Thapa",
    business: "Secondhand Store, Tokyo",
    businessNp: "सेकेन्डह्यान्ड स्टोर, टोकियो",
    text: "After using Xito system, my sales increased 3x! Now Japanese and Nepali customers can easily order online.",
    textNp: "Xito प्रणाली प्रयोग गरेपछि मेरो बिक्री ३ गुणा बढ्यो!",
    rating: 5,
    initials: "RT",
  },
  {
    name: "Sita Gurung",
    business: "Handicraft Brand, Pokhara",
    businessNp: "हस्तकला ब्रान्ड, पोखरा",
    text: "Very easy to manage products! I can update my shop from my phone anytime.",
    textNp: "उत्पादनहरू व्यवस्थापन गर्न धेरै सजिलो!",
    rating: 5,
    initials: "SG",
  },
  {
    name: "Krishna Shrestha",
    business: "Nepali Grocery, Osaka",
    businessNp: "नेपाली किराना, ओसाका",
    text: "Perfect for small business! Setup was quick and customer support is excellent.",
    textNp: "सानो व्यवसायको लागि उत्तम!",
    rating: 5,
    initials: "KS",
  },
];

const BENEFITS = [
  {
    icon: Store,
    title: "For Secondhand Stores in Japan",
    titleNp: "जापानमा सेकेन्डह्यान्ड स्टोरहरूका लागि",
    description: "Sell furniture, electronics, and household items to both Japanese and Nepali communities",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Package,
    title: "For Small Brands in Nepal",
    titleNp: "नेपालमा साना ब्रान्डहरूका लागि",
    description: "Reach customers across Nepal with handicrafts, clothing, food products, and more",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Laptop,
    title: "Easy to Use",
    titleNp: "प्रयोग गर्न सजिलो",
    description: "No technical knowledge needed - manage your store from your phone or computer",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wallet,
    title: "Cost Effective",
    titleNp: "किफायती मूल्य",
    description: "One-time setup fee, no monthly subscription - affordable for small businesses",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Benefits() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      api.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section id="benefits" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-900">
            Why {siteConfig.name}?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {siteConfig.benefits.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">किन {siteConfig.name} छान्नुहोस्?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Perfect for Your Business</h3>
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="group overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 dark:border-slate-800"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${benefit.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{benefit.title}</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{benefit.titleNp}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

            <Card className="relative bg-linear-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Quote className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Success Stories</h3>
                </div>

                <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {TESTIMONIALS.map((testimonial, index) => (
                      <CarouselItem key={index}>
                        <div className="space-y-6">
                          {/* Rating */}
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>

                          {/* Quote */}
                          <blockquote className="text-lg text-white/90 leading-relaxed">
                            &quot;{testimonial.text}&quot;
                          </blockquote>
                          <p className="text-sm text-blue-300/80">
                            &quot;{testimonial.textNp}&quot;
                          </p>

                          {/* Author */}
                          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                            <Avatar className="w-12 h-12 border-2 border-blue-400">
                              <AvatarFallback className="bg-linear-to-br from-blue-500 to-cyan-500 text-white font-bold">
                                {testimonial.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-white">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-blue-300/70">
                                {testimonial.business}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex gap-2">
                      {TESTIMONIALS.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => api?.scrollTo(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === current
                              ? "bg-blue-400 w-6"
                              : "bg-white/30 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                      <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                    </div>
                  </div>
                </Carousel>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

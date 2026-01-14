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
    textNp: "E-commerce प्रणाली प्रयोग गरेपछि मेरो बिक्री ३ गुणा !",
    rating: 5,
    initials: "RT",
  },
  {
    name: "Sita Gurung",
    business: "Handicraft Brand, Pokhara",
    businessNp: "हस्तकला ब्रान्ड, पोखरा",
    text: "Very easy to manage products! I can update my shop from my phone anytime.",
    textNp: "Products व्यवस्थापन गर्न धेरै सजिलो!",
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
    description: "Sell clothes, electronics, furniture, and more to Nepali and Japanese customers",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Package,
    title: "For Business And Local Brands in Nepal",
    titleNp: "नेपालका व्यवसाय र स्थानीय ब्रान्डहरूका लागि",
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
    description: "affordable for small businesses",
    color: "from-green-500 to-emerald-500",
  },
];

import type { CarouselApi } from "@/components/ui/carousel";

export default function Benefits() {
  const [api, setApi] = useState<CarouselApi>();
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-800 dark:text-white">
              {siteConfig.benefits.title}
            </span>
          </h2>
        </div>

        <div className="md:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ">
          {/* Benefits Cards */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-800 dark:text-white">Perfect for Your Business</h3>
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="group overflow-hidden w-fu border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 bg-background dark:bg-slate-900 dark:border-slate-800"
                >
                  <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br ${benefit.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-slate-800 dark:text-white">{benefit.title}</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{benefit.titleNp}</p>
                      <p className="text-slate-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Testimonials Carousel */}
          <div className="relative mt-8 lg:mt-0 disabled">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-slate-400/20 dark:bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-300/30 dark:bg-cyan-500/10 rounded-full blur-2xl" />

            <Card className="relative bg-white dark:bg-linear-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 dark:text-blue-400" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Key Features</h3>
                </div>

                <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {TESTIMONIALS.map((testimonial, index) => (
                      <CarouselItem key={index}>
                        <div className="space-y-4 sm:space-y-6">
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
                          <blockquote className="text-base sm:text-lg text-slate-700 dark:text-white/90 leading-relaxed">
                            &quot;{testimonial.text}&quot;
                          </blockquote>
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-blue-300/80">
                            &quot;{testimonial.textNp}&quot;
                          </p>

                          {/* Author */}
                          <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-slate-200 dark:border-white/10 hidden">
                            <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-slate-300 dark:border-blue-400">
                              <AvatarFallback className="bg-linear-to-br from-slate-600 to-slate-700 dark:from-blue-500 dark:to-cyan-500 text-white font-bold text-sm sm:text-base">
                                {testimonial.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base">
                                {testimonial.name}
                              </p>
                              <p className="text-xs sm:text-sm text-slate-500 dark:text-blue-300/70">
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
                          className={`w-2 h-2 rounded-full transition-all ${index === current
                            ? "bg-slate-600 dark:bg-blue-400 w-6"
                            : "bg-slate-300 hover:bg-slate-400 dark:bg-white/30 dark:hover:bg-white/50"
                            }`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <CarouselPrevious className="static translate-y-0 bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20" />
                      <CarouselNext className="static translate-y-0 bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20" />
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

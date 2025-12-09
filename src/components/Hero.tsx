"use client";

import { CheckCircle, ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site.config";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const { hero, translations } = siteConfig;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-slate-900 dark:to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-500/30 hover:bg-blue-500/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Built with Next.js & Strapi
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-linear-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  {hero.title.line1} {hero.title.line2}
                </span>
                <br />
                <span className="text-white">{hero.title.line3}</span>
              </h1>
              <p className="text-xl text-blue-200">
                {translations.hero.subtitle}
              </p>
              <p className="text-lg text-blue-100/80 max-w-xl">
                {hero.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => onScrollToSection(hero.primaryCta.sectionId)}
                className="bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 h-14 px-8 text-lg"
              >
                {hero.primaryCta.label}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onScrollToSection("demo")}
                className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              {hero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Feature card */}
          <div className="hidden lg:block">
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">All-in-One Solution</h3>
                      <p className="text-blue-200/70 text-sm">Everything you need to sell online</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {hero.highlights.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-200/70">Trusted by {hero.stats[0].value} businesses</span>
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-cyan-400 border-2 border-white/20"
                          />
                        ))}
                        <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/20 flex items-center justify-center text-xs text-white">
                          +46
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}

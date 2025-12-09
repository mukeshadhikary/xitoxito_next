"use client";

import {
  Navbar,
  Hero,
  Features,
  Benefits,
  Pricing,
  Contact,
  Demo,
  Footer,
} from "@/components";

export default function XitoPromoWebsite() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar onScrollToSection={scrollToSection} />
      <Hero onScrollToSection={scrollToSection} />
      <Features />
      <Benefits />
      <Pricing onScrollToSection={scrollToSection} />
      <Demo />
      <Contact />
      <Footer onScrollToSection={scrollToSection} />
    </div>
  );
}
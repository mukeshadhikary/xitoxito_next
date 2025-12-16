"use client";

import { ShoppingCart, Heart, ArrowUp, ExternalLink, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site.config";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const { footer, navigation, links, name, tagline } = siteConfig;
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-gray-900 to-black dark:from-gray-950 dark:via-gray-950 dark:to-black text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] " />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      {/* Scroll to top button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 mt-10">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-12 h-12 rounded-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30 border-4 border-gray-900 dark:border-gray-950"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-6 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div className="ml-3">
                <span className="text-2xl font-bold bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {name}
                </span>
                <p className="text-xs text-gray-400">{tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Japan & Nepal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigation.items.map((item) => (
                <li key={item.sectionId}>
                  <button
                    onClick={() => onScrollToSection(item.sectionId)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-500 transition-all duration-200" />
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onScrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-500 transition-all duration-200" />
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              For Business
            </h4>
            <ul className="space-y-3">
              {footer.sections[1].items?.map((type, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  {type}
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Technology
            </h4>
            <ul className="space-y-3">
              {footer.sections[2].items?.map((tech, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter / CTA section */}
        <div className="bg-linear-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 border border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Launch Your Store?</h3>
              <p className="text-gray-400 text-sm">Join businesses already growing with {name}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => onScrollToSection("pricing")}
                className="bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
              >
                View Pricing
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-foreground hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href={links.demoStore} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              {footer.copyright.replace("{year}", new Date().getFullYear().toString()).replace("{siteName}", name)}
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              <Globe className="w-3 h-3" />
              {footer.bottomText}
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Developed with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by</span>
            <a 
              href={footer.developer.url} 
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              {footer.developer.name}
            </a>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute bottom-4 left-4 text-gray-800 text-xs font-mono opacity-30">
          v1.0.0
        </div>
      </div>
    </footer>
  );
}

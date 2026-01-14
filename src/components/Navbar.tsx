"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
              <div className="relative bg-background rounded-lg p-1.5 sm:p-2">
                <Image
                  src="/logo.png"
                  alt={`${siteConfig.name} Logo`}
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
              <span className="text-[9px] sm:text-[10px] text-muted-foreground -mt-1 hidden xs:block">
                {siteConfig.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className=" flex items-center space-x-1">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {siteConfig.navigation.items.map((item) => (
                  <NavigationMenuItem key={item.sectionId}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "cursor-pointer bg-transparent hover:bg-accent/50"
                      )}
                      onClick={() => handleNavClick(item.sectionId)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Toggle */}
            <ThemeToggle />

            <Button
              onClick={() => handleNavClick(siteConfig.navigation.cta.sectionId)}
              className="ml-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              {siteConfig.navigation.cta.label}
              <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          {/* <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <ShoppingCart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <span className="text-2xl font-bold">{siteConfig.name}</span>
                  </div>
                  {siteConfig.navigation.items.map((item) => (
                    <Button
                      key={item.sectionId}
                      variant="ghost"
                      className="justify-start text-lg h-12"
                      onClick={() => handleNavClick(item.sectionId)}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button
                    onClick={() => handleNavClick(siteConfig.navigation.cta.sectionId)}
                    className="w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white h-12"
                  >
                    {siteConfig.navigation.cta.label}
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

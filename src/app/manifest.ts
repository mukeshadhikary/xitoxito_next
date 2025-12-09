import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

/**
 * Web App Manifest
 * 
 * Enables PWA features and app-like installation
 * Generates /manifest.json automatically
 */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    orientation: "portrait-primary",
    categories: ["business", "shopping", "productivity"],
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/desktop.png",
        sizes: "1920x1080",
        type: "image/png",
        form_factor: "wide",
        label: "Desktop View",
      },
      {
        src: "/screenshots/mobile.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "Mobile View",
      },
    ],
    shortcuts: [
      {
        name: "View Demo",
        short_name: "Demo",
        description: "See live demo of the platform",
        url: "/#demo",
        icons: [{ src: "/icons/demo-icon.png", sizes: "96x96" }],
      },
      {
        name: "Pricing",
        short_name: "Pricing",
        description: "View pricing plans",
        url: "/#pricing",
        icons: [{ src: "/icons/pricing-icon.png", sizes: "96x96" }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}

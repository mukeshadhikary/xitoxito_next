import { MetadataRoute } from "next";

/**
 * Robots.txt Configuration
 * 
 * Controls which pages search engines can crawl
 * This generates /robots.txt automatically
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://xitoxito.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",           // Block API routes
          "/admin/",         // Block admin pages if any
          "/_next/",         // Block Next.js internals
          "/private/",       // Block private pages
          "/*.json$",        // Block JSON files
        ],
      },
      {
        // Specific rules for Googlebot
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        // Block bad bots
        userAgent: ["AhrefsBot", "MJ12bot", "SemrushBot"],
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

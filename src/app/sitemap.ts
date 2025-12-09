import { MetadataRoute } from "next";

/**
 * Sitemap Configuration
 * 
 * Generates sitemap.xml for search engines
 * This helps search engines discover all your pages
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://xitoxito.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/#features`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#demo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#benefits`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // You can add dynamic pages here later
  // For example, blog posts, product pages, etc.
  // const dynamicPages = await fetchDynamicPages();

  return [...staticPages];
}

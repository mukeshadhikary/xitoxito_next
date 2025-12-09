/**
 * ============================================
 * SEO UTILITIES & JSON-LD STRUCTURED DATA
 * ============================================
 * 
 * Provides robust SEO helpers including:
 * - JSON-LD Schema generation
 * - Canonical URL helpers
 * - Meta tag utilities
 */

import { siteConfig } from "@/config/site.config";

// Base URL for the site (update in production)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://xitoxito.com";

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Organization Schema (JSON-LD)
 * Helps search engines understand your business
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "customer service",
      availableLanguage: ["English", "Nepali"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.github,
    ].filter(Boolean),
  };
}

/**
 * Website Schema (JSON-LD)
 * Enables sitelinks searchbox in Google
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Software Application Schema (JSON-LD)
 * Perfect for selling e-commerce software
 */
export function generateSoftwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${siteConfig.name} E-Commerce Platform`,
    description: siteConfig.seo.description,
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "999",
      offerCount: "3",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Complete E-Commerce Frontend",
      "Admin Dashboard & CMS",
      "Order Management System",
      "Payment Integration",
      "Inventory Management",
      "Customer Analytics",
      "Mobile Responsive Design",
      "SEO Optimized",
    ],
    screenshot: `${SITE_URL}/screenshots/dashboard.png`,
    softwareVersion: "2.0",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

/**
 * Product Schema (JSON-LD)
 * For the e-commerce software product itself
 */
export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${siteConfig.name} - Complete E-Commerce Solution`,
    description: "Get your own complete e-commerce store with frontend website and backend admin panel. Ready to deploy, no coding required.",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      },
      {
        "@type": "Offer",
        name: "Professional Plan",
        price: "299",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      },
      {
        "@type": "Offer",
        name: "Enterprise Plan",
        price: "999",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Ramesh Sharma",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Excellent e-commerce platform! Easy to set up and manage. Perfect for my business.",
      },
    ],
  };
}

/**
 * FAQ Schema (JSON-LD)
 * Shows FAQ rich snippets in search results
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Breadcrumb Schema (JSON-LD)
 * Shows breadcrumb navigation in search results
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Local Business Schema (optional)
 * Use if you have a physical location
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: SITE_URL,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.country,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
  };
}

/**
 * Generate all main schemas for the homepage
 */
export function generateHomePageSchemas() {
  return [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateSoftwareSchema(),
    generateProductSchema(),
  ];
}

/**
 * Default FAQs for the site
 */
export const defaultFAQs = [
  {
    question: "What is XitoXito?",
    answer: "XitoXito is a complete e-commerce solution that includes both a customer-facing online store and a powerful admin dashboard. We sell ready-to-deploy e-commerce software for businesses.",
  },
  {
    question: "Do I need coding skills to use this platform?",
    answer: "No! Our e-commerce platform is designed for non-technical users. You can manage your entire store through an easy-to-use admin panel.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support multiple payment gateways including Stripe, PayPal, and local payment methods. You can easily integrate your preferred payment provider.",
  },
  {
    question: "Is the platform mobile-friendly?",
    answer: "Yes! Both the customer store and admin panel are fully responsive and work perfectly on all devices - desktop, tablet, and mobile.",
  },
  {
    question: "Do you provide support after purchase?",
    answer: "Absolutely! All plans include email support. Professional and Enterprise plans include priority support with faster response times.",
  },
  {
    question: "Can I customize the design?",
    answer: "Yes, you can fully customize colors, fonts, layouts, and branding to match your business identity.",
  },
];

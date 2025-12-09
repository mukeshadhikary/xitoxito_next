import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";
import { 
  generateHomePageSchemas, 
  generateFAQSchema, 
  defaultFAQs,
  SITE_URL,
  getCanonicalUrl 
} from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Mobile-optimized viewport configuration
export const viewport: Viewport = {
  width: siteConfig.mobile.viewport.width,
  initialScale: siteConfig.mobile.viewport.initialScale,
  maximumScale: siteConfig.mobile.viewport.maximumScale,
  userScalable: siteConfig.mobile.viewport.userScalable,
  viewportFit: siteConfig.mobile.viewport.viewportFit as "auto" | "cover" | "contain",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.mobile.android.themeColor },
  ],
};

export const metadata: Metadata = {
  // Basic Meta
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.footer.developer.name, url: siteConfig.footer.developer.url }],
  creator: siteConfig.footer.developer.name,
  publisher: siteConfig.name,
  
  // Canonical URL
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "ne": "/ne",
    },
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // PWA / Mobile optimizations
  appleWebApp: {
    capable: siteConfig.mobile.ios.capable,
    statusBarStyle: siteConfig.mobile.ios.statusBarStyle as "default" | "black" | "black-translucent",
    title: siteConfig.name,
  },
  
  // Prevent phone number detection
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: siteConfig.seo.openGraph.locale,
    siteName: siteConfig.seo.openGraph.siteName,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - E-Commerce Software Solution`,
        type: "image/png",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    creator: siteConfig.seo.twitter.creator,
    site: siteConfig.seo.twitter.creator,
    images: [`${SITE_URL}/og-image.png`],
  },
  
  // Verification (add your actual verification codes)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    // bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#3b82f6" },
    ],
  },
  
  // Category
  category: "technology",
  
  // Additional meta
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "HandheldFriendly": "true",
    "MobileOptimized": "width",
    "msapplication-TileColor": "#3b82f6",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate all JSON-LD schemas for SEO
  const schemas = [
    ...generateHomePageSchemas(),
    generateFAQSchema(defaultFAQs),
  ];

  return (
    <html lang={siteConfig.locale.default} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for Rich Snippets */}
        <JsonLd data={schemas} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

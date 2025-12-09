import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/config/site.config";
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
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.footer.developer.name }],
  creator: siteConfig.footer.developer.name,
  
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
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    creator: siteConfig.seo.twitter.creator,
  },
  
  // Additional meta
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-touch-fullscreen": "yes",
    "HandheldFriendly": "true",
    "MobileOptimized": "width",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale.default} suppressHydrationWarning>
      <head>
        {/* Prevent text size adjustment on orientation change */}
        <style>{`
          html {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            text-size-adjust: 100%;
          }
          /* Prevent pull-to-refresh on mobile */
          body {
            overscroll-behavior-y: ${siteConfig.mobile.pullToRefresh ? 'auto' : 'contain'};
          }
          /* Safe area insets for notched devices */
          :root {
            --safe-area-inset-top: env(safe-area-inset-top);
            --safe-area-inset-right: env(safe-area-inset-right);
            --safe-area-inset-bottom: env(safe-area-inset-bottom);
            --safe-area-inset-left: env(safe-area-inset-left);
          }
        `}</style>
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

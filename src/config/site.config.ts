/**
 * ============================================
 * XITO E-COMMERCE SITE CONFIGURATION
 * ============================================
 * 
 * This is the global configuration file for the entire website.
 * Customize all aspects of your site from this single file.
 * 
 * When selling/deploying this site for a client:
 * 1. Update this config with client's branding
 * 2. Replace images in /public folder
 * 3. Deploy!
 */

export const siteConfig = {
  // ============================================
  // SITE IDENTITY & BRANDING
  // ============================================
  name: "Xito",
  tagline: "E-Commerce Platform",
  description: "Complete e-commerce solution for secondhand stores, small brands, and Nepali businesses in Japan & Nepal. Built with Next.js & Strapi.",
  
  // Logo configuration
  logo: {
    icon: "ShoppingCart", // Lucide icon name
    showText: true,
    text: "Xito",
  },

  // ============================================
  // LOCALIZATION
  // ============================================
  locale: {
    default: "en",
    supported: ["en", "ne", "ja"],
  },
  
  // Nepali/Hindi translations for display
  translations: {
    hero: {
      subtitle: "तपाईंको अनलाइन स्टोर सजिलै बनाउनुहोस्",
    },
    features: {
      subtitle: "विशेषताहरू",
    },
    pricing: {
      subtitle: "मूल्य निर्धारण",
    },
    contact: {
      subtitle: "सम्पर्क",
    },
    demo: {
      subtitle: "कार्यमा हेर्नुहोस्",
    },
  },

  // ============================================
  // THEME CONFIGURATION
  // ============================================
  theme: {
    defaultTheme: "system" as "light" | "dark" | "system",
    enableThemeToggle: true,
    
    // Brand colors (used in gradients and accents)
    colors: {
      primary: {
        from: "blue-600",
        to: "cyan-600",
      },
      secondary: {
        from: "gray-800",
        to: "gray-900",
      },
      accent: {
        from: "purple-600",
        to: "pink-600",
      },
    },
  },

  // ============================================
  // SEO & META
  // ============================================
  seo: {
    title: "Xito E-Commerce System | Online Store Solution",
    titleTemplate: "%s | Xito",
    description: "Complete e-commerce solution for secondhand stores, small brands, and Nepali businesses in Japan & Nepal. Built with Next.js & Strapi.",
    keywords: [
      "ecommerce",
      "online store",
      "nepal",
      "japan",
      "secondhand",
      "small business",
      "strapi",
      "nextjs",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Xito",
      image: "/og-image.png",
    },
    twitter: {
      card: "summary_large_image",
      creator: "@xitoxito",
    },
  },

  // ============================================
  // CONTACT & BUSINESS INFO
  // ============================================
  contact: {
    email: "hello@xitoxito.com",
    phone: "+977-9800000000",
    address: {
      street: "Kathmandu, Nepal",
      city: "Kathmandu",
      country: "Nepal",
    },
    businessHours: "Mon-Fri: 9AM - 6PM (NPT)",
    responseTime: "24 hours",
  },

  // ============================================
  // SOCIAL LINKS
  // ============================================
  social: {
    facebook: "https://facebook.com/xitoxito",
    instagram: "https://instagram.com/xitoxito",
    twitter: "https://twitter.com/xitoxito",
    linkedin: "https://linkedin.com/company/xitoxito",
    github: "https://github.com/xitoxito",
    youtube: "",
  },

  // ============================================
  // EXTERNAL LINKS
  // ============================================
  links: {
    demoStore: "https://xito.xitoxito.com",
    adminPanel: "https://api.xitoxito.com",
    documentation: "https://docs.xitoxito.com",
    support: "https://support.xitoxito.com",
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    items: [
      { label: "Features", sectionId: "features" },
      { label: "Benefits", sectionId: "benefits" },
      { label: "Pricing", sectionId: "pricing" },
      { label: "Demo", sectionId: "demo" },
    ],
    cta: {
      label: "Get Started",
      sectionId: "contact",
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    title: {
      line1: "Launch Your",
      line2: "Online Store",
      line3: "in Minutes",
    },
    description: "Complete e-commerce solution designed for small businesses. Start selling online with a professional store that's easy to manage.",
    
    // Stats displayed in hero
    stats: [
      { value: "500+", label: "Stores Created" },
      { value: "10K+", label: "Products Sold" },
      { value: "99.9%", label: "Uptime" },
    ],
    
    // CTA buttons
    primaryCta: {
      label: "Start Free Trial",
      sectionId: "pricing",
    },
    secondaryCta: {
      label: "View Demo",
      href: "https://xito.xitoxito.com",
      external: true,
    },
    
    // Feature highlights in hero card
    highlights: [
      "No coding required",
      "Free SSL certificate",
      "24/7 Support",
      "Mobile optimized",
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: "Everything You Need",
    subtitle: "Powerful features to run your online business",
    
    // Feature categories for tabs
    categories: [
      { id: "all", label: "All Features" },
      { id: "store", label: "Store" },
      { id: "payments", label: "Payments" },
      { id: "analytics", label: "Analytics" },
    ],
    
    items: [
      {
        icon: "Store",
        title: "Easy Store Setup",
        description: "Create your online store in minutes with our intuitive setup wizard. No technical skills required.",
        color: "from-blue-500 to-blue-600",
        category: "store",
      },
      {
        icon: "Smartphone",
        title: "Mobile Optimized",
        description: "Your store looks perfect on every device. Responsive design ensures great shopping experience.",
        color: "from-green-500 to-green-600",
        category: "store",
      },
      {
        icon: "CreditCard",
        title: "Secure Payments",
        description: "Accept payments via multiple gateways including eSewa, Khalti, and international cards.",
        color: "from-purple-500 to-purple-600",
        category: "payments",
      },
      {
        icon: "BarChart3",
        title: "Sales Analytics",
        description: "Track your sales, understand customer behavior, and grow your business with insights.",
        color: "from-orange-500 to-orange-600",
        category: "analytics",
      },
      {
        icon: "Package",
        title: "Inventory Management",
        description: "Keep track of stock levels, get low stock alerts, and manage product variants easily.",
        color: "from-cyan-500 to-cyan-600",
        category: "store",
      },
      {
        icon: "Truck",
        title: "Shipping Integration",
        description: "Integrate with local courier services for seamless order fulfillment and tracking.",
        color: "from-pink-500 to-pink-600",
        category: "store",
      },
    ],
  },

  // ============================================
  // BENEFITS SECTION
  // ============================================
  benefits: {
    title: "Why Choose Us",
    subtitle: "Trusted by businesses across Nepal and Japan",
    
    items: [
      {
        icon: "Zap",
        title: "Lightning Fast",
        description: "Optimized for speed with global CDN",
        color: "from-yellow-500 to-orange-500",
      },
      {
        icon: "Shield",
        title: "Secure & Reliable",
        description: "Enterprise-grade security & 99.9% uptime",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: "Headphones",
        title: "24/7 Support",
        description: "Always here to help in English & Nepali",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: "TrendingUp",
        title: "Grow Your Business",
        description: "Tools to scale from 1 to 10,000 orders",
        color: "from-purple-500 to-pink-500",
      },
    ],
    
    // Testimonials
    testimonials: [
      {
        name: "राजेश श्रेष्ठ",
        role: "Founder, KTM Vintage",
        content: "Xito helped us launch our secondhand clothing store online. The setup was incredibly easy and our sales increased by 300% in 3 months!",
        avatar: "/avatars/rajesh.jpg",
        rating: 5,
      },
      {
        name: "Yuki Tanaka",
        role: "Owner, Nepal Goods Tokyo",
        content: "Perfect solution for our Nepal-Japan import business. The multi-currency support and bilingual interface made everything seamless.",
        avatar: "/avatars/yuki.jpg",
        rating: 5,
      },
      {
        name: "सुनिता गुरुङ",
        role: "CEO, Himalayan Crafts",
        content: "From handmade products to nationwide delivery - Xito handles everything. Their support team is always responsive and helpful!",
        avatar: "/avatars/sunita.jpg",
        rating: 5,
      },
    ],
  },

  // ============================================
  // PRICING SECTION
  // ============================================
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "No hidden fees. Cancel anytime.",
    currency: "NPR",
    currencySymbol: "रू",
    
    // Billing periods
    billingPeriod: "month",
    annualDiscount: 20, // percentage
    
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "Perfect for trying out",
        price: 0,
        priceLabel: "Free",
        popular: false,
        features: [
          { text: "Up to 10 products", included: true },
          { text: "Basic analytics", included: true },
          { text: "Email support", included: true },
          { text: "Custom domain", included: false },
          { text: "Priority support", included: false },
        ],
        cta: "Start Free",
      },
      {
        id: "professional",
        name: "Professional",
        description: "Best for growing businesses",
        price: 2999,
        priceLabel: "रू2,999",
        popular: true,
        features: [
          { text: "Unlimited products", included: true },
          { text: "Advanced analytics", included: true },
          { text: "Priority support", included: true },
          { text: "Custom domain", included: true },
          { text: "Marketing tools", included: true },
        ],
        cta: "Get Started",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description: "For large scale operations",
        price: 9999,
        priceLabel: "रू9,999",
        popular: false,
        features: [
          { text: "Everything in Pro", included: true },
          { text: "Dedicated support", included: true },
          { text: "Custom integrations", included: true },
          { text: "SLA guarantee", included: true },
          { text: "White-label option", included: true },
        ],
        cta: "Contact Sales",
      },
    ],
  },

  // ============================================
  // DEMO SECTION
  // ============================================
  demo: {
    title: "See It In Action",
    description: "Experience the power of Xito firsthand",
    
    features: [
      "Full product catalog",
      "Shopping cart & checkout",
      "User authentication",
      "Order management",
      "Payment integration",
      "Mobile responsive",
    ],
    
    cards: [
      {
        title: "Live Demo Store",
        description: "Explore a fully functional e-commerce store. Browse products, add to cart, and experience the complete customer journey.",
        icon: "Monitor",
        href: "https://xito.xitoxito.com",
        badge: "Live",
        badgeColor: "green",
      },
      {
        title: "Admin Panel Demo",
        description: "Experience the powerful dashboard. Manage products, track orders, and view analytics all in one place.",
        icon: "Settings",
        href: "https://api.xitoxito.com",
        badge: "Admin Access",
        badgeColor: "purple",
      },
    ],
  },

  // ============================================
  // CONTACT SECTION
  // ============================================
  contactSection: {
    title: "Get In Touch",
    subtitle: "Ready to start your e-commerce journey?",
    description: "Have questions? Our team is here to help you get started.",
    
    // Form fields configuration
    form: {
      fields: [
        { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Your name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "your@email.com" },
        { name: "phone", label: "Phone", type: "tel", required: false, placeholder: "+977-98XXXXXXXX" },
        { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us about your business..." },
      ],
      submitLabel: "Send Message",
      successMessage: "Thank you! We'll get back to you within 24 hours.",
    },
    
    // FAQ items
    faqs: [
      {
        question: "How long does setup take?",
        answer: "Most stores are up and running within 30 minutes. Our setup wizard guides you through every step.",
      },
      {
        question: "Can I use my own domain?",
        answer: "Yes! You can connect your custom domain on Professional and Enterprise plans.",
      },
      {
        question: "What payment methods are supported?",
        answer: "We support eSewa, Khalti, bank transfers, and international cards via Stripe.",
      },
      {
        question: "Is there a transaction fee?",
        answer: "We charge 0% transaction fees. You only pay the payment gateway fees.",
      },
      {
        question: "Can I migrate from another platform?",
        answer: "Yes! We offer free migration assistance for Professional and Enterprise plans.",
      },
    ],
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline: "Professional e-commerce solution designed for small businesses in Japan and Nepal. Build your online presence with ease.",
    
    // Footer link sections
    sections: [
      {
        title: "Quick Links",
        links: [
          { label: "Features", sectionId: "features" },
          { label: "Benefits", sectionId: "benefits" },
          { label: "Pricing", sectionId: "pricing" },
          { label: "Demo", sectionId: "demo" },
          { label: "Contact", sectionId: "contact" },
        ],
      },
      {
        title: "For Business",
        items: [
          "Retail Stores",
          "Restaurants",
          "Service Providers",
          "Wholesalers",
        ],
      },
      {
        title: "Technology",
        items: [
          "Next.js",
          "Strapi CMS",
          "PostgreSQL",
          "Tailwind CSS",
        ],
      },
    ],
    
    // Legal links
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
    
    // Developer credit
    developer: {
      name: "Mukesh Thapa",
      url: "#",
    },
    
    copyright: "© {year} {siteName}. All rights reserved.",
    bottomText: "नेपाल → जापान | Serving Nepali communities in Japan and businesses in Nepal",
  },

  // ============================================
  // MOBILE / PWA SETTINGS
  // ============================================
  mobile: {
    // Disable pinch zoom for native app feel
    disablePinchZoom: true,
    
    // Enable pull-to-refresh behavior
    pullToRefresh: false,
    
    // Viewport settings
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
      userScalable: false,
      viewportFit: "cover",
    },
    
    // iOS specific
    ios: {
      statusBarStyle: "black-translucent",
      capable: true,
    },
    
    // Android specific
    android: {
      themeColor: "#1e40af",
    },
  },

  // ============================================
  // ANALYTICS & TRACKING
  // ============================================
  analytics: {
    googleAnalyticsId: "",
    facebookPixelId: "",
    hotjarId: "",
  },

  // ============================================
  // FEATURE FLAGS
  // ============================================
  featureFlags: {
    enableNewsletter: true,
    enableTestimonials: true,
    enablePricing: true,
    enableDemo: true,
    enableFaqs: true,
    enableSocialLinks: true,
    enableAnalytics: false,
  },
} as const;

// Type exports for TypeScript support
export type SiteConfig = typeof siteConfig;
export type NavItem = (typeof siteConfig.navigation.items)[number];
export type PricingPlan = (typeof siteConfig.pricing.plans)[number];
export type Feature = (typeof siteConfig.features.items)[number];
export type Testimonial = (typeof siteConfig.benefits.testimonials)[number];

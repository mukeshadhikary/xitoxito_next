# 📚 XitoXito E-Commerce Platform - Complete Documentation

> **For Developers of All Levels** - This guide will help you understand, customize, and deploy this project easily.

---

## 📖 Table of Contents

1. [What is This Project?](#-what-is-this-project)
2. [Quick Start (5 Minutes)](#-quick-start-5-minutes)
3. [Project Structure](#-project-structure)
4. [Technology Stack](#-technology-stack)
5. [How to Customize](#-how-to-customize)
6. [Understanding Components](#-understanding-components)
7. [API Routes](#-api-routes)
8. [Styling Guide](#-styling-guide)
9. [SEO Configuration](#-seo-configuration)
10. [Deployment](#-deployment)
11. [Common Tasks](#-common-tasks)
12. [Troubleshooting](#-troubleshooting)
13. [File Reference](#-file-reference)

---

## 🎯 What is This Project?

**XitoXito** is a promotional/marketing website for selling e-commerce software. It's built to showcase and sell a complete e-commerce solution (frontend store + backend admin panel) to businesses.

### Key Features:
- ✅ **Modern Design** - Beautiful, responsive UI with dark/light mode
- ✅ **Mobile Optimized** - Works perfectly on all devices
- ✅ **SEO Ready** - Full SEO setup with structured data
- ✅ **Easy to Customize** - Change everything from one config file
- ✅ **No Database Needed** - Static data, easy to deploy anywhere
- ✅ **Fast** - Built with Next.js 16 for optimal performance

---

## 🚀 Quick Start (5 Minutes)

### Prerequisites
Make sure you have these installed:
- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **VS Code** (recommended) - [Download](https://code.visualstudio.com/)

### Step 1: Install Dependencies
```bash
# Open terminal in project folder and run:
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Go to: **http://localhost:3000**

That's it! 🎉 You should see the website running.

---

## 📁 Project Structure

```
marketos/
├── 📁 public/                    # Static files (images, icons)
│   ├── 📁 icons/                 # PWA icons
│   ├── 📁 screenshots/           # App screenshots
│   └── browserconfig.xml         # Windows tile config
│
├── 📁 src/                       # Source code (main folder)
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── 📁 api/               # API endpoints
│   │   │   ├── 📁 contact/       # Contact form API
│   │   │   ├── 📁 features/      # Features data API
│   │   │   ├── 📁 newsletter/    # Newsletter API
│   │   │   ├── 📁 pricing/       # Pricing data API
│   │   │   └── 📁 testimonials/  # Testimonials API
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout (SEO, fonts)
│   │   ├── page.tsx              # Homepage
│   │   ├── manifest.ts           # PWA manifest
│   │   ├── robots.ts             # SEO robots.txt
│   │   └── sitemap.ts            # SEO sitemap.xml
│   │
│   ├── 📁 components/            # React components
│   │   ├── 📁 providers/         # Context providers
│   │   │   └── ThemeProvider.tsx # Dark/Light mode
│   │   ├── 📁 seo/               # SEO components
│   │   │   └── JsonLd.tsx        # Structured data
│   │   ├── 📁 ui/                # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ... (17 components)
│   │   ├── Benefits.tsx          # Benefits section
│   │   ├── Contact.tsx           # Contact form section
│   │   ├── Demo.tsx              # Demo showcase section
│   │   ├── Features.tsx          # Features section
│   │   ├── Footer.tsx            # Footer section
│   │   ├── Hero.tsx              # Hero/Banner section
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── Pricing.tsx           # Pricing plans section
│   │   ├── ThemeToggle.tsx       # Dark/Light toggle
│   │   └── index.ts              # Component exports
│   │
│   ├── 📁 config/                # Configuration
│   │   └── site.config.ts        # ⭐ MAIN CONFIG FILE
│   │
│   ├── 📁 data/                  # Static data
│   │   └── constants.tsx         # Features, pricing, etc.
│   │
│   ├── 📁 lib/                   # Utility functions
│   │   ├── seo.ts                # SEO helpers
│   │   └── utils.ts              # General utilities
│   │
│   └── 📁 types/                 # TypeScript types
│       └── index.ts              # Type definitions
│
├── .env.example                  # Environment variables template
├── package.json                  # Dependencies & scripts
├── tailwind.config.ts            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
└── next.config.ts                # Next.js config
```

---

## 🛠 Technology Stack

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| **Next.js 16** | React framework | [nextjs.org](https://nextjs.org/docs) |
| **React 19** | UI library | [react.dev](https://react.dev) |
| **TypeScript** | Type safety | [typescriptlang.org](https://www.typescriptlang.org/docs/) |
| **Tailwind CSS 4** | Styling | [tailwindcss.com](https://tailwindcss.com/docs) |
| **shadcn/ui** | UI components | [ui.shadcn.com](https://ui.shadcn.com) |
| **Lucide Icons** | Icons | [lucide.dev](https://lucide.dev) |
| **next-themes** | Dark mode | [npm](https://www.npmjs.com/package/next-themes) |

---

## ⚙️ How to Customize

### 🔧 The Main Config File

**Location:** `src/config/site.config.ts`

This is the **MOST IMPORTANT FILE**. You can change almost everything from here without touching other code!

#### Change Site Name & Branding
```typescript
// src/config/site.config.ts

export const siteConfig = {
  name: "YourBrandName",        // ← Change this
  tagline: "Your Tagline",      // ← Change this
  description: "Your description...",
  
  logo: {
    icon: "ShoppingCart",       // Lucide icon name
    showText: true,
    text: "x",
  },
  // ...
};
```

#### Change Contact Information
```typescript
contact: {
  email: "your@email.com",      // ← Change this
  phone: "+1-123-456-7890",     // ← Change this
  address: {
    street: "Your Street",
    city: "Your City",
    country: "Your Country",
  },
},
```

#### Change Social Links
```typescript
social: {
  facebook: "https://facebook.com/yourpage",
  instagram: "https://instagram.com/yourpage",
  twitter: "https://twitter.com/yourpage",
  // ...
},
```

#### Change Navigation Menu
```typescript
navigation: {
  items: [
    { label: "Features", sectionId: "features" },
    { label: "Pricing", sectionId: "pricing" },
    // Add or remove menu items here
  ],
  cta: {
    label: "Get Started",       // CTA button text
    sectionId: "contact",
  },
},
```

#### Change Hero Section
```typescript
hero: {
  title: {
    line1: "Your",
    line2: "Headline",
    line3: "Here",
  },
  description: "Your hero description text...",
  // ...
},
```

#### Change Pricing Plans
```typescript
pricing: {
  plans: [
    {
      id: "starter",
      name: "Starter",
      price: 0,
      features: [
        { text: "Feature 1", included: true },
        { text: "Feature 2", included: false },
      ],
    },
    // More plans...
  ],
},
```

---

## 🧩 Understanding Components

### Component Structure

Each section of the website is a separate component:

```
Homepage (page.tsx)
├── Navbar      ← Top navigation bar
├── Hero        ← Main banner/headline
├── Features    ← Features showcase
├── Benefits    ← Benefits + testimonials
├── Pricing     ← Pricing plans
├── Demo        ← Demo showcase
├── Contact     ← Contact form
└── Footer      ← Footer with links
```

### How Components Work

**Example: Navbar Component**

```tsx
// src/components/Navbar.tsx

"use client";  // ← Means this runs in browser (client-side)

import { useState } from "react";
import { Button } from "@/components/ui/button";  // shadcn button
import { siteConfig } from "@/config/site.config"; // Get config

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;  // Function prop
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);  // State
  
  // ... component logic
  
  return (
    <nav>
      {/* Navigation content */}
    </nav>
  );
}
```

### Adding a New Section

1. **Create the component:**
```tsx
// src/components/NewSection.tsx

"use client";

export default function NewSection() {
  return (
    <section id="new-section" className="py-20">
      <h2>New Section</h2>
      {/* Your content */}
    </section>
  );
}
```

2. **Export it in index.ts:**
```typescript
// src/components/index.ts

export { default as NewSection } from "./NewSection";
```

3. **Add to page.tsx:**
```tsx
// src/app/page.tsx

import { Navbar, Hero, NewSection, Footer } from "@/components";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewSection />  {/* ← Add here */}
      <Footer />
    </div>
  );
}
```

4. **Add to navigation (optional):**
```typescript
// src/config/site.config.ts

navigation: {
  items: [
    // ...
    { label: "New Section", sectionId: "new-section" },
  ],
},
```

---

## 🔌 API Routes

API routes handle form submissions and data fetching.

### Available Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/features` | GET | Get features list |
| `/api/pricing` | GET | Get pricing plans |
| `/api/testimonials` | GET | Get testimonials |
| `/api/contact` | POST | Submit contact form |
| `/api/newsletter` | POST | Subscribe to newsletter |

### How API Routes Work

**Example: Contact Form API**

```typescript
// src/app/api/contact/route.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Get data from request
  const body = await request.json();
  const { name, email, message } = body;
  
  // Validate
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }
  
  // Process (log, send email, etc.)
  console.log("New contact:", { name, email, message });
  
  // Return response
  return NextResponse.json({ success: true });
}
```

### Adding Email Service (Optional)

To actually send emails, you can integrate with:

**Option 1: EmailJS (Easiest)**
```typescript
// Install: npm install @emailjs/browser

import emailjs from '@emailjs/browser';

// In your API route:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { name, email, message },
  'YOUR_PUBLIC_KEY'
);
```

**Option 2: SendGrid**
```typescript
// Install: npm install @sendgrid/mail

import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: 'you@email.com',
  from: 'noreply@yourdomain.com',
  subject: 'New Contact',
  text: message,
});
```

---

## 🎨 Styling Guide

### Tailwind CSS Basics

This project uses **Tailwind CSS** for styling. Instead of writing CSS files, you add classes directly to HTML/JSX:

```tsx
// Traditional CSS way:
<div className="my-card">Hello</div>
// .my-card { padding: 16px; background: white; border-radius: 8px; }

// Tailwind way:
<div className="p-4 bg-white rounded-lg">Hello</div>
```

### Common Tailwind Classes

| Class | Meaning |
|-------|---------|
| `p-4` | padding: 1rem (16px) |
| `m-4` | margin: 1rem |
| `px-4` | padding left & right |
| `py-4` | padding top & bottom |
| `bg-white` | background: white |
| `text-blue-600` | color: blue |
| `rounded-lg` | border-radius: large |
| `flex` | display: flex |
| `grid` | display: grid |
| `hidden` | display: none |
| `md:flex` | flex on medium screens+ |

### Responsive Design

Add prefixes for different screen sizes:

```tsx
<div className="
  text-sm        // Mobile (default)
  md:text-base   // Tablet (768px+)
  lg:text-lg     // Desktop (1024px+)
">
  Responsive text
</div>
```

| Prefix | Screen Size |
|--------|-------------|
| (none) | Mobile first (0px+) |
| `sm:` | 640px+ |
| `md:` | 768px+ |
| `lg:` | 1024px+ |
| `xl:` | 1280px+ |

### Dark Mode

Add `dark:` prefix for dark mode styles:

```tsx
<div className="
  bg-white       // Light mode
  dark:bg-slate-900  // Dark mode
  text-gray-900
  dark:text-white
">
  Works in both modes!
</div>
```

### shadcn/ui Components

Pre-built, customizable components in `src/components/ui/`:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Use them:
<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Adding New shadcn Components

```bash
npx shadcn@latest add [component-name]

# Examples:
npx shadcn@latest add alert
npx shadcn@latest add tooltip
npx shadcn@latest add table
```

---

## 🔍 SEO Configuration

### Built-in SEO Features

1. **Meta Tags** - Configured in `layout.tsx`
2. **Open Graph** - For social sharing
3. **Twitter Cards** - For Twitter sharing
4. **JSON-LD** - Structured data for Google
5. **Sitemap** - Auto-generated at `/sitemap.xml`
6. **Robots.txt** - Auto-generated at `/robots.txt`

### Changing SEO Settings

```typescript
// src/config/site.config.ts

seo: {
  title: "Your Site Title | Your Brand",
  titleTemplate: "%s | Your Brand",  // %s = page title
  description: "Your site description for search engines...",
  keywords: ["keyword1", "keyword2", "keyword3"],
  
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Your Brand",
    image: "/og-image.png",  // 1200x630 pixels recommended
  },
  
  twitter: {
    card: "summary_large_image",
    creator: "@yourtwitter",
  },
},
```

### Environment Variables for SEO

Create `.env.local` file:

```env
# Site URL (important for sitemap & canonical URLs)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Search Engine Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-code
NEXT_PUBLIC_BING_VERIFICATION=your-bing-code
```

### Adding Google Analytics

1. Get your GA4 Measurement ID from Google Analytics
2. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Add script to `layout.tsx`:
```tsx
// In <head> section
<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
```

---

## 🚢 Deployment

### Option 1: Vercel (Recommended - Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"

Done! Vercel handles everything automatically.

### Option 2: Netlify (Free)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select repo and configure:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Option 3: Self-Hosted (VPS)

```bash
# Build the project
npm run build

# Start production server
npm run start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "xitoxito" -- start
```

### Environment Variables in Production

Add these in your hosting platform's dashboard:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=xxx
# Add other env vars as needed
```

---

## 📝 Common Tasks

### Task 1: Change Colors

Edit the Tailwind colors in components. Common color classes:

```
blue-600, blue-500, blue-400  (primary)
cyan-600, cyan-500            (secondary)  
slate-900, slate-800          (dark backgrounds)
white, slate-50               (light backgrounds)
```

### Task 2: Add New Feature Card

In `src/config/site.config.ts`:

```typescript
features: {
  items: [
    // Add new feature:
    {
      icon: "Star",  // Lucide icon name
      title: "New Feature",
      description: "Description here",
      color: "from-yellow-500 to-orange-500",
      category: "store",
    },
  ],
},
```

### Task 3: Add New Testimonial

In `src/config/site.config.ts`:

```typescript
benefits: {
  testimonials: [
    {
      name: "Customer Name",
      role: "CEO, Company",
      content: "Their review text...",
      avatar: "/avatars/name.jpg",  // Add image to public/avatars/
      rating: 5,
    },
  ],
},
```

### Task 4: Add New Pricing Plan

In `src/config/site.config.ts`:

```typescript
pricing: {
  plans: [
    {
      id: "new-plan",
      name: "New Plan",
      description: "Plan description",
      price: 99,
      priceLabel: "$99/mo",
      popular: false,
      features: [
        { text: "Feature 1", included: true },
        { text: "Feature 2", included: true },
        { text: "Feature 3", included: false },
      ],
      cta: "Get Started",
    },
  ],
},
```

### Task 5: Change Fonts

In `src/app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";  // Change import

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// In body className:
<body className={`${inter.variable} font-sans ...`}>
```

### Task 6: Add New Page

1. Create file: `src/app/about/page.tsx`
```tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto py-20">
      <h1>About Us</h1>
      <p>Content here...</p>
    </div>
  );
}
```

2. Access at: `http://localhost:3000/about`

---

## 🔧 Troubleshooting

### Problem: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Problem: Build errors

**Solution:**
```bash
# Check for TypeScript errors
npm run lint

# Check the error message and fix the file mentioned
```

### Problem: Styles not updating

**Solution:**
1. Stop the dev server (Ctrl+C)
2. Delete `.next` folder
3. Run `npm run dev` again

### Problem: Dark mode not working

**Solution:**
Make sure `ThemeProvider` wraps your app in `layout.tsx`:

```tsx
<ThemeProvider>
  {children}
</ThemeProvider>
```

### Problem: Images not showing

**Solution:**
1. Images must be in `/public` folder
2. Reference without `/public`: 
   - File: `/public/logo.png`
   - Usage: `<img src="/logo.png" />`

---

## 📄 File Reference

### Core Files

| File | Purpose |
|------|---------|
| `src/config/site.config.ts` | ⭐ Main configuration |
| `src/app/layout.tsx` | Root layout, SEO, fonts |
| `src/app/page.tsx` | Homepage |
| `src/app/globals.css` | Global styles |
| `src/lib/utils.ts` | Utility functions |
| `src/types/index.ts` | TypeScript types |

### Component Files

| File | Section |
|------|---------|
| `Navbar.tsx` | Top navigation |
| `Hero.tsx` | Main banner |
| `Features.tsx` | Features grid |
| `Benefits.tsx` | Benefits + testimonials |
| `Pricing.tsx` | Pricing plans |
| `Demo.tsx` | Demo showcase |
| `Contact.tsx` | Contact form |
| `Footer.tsx` | Footer |
| `ThemeToggle.tsx` | Dark/Light switch |

### UI Components (shadcn)

| Component | Usage |
|-----------|-------|
| `button.tsx` | Buttons |
| `card.tsx` | Cards |
| `input.tsx` | Text inputs |
| `textarea.tsx` | Text areas |
| `dialog.tsx` | Modals |
| `sheet.tsx` | Side panels |
| `tabs.tsx` | Tab navigation |
| `accordion.tsx` | Collapsible sections |
| `carousel.tsx` | Image/content slider |
| `badge.tsx` | Labels/tags |
| `avatar.tsx` | User avatars |
| `dropdown-menu.tsx` | Dropdown menus |
| `navigation-menu.tsx` | Navigation |
| `scroll-area.tsx` | Scrollable areas |
| `separator.tsx` | Divider lines |
| `label.tsx` | Form labels |
| `sonner.tsx` | Toast notifications |

### API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/features/route.ts` | GET | Features data |
| `/api/pricing/route.ts` | GET | Pricing data |
| `/api/testimonials/route.ts` | GET | Testimonials |
| `/api/contact/route.ts` | POST | Contact form |
| `/api/newsletter/route.ts` | POST | Newsletter signup |

### SEO Files

| File | Purpose |
|------|---------|
| `src/lib/seo.ts` | SEO utilities & JSON-LD schemas |
| `src/components/seo/JsonLd.tsx` | Structured data component |
| `src/app/robots.ts` | robots.txt generator |
| `src/app/sitemap.ts` | sitemap.xml generator |
| `src/app/manifest.ts` | PWA manifest |

### Config Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & scripts |
| `tsconfig.json` | TypeScript settings |
| `next.config.ts` | Next.js settings |
| `tailwind.config.ts` | Tailwind CSS settings |
| `postcss.config.mjs` | PostCSS settings |
| `eslint.config.mjs` | Linting rules |
| `.env.example` | Environment template |

---

## 🆘 Need Help?

### Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **React Docs:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org/docs

### Quick Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Check for errors
npm run lint

# Add shadcn component
npx shadcn@latest add [component]
```

---

## 🎉 You're Ready!

You now have everything you need to:
1. ✅ Run the project locally
2. ✅ Customize all content
3. ✅ Add new sections
4. ✅ Style components
5. ✅ Deploy to production

**Happy coding!** 🚀

---

*Documentation created for XitoXito E-Commerce Platform*
*Last updated: December 2025*

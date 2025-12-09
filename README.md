# 🛍️ XitoXito - E-Commerce Platform Sales Website

> A professional, production-ready Next.js marketing website for selling complete e-commerce solutions. Perfect for agencies, SaaS companies, and product launches.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwind-css)

## ✨ Features

- **🎨 Beautiful UI** - Modern design with smooth animations and transitions
- **📱 Mobile First** - Fully responsive, works perfectly on all devices (iOS, Android, Desktop)
- **🌙 Dark Mode** - Built-in theme switching (light/dark/system preference)
- **⚡ Lightning Fast** - Optimized with Next.js 16 and Turbopack
- **🔍 SEO Optimized** - Full meta tags, JSON-LD schemas, auto sitemap & robots.txt
- **🛠️ Easy to Customize** - Change everything from one centralized config file
- **💾 No Database** - Static data, zero server dependencies, deploy anywhere
- **🚀 PWA Ready** - Progressive Web App support for app-like experience
- **🌍 Bilingual** - English & Nepali language support built-in
- **♿ Accessible** - WCAG compliant components with proper ARIA labels
- **📝 Fully Documented** - Comprehensive guide for developers of all levels

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Installation

```bash
# Clone the repository
git clone https://github.com/mukeshadhikary/xitoxito_next.git
cd xitoxito_next

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the website running!

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 📖 Documentation

Comprehensive documentation is available in [`DOCUMENTATION.md`](./DOCUMENTATION.md) covering:

- ✅ Step-by-step setup guide
- ✅ Component explanations  
- ✅ Customization guide (change everything from config file)
- ✅ API routes documentation
- ✅ Styling with Tailwind CSS
- ✅ SEO configuration
- ✅ Deployment instructions (Vercel, Netlify, VPS)
- ✅ Common tasks & troubleshooting

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **React 19** | UI library |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling |
| **shadcn/ui** | Pre-built, customizable components |
| **Lucide Icons** | Beautiful icon library |
| **next-themes** | Dark mode support |

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/              # API endpoints (contact, newsletter, etc.)
│   ├── layout.tsx        # Root layout with SEO
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global styles
│   ├── manifest.ts       # PWA manifest
│   ├── robots.ts         # SEO robots.txt
│   └── sitemap.ts        # SEO sitemap.xml
├── components/           # React components
│   ├── ui/               # shadcn/ui components (17 components)
│   ├── seo/              # SEO components
│   ├── providers/        # Context providers
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features showcase
│   ├── Benefits.tsx      # Benefits + testimonials
│   ├── Pricing.tsx       # Pricing plans
│   ├── Demo.tsx          # Demo showcase
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── config/
│   └── site.config.ts    # ⭐ Main config file (customize everything here!)
├── lib/
│   ├── seo.ts            # SEO utilities & JSON-LD schemas
│   └── utils.ts          # General utilities
├── types/
│   └── index.ts          # TypeScript types
└── data/
    └── constants.tsx     # Static data (features, pricing, testimonials)
```

## ⚙️ Customization

### Change Site Information

Edit `src/config/site.config.ts`:

```typescript
export const siteConfig = {
  name: "Your Brand",
  tagline: "Your Tagline",
  description: "Your description",
  contact: {
    email: "your@email.com",
    phone: "+1-123-456-7890",
  },
  // Change everything from here!
};
```

### Add a New Pricing Plan

```typescript
// In src/config/site.config.ts

pricing: {
  plans: [
    {
      id: "starter",
      name: "Starter Plan",
      price: 99,
      features: [
        { text: "Feature 1", included: true },
        { text: "Feature 2", included: false },
      ],
    },
    // Add more plans...
  ],
}
```

### Add a New Feature

```typescript
// In src/config/site.config.ts

features: {
  items: [
    {
      icon: "Star",  // Lucide icon name
      title: "Your Feature",
      description: "Feature description",
      color: "from-blue-500 to-cyan-500",
    },
    // Add more features...
  ],
}
```

See [`DOCUMENTATION.md`](./DOCUMENTATION.md) for more customization examples!

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" and select your repo
4. Click "Deploy"

**Done!** Vercel handles everything automatically.

### Deploy on Netlify

1. Connect your GitHub repo at [netlify.com](https://netlify.com)
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### Deploy on Your VPS

```bash
# Build
npm run build

# Start
npm run start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "xitoxito" -- start
```

## 🔍 SEO Features

- ✅ Automatic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration (`/robots.xml`)
- ✅ Meta tags & Open Graph for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data
- ✅ Canonical URLs
- ✅ Mobile viewport optimization
- ✅ PWA manifest

## 🎯 Use Cases

Perfect for:
- 🏢 **Agencies** selling e-commerce solutions
- 💼 **SaaS companies** launching products
- 🛍️ **E-commerce platforms** marketing
- 🎯 **Product showcases**
- 📱 **Mobile-first applications**
- 🌐 **Multi-language websites**

## 📚 API Routes

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/features` | GET | Get features list |
| `/api/pricing` | GET | Get pricing plans |
| `/api/testimonials` | GET | Get testimonials |
| `/api/contact` | POST | Submit contact form |
| `/api/newsletter` | POST | Newsletter subscription |

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips

- **Change everything from `src/config/site.config.ts`** - Most customizations can be done from this single file
- **Use dark mode prefix in Tailwind** - Add `dark:` to styles for dark mode support
- **Responsive design** - Use `md:`, `lg:`, `xl:` prefixes for different screen sizes
- **Add more components** - Use `npx shadcn@latest add [component]` to add new shadcn components

## 🆘 Need Help?

- 📖 Read the [complete documentation](./DOCUMENTATION.md)
- 🔗 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 🧩 [shadcn/ui Components](https://ui.shadcn.com)

## 📧 Contact

For questions or support:
- Email: hello@xitoxito.com
- Website: [xitoxito.com](https://xitoxito.com)

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**

⭐ If you found this helpful, please consider giving it a star on GitHub!

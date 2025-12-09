import {
  ShoppingCart,
  Zap,
  Globe,
  Shield,
  Smartphone,
  BarChart3,
} from "lucide-react";
import { Feature, Testimonial, PricingPlan, NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Features", sectionId: "features" },
  { label: "Benefits", sectionId: "benefits" },
  { label: "Pricing", sectionId: "pricing" },
  { label: "Demo", sectionId: "demo" },
];

export const FEATURES: Feature[] = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Complete E-Commerce Solution",
    titleNp: "पूर्ण ई-कमर्स समाधान",
    description:
      "Ready-to-use online store with product management, shopping cart, and checkout",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile-First Design",
    titleNp: "मोबाइल-फ्रेन्डली",
    description: "Perfect display on all devices - mobile, tablet, and desktop",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    titleNp: "अति द्रुत",
    description: "Built with Next.js for superior speed and performance",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Japanese & Nepali Support",
    titleNp: "जापानी र नेपाली भाषा",
    description: "Fully supports both languages for your customers",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Payments",
    titleNp: "सुरक्षित भुक्तानी",
    description:
      "Accept credit cards, digital wallets, and cash on delivery",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Sales Analytics",
    titleNp: "बिक्री विश्लेषण",
    description: "Track your sales, customers, and inventory in real-time",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ramesh Thapa",
    business: "Secondhand Store, Tokyo",
    businessNp: "सेकेन्डह्यान्ड स्टोर, टोकियो",
    text: "After using Xito system, my sales increased 3x! Now Japanese and Nepali customers can easily order online.",
    textNp:
      "Xito प्रणाली प्रयोग गरेपछि मेरो बिक्री ३ गुणा बढ्यो! अब जापानी र नेपाली ग्राहकहरू सजिलै अनलाइन अर्डर गर्न सक्छन्।",
    rating: 5,
  },
  {
    name: "Sita Gurung",
    business: "Handicraft Brand, Pokhara",
    businessNp: "हस्तकला ब्रान्ड, पोखरा",
    text: "Very easy to manage products! I can update my shop from my phone anytime.",
    textNp:
      "उत्पादनहरू व्यवस्थापन गर्न धेरै सजिलो! म कुनै पनि समय मेरो फोनबाट मेरो पसल अपडेट गर्न सक्छु।",
    rating: 5,
  },
  {
    name: "Krishna Shrestha",
    business: "Nepali Grocery, Osaka",
    businessNp: "नेपाली किराना, ओसाका",
    text: "Perfect for small business! Setup was quick and customer support is excellent.",
    textNp:
      "सानो व्यवसायको लागि उत्तम! सेटअप छिटो थियो र ग्राहक समर्थन उत्कृष्ट छ।",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    nameNp: "आधारभूत",
    price: "¥29,800",
    priceNpr: "NPR 24,000",
    features: [
      "Complete online store setup",
      "Up to 100 products",
      "Mobile responsive design",
      "Basic analytics dashboard",
      "Email support",
      "Free 3 months hosting",
    ],
    featuresNp: [
      "पूर्ण अनलाइन स्टोर सेटअप",
      "१०० सम्म उत्पादनहरू",
      "मोबाइल रेस्पोन्सिभ डिजाइन",
      "आधारभूत एनालिटिक्स",
      "इमेल समर्थन",
      "३ महिना निःशुल्क होस्टिङ",
    ],
    popular: false,
  },
  {
    name: "Professional",
    nameNp: "व्यावसायिक",
    price: "¥49,800",
    priceNpr: "NPR 39,000",
    features: [
      "Everything in Basic",
      "Unlimited products",
      "Advanced analytics & reports",
      "Multiple payment methods",
      "Priority support",
      "Free 6 months hosting",
      "Custom domain included",
      "SEO optimization",
    ],
    featuresNp: [
      "Basic मा सबै सुविधाहरू",
      "असीमित उत्पादनहरू",
      "उन्नत एनालिटिक्स र रिपोर्टहरू",
      "धेरै भुक्तानी विधिहरू",
      "प्राथमिकता समर्थन",
      "६ महिना निःशुल्क होस्टिङ",
      "कस्टम डोमेन समावेश",
      "SEO अप्टिमाइजेसन",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    nameNp: "उद्यम",
    price: "¥79,800",
    priceNpr: "NPR 62,000",
    features: [
      "Everything in Professional",
      "Multi-store management",
      "Advanced inventory system",
      "Wholesale pricing options",
      "24/7 phone support",
      "Free 1 year hosting",
      "Custom features development",
      "Dedicated account manager",
    ],
    featuresNp: [
      "Professional मा सबै सुविधाहरू",
      "बहु-स्टोर व्यवस्थापन",
      "उन्नत इन्भेन्टरी प्रणाली",
      "थोक मूल्य विकल्पहरू",
      "२४/७ फोन समर्थन",
      "१ वर्ष निःशुल्क होस्टिङ",
      "कस्टम सुविधाहरू विकास",
      "समर्पित खाता प्रबन्धक",
    ],
    popular: false,
  },
];

export const HERO_STATS = [
  { value: "50+", label: "Happy Clients" },
  { value: "99%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support" },
];

export const HERO_CHECKLIST = [
  "Easy Product Management",
  "Mobile Responsive Design",
  "Secure Payment Processing",
  "Real-time Analytics",
  "SEO Optimized",
];

export const BUSINESS_TYPES = [
  "Nepali community businesses in Japan",
  "Small brands and shops in Nepal",
  "Secondhand stores (furniture, electronics)",
  "Handicraft and clothing brands",
];

export const FOOTER_BUSINESS_TYPES = [
  "Secondhand Stores",
  "Small Brands",
  "Handicraft Shops",
  "Food Products",
  "Clothing Stores",
];

export const FOOTER_TECH_STACK = [
  "Next.js Framework",
  "Strapi CMS",
  "Mobile Responsive",
  "SEO Optimized",
  "Secure Payments",
];

export const DEMO_FEATURES = [
  "Product catalog",
  "Shopping cart",
  "Checkout process",
  "Product search",
  "Category filtering",
  "User accounts",
];

export const CONTACT_STEPS = [
  {
    step: 1,
    title: "Free Consultation",
    description: "Discuss your business needs and goals",
  },
  {
    step: 2,
    title: "Custom Demo",
    description: "See how the system works for your products",
  },
  {
    step: 3,
    title: "Quick Setup",
    description: "Get your store online in 1-2 weeks",
  },
  {
    step: 4,
    title: "Start Selling",
    description: "Launch and grow your business online",
  },
];

export const CONTACT_METHODS = [
  {
    name: "WhatsApp",
    description: "Quick response",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    name: "Email",
    description: "Detailed inquiries",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "Video Call",
    description: "Personal demo",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

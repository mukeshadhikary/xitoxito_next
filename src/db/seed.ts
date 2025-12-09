import { db } from "./index";
import {
  features,
  testimonials,
  pricingPlans,
  pricingFeatures,
  siteSettings,
} from "./schema";

const seedData = async () => {
  console.log("🌱 Seeding database...");

  // Seed features
  const featuresData = [
    {
      icon: "ShoppingCart",
      title: "Complete E-Commerce Solution",
      titleNp: "पूर्ण ई-कमर्स समाधान",
      description: "Ready-to-use online store with product management, shopping cart, and checkout",
      order: 1,
    },
    {
      icon: "Smartphone",
      title: "Mobile-First Design",
      titleNp: "मोबाइल-फ्रेन्डली",
      description: "Perfect display on all devices - mobile, tablet, and desktop",
      order: 2,
    },
    {
      icon: "Zap",
      title: "Lightning Fast",
      titleNp: "अति द्रुत",
      description: "Built with Next.js for superior speed and performance",
      order: 3,
    },
    {
      icon: "Globe",
      title: "Japanese & Nepali Support",
      titleNp: "जापानी र नेपाली भाषा",
      description: "Fully supports both languages for your customers",
      order: 4,
    },
    {
      icon: "Shield",
      title: "Secure Payments",
      titleNp: "सुरक्षित भुक्तानी",
      description: "Accept credit cards, digital wallets, and cash on delivery",
      order: 5,
    },
    {
      icon: "BarChart3",
      title: "Sales Analytics",
      titleNp: "बिक्री विश्लेषण",
      description: "Track your sales, customers, and inventory in real-time",
      order: 6,
    },
  ];

  for (const feature of featuresData) {
    await db.insert(features).values(feature).onConflictDoNothing();
  }

  // Seed testimonials
  const testimonialsData = [
    {
      name: "Ramesh Thapa",
      business: "Secondhand Store, Tokyo",
      businessNp: "सेकेन्डह्यान्ड स्टोर, टोकियो",
      text: "After using Xito system, my sales increased 3x! Now Japanese and Nepali customers can easily order online.",
      textNp: "Xito प्रणाली प्रयोग गरेपछि मेरो बिक्री ३ गुणा बढ्यो! अब जापानी र नेपाली ग्राहकहरू सजिलै अनलाइन अर्डर गर्न सक्छन्।",
      rating: 5,
    },
    {
      name: "Sita Gurung",
      business: "Handicraft Brand, Pokhara",
      businessNp: "हस्तकला ब्रान्ड, पोखरा",
      text: "Very easy to manage products! I can update my shop from my phone anytime.",
      textNp: "उत्पादनहरू व्यवस्थापन गर्न धेरै सजिलो! म कुनै पनि समय मेरो फोनबाट मेरो पसल अपडेट गर्न सक्छु।",
      rating: 5,
    },
    {
      name: "Krishna Shrestha",
      business: "Nepali Grocery, Osaka",
      businessNp: "नेपाली किराना, ओसाका",
      text: "Perfect for small business! Setup was quick and customer support is excellent.",
      textNp: "सानो व्यवसायको लागि उत्तम! सेटअप छिटो थियो र ग्राहक समर्थन उत्कृष्ट छ।",
      rating: 5,
    },
  ];

  for (const testimonial of testimonialsData) {
    await db.insert(testimonials).values(testimonial).onConflictDoNothing();
  }

  // Seed pricing plans
  const plansData = [
    { name: "Basic", nameNp: "आधारभूत", price: "¥29,800", priceNpr: "NPR 24,000", popular: false, order: 1 },
    { name: "Professional", nameNp: "व्यावसायिक", price: "¥49,800", priceNpr: "NPR 39,000", popular: true, order: 2 },
    { name: "Enterprise", nameNp: "उद्यम", price: "¥79,800", priceNpr: "NPR 62,000", popular: false, order: 3 },
  ];

  for (const plan of plansData) {
    await db.insert(pricingPlans).values(plan).onConflictDoNothing();
  }

  // Seed pricing features
  const planFeaturesData = [
    // Basic plan features (planId: 1)
    { planId: 1, feature: "Complete online store setup", featureNp: "पूर्ण अनलाइन स्टोर सेटअप", order: 1 },
    { planId: 1, feature: "Up to 100 products", featureNp: "१०० सम्म उत्पादनहरू", order: 2 },
    { planId: 1, feature: "Mobile responsive design", featureNp: "मोबाइल रेस्पोन्सिभ डिजाइन", order: 3 },
    { planId: 1, feature: "Basic analytics dashboard", featureNp: "आधारभूत एनालिटिक्स", order: 4 },
    { planId: 1, feature: "Email support", featureNp: "इमेल समर्थन", order: 5 },
    { planId: 1, feature: "Free 3 months hosting", featureNp: "३ महिना निःशुल्क होस्टिङ", order: 6 },
    // Professional plan features (planId: 2)
    { planId: 2, feature: "Everything in Basic", featureNp: "Basic मा सबै सुविधाहरू", order: 1 },
    { planId: 2, feature: "Unlimited products", featureNp: "असीमित उत्पादनहरू", order: 2 },
    { planId: 2, feature: "Advanced analytics & reports", featureNp: "उन्नत एनालिटिक्स र रिपोर्टहरू", order: 3 },
    { planId: 2, feature: "Multiple payment methods", featureNp: "धेरै भुक्तानी विधिहरू", order: 4 },
    { planId: 2, feature: "Priority support", featureNp: "प्राथमिकता समर्थन", order: 5 },
    { planId: 2, feature: "Free 6 months hosting", featureNp: "६ महिना निःशुल्क होस्टिङ", order: 6 },
    { planId: 2, feature: "Custom domain included", featureNp: "कस्टम डोमेन समावेश", order: 7 },
    { planId: 2, feature: "SEO optimization", featureNp: "SEO अप्टिमाइजेसन", order: 8 },
    // Enterprise plan features (planId: 3)
    { planId: 3, feature: "Everything in Professional", featureNp: "Professional मा सबै सुविधाहरू", order: 1 },
    { planId: 3, feature: "Multi-store management", featureNp: "बहु-स्टोर व्यवस्थापन", order: 2 },
    { planId: 3, feature: "Advanced inventory system", featureNp: "उन्नत इन्भेन्टरी प्रणाली", order: 3 },
    { planId: 3, feature: "Wholesale pricing options", featureNp: "थोक मूल्य विकल्पहरू", order: 4 },
    { planId: 3, feature: "24/7 phone support", featureNp: "२४/७ फोन समर्थन", order: 5 },
    { planId: 3, feature: "Free 1 year hosting", featureNp: "१ वर्ष निःशुल्क होस्टिङ", order: 6 },
    { planId: 3, feature: "Custom features development", featureNp: "कस्टम सुविधाहरू विकास", order: 7 },
    { planId: 3, feature: "Dedicated account manager", featureNp: "समर्पित खाता प्रबन्धक", order: 8 },
  ];

  for (const feature of planFeaturesData) {
    await db.insert(pricingFeatures).values(feature).onConflictDoNothing();
  }

  // Seed site settings
  const settingsData = [
    { key: "site_name", value: "Xito E-Commerce System" },
    { key: "site_tagline", value: "Grow Your Business Online" },
    { key: "contact_email", value: "contact@xito.com" },
    { key: "contact_phone", value: "+81-XXX-XXXX" },
    { key: "whatsapp_number", value: "+81-XXX-XXXX" },
  ];

  for (const setting of settingsData) {
    await db.insert(siteSettings).values(setting).onConflictDoNothing();
  }

  console.log("✅ Database seeded successfully!");
};

seedData().catch(console.error);

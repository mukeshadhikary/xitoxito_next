"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Video,
  Send,
  CheckCircle,
  Loader2,
  User,
  Building,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { siteConfig } from "@/config/site.config";

const CONTACT_STEPS = [
  { step: 1, title: "Free Consultation", description: "Discuss your business needs and goals" },
  { step: 2, title: "Custom Demo", description: "See how the system works for your products" },
  { step: 3, title: "Quick Setup", description: "Get your store online in 1-2 weeks" },
  { step: 4, title: "Start Selling", description: "Launch and grow your business online" },
];

const CONTACT_METHODS = [
  { name: "WhatsApp", description: "Quick response", icon: Phone, color: "bg-green-500" },
  { name: "Email", description: "Detailed inquiries", icon: Mail, color: "bg-blue-500" },
  { name: "Video Call", description: "Personal demo", icon: Video, color: "bg-purple-500" },
];

const FAQS = [
  {
    question: "How long does setup take?",
    answer: "Most stores are set up within 1-2 weeks. Complex customizations may take longer.",
  },
  {
    question: "Do I need technical knowledge?",
    answer: "No! Our system is designed for non-technical users. You can manage everything from your phone.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support credit cards, digital wallets (PayPay, LINE Pay), bank transfers, and cash on delivery.",
  },
  {
    question: "Is there ongoing support?",
    answer: "Yes! All plans include email support. Professional and Enterprise plans include priority support.",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
    preferredContact: "email",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully! We'll get back to you soon.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (_error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-200 border-blue-500/30">
            Contact Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {siteConfig.contactSection.title}
          </h2>
          <p className="text-lg sm:text-xl text-blue-200">{siteConfig.translations.contact.subtitle}</p>
          <p className="text-base sm:text-lg text-blue-100/70 mt-4 max-w-2xl mx-auto">
            {siteConfig.contactSection.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl overflow-hidden w-full max-w-full">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-white flex items-center gap-2 text-lg sm:text-xl">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
                  <p className="text-blue-200">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-sm">Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white text-sm">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white text-sm">Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          placeholder="+81-XXX-XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business" className="text-white text-sm">Business Name</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="business"
                          placeholder="Your business"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white text-sm">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px] sm:min-h-[120px] w-full text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white text-sm">Preferred contact</Label>
                    <div className="flex gap-2">
                      {CONTACT_METHODS.map((method) => {
                        const Icon = method.icon;
                        return (
                          <Button
                            key={method.name}
                            type="button"
                            size="sm"
                            variant={formData.preferredContact === method.name.toLowerCase() ? "default" : "outline"}
                            className={`flex-1 text-xs sm:text-sm px-2 sm:px-3 ${
                              formData.preferredContact === method.name.toLowerCase()
                                ? "bg-blue-600"
                                : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                            }`}
                            onClick={() => setFormData({ ...formData, preferredContact: method.name.toLowerCase() })}
                          >
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            <span className="truncate">{method.name}</span>
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-10 sm:h-12 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Info Side */}
          <div className="space-y-6 sm:space-y-8 w-full max-w-full overflow-hidden">
            {/* Process Steps */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 overflow-hidden w-full">
              <CardHeader className="pb-2 sm:pb-4 p-4 sm:p-6">
                <CardTitle className="text-white text-lg sm:text-xl">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
                {CONTACT_STEPS.map((step, index) => (
                  <div key={step.step} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 font-bold text-white text-sm sm:text-base">
                      {step.step}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm sm:text-base">{step.title}</p>
                      <p className="text-xs sm:text-sm text-blue-200/70">{step.description}</p>
                    </div>
                    {index < CONTACT_STEPS.length - 1 && (
                      <div className="absolute left-5 top-10 w-0.5 h-8 bg-blue-500/30" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 overflow-hidden w-full">
              <CardHeader className="pb-2 sm:pb-4 p-4 sm:p-6">
                <CardTitle className="text-white text-lg sm:text-xl">FAQs</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <Accordion type="single" collapsible className="w-full">
                  {FAQS.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                      <AccordionTrigger className="text-white hover:text-blue-200 text-left text-xs sm:text-sm py-3">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-blue-200/70 text-xs sm:text-sm">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
              {CONTACT_METHODS.map((method) => {
                const Icon = method.icon;
                return (
                  <Card key={method.name} className="bg-white/10 backdrop-blur-xl border-white/20 text-center p-2 sm:p-4 overflow-hidden">
                    <div className={`w-8 h-8 sm:w-12 sm:h-12 ${method.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2`}>
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <p className="font-semibold text-white text-xs sm:text-sm truncate">{method.name}</p>
                    <p className="text-[10px] sm:text-xs text-blue-200/70 truncate">{method.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-12 text-center">
          <p className="text-blue-200">Available in both English and Nepali</p>
          <p className="text-sm text-blue-300/70">अंग्रेजी र नेपाली दुवैमा उपलब्ध</p>
        </div>
      </div>
    </section>
  );
}

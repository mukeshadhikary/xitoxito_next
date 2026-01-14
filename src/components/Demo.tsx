"use client";

import {
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Monitor,
  Settings,
  Play,
  Sparkles,
  Lock,
  Key,
  Copy,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Demo() {
  const [copiedField, setCopiedField] = useState<null | unknown>(null);

  const copyToClipboard = (text: string, field: unknown) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const adminCredentials = {
    email: "admin@admin.com",
    password: "admin@pass124",
  };

  const [adminImagesOpen, setAdminImagesOpen] = useState(false);
  const adminImages = [
    "/adminimages/admin1.png",
    "/adminimages/admin2.png",
    "/adminimages/admin3.png",
    "/adminimages/admin4.png",
    "/adminimages/admin5.png",
  ];

  const demoFeatures = [
    "Product Management",
    "Order Processing",
    "Real-time Analytics",
    "Inventory Tracking",
    "Customer Management",
    "Payment Integration",
  ];

  return (
    <section
      id="demo"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-950 dark:via-blue-950/20 dark:to-purple-950/10 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40 dark:opacity-20" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 dark:from-indigo-500/5 dark:to-blue-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with enhanced styling */}
        <div className="text-center mb-16 sm:mb-20">
          <Badge
            variant="outline"
            className="mb-6 px-5 py-2 text-sm font-semibold bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-blue-200 dark:border-blue-800 shadow-lg"
          >
            <Play className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
            Try It Live - No Signup Required
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight">
            Experience Our Platform Live
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-gray-300 mb-3 max-w-3xl mx-auto">
            Explore both customer and admin interfaces
          </p>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Instant access • Full features • Real experience
          </p>
        </div>

        {/* Demo cards with enhanced design */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Frontend Store Card */}
          <Card className="group relative overflow-hidden border-2 border-blue-200/50 dark:border-blue-800/50 shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transition-all duration-500 bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-900 dark:to-blue-950/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-600/5 transition-all duration-500" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

            <CardHeader className="pb-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 flex items-center justify-center shadow-xl shadow-blue-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/50 dark:to-emerald-900/50 text-green-700 dark:text-green-300 border-2 border-green-300 dark:border-green-700 px-3 py-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  Live Demo
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Customer Store
              </CardTitle>
              <CardDescription className="text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                Experience the shopping journey your customers will have. Browse
                products, add to cart, and complete checkout.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0 relative z-10">
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 mb-5 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600 dark:text-gray-400 font-medium">
                    Demo URL:
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard("demo.xitoxito.com", "frontend")
                    }
                    className="h-7 px-2"
                  >
                    {copiedField === "frontend" ? (
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </Button>
                </div>
                <code className="text-blue-600 dark:text-blue-400 font-mono text-sm block">
                  demo.xitoxito.com
                </code>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 text-base font-semibold group/btn"
              >
                <a
                  href="https://demo.xitoxito.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Visit Customer Store
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Admin Panel Card */}
          <Card className="group relative overflow-hidden border-2 border-purple-200/50 dark:border-purple-800/50 shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 transition-all duration-500 bg-gradient-to-br from-white to-purple-50/30 dark:from-slate-900 dark:to-purple-950/30">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-indigo-500/0 to-purple-600/0 group-hover:from-purple-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-600/5 transition-all duration-500" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

            <CardHeader className="pb-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 flex items-center justify-center shadow-xl shadow-purple-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/50 dark:to-indigo-900/50 text-purple-700 dark:text-purple-300 border-2 border-purple-300 dark:border-purple-700 px-3 py-1">
                  <Lock className="w-3 h-3 mr-2" />
                  Admin Access
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Admin Dashboard
              </CardTitle>
              <CardDescription className="text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                Manage your entire store. Add products, view analytics, and
                control everything from one place.
                <br />
                <span className="text-xs text-red-500 font-semibold block mt-2">
                  For security reasons, for admin panel credentials Please
                  contact us.
                </span>
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0 relative z-10">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 backdrop-blur-sm rounded-xl p-5 mb-5 border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-4">
                  <Key className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-bold text-purple-900 dark:text-purple-100">
                    Login Credentials
                  </span>
                </div>

                {/* <div className="space-y-3">
                  <div className="bg-white/80 dark:bg-slate-800/80 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400 font-medium">
                        <Mail className="w-3.5 h-3.5" />
                        Email
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(adminCredentials.email, 'email')}
                        className="h-6 px-2"
                      >
                        {copiedField === 'email' ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                    <code className="text-purple-700 dark:text-purple-300 font-mono text-sm block">
                      {adminCredentials.email}
                    </code>
                  </div>

                  <div className="bg-white/80 dark:bg-slate-800/80 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400 font-medium">
                        <Lock className="w-3.5 h-3.5" />
                        Password
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(adminCredentials.password, 'password')}
                        className="h-6 px-2"
                      >
                        {copiedField === 'password' ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                    <code className="text-purple-700 dark:text-purple-300 font-mono text-sm block">
                      {adminCredentials.password}
                    </code>
                  </div>
                </div> */}

                <div className="mt-3 text-xs text-purple-600 dark:text-purple-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {/* For security reasons, for admin panel credentials Please contact us. */}
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-800 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 text-base font-semibold group/btn"
              >
                <Link href="/" target="_blank" rel="noopener noreferrer">
                  <Settings className="w-5 h-5 mr-2 group-hover/btn:rotate-90 transition-transform duration-300" />
                  Contact Us for View Admin Panel
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {/* Add button to show admin images */}
              <div className="mt-4 flex justify-center">
                <Dialog
                  open={adminImagesOpen}
                  onOpenChange={setAdminImagesOpen}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-purple-400 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                    >
                      Show Admin Management UI
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>Admin Management UI Preview</DialogTitle>
                      <DialogDescription>
                        For security reasons, direct access is restricted. Here
                        are preview images of the admin management UI.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      {adminImages.map((src, idx) => (
                        <Image
                          width={600}
                          height={400}
                          key={src}
                          src={src}
                          alt={`Admin UI ${idx + 1}`}
                          className="rounded-lg border border-purple-200 dark:border-purple-700 shadow cursor-pointer transition-transform hover:scale-105"
                          onClick={() => window.open(src, "_blank")}
                        />
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Features showcase */}
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] " />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <CardHeader className="relative z-10 pb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-white">
                Powerful Features Included
              </CardTitle>
            </div>
            <CardDescription className="text-blue-100 text-base">
              Everything you need to run a successful e-commerce business
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {demoFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-4 hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shrink-0 shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Ready to explore?
                  </h3>
                  <p className="text-blue-100">
                    Try both interfaces and see the power of our platform
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
                  >
                    <a
                      href="https://demo.xitoxito.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Monitor className="w-5 h-5 mr-2" />
                      Customer View
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
                  >
                    <a
                      href="https://admin.xitoxito.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Settings className="w-5 h-5 mr-2" />
                      Admin Panel
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

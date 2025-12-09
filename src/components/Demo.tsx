"use client";

import { CheckCircle, ArrowRight, ExternalLink, Monitor, Settings, Play, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { siteConfig } from "@/config/site.config";

export default function Demo() {
  const { demo, translations, links, name } = siteConfig;
  
  return (
    <section id="demo" className="py-24 bg-linear-to-b from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50 dark:opacity-20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700">
            <Play className="w-3.5 h-3.5 mr-1.5 text-blue-600 dark:text-blue-400" />
            Interactive Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent">
              {demo.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">{demo.description}</p>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{translations.demo.subtitle}</p>
        </div>

        {/* Demo cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Live Demo Store Card */}
          <Card className="group relative overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-900 dark:border-slate-800">
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-400/10 to-transparent rounded-bl-full" />
            
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-7 h-7 text-white" />
                </div>
                <Badge className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse" />
                  Live
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Live Demo Store</CardTitle>
              <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                Explore a fully functional e-commerce store. Browse products, add to cart, and experience the complete customer journey.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild 
                  size="lg" 
                  className="flex-1 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25"
                >
                  <a href={links.demoStore} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Demo Store
                  </a>
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/50 dark:text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Tour
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl bg-white dark:bg-slate-900">
                    <DialogHeader>
                      <DialogTitle className="text-gray-900 dark:text-white">Store Demo Tour</DialogTitle>
                      <DialogDescription className="text-gray-600 dark:text-gray-400">
                        See how customers interact with your online store
                      </DialogDescription>
                    </DialogHeader>
                    <div className="aspect-video bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500 dark:text-gray-400">
                        <Play className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                        <p>Video tour coming soon</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Admin Panel Card */}
          <Card className="group relative overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-900 dark:border-slate-800">
            <div className="absolute inset-0 bg-linear-to-br from-gray-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-gray-400/10 to-transparent rounded-bl-full" />
            
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg shadow-gray-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Admin Access
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Admin Panel Demo</CardTitle>
              <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                Experience the powerful dashboard. Manage products, track orders, and view analytics all in one place.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild 
                  size="lg" 
                  className="flex-1 bg-linear-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black shadow-lg shadow-gray-500/25"
                >
                  <a href={links.adminPanel} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Admin Panel
                  </a>
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Tour
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl bg-white dark:bg-slate-900">
                    <DialogHeader>
                      <DialogTitle className="text-gray-900 dark:text-white">Admin Panel Tour</DialogTitle>
                      <DialogDescription className="text-gray-600 dark:text-gray-400">
                        Learn how to manage your store efficiently
                      </DialogDescription>
                    </DialogHeader>
                    <div className="aspect-video bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500 dark:text-gray-400">
                        <Play className="w-16 h-16 mx-auto mb-4 text-gray-500 dark:text-gray-400" />
                        <p>Video tour coming soon</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features showcase */}
        <Card className="border-0 shadow-2xl bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] " />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <CardHeader className="relative z-10 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <CardTitle className="text-xl font-bold text-white">Key Features You&apos;ll Experience</CardTitle>
            </div>
            <CardDescription className="text-blue-100">
              Everything you need to run a successful online store
            </CardDescription>
          </CardHeader>
          
          <CardContent className="relative z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {demo.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                  </div>
                  <span className="text-white font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl"
              >
                <a href={links.demoStore} target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Start Exploring Now
                </a>
              </Button>
              <p className="text-blue-200 text-sm">No signup required • Instant access</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

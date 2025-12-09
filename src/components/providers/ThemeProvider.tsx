"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { siteConfig } from "@/config/site.config";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={siteConfig.theme.defaultTheme}
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

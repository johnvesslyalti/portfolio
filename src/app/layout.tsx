import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import React, { JSX } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import FlickeringBackground from "@/components/FlickeringBackground";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Johnvessly Alti</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* 🔮 Flickering Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <FlickeringGrid
            width="100%"
            height="100%"
            className="w-full h-full"
            squareSize={24}
            gridGap={2}
            flickerChance={0.035}
            color="#ffffff"
            maxOpacity={0.12}
          />
        </div>

        <FlickeringBackground />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
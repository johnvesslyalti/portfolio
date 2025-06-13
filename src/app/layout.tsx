import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import React, { JSX } from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Johnvessly Alti</title>
      </head>
      <body className="bg-gradient-to-br from-blue-950 via-purple-950 to-gray-950 text-white">
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

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <title>Johnvessly Alti | Portfolio</title>
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Footer />
            <ChatWidget />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

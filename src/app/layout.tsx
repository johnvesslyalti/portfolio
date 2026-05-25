import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/footer";
import DogScratch from "@/components/dog-scratch";

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
            <div className="hidden sm:flex fixed bottom-4 left-4 z-50 w-11 h-11 items-center justify-center rounded-full
                            bg-white/10 dark:bg-white/5
                            backdrop-blur-xl
                            border border-white/20 dark:border-white/10
                            shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <DogScratch />
            </div>
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

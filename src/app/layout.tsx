import type { Metadata } from "next";
import Script from "next/script";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Tejas Pokale",
  description: "My Personal Website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="rubik">
        <Analytics />
        <SpeedInsights />
        {/* Prevent flash of incorrect theme before hydration */}
        <Script id="theme-init" strategy="beforeInteractive">{`
          try {
            const stored = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const shouldUseDark = stored ? stored === 'dark' : prefersDark;
            document.documentElement.classList.toggle('dark', shouldUseDark);
          } catch (e) {}
        `}</Script>

        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

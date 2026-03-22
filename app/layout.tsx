import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScrolling } from "@/components/SmoothScrolling";

// Optimizated Font Loading (display: swap ensures text is visible instantly during load)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Enforces correct theme rendering and optimal mobile scaling instantly
export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Production SEO setup
export const metadata: Metadata = {
  title: "Paturu Naga Jignas | AI Systems Engineer",
  description: "Specializing in crafting scalable, highly-performant artificial intelligence solutions with an obsessive attention to aesthetic and architectural detail.",
  keywords: ["AI Systems", "Machine Learning", "Product Engineering", "Software Architecture"],
  authors: [{ name: "Paturu Naga Jignas" }],
  openGraph: {
    title: "Paturu Naga Jignas | AI Systems Engineer",
    description: "Building AI systems from idea to deployment.",
    url: "https://jignasp.github.io",
    siteName: "Paturu Naga Jignas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paturu Naga Jignas | AI Systems Engineer",
    description: "Building AI systems from idea to deployment.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark selection:bg-blue-500/30">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}

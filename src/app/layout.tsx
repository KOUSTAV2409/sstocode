import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import ConditionalHeader from "@/components/ConditionalHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "sstocode - AI-Powered Design to Code",
  description: "Transform UI designs into production-ready React components with AI precision. Upload, generate, and ship faster than ever.",
  keywords: ["AI", "React", "UI", "Code Generation", "Design to Code", "Component Generator"],
  authors: [{ name: "sstocode Team" }],
  openGraph: {
    title: "sstocode - AI-Powered Design to Code",
    description: "Transform UI designs into production-ready React components with AI precision. Upload, generate, and ship faster than ever.",
    type: "website",
    siteName: "sstocode",
  },
  twitter: {
    card: "summary_large_image",
    title: "sstocode - AI-Powered Design to Code",
    description: "Transform UI designs into production-ready React components with AI precision.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-obsidian-bg text-obsidian-on selection:bg-obsidian-gold/30 selection:text-obsidian-on-primary`}
      >
        <ConditionalHeader />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#071f1f',
              border: '1px solid #223938',
              color: '#cee8e7',
            },
          }}
        />
      </body>
    </html>
  );
}

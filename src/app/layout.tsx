import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "sstocode - AI-Powered Design to Code",
  description: "Transform UI designs into production-ready React components with AI precision. Upload, generate, and ship faster than ever.",
  keywords: ["AI", "React", "UI", "Code Generation", "Design to Code", "Component Generator"],
  authors: [{ name: "sstocode Team" }],
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-black text-white selection:bg-purple-500/20`}
      >
        <Header />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#0a0a0a',
              border: '1px solid #374151',
              color: '#f9fafb',
            },
          }}
        />
      </body>
    </html>
  );
}

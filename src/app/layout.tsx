import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hobo Hostel - Authentic Backpacker Experience in India",
  description: "Experience authentic backpacker culture in the heart of India. Connect with fellow travelers, explore local culture, and create memories that last a lifetime.",
  keywords: "hostel, backpacker, India, travel, accommodation, budget, mixed dorm, private room",
  authors: [{ name: "Hobo Hostel" }],
  openGraph: {
    title: "Hobo Hostel - Authentic Backpacker Experience in India",
    description: "Experience authentic backpacker culture in the heart of India. Connect with fellow travelers, explore local culture, and create memories that last a lifetime.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hobo Hostel - Authentic Backpacker Experience in India",
    description: "Experience authentic backpacker culture in the heart of India. Connect with fellow travelers, explore local culture, and create memories that last a lifetime.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

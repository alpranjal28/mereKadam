import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppProvider from "@/components/AppContext";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Food-app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={roboto.className}>
        <main className="max-w-4xl border border-black mx-auto p-4">
          <AppProvider>
            <Toaster/>
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}

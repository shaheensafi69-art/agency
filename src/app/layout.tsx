import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ایمپورت کردن کامپوننت‌های هدر و فوتر
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safi Agency | Safi International Capital Ecosystem",
  description: "Official platform for professional verification and digital agency services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-emerald-500 selection:text-black flex flex-col min-h-screen`}>
        
        {/* هدر در بالای تمام صفحات */}
        <Header />
        
        {/* محتوای اصلی صفحات که کل فضای خالی را پر می‌کند */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* فوتر در پایین تمام صفحات */}
        <Footer />
        
      </body>
    </html>
  );
}
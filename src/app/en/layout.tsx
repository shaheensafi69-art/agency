import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safi Agency - Deliveroo & Digital Services",
  description: "Professional digital services and account verification agency.",
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en" dir="ltr" className="min-h-screen bg-black text-white">
      {/* می‌توانید هدر یا فوتر اختصاصی زبان انگلیسی را اینجا قرار دهید */}
      {children}
    </div>
  );
}
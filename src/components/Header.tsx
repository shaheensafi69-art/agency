"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRight, Menu, Globe, ChevronDown, Check } from "lucide-react";

// دیکشنری هوشمند برای ترجمه خودکار منوهای هدر بر اساس زبان سایت
const translations: Record<string, any> = {
  en: { home: "Home", services: "Services", about: "About Us", contact: "Contact", getStarted: "Get Started", dir: "ltr" },
  fa: { home: "خانه", services: "خدمات", about: "درباره ما", contact: "تماس با ما", getStarted: "شروع کنید", dir: "rtl" },
  ps: { home: "کور پاڼه", services: "خدمتونه", about: "زموږ په اړه", contact: "اړیکه", getStarted: "پیل کړئ", dir: "rtl" },
  ur: { home: "ہوم", services: "خدمات", about: "ہمارے بارے میں", contact: "رابطہ", getStarted: "شروع کریں", dir: "rtl" },
  fr: { home: "Accueil", services: "Services", about: "À propos", contact: "Contact", getStarted: "Commencer", dir: "ltr" },
  de: { home: "Startseite", services: "Dienste", about: "Über uns", contact: "Kontakt", getStarted: "Loslegen", dir: "ltr" },
  tr: { home: "Ana Sayfa", services: "Hizmetler", about: "Hakkımızda", contact: "İletişim", getStarted: "Başla", dir: "ltr" },
  ru: { home: "Главная", services: "Услуги", about: "О нас", contact: "Контакты", getStarted: "Начать", dir: "ltr" },
};

// لیست زبان‌ها مطابق با پوشه‌های سیستم شما
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fa", name: "فارسی", flag: "🇦🇫" },
  { code: "ps", name: "پښتو", flag: "🇦🇫" },
  { code: "ur", name: "اردو", flag: "🇵🇰" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  // پیدا کردن زبان فعلی از روی آدرس (مثلاً /en/about -> en)
  const currentLangCode = pathname.split('/')[1] || 'en';
  // بارگذاری ترجمه‌های مربوط به همان زبان (اگر زبان نامعتبر بود، انگلیسی لود می‌شود)
  const t = translations[currentLangCode] || translations['en'];
  
  const activeLangDetails = languages.find(l => l.code === currentLangCode) || languages[0];

  // تشخیص اسکرول
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // تابع تغییر مسیر هنگام تغییر زبان
  const changeLanguage = (newLang: string) => {
    setIsLangOpen(false);
    if (newLang === currentLangCode) return;
    
    // جایگزین کردن زبان قدیمی با زبان جدید در آدرس
    const newPath = pathname.replace(`/${currentLangCode}`, `/${newLang}`);
    router.push(newPath || `/${newLang}`);
  };

  return (
    <header 
      // اعمال جهت (RTL یا LTR) به صورت هوشمند روی کل هدر
      dir={t.dir}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-black/50 backdrop-blur-2xl border-b border-zinc-800/70 shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-2" 
          : "bg-transparent border-b-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* ================= 1. لوگو و نام برند ================= */}
        <Link href={`/${currentLangCode}`} className="flex items-center space-x-3 rtl:space-x-reverse group">
          <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[5deg]">
             <Image 
                src="/br-logo.png" 
                alt="Safi Agency Logo" 
                width={60} 
                height={60} 
                className="object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.9)]"
             />
          </div>
          <span className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 group-hover:to-white transition-colors drop-shadow-md">
            Safi Agency
          </span>
        </Link>

        {/* ================= 2. منوی دسکتاپ (کپسول‌های سه‌بعدی جداگانه) ================= */}
        <nav className="hidden md:flex items-center gap-3">
          {[
            { name: t.home, path: `/${currentLangCode}` },
            { name: t.services, path: `/${currentLangCode}/service` },
            { name: t.about, path: `/${currentLangCode}/about` },
            { name: t.contact, path: `/${currentLangCode}/contact` }
          ].map((item) => (
            <Link 
              key={item.name}
              href={item.path} 
              className="px-6 py-2.5 rounded-full bg-zinc-900/30 backdrop-blur-md border border-zinc-700/50 text-sm font-semibold text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(16,185,129,0.25)]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ================= 3. بخش سمت راست (زبان + دکمه شروع) ================= */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse relative">
          
          {/* دکمه کشویی زبان (بسیار زیبا و 3D) */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 text-zinc-300 hover:text-white hover:border-cyan-500/80 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-bold uppercase">{currentLangCode}</span>
              <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ${isLangOpen ? "rotate-180 text-white" : ""}`} />
            </button>

            {/* لیست کشویی زبان‌ها با دیزاین فوق‌العاده شیک */}
            {isLangOpen && (
              <div className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-4 w-56 bg-zinc-950/90 backdrop-blur-3xl border border-zinc-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden transform origin-top animate-in fade-in zoom-in-95 duration-200 ring-1 ring-white/5">
                <div className="p-2 grid grid-cols-1 gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        currentLangCode === lang.code 
                          ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]" 
                          : "text-zinc-400 border border-transparent hover:bg-zinc-800/80 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="text-lg drop-shadow-md">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      {currentLangCode === lang.code && <Check className="w-4 h-4 text-emerald-400" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* دکمه هوشمند Get Started */}
          <Link 
            href={`/${currentLangCode}/service`} 
            className="hidden md:flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-7 py-2.5 rounded-full font-extrabold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
          >
            <span>{t.getStarted}</span>
            <ChevronRight className={`w-5 h-5 ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
          </Link>

          {/* منوی موبایل */}
          <button className="md:hidden text-zinc-400 hover:text-white p-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 shadow-lg">
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  );
}
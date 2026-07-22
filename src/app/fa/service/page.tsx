"use client";

import { useState, useRef } from "react";
import { 
  ArrowLeft, Globe, Lock, ShieldCheck, Clock, 
  CreditCard, FileText, Video, ChevronDown 
} from "lucide-react";
import SafiAgencyForm from "../../../components/SafiAgencyForm";

export default function ServicePage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  // رفرنس برای اسکرول نرم به بخش فرم
  const applySectionRef = useRef<HTMLDivElement>(null);

  const scrollToApply = () => {
    applySectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // اگر کاربر بریتانیا یا فرانسه را انتخاب کرد، فرم ثبت‌نام نمایش داده شود
  if (selectedCountry === "UK" || selectedCountry === "FR") {
    return (
      <div dir="rtl" className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden">
        {/* افکت‌های نوری فرم */}
        <div className={`absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${selectedCountry === 'UK' ? 'bg-emerald-600/10' : 'bg-cyan-600/10'}`}></div>
        
        <div className="max-w-2xl mx-auto mb-8 relative z-10">
          <button
            onClick={() => setSelectedCountry(null)}
            className={`group flex items-center space-x-2 space-x-reverse px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-md ${selectedCountry === 'UK' ? 'hover:border-emerald-500/50' : 'hover:border-cyan-500/50'}`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">بازگشت به انتخاب کشور</span>
          </button>
        </div>
        
        <div className="relative z-10">
          {/* 
            فرم ثبت‌نام. در آینده می‌توانید selectedCountry را به عنوان پراپ به فرم پاس دهید 
            تا فرم بداند برای کدام کشور (UK یا FR) پر می‌شود.
          */}
          <SafiAgencyForm />
        </div>
      </div>
    );
  }

  return (
    <main dir="rtl" className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* ================= افکت‌های نوری سه‌بعدی ================= */}
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[800px] h-[400px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 space-y-24">
        
        {/* ================= 1. HERO SECTION & PRICING ================= */}
        <section className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4" />
            <span>سرویس ویژه صفر تا صد</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight drop-shadow-lg">
            راه‌اندازی اکانت رایدر دیلیورو
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed">
            ثبت‌نام حرفه‌ای، امن و بدون دردسر اکانت. مدارک خود را آپلود کنید و تیم متخصص ما تمام پیچیدگی‌های حقوقی، بررسی سوابق و تأییدیه پلتفرم را مدیریت خواهد کرد.
          </p>

          {/* Pricing Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <div className="flex items-center space-x-4 space-x-reverse bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 font-black text-xl">
                UK
              </div>
              <div className="text-right">
                <p className="text-zinc-400 text-xs font-semibold uppercase">بریتانیا 🇬🇧</p>
                <p className="text-white font-extrabold text-2xl">£350</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-black text-xl">
                FR
              </div>
              <div className="text-right">
                <p className="text-zinc-400 text-xs font-semibold uppercase">فرانسه 🇫🇷</p>
                <p className="text-white font-extrabold text-2xl">€400</p>
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToApply}
            className="mt-8 group relative inline-flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-10 py-4 rounded-full font-extrabold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            <span>اکنون درخواست دهید</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </section>

        {/* ================= 2. THE PROCESS (4 STEPS) ================= */}
        <section className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">سیستم ما چگونه کار می‌کند</h2>
            <p className="text-zinc-400">یک فرآیند بهینه‌سازی شده طراحی شده تا شما را در ۱ الی ۴ هفته مشغول به کار کند.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* خط اتصال بین مراحل در دسکتاپ */}
            <div className="hidden md:block absolute top-8 right-[10%] w-[80%] h-0.5 bg-zinc-800 z-0"></div>

            {[
              { icon: FileText, title: "۱. آپلود مدارک", desc: "کارت شناسایی، مدرک آدرس و اطلاعات خود را از طریق فرم امن ما ارسال کنید." },
              { icon: Clock, title: "۲. آغاز پردازش", desc: "تیم ما مراحل قانونی و بررسی سوابق را شروع می‌کند (۱ الی ۴ هفته)." },
              { icon: CreditCard, title: "۳. ایجاد اکانت", desc: "ما صف‌های پلتفرم و الزامات حقوقی را مدیریت می‌کنیم." },
              { icon: Video, title: "۴. تأییدیه واتساپ", desc: "برای اسکن زنده چهره جهت نهایی‌سازی اکانت فعال با شما تماس می‌گیریم." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 bg-zinc-950 border-2 border-zinc-700 group-hover:border-emerald-500 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <step.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. DETAILED PROSE ================= */}
        <section className="bg-zinc-950/50 border border-zinc-800/50 rounded-3xl p-8 md:p-12 space-y-6 text-zinc-300 leading-relaxed font-medium text-lg relative max-w-5xl mx-auto">
          <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[60px]"></div>
          
          <h2 className="text-2xl font-extrabold text-white mb-6 border-b border-zinc-800 pb-4">
            پروتکل جامع راه‌اندازی و عملیات
          </h2>
          
          <p>
            به سرویس ویژه راه‌اندازی اکانت رایدر دیلیورو در صافی اگنسی خوش آمدید. ما درک می‌کنیم که پیمایش الزامات قانونی سخت‌گیرانه، بررسی سوابق، و ثبت‌نام در پلتفرم‌ها در بریتانیا و اروپا می‌تواند طاقت‌فرسا باشد. به همین دلیل است که ما یک راه‌حل کامل و صفر تا صد ارائه می‌دهیم که برای مدیریت بارهای سنگین اداری طراحی شده است تا شما بتوانید در سریع‌ترین زمان ممکن روی کسب درآمد تمرکز کنید.
          </p>
          <p>
            این مسیر از لحظه‌ای آغاز می‌شود که شما مدارک رسمی خود را—مانند کارت شناسایی، پاسپورت، و مدرک معتبر اثبات آدرس—از طریق پورتال بسیار امن و رمزنگاری‌شده ما آپلود می‌کنید. به محض دریافت درخواست شما، تیم پردازش اختصاصی ما بلافاصله کار را به دست می‌گیرد. ما جزئیات شما را به دقت بررسی می‌کنیم تا اطمینان حاصل کنیم که کاملاً با استانداردهای دقیق دیلیورو و مقامات دولتی محلی مطابقت دارند.
          </p>
          <p>
            برای <strong className="text-emerald-400">مشتریان بریتانیا</strong>، ما ادغام حق کار (Share Code) شما را مدیریت کرده و بررسی الزامی پایه سوابق کیفری (DBS) را تسهیل می‌کنیم. برای مشتریان ما در <strong className="text-cyan-400">فرانسه</strong>، ما در پیچیدگی‌های الزامات نظارتی منطقه‌ای کمک می‌کنیم و اطمینان می‌دهیم که استانداردهای Kbis و کارآفرین خرد (micro-entrepreneur) به طور کامل برآورده شده‌اند تا پروفایل شما از نظر قانونی بی‌نقص باشد.
          </p>
          <p>
            از آنجایی که ما به شدت به رعایت قوانین پایبند هستیم و باید از صف‌های رسمی ورود به پلتفرم عبور کنیم، <strong className="text-white bg-emerald-500/20 px-2 py-0.5 rounded">کل فرآیند راه‌اندازی معمولاً بین ۱ الی ۴ هفته طول می‌کشد.</strong> در طول این دوره، تیم ما به طور مداوم وضعیت درخواست شما را پیگیری می‌کند و هرگونه مانع اداری یا ارسال مجدد مدارک را به صورت داخلی و بدون ایجاد مزاحمت برای شما مدیریت می‌کند.
          </p>
          <p>
            شفافیت در قیمت‌گذاری یک ارزش اصلی در صافی اگنسی است. هزینه جامع راه‌اندازی ما <strong className="text-white">۳۵۰ پوند برای اکانت‌های بریتانیا</strong> و <strong className="text-white">۴۰۰ یورو برای اکانت‌های فرانسه</strong> است. مطلقاً هیچ هزینه پنهانی وجود ندارد.
          </p>
          <p>
            مرحله نهایی و حیاتی‌ترین مرحله این فرآیند، تأیید زنده چهره است. هنگامی که اکانت شما به طور کامل توسط پلتفرم تأیید و آماده فعال‌سازی شد، تیم پشتیبانی ما مستقیماً از طریق شماره واتساپی که ارائه داده‌اید با شما تماس خواهد گرفت. ما شما را در یک هماهنگی ویدیویی زنده راهنمایی می‌کنیم تا تأیید کنیم چهره شما با مدارک رسمی ارسال‌شده مطابقت دارد. پس از این مرحله امنیتی نهایی، اکانت کاملاً به شما تحویل داده می‌شود، فعال و آماده به کار است!
          </p>
        </section>

        {/* ================= 4. COUNTRY SELECTION FORM TRIGGER ================= */}
        <section ref={applySectionRef} className="pt-12 border-t border-zinc-800/50">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-cyan-400 text-xs font-semibold">
              <Globe className="w-4 h-4" />
              <span>کشور خود را انتخاب کنید</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              درخواست خود را شروع کنید
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              منطقه فعالیت خود را در زیر انتخاب کنید تا فرم امن آپلود مدارک باز شود.
            </p>
          </div>

          {/* گرید 4 ستونه برای 4 کشور */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* بریتانیا - فعال */}
            <div
              onClick={() => setSelectedCountry("UK")}
              className="bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800 border border-emerald-500/40 hover:border-emerald-400 p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                UK
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                🇬🇧 بریتانیا
              </h3>
              <p className="text-zinc-400 text-xs mb-6">راه‌اندازی و تأیید کامل صفر تا صد رایدر</p>
              <div className="mt-auto flex items-center space-x-2 space-x-reverse text-emerald-400 font-bold text-sm">
                <span>انتخاب UK</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
              </div>
            </div>

            {/* فرانسه - فعال */}
            <div
              onClick={() => setSelectedCountry("FR")}
              className="bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800 border border-cyan-500/40 hover:border-cyan-400 p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group shadow-[0_10px_30px_rgba(6,182,212,0.1)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                FR
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                🇫🇷 فرانسه
              </h3>
              <p className="text-zinc-400 text-xs mb-6">راه‌اندازی کامل رایدر و کارآفرین خرد</p>
              <div className="mt-auto flex items-center space-x-2 space-x-reverse text-cyan-400 font-bold text-sm">
                <span>انتخاب FR</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
              </div>
            </div>

            {/* آلمان - کامینگ سون */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1 space-x-reverse">
                  <Lock className="w-3 h-3" /> <span>به زودی</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                DE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇩🇪 آلمان</h3>
              <p className="text-zinc-500 text-xs">سرویس تأیید اکانت منطقه‌ای به زودی می‌آید.</p>
            </div>

            {/* بلژیک - کامینگ سون */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1 space-x-reverse">
                  <Lock className="w-3 h-3" /> <span>به زودی</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                BE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇧🇪 بلژیک</h3>
              <p className="text-zinc-500 text-xs">سرویس تأیید اکانت منطقه‌ای به زودی می‌آید.</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
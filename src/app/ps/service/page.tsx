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
            <span className="text-sm font-semibold">د هیواد انتخاب ته بېرته ورګرځیدل</span>
          </button>
        </div>
        
        <div className="relative z-10">
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
            <span>له صفر څخه تر سل پورې ځانګړی خدمت</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight drop-shadow-lg">
            د ډیلیورو رایډر اکاونټ جوړول
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed">
            مسلکي، خوندي او بې له کوم ځنډه د اکاونټ ثبت‌نام. خپل اسناد اپلوډ کړئ، او زموږ مسلکي ټیم به ټول حقوقي مسایل، د شالید معاینات او د پلیټ فارم تایید په غاړه واخلي.
          </p>

          {/* Pricing Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <div className="flex items-center space-x-4 space-x-reverse bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 font-black text-xl">
                UK
              </div>
              <div className="text-right">
                <p className="text-zinc-400 text-xs font-semibold uppercase">انګلستان 🇬🇧</p>
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
            <span>همدا اوس غوښتنلیک ورکړئ</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </section>

        {/* ================= 2. THE PROCESS (4 STEPS) ================= */}
        <section className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">زموږ سیستم څنګه کار کوي</h2>
            <p className="text-zinc-400">یوه منظمه پروسه چې په ۱ تر ۴ اوونیو کې به مو په کار بوخت کړي.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* خط اتصال بین مراحل در دسکتاپ */}
            <div className="hidden md:block absolute top-8 right-[10%] w-[80%] h-0.5 bg-zinc-800 z-0"></div>

            {[
              { icon: FileText, title: "۱. د اسنادو اپلوډ", desc: "خپل هویت کارت، د پته سند او نور معلومات زموږ د خوندي فورم له لارې واستوئ." },
              { icon: Clock, title: "۲. د پروسس پیل", desc: "زموږ ټیم قانوني ترتیبات او د شالید معاینات پیلوي (۱ تر ۴ اوونیو پورې)." },
              { icon: CreditCard, title: "۳. د اکاونټ جوړول", desc: "موږ د پلیټ فارم قطارونه او حقوقي اړتیاوې مدیریت کوو." },
              { icon: Video, title: "۴. د واټساپ تصدیق", desc: "د فعال اکاونټ د پای ته رسولو لپاره د مخ د لایو سکن په موخه له تاسو سره اړیکه نیسو." }
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
            د چمتووالي او عملیاتو جامع پروتوکول
          </h2>
          
          <p>
            د صافی ایجنسۍ لخوا د ډیلیورو رایډر اکاونټ جوړولو ځانګړي خدمت ته ښه راغلاست. موږ پوهیږو چې په انګلستان او اروپا کې د سختو قانوني اړتیاو، شالید معایناتو او په پلیټ فارمونو کې نوم‌لیکنه ستونزمنه وي. له همدې امله موږ د صفر څخه تر سل پورې بشپړ حل لاره وړاندې کوو چې د اداري ستونزو د مدیریت لپاره ډیزاین شوې ترڅو تاسو په چټکۍ سره په عایداتو تمرکز وکړئ.
          </p>
          <p>
            دا لاره له هغې شېبې پیل کیږي کله چې تاسو خپل رسمي اسناد—لکه د هویت کارت، پاسپورت او د پته معتبر سند—زموږ د خورا خوندي او کوډ شوي پورټل له لارې اپلوډ کوئ. د غوښتنلیک په ترلاسه کولو سره، زموږ د پروسس ځانګړی ټیم سمدلاسه کار پیل کوي. موږ ستاسو جزئیات په دقت سره ارزیابي کوو ترڅو ډاډ ترلاسه کړو چې دوی د ډیلیورو او ځایی دولتي چارواکو دقیقو معیارونو سره په بشپړ ډول سمون لري.
          </p>
          <p>
            د <strong className="text-emerald-400">انګلستان پیرودونکو</strong> لپاره، موږ ستاسو د کار حق (Share Code) ادغام مدیریت کوو او د جرمي مخینې بنسټیزې معاینې (DBS) اسانتیا برابروو. زموږ د <strong className="text-cyan-400">فرانسه</strong> پیرودونکو لپاره، موږ د سیمه ایزو نظري اړتیاو په برخه کې مرسته کوو ترڅو ډاډ ترلاسه کړو چې د Kbis او مایکرو انټرپرېنر معیارونه په بشپړ ډول پوره شوي دي.
          </p>
          <p>
            څنګه چې موږ د قوانینو په پلي کولو کې کلک یو او باید د پلیټ فارم له رسمي صفونو څخه تېر شو، <strong className="text-white bg-emerald-500/20 px-2 py-0.5 rounded">بشپړ چمتووالی معمولاً تر منځ د ۱ تر ۴ اوونیو پورې وخت نیسي.</strong> د دې دورې په ترڅ کې، زموږ ټیم په دوامداره توګه ستاسو د غوښتنلیک حالت څاري او هر ډول اداري خنډونه په کور دننه مدیریت کوي.
          </p>
          <p>
            په نرخونو کې روڼتیا په صافی ایجنسۍ کې یو اصلي ارزښت دی. زموږ جامع فیس د <strong className="text-white">انګلستان اکاونټونو لپاره ۳۵۰ پوند</strong> او د <strong className="text-white">فرانسې اکاونټونو لپاره ۴۰۰ یورو</strong> دی. مطلق هېڅ پټ فیس شتون نلري.
          </p>
          <p>
            د دې پروسې وروستی او تر ټولو مهم ګام د مخ ژوندی تصدیق دی. کله چې ستاسو اکاونټ د پلیټ فارم لخوا په بشپړ ډول تایید او د فعالیدو لپاره چمتو شي، زموږ د ملاتړ ټیم به مستقیم ستاسو د واټساپ شمیرې له لارې له تاسو سره اړیکه ونیسي. موږ به تاسو ته د ژندې ویډیو همغږۍ له لارې لارښوونه وکړو ترڅو تصدیق کړو چې ستاسو مخ د استول شویو رسمي اسنادو سره سمون لري. د دې وروستي امنیتي ګام څخه وروسته، اکاونټ په بشپړ ډول تاسو ته سپارل کیږي، فعال او د کار لپاره چمتو دی!
          </p>
        </section>

        {/* ================= 4. COUNTRY SELECTION FORM TRIGGER ================= */}
        <section ref={applySectionRef} className="pt-12 border-t border-zinc-800/50">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-cyan-400 text-xs font-semibold">
              <Globe className="w-4 h-4" />
              <span>خپل هیواد وټاکئ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              خپل غوښتنلیک پیل کړئ
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              لاندې خپله د فعالیت سیمه وټاکئ ترڅو د اسنادو د اپلوډ خوندي فورم پرانیستل شي.
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
                🇬🇧 انګلستان
              </h3>
              <p className="text-zinc-400 text-xs mb-6">د صفر څخه تر سل پورې د رایډر اکاونټ بشپړ تنظیم او تایید</p>
              <div className="mt-auto flex items-center space-x-2 space-x-reverse text-emerald-400 font-bold text-sm">
                <span>انګلستان وټاکئ</span>
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
              <p className="text-zinc-400 text-xs mb-6">د مایکرو انټرپرېنر او رایډر بشپړ تنظیم</p>
              <div className="mt-auto flex items-center space-x-2 space-x-reverse text-cyan-400 font-bold text-sm">
                <span>فرانسه وټاکئ</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
              </div>
            </div>

            {/* آلمان - کامینگ سون */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1 space-x-reverse">
                  <Lock className="w-3 h-3" /> <span>ژر راځي</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                DE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇩🇪 آلمان</h3>
              <p className="text-zinc-500 text-xs">سیمه ایز اکاونټ تصدیق ژر راځي.</p>
            </div>

            {/* بلژیک - کامینگ سون */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1 space-x-reverse">
                  <Lock className="w-3 h-3" /> <span>ژر راځي</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                BE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇧🇪 بلجیم</h3>
              <p className="text-zinc-500 text-xs">سیمه ایز اکاونټ تصدیق ژر راځي.</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
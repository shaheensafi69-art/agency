"use client";

import { useState, useRef } from "react";
import { 
  ArrowLeft, Globe, Lock, ShieldCheck, Clock, 
  CreditCard, FileText, Video, ChevronDown 
} from "lucide-react";
import SafiAgencyForm from "../../../components/SafiAgencyForm";

export default function UrduServicePage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  // فارم کے سیکشن پر سکرول کرنے کے لیے ریفرنس
  const applySectionRef = useRef<HTMLDivElement>(null);

  const scrollToApply = () => {
    applySectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // اگر صارف برطانیہ یا فرانس کا انتخاب کرے تو رجسٹریشن فارم ظاہر ہو
  if (selectedCountry === "UK" || selectedCountry === "FR") {
    return (
      <div dir="rtl" className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden">
        {/* فارم کے روشنی کے اثرات */}
        <div className={`absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${selectedCountry === 'UK' ? 'bg-emerald-600/10' : 'bg-cyan-600/10'}`}></div>
        
        <div className="max-w-2xl mx-auto mb-8 relative z-10">
          <button
            onClick={() => setSelectedCountry(null)}
            className={`group flex items-center space-x-2 space-x-reverse px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-md ${selectedCountry === 'UK' ? 'hover:border-emerald-500/50' : 'hover:border-cyan-500/50'}`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">ملک کے انتخاب کی طرف واپس جائیں</span>
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
      
      {/* ================= تھری ڈی نائین لائیٹس ================= */}
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[800px] h-[400px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 space-y-24">
        
        {/* ================= 1. HERO SECTION & PRICING ================= */}
        <section className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4" />
            <span>صفر سے سو تک اسپیشل سروس</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight drop-shadow-lg">
            ڈیلیورو رائڈر اکاؤنٹ سیٹ اپ
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed">
            پیشہ ورانہ، محفوظ اور آسان اکاؤنٹ رجسٹریشن۔ اپنی دستاویزات اپ لوڈ کریں، اور ہماری ماہر ٹیم تمام قانونی پیچیدگیوں، پس منظر کی جانچ پڑتال اور پلیٹ فارم کی منظوری کا انتظام کرے گی۔
          </p>

          {/* قیمتوں کے بیجز */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <div className="flex items-center space-x-4 space-x-reverse bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 font-black text-xl">
                UK
              </div>
              <div className="text-right">
                <p className="text-zinc-400 text-xs font-semibold uppercase">برطانیہ 🇬🇧</p>
                <p className="text-white font-extrabold text-2xl">£350</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-black text-xl">
                FR
              </div>
              <div className="text-right">
                <p className="text-zinc-400 text-xs font-semibold uppercase">فرانس 🇫🇷</p>
                <p className="text-white font-extrabold text-2xl">€400</p>
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToApply}
            className="mt-8 group relative inline-flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-10 py-4 rounded-full font-extrabold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            <span>ابھی درخواست دیں</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </section>

        {/* ================= 2. THE PROCESS (4 STEPS) ================= */}
        <section className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">ہمارا سسٹم کیسے کام کرتا ہے</h2>
            <p className="text-zinc-400">ایک ایسا مربوط عمل جو آپ کو 1 سے 4 ہفتوں میں سڑک پر لانے کے لیے ڈیزائن کیا گیا ہے۔</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* ڈیسک ٹاپ میں مراحل کے درمیان لکیر */}
            <div className="hidden md:block absolute top-8 right-[10%] w-[80%] h-0.5 bg-zinc-800 z-0"></div>

            {[
              { icon: FileText, title: "۱. دستاویزات اپ لوڈ کریں", desc: "ہمارے محفوظ فارم کے ذریعے اپنی شناخت، پتے کا ثبوت اور تفصیلات جمع کریں۔" },
              { icon: Clock, title: "۲. پراسیسنگ کا آغاز", desc: "ہماری ٹیم قانونی سیٹ اپ اور پس منظر کی جانچ شروع کرتی ہے (1 سے 4 ہفتے)۔" },
              { icon: CreditCard, title: "۳. اکاؤنٹ کی تشکیل", desc: "ہم پلیٹ فارم کی قطاروں اور قانونی تقاضوں کو خود سنبھالتے ہیں۔" },
              { icon: Video, title: "۴. واٹس ایپ تصدیق", desc: "فعال اکاؤنٹ کو حتمی شکل دینے کے لیے ہم لائیو فیس اسکان کے لیے آپ کو کال کرتے ہیں۔" }
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
            جامع سیٹ اپ اور آپریشنل پروٹوکول
          </h2>
          
          <p>
            صافی ایجنسی کی پریمیم Deliveroo رائڈر اکاؤنٹ سیٹ اپ سروس میں خوش آمدید۔ ہم سمجھتے ہیں کہ برطانیہ اور یورپ میں سخت قانونی تقاضوں، پس منظر کی جانچ اور پلیٹ فارم رجسٹریشن کو نیویگیٹ کرنا مشکل ہو سکتا ہے۔ یہی وجہ ہے کہ ہم صفر سے سو تک کا ایک مکمل حل فراہم کرتے ہیں جو انتظامی بوجھ کو سنبھالنے کے لیے ڈیزائن کیا گیا ہے تاکہ آپ جلد از جلد کمائی پر توجہ مرکوز کر سکیں۔
          </p>
          <p>
            یہ سفر اسی لمحے شروع ہوتا ہے جب آپ اپنے سرکاری دستاویزات—جیسے شناختی کارڈ، پاسپورٹ، اور پتے کا معتبر ثبوت—ہمارے انتہائی محفوظ اور انکرپٹڈ پورٹل کے ذریعے اپ لوڈ کرتے ہیں۔ جیسے ہی آپ کی درخواست موصول ہوتی ہے، ہماری سرشار پراسیسنگ ٹیم فوری طور پر کام سنبھال لیتی ہے۔ ہم آپ کی تفصیلات کا باریک بینی سے جائزہ لیتے ہیں تاکہ یہ یقینی بنایا جا سکے کہ وہ Deliveroo اور مقامی حکام کے مطلوبہ معیارات پر پورا اترتی ہیں۔
          </p>
          <p>
            ہمارے <strong className="text-emerald-400">برطانیہ کے صارفین</strong> کے لیے، ہم حقِ کام (Share Code) کے انضمام کو سنبھالتے ہیں اور بنیادی مجرمانہ ریکارڈ کی جانچ (DBS) کو آسان بناتے ہیں۔ ہمارے <strong className="text-cyan-400">فرانس</strong> کے صارفین کے لیے، ہم علاقائی ریگولیٹری تقاضوں میں مدد کرتے ہیں تاکہ Kbis اور micro-entrepreneur کے معیارات پورے ہوں۔
          </p>
          <p>
            چونکہ ہم قوانین کی سخت پابندی کرتے ہیں، لہذا <strong className="text-white bg-emerald-500/20 px-2 py-0.5 rounded">مجموعی سیٹ اپ کا عمل عام طور پر 1 سے 4 ہفتوں کے درمیان لیتا ہے۔</strong> اس دوران، ہماری ٹیم آپ کے درخواست کے اسٹیٹس کو مسلسل مانیٹر کرتی ہے اور تمام انتظامی رکاوٹوں کو اندرونی طور پر حل کرتی ہے۔
          </p>
          <p>
            قیمتوں میں شفافیت صافی ایجنسی کی بنیادی قدر ہے۔ ہماری جامع سیٹ اپ فیس <strong className="text-white">برطانیہ کے اکاؤنٹس کے لیے £350</strong> اور <strong className="text-white">فرانسیسی اکاؤنٹس کے لیے €400</strong> ہے۔ یہاں کوئی پوشیدہ فیس نہیں ہے۔
          </p>
          <p>
            اس عمل کا آخری اور اہم ترین مرحلہ لائیو چہرہ کی تصدیق (Face Verification) ہے۔ ایک بار جب آپ کا اکاؤنٹ پلیٹ فارم کے ذریعے منظور ہو جاتا ہے، تو ہماری سپورٹ ٹیم آپ سے واٹس ایپ پر رابطہ کرے گی۔ ہم لائیو ویڈیو کے ذریعے آپ کی شناخت کی تصدیق کریں گے۔ اس آخری سکیورٹی مرحلے کے بعد، اکاؤنٹ مکمل طور پر آپ کے حوالے کر دیا جاتا ہے!
          </p>
        </section>

        {/* ================= 4. COUNTRY SELECTION FORM TRIGGER ================= */}
        <section ref={applySectionRef} className="pt-12 border-t border-zinc-800/50">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-cyan-400 text-xs font-semibold">
              <Globe className="w-4 h-4" />
              <span>اپنے ملک کا انتخاب کریں</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              اپنی درخواست شروع کریں
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              محفوظ دستاویزات اپ لوڈ کرنے والا فارم کھولنے کے لیے نیچے اپنے کام کا علاقہ منتخب کریں۔
            </p>
          </div>

          {/* 4 ممالک کے لیے گرڈ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* برطانیہ - فعال */}
            <div
              onClick={() => setSelectedCountry("UK")}
              className="bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800 border border-emerald-500/40 hover:border-emerald-400 p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                UK
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                🇬🇧 برطانیہ (UK)
              </h3>
              <p className="text-zinc-400 text-xs mb-6">صفر سے سو تک مکمل رائڈر سیٹ اپ اور تصدیق</p>
              <div className="mt-auto flex items-center space-x-2 space-x-reverse text-emerald-400 font-bold text-sm">
                <span>برطانیہ منتخب کریں</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
              </div>
            </div>

            {/* فرانس - فعال */}
            <div
              onClick={() => setSelectedCountry("FR")}
              className="bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800 border border-cyan-500/40 hover:border-cyan-400 p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group shadow-[0_10px_30px_rgba(6,182,212,0.1)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                FR
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                🇫🇷 فرانس (France)
              </h3>
              <p className="text-zinc-400 text-xs mb-6">مائکرو انٹراپرینیور اور رائڈر کا مکمل سیٹ اپ</p>
              <div className="mt-auto flex items-center space-x-2 space-x-reverse text-cyan-400 font-bold text-sm">
                <span>فرانس منتخب کریں</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
              </div>
            </div>

            {/* جرمنی - جلد آرہا ہے */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1 space-x-reverse">
                  <Lock className="w-3 h-3" /> <span>जلد آرہا ہے</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                DE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇩🇪 جرمنی</h3>
              <p className="text-zinc-500 text-xs">علاقائی اکاؤنٹ کی تصدیق جلد آ رہی ہے۔</p>
            </div>

            {/* بیلجیئم - جلد آرہا ہے */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1 space-x-reverse">
                  <Lock className="w-3 h-3" /> <span>जلد آرہا ہے</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                BE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇧🇪 بیلجیئم</h3>
              <p className="text-zinc-500 text-xs">علاقائی اکاؤنٹ کی تصدیق جلد آ رہی ہے۔</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
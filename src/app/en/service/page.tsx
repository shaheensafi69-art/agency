"use client";

import { useState, useRef } from "react";
import { 
  ArrowRight, Globe, Lock, ShieldCheck, Clock, 
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
      <div className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden">
        {/* افکت‌های نوری فرم */}
        <div className={`absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${selectedCountry === 'UK' ? 'bg-emerald-600/10' : 'bg-cyan-600/10'}`}></div>
        
        <div className="max-w-2xl mx-auto mb-8 relative z-10">
          <button
            onClick={() => setSelectedCountry(null)}
            className={`group flex items-center space-x-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-md ${selectedCountry === 'UK' ? 'hover:border-emerald-500/50' : 'hover:border-cyan-500/50'}`}
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Back to Country Selection</span>
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
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* ================= افکت‌های نوری سه‌بعدی ================= */}
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[800px] h-[400px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 space-y-24">
        
        {/* ================= 1. HERO SECTION & PRICING ================= */}
        <section className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4" />
            <span>Premium Zero-to-100 Service</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight drop-shadow-lg">
            Deliveroo Rider Account Setup
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed">
            Professional, secure, and hassle-free account registration. Upload your documents, and our expert team handles the legal complexities, background checks, and platform approval.
          </p>

          {/* Pricing Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <div className="flex items-center space-x-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 font-black text-xl">
                UK
              </div>
              <div className="text-left">
                <p className="text-zinc-400 text-xs font-semibold uppercase">United Kingdom 🇬🇧</p>
                <p className="text-white font-extrabold text-2xl">£350</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-black text-xl">
                FR
              </div>
              <div className="text-left">
                <p className="text-zinc-400 text-xs font-semibold uppercase">France 🇫🇷</p>
                <p className="text-white font-extrabold text-2xl">€400</p>
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToApply}
            className="mt-8 group relative inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-10 py-4 rounded-full font-extrabold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            <span>Apply Now</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </section>

        {/* ================= 2. THE PROCESS (4 STEPS) ================= */}
        <section className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">How Our System Works</h2>
            <p className="text-zinc-400">A streamlined process designed to get you on the road in 1 to 4 weeks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* خط اتصال بین مراحل در دسکتاپ */}
            <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-0.5 bg-zinc-800 z-0"></div>

            {[
              { icon: FileText, title: "1. Upload Documents", desc: "Submit your ID, Proof of Address, and details via our secure form." },
              { icon: Clock, title: "2. Processing Begins", desc: "Our team initiates the legal setup and background checks (1-4 weeks)." },
              { icon: CreditCard, title: "3. Account Creation", desc: "We navigate the platform queues and compliance requirements." },
              { icon: Video, title: "4. WhatsApp Verification", desc: "We call you for a live face scan to finalize your active account." }
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
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[60px]"></div>
          
          <h2 className="text-2xl font-extrabold text-white mb-6 border-b border-zinc-800 pb-4">
            Comprehensive Setup & Operational Protocol
          </h2>
          
          <p>
            Welcome to Safi Agency’s premium Deliveroo Rider Account Setup service. We understand that navigating the strict legal requirements, background checks, and platform registrations in the UK and Europe can be overwhelming. That is why we offer a complete, zero-to-100 solution designed to handle the complex administrative burdens so you can focus on earning as quickly as possible.
          </p>
          <p>
            The journey begins the moment you upload your official documents—such as your ID, Passport, and a valid Proof of Address—through our highly secure, encrypted portal. Once your application is received, our dedicated processing team immediately takes over. We meticulously review your details to ensure they perfectly match the exact standards required by Deliveroo and local government authorities.
          </p>
          <p>
            For our <strong className="text-emerald-400">UK clients</strong>, we handle the integration of your Right to Work (Share Code) and facilitate the mandatory basic criminal record check (DBS). For our clients in <strong className="text-cyan-400">France</strong>, we assist with the complexities of the regional regulatory requirements, ensuring that Kbis and micro-entrepreneur standards are fully met to keep your profile compliant.
          </p>
          <p>
            Because we adhere strictly to legal compliance and must navigate official platform onboarding queues, <strong className="text-white bg-emerald-500/20 px-2 py-0.5 rounded">the entire setup process typically takes between 1 to 4 weeks.</strong> Throughout this period, our team continuously monitors your application status, handling any administrative hurdles or document re-submissions internally without bothering you.
          </p>
          <p>
            Transparency in pricing is a core value at Safi Agency. Our comprehensive setup fee is <strong className="text-white">£350 for UK accounts</strong> and <strong className="text-white">€400 for French accounts</strong>. There are absolutely no hidden fees.
          </p>
          <p>
            The final and most crucial step of the process is the live face verification. Once your account is fully approved by the platform and ready for activation, our support team will contact you directly via your provided WhatsApp number. We will guide you through a live video coordination to verify your face matches the submitted official documents. After this final security step, your account is fully handed over to you, active, and ready for work!
          </p>
        </section>

        {/* ================= 4. COUNTRY SELECTION FORM TRIGGER ================= */}
        <section ref={applySectionRef} className="pt-12 border-t border-zinc-800/50">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-cyan-400 text-xs font-semibold">
              <Globe className="w-4 h-4" />
              <span>Select Your Country</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Start Your Application
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Choose your operating region below to open the secure document upload form.
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
                🇬🇧 United Kingdom
              </h3>
              <p className="text-zinc-400 text-xs mb-6">Complete zero-to-100 rider setup & verification</p>
              <div className="mt-auto flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                <span>Select UK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
                🇫🇷 France
              </h3>
              <p className="text-zinc-400 text-xs mb-6">Complete micro-entrepreneur & rider setup</p>
              <div className="mt-auto flex items-center space-x-2 text-cyan-400 font-bold text-sm">
                <span>Select FR</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* آلمان - کامینگ سون */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <Lock className="w-3 h-3" /> <span>Soon</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                DE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇩🇪 Germany</h3>
              <p className="text-zinc-500 text-xs">Regional account verification coming soon.</p>
            </div>

            {/* بلژیک - کامینگ سون */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <Lock className="w-3 h-3" /> <span>Soon</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                BE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇧🇪 Belgium</h3>
              <p className="text-zinc-500 text-xs">Regional account verification coming soon.</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShieldCheck, Lock, Building2, Globe, Users, 
  ExternalLink, CheckCircle2, FileKey, Network
} from "lucide-react";

// دیکشنری هوشمند ترجمه‌ها (شامل انگلیسی، فارسی، پشتو، آلمانی و اردو)
const translations: Record<string, any> = {
  en: {
    title: "About Safi Agency",
    subtitle: "The Official Verification & Digital Services Arm of Safi International Capital LTD.",
    legalTitle: "Legally Registered in the UK",
    legalDesc: "Safi Agency operates under Safi International Capital LTD, a registered private limited company in the United Kingdom (Company No: 17063286). We adhere to strict European and UK business standards.",
    privacyTitle: "Strict Privacy & Data Protection",
    privacyDesc: "Your identity documents, passports, and proof of address are encrypted and handled with 100% confidentiality. We never share your data with unauthorized third parties.",
    whatWeDoTitle: "What We Do",
    whatWeDoDesc: "We provide zero-to-100 account setup services for migrants and citizens in the UK and Europe. From Deliveroo rider accounts to international banking setups, we navigate the legal requirements so you don't have to.",
    ecoTitle: "Safi Digital Ecosystem",
    ecoDesc: "Explore our global network of financial, educational, and digital platforms.",
    teamTitle: "Our Leadership Team",
    dir: "ltr",
    companyNum: "UK Company Number: 17063286",
    networkBadge: "Global Network",
    teamSubtitle: "Led by industry experts in fintech, development, and international relations."
  },
  ur: {
    title: "صافی ایجنسی کے بارے میں",
    subtitle: "Safi International Capital LTD کا آفیشل تصدیق اور ڈیجیٹل سروسز کا شعبہ۔",
    legalTitle: "برطانیہ میں قانونی طور پر رجسٹرڈ",
    legalDesc: "صافی ایجنسی Safi International Capital LTD کے تحت کام کرتی ہے، جو کہ برطانیہ میں رجسٹرڈ ایک پرائیویٹ لمیٹڈ کمپنی ہے (کمپنی نمبر: 17063286)۔ ہم سخت یورپی اور برطانوی کاروباری معیار کی پابندی کرتے ہیں۔",
    privacyTitle: "سخت رازداری اور ڈیٹا کا تحفظ",
    privacyDesc: "آپ کے شناختی دستاویزات، پاسپورٹ، اور پتے کا ثبوت مکمل رازداری کے ساتھ انکرپٹ اور ہینڈل کیے جاتے ہیں۔ ہم کبھی بھی آپ کا ڈیٹا غیر مجاز تیسرے فریق کے ساتھ شیئر نہیں کرتے۔",
    whatWeDoTitle: "ہم کیا کرتے ہیں",
    whatWeDoDesc: "ہم برطانیہ اور یورپ میں تارکین وطن اور شہریوں کے لیے صفر سے سو تک اکاؤنٹ سیٹ اپ کی خدمات فراہم کرتے ہیں۔ ڈیلیورو رائڈر اکاؤنٹس سے لے کر بین الاقوامی بینکنگ سیٹ اپ تک، ہم تمام قانونی تقاضے پورے کرتے ہیں۔",
    ecoTitle: "صافی ڈیجیٹل ایکو سسٹم",
    ecoDesc: "مالیاتی، تعلیمی، اور ڈیجیٹل پلیٹ فارمز کے ہمارے عالمی نیٹ ورک کو دریافت کریں۔",
    teamTitle: "ہماری قیادت کی ٹیم",
    dir: "rtl",
    companyNum: "برطانیہ کمپنی نمبر: 17063286",
    networkBadge: "عالمی نیٹ ورک",
    teamSubtitle: "فن ٹیک، ڈویلپمنٹ اور بین الاقوامی تعلقات کے ماہرین کی زیر قیادت۔"
  }
};

// فہرست ایکو سسٹم
const getEcosystem = (lang: string) => [
  {
    name: "Safi International Capital",
    url: "https://safiinternationalcapitalltd.site/",
    logo: "https://img.logo.dev/safiinternationalcapitalltd.site?token=pk_KFxIPBNeQa6ZPc2CP18vhQ&format=webp&retina=true",
    desc: lang === 'ur' ? "پیرنٹ کمپنی اور بین الاقوامی سرمایہ کاری کا بازو (UK Reg: 17063286)." : "Parent company & international investment arm (UK Reg: 17063286)."
  },
  {
    name: "SafiPay",
    url: "https://safipay.net/",
    logo: "https://img.logo.dev/safipay.net?token=pk_KFxIPBNeQa6ZPc2CP18vhQ&format=webp&retina=true",
    desc: lang === 'ur' ? "ملٹی کرنسی بین الاقوامی بینکنگ اور ورچوئل کارڈ کا اجراء۔" : "Multi-currency international banking & virtual card issuance."
  },
  {
    name: "Safi TopUp",
    url: "https://safitopup.site",
    logo: "/company/safi-topup.jpg",
    desc: lang === 'ur' ? "عالمی موبائل ریچارجز، ڈیٹا بنڈلز، اور گفٹ کارڈز۔" : "Global mobile recharges, data bundles, and gift cards."
  },
  {
    name: "SafiPro",
    url: "https://safipro.site",
    logo: "/company/SafiPro.jpg",
    desc: lang === 'ur' ? "جدید اور حسب ضرورت ملبوسات کے لیے پریمیم ای کامرس برانڈ۔" : "Premium e-commerce brand for modern and custom apparel."
  },
  {
    name: "Safi Academy",
    url: "https://safiacademy.org/",
    logo: "/company/academy.jpg",
    desc: lang === 'ur' ? "عالمی آئی ٹی اور ڈیجیٹل فنانشل سرٹیفیکیشن پلیٹ فارم۔" : "Global IT & digital financial certification platform."
  },
  {
    name: "Safi AI",
    url: "https://www.safiai.site/",
    logo: "/company/ailogo.png",
    desc: lang === 'ur' ? "جدید ملٹی موڈل اے آئی ٹیکسٹ، امیج اور ویڈیو جنریشن۔" : "Advanced multi-modal AI text, image, and video generation."
  },
  {
    name: "Shaheen Safi Blog",
    url: "https://shaheensafi.blog",
    logo: "https://img.logo.dev/shaheensafi.blog?token=pk_KFxIPBNeQa6ZPc2CP18vhQ&format=webp&retina=true",
    desc: lang === 'ur' ? "ہمارے بانی اور سی ای او کی طرف سے بصیرت اور اپ ڈیٹس۔" : "Insights and updates from our Founder & CEO."
  }
];

// فہرست انتظامی ٹیم
const getTeam = (lang: string) => [
  { 
    name: lang === 'ur' ? "شاہین صافی" : "Shaheen Safi", 
    role: lang === 'ur' ? "بانی، سی ای او اور چیف آرکیٹیکٹ" : "Founder, CEO & Chief Architect", 
    image: "/team/shaheen.jpeg" 
  },
  { 
    name: lang === 'ur' ? "مجتبیٰ رحمانی" : "Mujtaba Rahmani", 
    role: lang === 'ur' ? "چیف آپریٹنگ آفیسر (COO)" : "Chief Operating Officer (COO)", 
    image: "/team/mujtaba.jpeg" 
  },
  { 
    name: lang === 'ur' ? "ساحل سالم" : "Sahel Salem", 
    role: lang === 'ur' ? "یورپی تعلقات کے ڈائریکٹر" : "European Relations Director", 
    image: "/team/sahel.jpeg" 
  },
  { 
    name: lang === 'ur' ? "شیرین گل احمدی" : "Shirin Gol Ahmadi", 
    role: lang === 'ur' ? "کمپنی مینیجر اور اے آئی لیڈ" : "Company Manager & AI Lead", 
    image: "/team/shirin.jpeg" 
  }
];

export default function AboutPage() {
  const pathname = usePathname();
  const currentLangCode = pathname.split('/')[1] === 'ur' ? 'ur' : 'en';
  const t = translations[currentLangCode] || translations['en'];
  
  const ecosystem = getEcosystem(currentLangCode);
  const team = getTeam(currentLangCode);

  return (
    <div dir={t.dir} className="min-h-screen bg-black text-white relative overflow-hidden pt-36 pb-20">
      
      {/* --- پس منظر کی روشنی کے اثرات --- */}
      <div className="absolute top-0 left-[20%] rtl:left-auto rtl:right-[20%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] rtl:right-auto rtl:left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">
        
        {/* ================= 1. HERO SECTION ================= */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <Building2 className="w-4 h-4" />
            <span>{t.companyNum}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium mt-4">
            {t.subtitle}
          </p>
        </section>

        {/* ================= 2. LEGAL, PRIVACY & WHAT WE DO ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 shadow-lg group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.legalTitle}</h3>
            <p className="text-zinc-400 leading-relaxed">{t.legalDesc}</p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 shadow-lg group">
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileKey className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.privacyTitle}</h3>
            <p className="text-zinc-400 leading-relaxed">{t.privacyDesc}</p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 shadow-lg group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.whatWeDoTitle}</h3>
            <p className="text-zinc-400 leading-relaxed">{t.whatWeDoDesc}</p>
          </div>

        </section>

        {/* ================= 3. OUR TEAM ================= */}
        <section className="bg-zinc-950/50 border border-zinc-800/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]"></div>
          
          <div className="text-center mb-12 space-y-3 relative z-10">
            <h2 className="text-3xl font-bold text-white">{t.teamTitle}</h2>
            <p className="text-zinc-400">{t.teamSubtitle}</p>
          </div>

          {/* ٹیم کا لے آؤٹ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {team.map((member, idx) => (
              <div key={idx} className="space-y-4 group cursor-default">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto relative rounded-full border-2 border-zinc-700 group-hover:border-emerald-500 p-1 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] group-hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors">{member.name}</h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. THE SAFI ECOSYSTEM ================= */}
        <section className="space-y-12">
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-cyan-500/10 border border-cyan-500/30 px-5 py-2 rounded-full text-cyan-400 text-sm font-semibold">
              <Network className="w-4 h-4" />
              <span>{t.networkBadge}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              {t.ecoTitle}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              {t.ecoDesc}
            </p>
          </div>

          {/* اکوسیستم گرڈ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystem.map((site, index) => (
              <a 
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-6 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(16,185,129,0.15)] flex flex-col items-center text-center h-full"
              >
                <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-emerald-400" />
                </div>

                <div className="w-24 h-24 mb-6 relative flex items-center justify-center bg-black/50 border border-zinc-700/50 rounded-2xl group-hover:scale-105 transition-transform p-3 shadow-inner">
                  <img 
                    src={site.logo} 
                    alt={site.name} 
                    className="w-full h-full object-contain drop-shadow-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/br-logo.png";
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {site.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {site.desc}
                </p>
                
                <div className="absolute bottom-0 left-[10%] rtl:left-auto rtl:right-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            ))}
          </div>

        </section>

      </div>
    </div>
  );
}
import Link from "next/link";
import { 
  ArrowLeft, ShieldCheck, Clock, MessageSquare, 
  FileText, Briefcase, Car, Building2, CheckCircle2, Scale 
} from "lucide-react";

export default function UrduHomePage() {
  return (
    // اردو زبان کے لیے راست‌چین (rtl) کلاس کا نفاذ
    <div dir="rtl" className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* --- تھری ڈی نائین لائیٹس اور پس منظر کی انیمیشن --- */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ================= HERO SECTION (ہیرو سیکشن) ================= */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24">
        <div className="text-center max-w-4xl mx-auto space-y-8 relative">
          
          {/* تیرتا ہوا بیج (Badge) */}
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-semibold shadow-[0_0_30px_rgba(16,185,129,0.2)] transform hover:scale-105 transition-transform duration-300">
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            <span>برطانیہ اور یورپ میں رجسٹریشن اور دستاویزات کی تصدیق کا آفیشل پارٹنر</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            اپنے ڈیجیټل سفر کو <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 drop-shadow-lg">
              آسان اور محفوظ بنائیں
            </span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
            صافی ایجنسی 100% محفوظ اور پیشہ ورانہ اکاؤنٹ سیٹ اپ کی خدمات فراہم کرتی ہے۔ ڈیلیورو رائڈر اکاؤنٹ کے افتتاح سے لے کر قانونی دستاویزات کی مکمل تصدیق تک؛ ہم تمام مشکل کام خود کرتے ہیں تاکہ آپ بغیر کسی پریشانی کے کمائی شروع کر سکیں۔
          </p>

          {/* ایکشن کے بٹن (Call to Action) نیون ایفیکٹ کے ساتھ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link 
              href="/ur/service" 
              className="group relative w-full sm:w-auto flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-4 rounded-2xl font-extrabold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <span>ڈیلیورو اکاؤنٹ کے لیے درخواست دیں</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/ur/contact" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 space-x-reverse bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 hover:border-emerald-500/50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>واٹس ایپ سپورٹ</span>
            </Link>
          </div>
        </div>
      </main>

      {/* ================= DELIVEROO REQUIREMENTS SECTION (ڈیلیورو کے قوانین) ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800/50">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            ڈیلیورو کے سرکاری قوانین اور تقاضے
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-medium">
            رجستریشن سے پہلے وہ تمام باتیں جو آپ کو جاننا ضروری ہیں۔ ہم برطانیہ اور فرانس دونوں خطوں میں آپ کے اکاؤنٹ کے مکمل سیٹ اپ اور قانونی مطابقت کی حمایت کرتے ہیں۔
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* برطانیہ کے قوانین کا کارڈ (UK) */}
          <div className="relative group perspective">
            <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800 group-hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]">
              
              <div className="flex items-center space-x-4 space-x-reverse mb-8 border-b border-zinc-800 pb-6">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-emerald-400">UK</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">برطانیہ (United Kingdom)</h3>
                  <p className="text-emerald-400 text-sm font-medium">آزادانہ کام کے قوانین (Self-Employed Rider)</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <FileText className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">برطانیہ میں کام کرنے کا حق (Right to Work)</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">برطانیہ/آئرلینڈ کا معتبر پاسپورٹ، بائیومیٹرک ریزیডেন্স پرمٹ (BRP)، یا سرکاری Share Code جو آپ کے کام کرنے کے حق کو ثابت کرے۔</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">عمر اور کرمنل ریکارڈ چیک</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">امیدوار کی عمر 18 سال سے زیادہ ہونی چاہیے۔ بنیادی مجرمانہ ریکارڈ کی جانچ (DBS) قانونی طور پر لازمی ہے جو سیٹ اپ کے دوران ہمارے ذریعے کی جاتی ہے۔</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <Car className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">گاڑی اور انشورنس</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">بائیسکل، اسکوٹر یا کار کا استعمال۔ موٹر والی گاڑیوں کے لیے فوڈ ڈیلیوری کی مخصوص انشورنس (Hire and Reward) درکار ہوتی ہے۔</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <Building2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">برطانیہ کا بینک اکاؤنٹ</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">ہفتہ وار آمدنی حاصل کرنے کے لیے برطانیہ میں آپ کے اپنے نام پر ایک فعال بینک اکاؤنٹ۔</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* فرانس کے قوانین کا کارڈ (France) */}
          <div className="relative group perspective">
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800 group-hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]">
              
              <div className="flex items-center space-x-4 space-x-reverse mb-8 border-b border-zinc-800 pb-6">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-cyan-400">FR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">فرانس (France)</h3>
                  <p className="text-cyan-400 text-sm font-medium">چھوٹے کاروباروں کے ضوابط (Micro-entrepreneur)</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <Briefcase className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">کاروباری حیثیت (Micro-entrepreneur)</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">بطور Auto-entrepreneur رجسٹریشن لازمی ہے۔ آپ کو درست SIRET نمبر اور Extrait Kbis سرٹیفکیٹ فراہم کرنا ہوگا۔</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">فرانسیسی رہائش اور شناخت</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">یورپی یونین کا شناختی کارڈ، پاسپورٹ، یا معتبر رہائشی اجازت نامہ (Titre de Séjour) جو فرانس میں فری لانس کام کی اجازت دے۔</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <Scale className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">گاڑیوں سے متعلق ضوابط</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">بائیسکل معیاری ہیں۔ اسکوٹر یا کار کے استعمال کے لیے "Capacité de transport de marchandises" سرٹیفکیٹ درکار ہوتا ہے۔</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <Building2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">SEPA بینک اکاؤنٹ</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">یورپی لین دین اور ادائگیوں کی پراسیسنگ کے لیے SEPA زون میں آپ کے نام پر ایک معتبر بینک اکاؤنٹ۔</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION (خصوصیات کا سیکشن) ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">100% محفوظ عمل</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              آپ کی تمام دستاویزات سخت ترین انکرپشن پروٹوکولز کے ساتھ محفوظ کی جاتی ہیں۔ ہم رجسٹریشن کے عمل کی مکمل سکیورٹی کی ضمانت دیتے ہیں۔
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] group">
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
              <Clock className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">تیز رفتار اور مؤثر</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              بغیر کسی الجھن اور وقت کے ضیاع کے۔ ہمارے جدید فارمز اور ماہر ٹیم اس بات کو یقینی بناتی ہے کہ آپ کا اکاؤنٹ کم سے کم وقت میں تصدیق شدہ ہو جائے۔
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <MessageSquare className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">لائیو واٹس ایپ سپورٹ</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              ہم ہر قدم پر آپ کی رہنمائی کرتے ہیں۔ دستاویزات جمع کرانے سے لے کر لائیو چہرہ کی تصدیق تک، ہماری ٹیم آپ سے صرف ایک پیغام کے فاصلے پر ہے۔
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
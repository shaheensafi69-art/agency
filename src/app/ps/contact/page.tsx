"use client";

import { 
  MessageSquare, Phone, Megaphone, ArrowLeft, 
  ShieldCheck, Clock, ChevronLeft
} from "lucide-react";

export default function PashtoContactPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-black text-white relative overflow-hidden pt-32 pb-20">
      
      {/* --- افکت‌های نوری سه‌بعدی --- */}
      <div className="absolute top-0 right-[50%] translate-x-[50%] w-[800px] h-[400px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* ================= 1. HERO SECTION ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4" />
            <span>۲۴ ساعته ځانګړی او چټک ملاتړ</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg">
            موږ څنګه مرسته کولی شو؟
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed font-medium mt-4">
            پوښتنه لرئ، له کومې ستونزې سره مخ یاست، که لارښوونه غواړئ؟ زموږ مسلکي ټیم دلته دی تر څو تاسو ته ځواب درکړي.
          </p>
        </section>

        {/* ================= 2. SUPPORT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* کارت شماره ۱ بریتانیا */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group shadow-[0_10px_30px_rgba(16,185,129,0.05)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]">
            <div>
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">د انګلستان او اروپا ملاتړ</h3>
              <p className="text-zinc-400 text-sm mb-6">د اکاونټ وضعیت، د مخ تصدیق یا عمومي پوښتنو لپاره مستقیم موږ ته پیغام راکړئ.</p>
              
              <div className="flex items-center space-x-3 space-x-reverse bg-zinc-950 p-4 rounded-xl border border-zinc-800 mb-8 w-fit">
                <Phone className="w-5 h-5 text-emerald-500" />
                {/* استفاده از dir="ltr" برای حفظ فرمت شماره تلفن */}
                <span className="text-lg font-bold tracking-widest" dir="ltr">+44 7476 620282</span>
              </div>
            </div>

            <a 
              href="https://wa.me/447476620282" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full group/btn flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-6 py-4 rounded-2xl font-extrabold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span>په واټساپ کې پیغام واستوئ</span>
              <ChevronLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* کارت شماره ۲ بین‌المللی */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group shadow-[0_10px_30px_rgba(6,182,212,0.05)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]">
            <div>
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">نړیوال ملاتړ</h3>
              <p className="text-zinc-400 text-sm mb-6">د اکاونټ وضعیت، د مخ تصدیق یا عمومي پوښتنو لپاره مستقیم موږ ته پیغام راکړئ.</p>
              
              <div className="flex items-center space-x-3 space-x-reverse bg-zinc-950 p-4 rounded-xl border border-zinc-800 mb-8 w-fit">
                <Phone className="w-5 h-5 text-cyan-500" />
                <span className="text-lg font-bold tracking-widest" dir="ltr">+1 934 203 2497</span>
              </div>
            </div>

            <a 
              href="https://wa.me/19342032497" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full group/btn flex items-center justify-center space-x-2 space-x-reverse bg-zinc-800 border border-zinc-700 hover:border-cyan-500 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-500/10"
            >
              <span>په واټساپ کې پیغام واستوئ</span>
              <ChevronLeft className="w-5 h-5 text-cyan-400 group-hover/btn:-translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* ================= 3. WHATSAPP CHANNEL BANNER ================= */}
        <div className="relative p-[2px] rounded-3xl md:rounded-[2.5rem] bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-shadow duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 blur-xl opacity-30 pointer-events-none"></div>
          
          <div className="relative bg-zinc-950 rounded-[calc(1.5rem-2px)] md:rounded-[calc(2.5rem-2px)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10 w-full">
            
            {/* بخش متن چنل */}
            <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-right w-full">
              <div className="inline-flex items-center space-x-2 space-x-reverse bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full mb-4">
                <Megaphone className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">خبرونه او تازه معلومات</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
                په رسمي چینل کې غړیتوب
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                تازه اوسئ! د وروستیو خبرونو، د پلیټ فارم د قوانینو د بدلون او د نرخونو د تازه معلوماتو لپاره زموږ په چینل کې گډون وکړئ.
              </p>
            </div>

            {/* دکمه چنل */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
              <a 
                href="https://whatsapp.com/channel/0029VbD9jhE8vd1LOVpEaa2o" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full md:w-auto flex items-center justify-center space-x-2 space-x-reverse bg-white text-black px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-400"
              >
                <span>همدا اوس گډون وکړئ</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

        {/* ================= 4. FOOTER NOTE ================= */}
        <div className="flex items-center justify-center space-x-2 space-x-reverse text-zinc-500 text-sm font-medium">
          <Clock className="w-4 h-4" />
          <span>د ځواب ویلو اوسط وخت: له ۲ ساعتونو لږ</span>
        </div>

      </div>
    </div>
  );
}
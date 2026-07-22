import Link from "next/link";
import { 
  ArrowLeft, ShieldCheck, Clock, MessageSquare, 
  FileText, Briefcase, Car, Building2, CheckCircle2, Scale 
} from "lucide-react";

export default function PashtoHomePage() {
  return (
    // اعمال کلاس rtl برای راست‌چین شدن دقیق تمام المان‌ها
    <div dir="rtl" className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* --- افکت‌های نوری سه‌بعدی و انیمیشن‌دار پس‌زمینه --- */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ================= HERO SECTION (بخش اصلی) ================= */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24">
        <div className="text-center max-w-4xl mx-auto space-y-8 relative">
          
          {/* بج (Badge) شناور */}
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-semibold shadow-[0_0_30px_rgba(16,185,129,0.2)] transform hover:scale-105 transition-transform duration-300">
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            <span>په انګلستان او اروپا کې د اسنادو د ثبت او تصدیق رسمي همکار</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            خپل ډیجیټل سفر <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 drop-shadow-lg">
              آسان او خوندي کړئ
            </span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
            صافي ایجنسي د اکاونټ جوړولو سل په سلو کې خوندي او مسلکي خدمتونه وړاندې کوي. د ډیلیورو رایډر اکاونټ له پرانیستلو نیولې تر بشپړ حقوقي اسنادو تصدیق پورې؛ موږ ټول سخت کارونه کوو تر څو تاسو په ډاډه زړه د عاید په ترلاسه کولو پیل وکړئ.
          </p>

          {/* دکمه‌های اقدام (Call to Action) با افکت نئونی */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link 
              href="/ps/service" 
              className="group relative w-full sm:w-auto flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-4 rounded-2xl font-extrabold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <span>د ډیلیورو اکاونټ ثبت‌نام</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/ps/contact" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 space-x-reverse bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 hover:border-emerald-500/50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>د واټساپ ملاتړ</span>
            </Link>
          </div>
        </div>
      </main>

      {/* ================= DELIVEROO REQUIREMENTS SECTION (بخش قوانین دیلیورو) ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800/50">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            د ډیلیورو رسمي قوانین او شرایط
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-medium">
            هر هغه څه چې د نوم لیکنې دمخه باید پوه شئ. موږ په انګلستان او فرانسه کې ستاسو د اکاونټ بشپړ چمتووالي او حقوقي مطابقت ملاتړ کوو.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* کارت قوانین بریتانیا (UK) */}
          <div className="relative group perspective">
            <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800 group-hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]">
              
              <div className="flex items-center space-x-4 space-x-reverse mb-8 border-b border-zinc-800 pb-6">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-emerald-400">UK</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">انګلستان (United Kingdom)</h3>
                  <p className="text-emerald-400 text-sm font-medium">د آزاد کار قوانین (Self-Employed Rider)</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <FileText className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">په انګلستان کې د کار حق (Right to Work)</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">د انګلستان/آیرلینډ معتبر پاسپورت، بایومټریک د اوسیدو کارت (BRP)، یا رسمي Share Code چې ستاسو د کار حق ثبوت کړي.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">د عمر او مخینې معاینه</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">غوښتونکی باید له ۱۸ کلونو پورته وي. د جرمي مخینې بنسټیزه معاینه (DBS) قانوناً لازمه ده او د پروسې په ترڅ کې زموږ لخوا ترسره کیږي.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <Car className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">لاری او بیمه</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">بایسکل، سکوټر، یا موټر کارول کیدای شي. موټریزه وسایل د خوړو د تحویلۍ ځانګړې بیمې (Hire and Reward) ته اړتیا لري.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <Building2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">د انګلستان بانکي اکاونټ</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">د اونیزو عایداتو ترلاسه کولو لپاره په انګلستان کې ستاسو په نوم د یو فعال بانکي اکاونټ درلودل.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* کارت قوانین فرانسه (France) */}
          <div className="relative group perspective">
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800 group-hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]">
              
              <div className="flex items-center space-x-4 space-x-reverse mb-8 border-b border-zinc-800 pb-6">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-cyan-400">FR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">فرانسه (France)</h3>
                  <p className="text-cyan-400 text-sm font-medium">د واکمنو کوچنیو سوداګریو مقررات (Micro-entrepreneur)</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <Briefcase className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">د کار حالت (Micro-entrepreneur)</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">د Auto-entrepreneur په توګه نوم لیکنه لازمه ده. تاسو باید معتبر SIRET نمبر او Extrait Kbis سند وړاندې کړئ.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">د فرانسې اوسیدنه او هویت</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">د اروپايي اتحادیې د هویت کارت، پاسپورت، یا د اوسیدو معتبر جواز (Titre de Séjour) چې په فرانسه کې د آزاد کار اجازه درکړي.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <Scale className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">د نقلیه وسیلو مقررات</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">بایسکل معیاری دی. د سکوټر یا موټر کارول د "Capacité de transport de marchandises" سند ته اړتیا لري.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <Building2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">د SEPA بانکي اکاونټ</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">په SEPA زون کې ستاسو په نوم د معتبر بانکي اکاونټ درلودل ترڅو د اروپا مالي معاملو او عایدات پروسس شي.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION (بخش ویژگی‌ها) ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">سل په سلو کې خوندي پروسه</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              ستاسو ټول اسناد د کلکو کوډ کولو معیارونو سره ساتل کیږي. موږ د نوم لیکنې د بشپړ خوندیتوب تضمین کوو.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] group">
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
              <Clock className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">ګړندۍ او اغېزناکه</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              بې له کوم ځنډ او ګډوډۍ. زموږ اصلاح شوي فورمونه او مسلکي ټیم ډاډ ورکوي چې ستاسو اکاونټ په تر ټولو لنډ وخت کې تایید شي.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <MessageSquare className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">د واتساپ ژوندی ملاتړ</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              موږ له تاسو سره ګام په ګام یو. د اسنادو له لیږلو نیولې تر د مخامخ (لایو) تصدیق پورې، زموږ ټیم له تاسو څخه یوازې یو پیغام لیرې دی.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
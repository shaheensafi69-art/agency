"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  MessageSquare, Phone, Megaphone, ArrowRight, ArrowLeft,
  ShieldCheck, Clock, ChevronLeft, ChevronRight
} from "lucide-react";

// دیکشنری هوشمند ترجمه‌ها برای صفحه تماس
const translations: Record<string, any> = {
  en: {
    badge: "24/7 Priority Support",
    title: "How can we help you?",
    subtitle: "Have a question, facing an issue, or need guidance? Our expert team is here to assist you. Send us a message anytime.",
    supportTitle: "Direct WhatsApp Support",
    supportDesc: "Chat directly with our support team for application status, verification, or general inquiries.",
    ukSupport: "UK & Europe Support",
    intlSupport: "International Support",
    chatBtn: "Chat on WhatsApp",
    channelTitle: "Join Our Official Channel",
    channelDesc: "Stay updated! Join our WhatsApp channel for the latest news, platform rule changes, and pricing updates.",
    joinBtn: "Join Channel Now",
    fastReply: "Average reply time: Under 2 hours",
    dir: "ltr"
  },
  fa: {
    badge: "پشتیبانی ویژه و ۲۴ ساعته",
    title: "چگونه می‌توانیم کمک کنیم؟",
    subtitle: "آیا سوالی دارید، با مشکلی مواجه شده‌اید یا نیاز به راهنمایی دارید؟ تیم متخصص ما اینجاست تا به شما پاسخ دهد.",
    supportTitle: "پشتیبانی مستقیم واتساپ",
    supportDesc: "برای پیگیری وضعیت اکانت، تأییدیه چهره یا سوالات عمومی مستقیماً به ما پیام دهید.",
    ukSupport: "پشتیبانی بریتانیا و اروپا",
    intlSupport: "پشتیبانی بین‌المللی",
    chatBtn: "پیام در واتساپ",
    channelTitle: "عضویت در کانال رسمی",
    channelDesc: "بروز باشید! برای دریافت جدیدترین اخبار، تغییرات قوانین پلتفرم‌ها و آپدیت قیمت‌ها در کانال ما عضو شوید.",
    joinBtn: "همین الان عضو شوید",
    fastReply: "میانگین زمان پاسخگویی: کمتر از ۲ ساعت",
    dir: "rtl"
  },
  ps: {
    badge: "۲۴ ساعته ځانګړی ملاتړ",
    title: "موږ څنګه مرسته کولی شو؟",
    subtitle: "پوښتنه لرئ، له ستونزې سره مخ یاست، یا لارښوونې ته اړتیا لرئ؟ زموږ مسلکي ټیم ستاسو په خدمت کې دی.",
    supportTitle: "د واټساپ مستقیم ملاتړ",
    supportDesc: "د خپل غوښتنلیک د وضعیت، تایید یا عمومي پوښتنو لپاره موږ ته مستقیم پیغام واستوئ.",
    ukSupport: "د انګلستان او اروپا ملاتړ",
    intlSupport: "نړیوال ملاتړ",
    chatBtn: "په واټساپ کې پیغام",
    channelTitle: "زموږ په رسمي چینل کې ګډون وکړئ",
    channelDesc: "خبر اوسئ! د وروستي خبرونو، نوي قوانینو او د نرخونو بدلونونو لپاره زموږ د واټساپ چینل سره یوځای شئ.",
    joinBtn: "همدا اوس ګډون وکړئ",
    fastReply: "د ځواب ویلو اوسط وخت: تر ۲ ساعتونو لږ",
    dir: "rtl"
  },
  ur: {
    badge: "24/7 ترجیحی سپورٹ",
    title: "ہم آپ کی کیا مدد کر سکتے ہیں؟",
    subtitle: "کوئی سوال ہے، مسئلہ درپیش ہے، یا رہنمائی کی ضرورت ہے؟ ہماری ماہر ٹیم آپ کی مدد کے لیے موجود ہے۔",
    supportTitle: "براہ راست واٹس ایپ سپورٹ",
    supportDesc: "درخواست کی صورتحال، تصدیق، یا عمومی معلومات کے لیے ہماری سپورٹ ٹیم سے براہ راست بات کریں۔",
    ukSupport: "برطانیہ اور یورپ سپورٹ",
    intlSupport: "بین الاقوامی سپورٹ",
    chatBtn: "واٹس ایپ پر بات کریں",
    channelTitle: "ہمارے آفیشل چینل میں شامل ہوں",
    channelDesc: "باخبر رہیں! تازہ ترین خبروں، قوانین میں تبدیلیوں، اور قیمتوں کی اپ ڈیٹس کے لیے ہمارے واٹس ایپ چینل میں شامل ہوں۔",
    joinBtn: "ابھی چینل میں شامل ہوں",
    fastReply: "جواب دینے کا اوسط وقت: 2 گھنٹے سے کم",
    dir: "rtl"
  },
  fr: {
    badge: "Support Prioritaire 24/7",
    title: "Comment pouvons-nous vous aider?",
    subtitle: "Vous avez une question, rencontrez un problème ou avez besoin de conseils? Notre équipe d'experts est là pour vous aider.",
    supportTitle: "Support WhatsApp Direct",
    supportDesc: "Discutez directement avec notre équipe pour l'état de votre demande, la vérification ou les questions générales.",
    ukSupport: "Support UK et Europe",
    intlSupport: "Support International",
    chatBtn: "Discuter sur WhatsApp",
    channelTitle: "Rejoignez notre chaîne officielle",
    channelDesc: "Restez informé! Rejoignez notre chaîne WhatsApp pour les dernières nouvelles, règles et mises à jour des prix.",
    joinBtn: "Rejoindre la chaîne",
    fastReply: "Temps de réponse moyen : Moins de 2 heures",
    dir: "ltr"
  },
  de: {
    badge: "24/7 Prioritäts-Support",
    title: "Wie können wir Ihnen helfen?",
    subtitle: "Haben Sie eine Frage, ein Problem oder benötigen Sie Anleitung? Unser Expertenteam ist für Sie da.",
    supportTitle: "Direkter WhatsApp-Support",
    supportDesc: "Chatten Sie direkt mit uns für den Antragsstatus, die Verifizierung oder allgemeine Anfragen.",
    ukSupport: "Support für UK & Europa",
    intlSupport: "Internationaler Support",
    chatBtn: "Auf WhatsApp chatten",
    channelTitle: "Treten Sie unserem Kanal bei",
    channelDesc: "Bleiben Sie auf dem Laufenden! Treten Sie unserem Kanal bei für Neuigkeiten, Regeln und Preisupdates.",
    joinBtn: "Jetzt dem Kanal beitreten",
    fastReply: "Durchschnittliche Antwortzeit: Unter 2 Stunden",
    dir: "ltr"
  },
  tr: {
    badge: "7/24 Öncelikli Destek",
    title: "Size nasıl yardımcı olabiliriz?",
    subtitle: "Bir sorunuz mu var, bir sorunla mı karşılaştınız veya rehberliğe mi ihtiyacınız var? Uzman ekibimiz burada.",
    supportTitle: "Doğrudan WhatsApp Desteği",
    supportDesc: "Başvuru durumu, doğrulama veya genel sorularınız için destek ekibimizle doğrudan sohbet edin.",
    ukSupport: "İngiltere ve Avrupa Desteği",
    intlSupport: "Uluslararası Destek",
    chatBtn: "WhatsApp'ta Sohbet Et",
    channelTitle: "Resmi Kanalımıza Katılın",
    channelDesc: "Haberdar olun! En son haberler, kural değişiklikleri ve fiyat güncellemeleri için kanalımıza katılın.",
    joinBtn: "Kanala Şimdi Katıl",
    fastReply: "Ortalama yanıt süresi: 2 saatin altında",
    dir: "ltr"
  },
  ru: {
    badge: "Приоритетная поддержка 24/7",
    title: "Чем мы можем помочь?",
    subtitle: "Есть вопрос, проблема или нужно руководство? Наша команда экспертов здесь, чтобы помочь.",
    supportTitle: "Прямая поддержка в WhatsApp",
    supportDesc: "Общайтесь с нашей командой напрямую для уточнения статуса, верификации или общих вопросов.",
    ukSupport: "Поддержка в Великобритании и Европе",
    intlSupport: "Международная поддержка",
    chatBtn: "Написать в WhatsApp",
    channelTitle: "Присоединяйтесь к нашему каналу",
    channelDesc: "Будьте в курсе! Присоединяйтесь к каналу для получения новостей, правил и обновлений цен.",
    joinBtn: "Присоединиться сейчас",
    fastReply: "Среднее время ответа: Менее 2 часов",
    dir: "ltr"
  }
};

export default function ContactPage() {
  const pathname = usePathname();
  const currentLangCode = pathname.split('/')[1] || 'en';
  const t = translations[currentLangCode] || translations['en'];

  const ChevronIcon = t.dir === 'rtl' ? ChevronLeft : ChevronRight;
  const ArrowIcon = t.dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div dir={t.dir} className="min-h-screen bg-black text-white relative overflow-hidden pt-32 pb-20">
      
      {/* --- افکت‌های نوری سه‌بعدی --- */}
      <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[800px] h-[400px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* ================= 1. HERO SECTION ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg">
            {t.title}
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed font-medium mt-4">
            {t.subtitle}
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
              <h3 className="text-2xl font-bold text-white mb-2">{t.ukSupport}</h3>
              <p className="text-zinc-400 text-sm mb-6">{t.supportDesc}</p>
              
              <div className="flex items-center space-x-3 rtl:space-x-reverse bg-zinc-950 p-4 rounded-xl border border-zinc-800 mb-8 w-fit">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span className="text-lg font-bold tracking-widest">+44 7476 620282</span>
              </div>
            </div>

            <a 
              href="https://wa.me/447476620282" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full group/btn flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-6 py-4 rounded-2xl font-extrabold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span>{t.chatBtn}</span>
              <ChevronIcon className="w-5 h-5 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* کارت شماره ۲ بین‌المللی */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group shadow-[0_10px_30px_rgba(6,182,212,0.05)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]">
            <div>
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.intlSupport}</h3>
              <p className="text-zinc-400 text-sm mb-6">{t.supportDesc}</p>
              
              <div className="flex items-center space-x-3 rtl:space-x-reverse bg-zinc-950 p-4 rounded-xl border border-zinc-800 mb-8 w-fit">
                <Phone className="w-5 h-5 text-cyan-500" />
                <span className="text-lg font-bold tracking-widest">+1 934 203 2497</span>
              </div>
            </div>

            <a 
              href="https://wa.me/19342032497" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full group/btn flex items-center justify-center space-x-2 rtl:space-x-reverse bg-zinc-800 border border-zinc-700 hover:border-cyan-500 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-500/10"
            >
              <span>{t.chatBtn}</span>
              <ChevronIcon className="w-5 h-5 text-cyan-400 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* ================= 3. WHATSAPP CHANNEL BANNER ================= */}
        <div className="relative p-[2px] rounded-3xl md:rounded-[2.5rem] bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-shadow duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 blur-xl opacity-30 pointer-events-none"></div>
          
          <div className="relative bg-zinc-950 rounded-[calc(1.5rem-2px)] md:rounded-[calc(2.5rem-2px)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10 w-full">
            
            {/* بخش متن چنل (اصلاح شده برای LTR و RTL) */}
            <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left rtl:md:items-end rtl:md:text-right w-full">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full mb-4">
                <Megaphone className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">News & Updates</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
                {t.channelTitle}
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                {t.channelDesc}
              </p>
            </div>

            {/* دکمه چنل */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
              <a 
                href="https://whatsapp.com/channel/0029VbD9jhE8vd1LOVpEaa2o" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full md:w-auto flex items-center justify-center space-x-2 rtl:space-x-reverse bg-white text-black px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-400"
              >
                <span>{t.joinBtn}</span>
                <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

        {/* ================= 4. FOOTER NOTE ================= */}
        <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-zinc-500 text-sm font-medium">
          <Clock className="w-4 h-4" />
          <span>{t.fastReply}</span>
        </div>

      </div>
    </div>
  );
}
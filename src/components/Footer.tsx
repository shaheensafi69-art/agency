"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Mail, MapPin, Phone, ShieldCheck, ChevronRight, 
  ChevronLeft, Building2, ExternalLink 
} from "lucide-react";

// دیکشنری هوشمند برای ترجمه خودکار بخش‌های فوتر
const translations: Record<string, any> = {
  en: { 
    desc: "Your trusted partner for setting up professional digital accounts and navigating document verifications seamlessly in the UK and Europe.", 
    official: "Official & Secure Agency", 
    qLinks: "Quick Links", 
    ecoTitle: "Our Ecosystem",
    contact: "Contact Us", 
    address: "Covent Garden, Shelton Street, London, UK", 
    wa: "WhatsApp Support Available", 
    copy: "Safi Agency. Part of Safi International Capital Ecosystem.", 
    policy: "Privacy Policy", 
    terms: "Terms of Service",
    home: "Home", services: "Deliveroo Rider Setup", about: "About Safi Agency", contactPage: "Contact Support",
    legalName: "Safi International Capital LTD",
    legalReg: "Registered in the UK (Company No: 17063286)",
    dir: "ltr" 
  },
  fa: { 
    desc: "شریک معتمد شما برای راه‌اندازی حساب‌های دیجیتال و تأیید مدارک با بالاترین امنیت در بریتانیا و اروپا.", 
    official: "آژانس رسمی و امن", 
    qLinks: "لینک‌های سریع", 
    ecoTitle: "اکوسیستم ما",
    contact: "ارتباط با ما", 
    address: "کاونت گاردن، خیابان شلتون، لندن، بریتانیا", 
    wa: "پشتیبانی واتساپ فعال است", 
    copy: "صافی اگنسی. بخشی از اکوسیستم Safi International Capital.", 
    policy: "حریم خصوصی", 
    terms: "شرایط خدمات",
    home: "خانه", services: "ثبت‌نام اکونت دیلیورو", about: "درباره صافی اگنسی", contactPage: "پشتیبانی و تماس",
    legalName: "Safi International Capital LTD",
    legalReg: "ثبت شده در بریتانیا (شماره ثبتی: 17063286)",
    dir: "rtl" 
  },
  ps: { 
    desc: "په انګلستان او اروپا کې د ډیجیټل حسابونو جوړولو او اسنادو تصدیق لپاره ستاسو باوري او خوندي ملګری.", 
    official: "رسمي او خوندي اداره", 
    qLinks: "چټک لینکونه", 
    ecoTitle: "زموږ اکوسیستم",
    contact: "اړیکه ونیسئ", 
    address: "کاونټ ګارډن، شیلټون واټ، لندن، انګلستان", 
    wa: "د واټساپ ملاتړ شتون لري", 
    copy: "صافی اگنسی. د Safi International Capital اکوسیستم برخه.", 
    policy: "د محرمیت تګلاره", 
    terms: "د خدماتو شرایط",
    home: "کور پاڼه", services: "د دیلیورو اکاونټ جوړول", about: "د صافی اگنسی په اړه", contactPage: "ملاتړ او اړیکه",
    legalName: "Safi International Capital LTD",
    legalReg: "په انګلستان کې راجستر شوی (شمېره: 17063286)",
    dir: "rtl" 
  },
  ur: { 
    desc: "برطانیہ اور یورپ میں ڈیجیٹل اکاؤنٹس بنانے اور دستاویزات کی تصدیق کے لیے آپ کا بھروسہ مند ساتھی۔", 
    official: "سرکاری اور محفوظ ایجنسی", 
    qLinks: "فوری لنکس", 
    ecoTitle: "ہمارا ایکو سسٹم",
    contact: "رابطہ کریں", 
    address: "کوونٹ گارڈن، شیلٹن سٹریٹ، لندن، برطانیہ", 
    wa: "واٹس ایپ سپورٹ دستیاب ہے", 
    copy: "صافی ایجنسی۔ Safi International Capital ایکو سسٹم کا حصہ۔", 
    policy: "رازداری کی پالیسی", 
    terms: "سروس کی شرائط",
    home: "ہوم", services: "ڈیلیورو رائیڈر سیٹ اپ", about: "صافی ایجنسی کے بارے میں", contactPage: "رابطہ سپورٹ",
    legalName: "Safi International Capital LTD",
    legalReg: "برطانیہ میں رجسٹرڈ (نمبر: 17063286)",
    dir: "rtl" 
  },
  fr: { 
    desc: "Votre partenaire de confiance pour la création de comptes numériques et la vérification de documents au Royaume-Uni et en Europe.", 
    official: "Agence Officielle et Sécurisée", 
    qLinks: "Liens Rapides", 
    ecoTitle: "Notre Écosystème",
    contact: "Contactez-nous", 
    address: "Covent Garden, Shelton Street, Londres, Royaume-Uni", 
    wa: "Support WhatsApp Disponible", 
    copy: "Safi Agency. Fait partie de l'écosystème Safi International Capital.", 
    policy: "Politique de confidentialité", 
    terms: "Conditions d'utilisation",
    home: "Accueil", services: "Configuration Deliveroo", about: "À propos de nous", contactPage: "Contacter le support",
    legalName: "Safi International Capital LTD",
    legalReg: "Enregistré au Royaume-Uni (N° 17063286)",
    dir: "ltr" 
  },
  de: { 
    desc: "Ihr vertrauenswürdiger Partner für die Einrichtung digitaler Konten und die Überprüfung von Dokumenten in Großbritannien und Europa.", 
    official: "Offizielle & Sichere Agentur", 
    qLinks: "Schnelllinks", 
    ecoTitle: "Unser Ökosystem",
    contact: "Kontaktiere uns", 
    address: "Covent Garden, Shelton Street, London, Großbritannien", 
    wa: "WhatsApp-Support Verfügbar", 
    copy: "Safi Agency. Teil des Safi International Capital Ökosystems.", 
    policy: "Datenschutzrichtlinie", 
    terms: "Nutzungsbedingungen",
    home: "Startseite", services: "Deliveroo-Konto", about: "Über Safi Agency", contactPage: "Support kontaktieren",
    legalName: "Safi International Capital LTD",
    legalReg: "Registriert in Großbritannien (Nr. 17063286)",
    dir: "ltr" 
  },
  tr: { 
    desc: "İngiltere ve Avrupa'da dijital hesap oluşturma ve belge doğrulama süreçlerinde güvenilir ortağınız.", 
    official: "Resmi ve Güvenli Acente", 
    qLinks: "Hızlı Bağlantılar", 
    ecoTitle: "Ekosistemimiz",
    contact: "Bize Ulaşın", 
    address: "Covent Garden, Shelton Street, Londra, İngiltere", 
    wa: "WhatsApp Desteği Mevcut", 
    copy: "Safi Agency. Safi International Capital Ekosisteminin bir parçasıdır.", 
    policy: "Gizlilik Politikası", 
    terms: "Hizmet Şartları",
    home: "Ana Sayfa", services: "Deliveroo Kurulumu", about: "Safi Agency Hakkında", contactPage: "Destek ile İletişim",
    legalName: "Safi International Capital LTD",
    legalReg: "İngiltere'de Kayıtlı (No. 17063286)",
    dir: "ltr" 
  },
  ru: { 
    desc: "Ваш надежный партнер по созданию цифровых счетов и проверке документов в Великобритании и Европе.", 
    official: "Официальное и безопасное агентство", 
    qLinks: "Быстрые ссылки", 
    ecoTitle: "Наша экосистема",
    contact: "Свяжитесь с нами", 
    address: "Ковент-Гарден, Шелтон-стрит, Лондон, Великобритания", 
    wa: "Доступна поддержка в WhatsApp", 
    copy: "Safi Agency. Часть экосистемы Safi International Capital.", 
    policy: "Политика конфиденциальности", 
    terms: "Условия использования",
    home: "Главная", services: "Настройка Deliveroo", about: "О Safi Agency", contactPage: "Связаться с поддержкой",
    legalName: "Safi International Capital LTD",
    legalReg: "Зарегистрировано в Великобритании (№ 17063286)",
    dir: "ltr" 
  },
};

// لیست شرکت‌های اکوسیستم صافی
const ecosystemLinks = [
  { name: "SafiPay", url: "https://safipay.net/" },
  { name: "Safi TopUp", url: "https://safitopup.site" },
  { name: "SafiPro", url: "https://safipro.site" },
  { name: "Safi Academy", url: "https://safiacademy.org/" },
  { name: "Safi AI", url: "https://www.safiai.site/" }
];

export default function Footer() {
  const pathname = usePathname();
  const currentLangCode = pathname.split('/')[1] || 'en';
  const t = translations[currentLangCode] || translations['en'];

  // انتخاب آیکون مناسب برای بولت‌ها بر اساس جهت زبان
  const ChevronIcon = t.dir === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <footer dir={t.dir} className="border-t border-zinc-800/50 bg-black pt-20 pb-8 relative overflow-hidden">
      
      {/* افکت‌های نوری سه‌بعدی در پس‌زمینه فوتر */}
      <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[300px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[10%] w-[400px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* گریدبندی تغییر کرد تا 5 ستونه شود و جا برای اکوسیستم باز شود */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* ================= بخش اول: معرفی برند و اطلاعات حقوقی (ستون 1 و 2) ================= */}
          <div className="lg:col-span-2 space-y-6">
            <Link href={`/${currentLangCode}`} className="flex items-center space-x-3 rtl:space-x-reverse group w-fit">
              <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                 <Image 
                    src="/br-logo.png" 
                    alt="Safi Agency" 
                    width={56} 
                    height={56} 
                    className="object-contain drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]" 
                 />
              </div>
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 group-hover:to-white transition-colors">
                Safi Agency
              </span>
            </Link>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-medium">
              {t.desc}
            </p>

            {/* باکس اطلاعات ثبتی و قانونی شرکت */}
            <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm max-w-sm flex items-start space-x-4 rtl:space-x-reverse group hover:border-emerald-500/30 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-wide">{t.legalName}</h4>
                <p className="text-zinc-500 text-xs mt-1">{t.legalReg}</p>
              </div>
            </div>
            
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-emerald-400 text-xs font-bold shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.official}</span>
            </div>
          </div>

          {/* ================= بخش دوم: لینک‌های سریع (ستون 3) ================= */}
          <div className="space-y-6">
            <h3 className="text-white font-extrabold text-lg tracking-wide relative inline-block">
              {t.qLinks}
              <span className="absolute -bottom-2 left-0 rtl:right-0 w-1/2 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              {[
                { name: t.home, path: `/${currentLangCode}` },
                { name: t.services, path: `/${currentLangCode}/service` },
                { name: t.about, path: `/${currentLangCode}/about` },
                { name: t.contactPage, path: `/${currentLangCode}/contact` }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.path} 
                    className="group flex items-center space-x-2 rtl:space-x-reverse hover:text-emerald-400 transition-all duration-300 w-fit"
                  >
                    <ChevronIcon className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= بخش سوم: اکوسیستم شرکت‌ها (ستون 4) ================= */}
          <div className="space-y-6">
            <h3 className="text-white font-extrabold text-lg tracking-wide relative inline-block">
              {t.ecoTitle}
              <span className="absolute -bottom-2 left-0 rtl:right-0 w-1/2 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              {ecosystemLinks.map((site, idx) => (
                <li key={idx}>
                  <a 
                    href={site.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 rtl:space-x-reverse hover:text-emerald-400 transition-all duration-300 w-fit"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                      {site.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= بخش چهارم: اطلاعات تماس (ستون 5) ================= */}
          <div className="space-y-6">
            <h3 className="text-white font-extrabold text-lg tracking-wide relative inline-block">
              {t.contact}
              <span className="absolute -bottom-2 left-0 rtl:right-0 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              
              <li className="flex items-start space-x-4 rtl:space-x-reverse group cursor-default">
                <div className="p-2 rounded-xl bg-zinc-900/50 border border-zinc-800 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="mt-1.5 group-hover:text-white transition-colors">{t.address}</span>
              </li>
              
              <li className="flex items-center space-x-4 rtl:space-x-reverse group cursor-default">
                <div className="p-2 rounded-xl bg-zinc-900/50 border border-zinc-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="group-hover:text-white transition-colors">support@safiagency.com</span>
              </li>
              
              <li className="flex items-center space-x-4 rtl:space-x-reverse group cursor-default">
                <div className="p-2 rounded-xl bg-zinc-900/50 border border-zinc-800 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="group-hover:text-white transition-colors">{t.wa}</span>
              </li>

            </ul>
          </div>

        </div>

        {/* ================= بخش کپی‌رایت ================= */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500">
          <p className="flex items-center space-x-1 rtl:space-x-reverse font-medium">
            <span>© {new Date().getFullYear()}</span>
            <span>{t.copy}</span>
          </p>
          <div className="flex items-center space-x-6 rtl:space-x-reverse mt-4 md:mt-0 font-medium">
            <Link href="#" className="hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">{t.policy}</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
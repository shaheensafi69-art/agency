"use client";

import { useState, useRef } from "react";
import { 
  ArrowRight, Globe, Lock, ShieldCheck, Clock, 
  CreditCard, FileText, Video, ChevronDown 
} from "lucide-react";
import SafiAgencyForm from "../../../components/SafiAgencyForm";

export default function RussianServicePage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  // Ссылка для плавной прокрутки к секции формы
  const applySectionRef = useRef<HTMLDivElement>(null);

  const scrollToApply = () => {
    applySectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Если пользователь выбрал Великобританию или Францию, отобразить форму регистрации
  if (selectedCountry === "UK" || selectedCountry === "FR") {
    return (
      <div dir="ltr" className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden">
        {/* Световые эффекты формы */}
        <div className={`absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${selectedCountry === 'UK' ? 'bg-emerald-600/10' : 'bg-cyan-600/10'}`}></div>
        
        <div className="max-w-2xl mx-auto mb-8 relative z-10">
          <button
            onClick={() => setSelectedCountry(null)}
            className={`group flex items-center space-x-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-md ${selectedCountry === 'UK' ? 'hover:border-emerald-500/50' : 'hover:border-cyan-500/50'}`}
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Вернуться к выбору страны</span>
          </button>
        </div>
        
        <div className="relative z-10">
          <SafiAgencyForm />
        </div>
      </div>
    );
  }

  return (
    <main dir="ltr" className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* ================= Трехмерные световые эффекты ================= */}
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[800px] h-[400px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 space-y-24">
        
        {/* ================= 1. HERO SECTION & PRICING ================= */}
        <section className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4" />
            <span>Премиальный сервис под ключ</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight drop-shadow-lg">
            Настройка аккаунта курьера Deliveroo
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed">
            Профессиональная, безопасная и беспроблемная регистрация аккаунта. Загрузите свои документы, и наша команда экспертов возьмет на себя все юридические сложности, проверки анкетных данных и одобрение платформой.
          </p>

          {/* Ценовые бейджи */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <div className="flex items-center space-x-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 font-black text-xl">
                UK
              </div>
              <div className="text-left">
                <p className="text-zinc-400 text-xs font-semibold uppercase">Великобритания 🇬🇧</p>
                <p className="text-white font-extrabold text-2xl">£350</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-black text-xl">
                FR
              </div>
              <div className="text-left">
                <p className="text-zinc-400 text-xs font-semibold uppercase">Франция 🇫🇷</p>
                <p className="text-white font-extrabold text-2xl">€400</p>
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToApply}
            className="mt-8 group relative inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-10 py-4 rounded-full font-extrabold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            <span>Подать заявку</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </section>

        {/* ================= 2. THE PROCESS (4 STEPS) ================= */}
        <section className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Как работает наша система</h2>
            <p className="text-zinc-400">Оптимизированный процесс, созданный для того, чтобы вы вышли на работу через 1–4 недели.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Линия соединения между шагами */}
            <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-0.5 bg-zinc-800 z-0"></div>

            {[
              { icon: FileText, title: "1. Загрузка документов", desc: "Отправьте удостоверение личности, подтверждение адреса и детали через нашу защищенную форму." },
              { icon: Clock, title: "2. Начало обработки", desc: "Наша команда инициирует юридическую настройку и проверки анкетных данных (1–4 недели)." },
              { icon: CreditCard, title: "3. Создание аккаунта", desc: "Мы управляем очередями на платформе и требованиями соответствия." },
              { icon: Video, title: "4. Проверка в WhatsApp", desc: "Мы связываемся с вами для сканирования лица в реальном времени для финальной активации аккаунта." }
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
            Комплексный протокол настройки и эксплуатации
          </h2>
          
          <p>
            Добро пожаловать в службу настройки аккаунта курьера Deliveroo от Safi Agency. Мы понимаем, что преодоление строгих юридических требований, проверок анкетных данных и регистрации на платформах в Великобритании и Европе может быть сложной задачей. Именно поэтому мы предлагаем комплексное решение под ключ, созданное для управления тяжелым административным бременем, чтобы вы могли сосредоточиться на заработке как можно быстрее.
          </p>
          <p>
            Этот путь начинается в тот момент, когда вы загружаете свои официальные документы — такие как удостоверение личности, паспорт и действительное подтверждение адреса — через наш высокозащищенный зашифрованный портал. Как только ваша заявка поступает, наша специализированная команда обработки немедленно приступает к работе. Мы тщательно проверяем ваши данные, чтобы убедиться, что они полностью соответствуют строгим стандартам, требуемым Deliveroo и местными государственными органами.
          </p>
          <p>
            Для наших <strong className="text-emerald-400">клиентов из Великобритании</strong> мы управляем интеграцией права на работу (Share Code) и облегчаем обязательную базовую проверку судимости (DBS). Для клиентов во <strong className="text-cyan-400">Франции</strong> мы помогаем разобраться в сложностях региональных нормативных требований, гарантируя полное соблюдение стандартов Kbis и микропредприятий (micro-entrepreneur).
          </p>
          <p>
            Поскольку мы строго соблюдаем нормативные требования и должны проходить официальные очереди на подключение к платформам, <strong className="text-white bg-emerald-500/20 px-2 py-0.5 rounded">весь процесс настройки обычно занимает от 1 до 4 недель.</strong> В течение этого периода наша команда постоянно отслеживает статус вашей заявки и решает любые административные препятствия внутри компании.
          </p>
          <p>
            Прозрачность ценообразования является ключевой ценностью Safi Agency. Наша комплексная плата за настройку составляет <strong className="text-white">£350 для аккаунтов в Великобритании</strong> и <strong className="text-white">€400 для французских аккаунтов</strong>. Никаких скрытых платежей абсолютно нет.
          </p>
          <p>
            Заключительным и наиболее важным этапом этого процесса является верификация лица в реальном времени. Как только ваш аккаунт будет полностью одобрен платформой и готов к активации, наша служба поддержки свяжется с вами напрямую через указанный вами номер WhatsApp. Мы проведем вас через видеосеанс в реальном времени, чтобы подтвердить соответствие вашего лица предоставленным официальным документам. После этого финального этапа безопасности аккаунт полностью передается вам, активен и готов к работе!
          </p>
        </section>

        {/* ================= 4. COUNTRY SELECTION FORM TRIGGER ================= */}
        <section ref={applySectionRef} className="pt-12 border-t border-zinc-800/50">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-cyan-400 text-xs font-semibold">
              <Globe className="w-4 h-4" />
              <span>Выберите свою страну</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Начните оформление заявки
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Выберите регион своей деятельности ниже, чтобы открыть безопасную форму загрузки документов.
            </p>
          </div>

          {/* Сетка из 4 колонок для 4 стран */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Великобритания - Активна */}
            <div
              onClick={() => setSelectedCountry("UK")}
              className="bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800 border border-emerald-500/40 hover:border-emerald-400 p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                UK
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                🇬🇧 Великобритания
              </h3>
              <p className="text-zinc-400 text-xs mb-6">Полная настройка и верификация курьера под ключ</p>
              <div className="mt-auto flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                <span>Выбрать UK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Франция - Активна */}
            <div
              onClick={() => setSelectedCountry("FR")}
              className="bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800 border border-cyan-500/40 hover:border-cyan-400 p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group shadow-[0_10px_30px_rgba(6,182,212,0.1)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                FR
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                🇫🇷 Франция
              </h3>
              <p className="text-zinc-400 text-xs mb-6">Полная настройка микропредприятия и курьера</p>
              <div className="mt-auto flex items-center space-x-2 text-cyan-400 font-bold text-sm">
                <span>Выбрать FR</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Германия - Скоро */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <Lock className="w-3 h-3" /> <span>Скоро</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                DE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇩🇪 Германия</h3>
              <p className="text-zinc-500 text-xs">Региональная верификация аккаунтов скоро появится.</p>
            </div>

            {/* Бельгия - Скоро */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <Lock className="w-3 h-3" /> <span>Скоро</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                BE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇧🇪 Бельгия</h3>
              <p className="text-zinc-500 text-xs">Региональная верификация аккаунтов скоро появится.</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
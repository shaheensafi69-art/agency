import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Clock, MessageSquare, 
  FileText, Briefcase, Car, Building2, CheckCircle2, Scale 
} from "lucide-react";

export default function RussianHomePage() {
  return (
    // Применение класса ltr для точного выравнивания всех элементов слева направо в русской версии
    <div dir="ltr" className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* --- Трехмерные световые эффекты и фоновая анимация --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ================= HERO SECTION (Главный блок) ================= */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24">
        <div className="text-center max-w-4xl mx-auto space-y-8 relative">
          
          {/* Плавающий бейдж */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-semibold shadow-[0_0_30px_rgba(16,185,129,0.2)] transform hover:scale-105 transition-transform duration-300">
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            <span>Официальный партнер по регистрации и верификации документов в Великобритании и Европе</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Сделайте свой цифровой путь <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 drop-shadow-lg">
              простым и безопасным
            </span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
            Safi Agency предоставляет 100% безопасные и профессиональные услуги по настройке аккаунтов. От открытия аккаунта курьера Deliveroo до полной верификации юридических документов — мы выполняем всю сложную работу, чтобы вы могли начать зарабатывать без лишних забот.
          </p>

          {/* Кнопки призыва к действию (Call to Action) с неоновым эффектом */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link 
              href="/ru/service" 
              className="group relative w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-4 rounded-2xl font-extrabold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <span>Регистрация аккаунта Deliveroo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/ru/contact" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 hover:border-emerald-500/50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Поддержка в WhatsApp</span>
            </Link>
          </div>
        </div>
      </main>

      {/* ================= DELIVEROO REQUIREMENTS SECTION (Раздел правил Deliveroo) ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800/50">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Официальные правила и требования Deliveroo
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-medium">
            Всё, что вам нужно знать перед подачей заявки. Мы поддерживаем полную настройку и юридическое соответствие вашего аккаунта в Великобритании и Франции.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Карточка правил Великобритании (UK) */}
          <div className="relative group perspective">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800 group-hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]">
              
              <div className="flex items-center space-x-4 mb-8 border-b border-zinc-800 pb-6">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-emerald-400">UK</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Великобритания (United Kingdom)</h3>
                  <p className="text-emerald-400 text-sm font-medium">Правила для самозанятых курьеров (Self-Employed Rider)</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Право на работу в Великобритании (Right to Work)</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Действительный паспорт Великобритании/Ирландии, биометрическая карта вида на жительство (BRP) или официальный Share Code, подтверждающий ваше право на работу.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Возраст и проверка судимости</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Кандидат должен быть старше 18 лет. Базовая проверка судимости (DBS) является юридически обязательной и обрабатывается нами в ходе процесса.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Car className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Транспортные средства и страховка</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Разрешено использовать велосипед, самокат или автомобиль. Моторизованные транспортные средства требуют специальной страховки для доставки еды (Hire and Reward).</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Банковский счет в Великобритании</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Наличие активного банковского счета в Великобритании на ваше имя для получения еженедельного заработка.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Карточка правил Франции (France) */}
          <div className="relative group perspective">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800 group-hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]">
              
              <div className="flex items-center space-x-4 mb-8 border-b border-zinc-800 pb-6">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-cyan-400">FR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Франция (France)</h3>
                  <p className="text-cyan-400 text-sm font-medium">Правила микропредприятий (Micro-entrepreneur)</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <Briefcase className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Статус занятости (Micro-entrepreneur)</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Регистрация в качестве Auto-entrepreneur является обязательной. Вы должны предоставить действующий номер SIRET и сертификат Extrait Kbis.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Французское резидентство и удостоверение личности</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Удостоверение личности ЕС, паспорт или действующий вид на жительство (Titre de Séjour), дающий право на фриланс-деятельность во Франции.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Scale className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Правила в отношении транспортных средств</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Велосипед является стандартным. Использование самокатов или автомобилей требует сертификата «Capacité de transport de marchandises».</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Банковский счет SEPA</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Действующий банковский счет в зоне SEPA на ваше имя для обработки европейских финансовых транзакций.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION (Раздел особенностей) ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">100% безопасный процесс</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Все ваши документы защищены строгими стандартами шифрования. Мы гарантируем полную безопасность процесса регистрации.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] group">
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
              <Clock className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Быстро и эффективно</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Никакой путаницы и потери времени. Наши оптимизированные формы и команда экспертов гарантируют верификацию вашего аккаунта в кратчайшие сроки.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <MessageSquare className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Живая поддержка в WhatsApp</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Мы сопровождаем вас шаг за шагом. От отправки документов до верификации лица в реальном времени наша команда всегда на связи.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
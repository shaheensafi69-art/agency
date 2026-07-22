"use client";

import { useState, useRef } from "react";
import { 
  ArrowRight, Globe, Lock, ShieldCheck, Clock, 
  CreditCard, FileText, Video, ChevronDown 
} from "lucide-react";
import SafiAgencyForm from "../../../components/SafiAgencyForm";

export default function TurkishServicePage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  // Form bölümüne yumuşak kaydırma için referans
  const applySectionRef = useRef<HTMLDivElement>(null);

  const scrollToApply = () => {
    applySectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Kullanıcı İngiltere veya Fransa'yı seçerse kayıt formu gösterilir
  if (selectedCountry === "UK" || selectedCountry === "FR") {
    return (
      <div dir="ltr" className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden">
        {/* Form ışık efektleri */}
        <div className={`absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${selectedCountry === 'UK' ? 'bg-emerald-600/10' : 'bg-cyan-600/10'}`}></div>
        
        <div className="max-w-2xl mx-auto mb-8 relative z-10">
          <button
            onClick={() => setSelectedCountry(null)}
            className={`group flex items-center space-x-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-md ${selectedCountry === 'UK' ? 'hover:border-emerald-500/50' : 'hover:border-cyan-500/50'}`}
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Ülke seçimine geri dön</span>
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
      
      {/* ================= 3D Işık Efektleri ================= */}
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[800px] h-[400px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 space-y-24">
        
        {/* ================= 1. HERO SECTION & PRICING ================= */}
        <section className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4" />
            <span>Özel Sıfırdan Yüze Hizmeti</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight drop-shadow-lg">
            Deliveroo Kurye Hesabı Kurulumu
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed">
            Profesyonel, güvenli ve sorunsuz hesap kaydı. Belgelerinizi yükleyin; uzman ekibimiz tüm yasal karmaşıklıkları, geçmiş kontrollerini ve platform onayını yönetecektir.
          </p>

          {/* Fiyatlandırma Rozetleri */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <div className="flex items-center space-x-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 font-black text-xl">
                UK
              </div>
              <div className="text-left">
                <p className="text-zinc-400 text-xs font-semibold uppercase">Birleşik Krallık 🇬🇧</p>
                <p className="text-white font-extrabold text-2xl">£350</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-black text-xl">
                FR
              </div>
              <div className="text-left">
                <p className="text-zinc-400 text-xs font-semibold uppercase">Fransa 🇫🇷</p>
                <p className="text-white font-extrabold text-2xl">€400</p>
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToApply}
            className="mt-8 group relative inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-10 py-4 rounded-full font-extrabold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            <span>Şimdi Başvurun</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </section>

        {/* ================= 2. THE PROCESS (4 STEPS) ================= */}
        <section className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Sistemimiz Nasıl Çalışır</h2>
            <p className="text-zinc-400">Sizi 1 ila 4 hafta içinde işe başlatmak için tasarlanmış optimize edilmiş bir süreç.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Masaüstünde adımlar arası çizgi */}
            <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-0.5 bg-zinc-800 z-0"></div>

            {[
              { icon: FileText, title: "1. Belge Yükleme", desc: "Güvenli formumuz aracılığıyla kimliğinizi, adres kanıtınızı ve bilgilerinizi gönderin." },
              { icon: Clock, title: "2. İşlem Başlıyor", desc: "Ekibimiz yasal prosedürleri ve geçmiş kontrollerini başlatır (1-4 hafta)." },
              { icon: CreditCard, title: "3. Hesap Oluşturma", desc: "Platform sırasını ve yasal gereksinimleri biz yönetiyoruz." },
              { icon: Video, title: "4. WhatsApp Doğrulaması", desc: "Aktif hesabı finalize etmek için canlı yüz taraması amacıyla sizinle iletişime geçiyoruz." }
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
            Kapsamlı Kurulum ve Operasyon Protokolü
          </h2>
          
          <p>
            Safi Agency'nin Deliveroo kurye hesabı kurulum hizmetine hoş geldiniz. İngiltere ve Avrupa'da katı yasal gereksinimleri, geçmiş kontrollerini ve platform kayıtlarını yönetmenin ne kadar zor olabileceğini biliyoruz. Bu nedenle, en kısa sürede kazanç sağlamaya odaklanabilmeniz için ağır idari yükleri yönetmek üzere tasarlanmış sıfırdan yüze eksiksiz bir çözüm sunuyoruz.
          </p>
          <p>
            Bu yolculuk, resmi belgelerinizi—kimliğiniz, pasaportunuz ve geçerli adres kanıtınız gibi—son derece güvenli, şifrelenmiş portalımız aracılığıyla yüklediğiniz anda başlar. Başvurunuz alındığı anda, özel işlem ekibimiz hemen devreye girer. Deliveroo ve yerel kamu otoritelerinin talep ettiği standartlara tam olarak uyduğunuzdan emin olmak için detaylarınızı dikkatle inceliyoruz.
          </p>
          <p>
            <strong className="text-emerald-400">İngiltere'deki müşterilerimiz</strong> için çalışma hakkı (Share Code) entegrasyonunu yönetiyor ve zorunlu temel sabıka kaydı kontrolünü (DBS) kolaylaştırıyoruz. <strong className="text-cyan-400">Fransa</strong>'daki müşterilerimiz için ise Kbis ve küçük işletme (micro-entrepreneur) standartlarının eksiksiz karşılandığından emin olmak adına bölgesel düzenleyici gereksinimlerin karmaşıklığı konusunda yardımcı oluyoruz.
          </p>
          <p>
            Yasalara sıkı sıkıya bağlı olduğumuz ve resmi platform katılım sıralarından geçmemiz gerektiği için, <strong className="text-white bg-emerald-500/20 px-2 py-0.5 rounded">tüm kurulum süreci genellikle 1 ila 4 hafta sürer.</strong> Bu süre zarfında ekibimiz başvuru durumunuzu sürekli olarak takip eder ve her türlü idari engeli dahili olarak çözer.
          </p>
          <p>
            Fiyatlandırmada şeffaflık Safi Agency'nin temel değeridir. Kapsamlı kurulum ücretimiz <strong className="text-white">İngiltere hesapları için £350</strong> ve <strong className="text-white">Fransa hesapları için €400</strong>'dir. Kesinlikle hiçbir gizli ücret yoktur.
          </p>
          <p>
            Bu sürecin son ve en kritik adımı canlı yüz doğrulamasıdır. Hesabınız platform tarafından tamamen onaylandığında ve etkinleştirilmeye hazır olduğunda, destek ekibimiz sağladığınız WhatsApp numarasından doğrudan sizinle iletişime geçecektir. Yüzünüzün gönderilen resmi belgelerle eşleştiğini doğrulamak için sizi canlı bir video koordinasyonunda yönlendiriyoruz. Bu son güvenlik adımından sonra hesap tamamen size teslim edilir, aktiftir ve kullanıma hazırdır!
          </p>
        </section>

        {/* ================= 4. COUNTRY SELECTION FORM TRIGGER ================= */}
        <section ref={applySectionRef} className="pt-12 border-t border-zinc-800/50">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-cyan-400 text-xs font-semibold">
              <Globe className="w-4 h-4" />
              <span>Ülkenizi Seçin</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Başvurunuzu Başlatın
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Güvenli belge yükleme formunu açmak için aşağıdan çalışma bölgenizi seçin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div
              onClick={() => setSelectedCountry("UK")}
              className="bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800 border border-emerald-500/40 hover:border-emerald-400 p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                UK
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                🇬🇧 Birleşik Krallık
              </h3>
              <p className="text-zinc-400 text-xs mb-6">Sıfırdan yüze tam kurye kurulumu ve doğrulaması</p>
              <div className="mt-auto flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                <span>UK'yi Seç</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            <div
              onClick={() => setSelectedCountry("FR")}
              className="bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800 border border-cyan-500/40 hover:border-cyan-400 p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group shadow-[0_10px_30px_rgba(6,182,212,0.1)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                FR
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                🇫🇷 Fransa
              </h3>
              <p className="text-zinc-400 text-xs mb-6">Küçük işletme ve kurye tam kurulumu</p>
              <div className="mt-auto flex items-center space-x-2 text-cyan-400 font-bold text-sm">
                <span>FR'yi Seç</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <Lock className="w-3 h-3" /> <span>Yakında</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                DE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇩🇪 Almanya</h3>
              <p className="text-zinc-500 text-xs">Bölgesel hesap doğrulaması yakında geliyor.</p>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <Lock className="w-3 h-3" /> <span>Yakında</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                BE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇧🇪 Belçika</h3>
              <p className="text-zinc-500 text-xs">Bölgesel hesap doğrulaması yakında geliyor.</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
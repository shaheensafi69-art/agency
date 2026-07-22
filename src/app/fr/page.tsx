import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Clock, MessageSquare, 
  FileText, Briefcase, Car, Building2, CheckCircle2, Scale 
} from "lucide-react";

export default function FrenchHomePage() {
  return (
    // اعمال کلاس ltr برای چپ‌چین شدن دقیق تمام المان‌ها در زبان فرانسوی
    <div dir="ltr" className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* --- افکت‌های نوری سه‌بعدی و انیمیشن‌دار پس‌زمینه --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ================= HERO SECTION (بخش اصلی) ================= */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24">
        <div className="text-center max-w-4xl mx-auto space-y-8 relative">
          
          {/* بج (Badge) شناور */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-semibold shadow-[0_0_30px_rgba(16,185,129,0.2)] transform hover:scale-105 transition-transform duration-300">
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            <span>Partenaire officiel d'enregistrement et de vérification au Royaume-Uni et en Europe</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Simplifiez votre <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 drop-shadow-lg">
              parcours numérique
            </span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
            Safi Agency propose des services de création de compte 100 % sécurisés et professionnels. De la configuration des comptes de livreur Deliveroo à la vérification complète des documents juridiques ; nous faisons le travail difficile pour que vous puissiez commencer à gagner de l'argent en toute sérénité.
          </p>

          {/* دکمه‌های اقدام (Call to Action) با افکت نئونی */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link 
              href="/fr/service" 
              className="group relative w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-4 rounded-2xl font-extrabold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <span>Demander un compte Deliveroo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/fr/contact" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 hover:border-emerald-500/50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Support WhatsApp</span>
            </Link>
          </div>
        </div>
      </main>

      {/* ================= DELIVEROO REQUIREMENTS SECTION (بخش قوانین دیلیورو) ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800/50">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Exigences officielles de Deliveroo
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-medium">
            Tout ce que vous devez savoir avant de postuler. Nous prenons en charge la configuration complète et la conformité juridique pour le Royaume-Uni et la France.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* کارت قوانین بریتانیا (UK) */}
          <div className="relative group perspective">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800 group-hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]">
              
              <div className="flex items-center space-x-4 mb-8 border-b border-zinc-800 pb-6">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-emerald-400">UK</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Royaume-Uni</h3>
                  <p className="text-emerald-400 text-sm font-medium">Règles pour les livreurs indépendants (Self-Employed Rider)</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Droit de travailler au Royaume-Uni (Right to Work)</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Passeport britannique/irlandais valide, Permis de résidence biométrique (BRP) ou Share Code officiel prouvant votre droit de travail.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Âge et vérification des antécédents</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Avoir plus de 18 ans. Un contrôle de casier judiciaire de base (DBS) est exigé par la loi et traité lors de la configuration.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Car className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Véhicule et assurance</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Vélo, scooter ou voiture. Les véhicules motorisés nécessitent une assurance spécifique pour la livraison de repas (« Hire and Reward »).</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Compte bancaire au Royaume-Uni</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Un compte bancaire britannique actif enregistré à votre nom pour recevoir vos gains hebdomadaires.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* کارت قوانین فرانسه (France) */}
          <div className="relative group perspective">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800 group-hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]">
              
              <div className="flex items-center space-x-4 mb-8 border-b border-zinc-800 pb-6">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-cyan-400">FR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">France</h3>
                  <p className="text-cyan-400 text-sm font-medium">Réglementation des micro-entrepreneurs</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <Briefcase className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Statut de micro-entrepreneur</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Il est obligatoire d'être enregistré en tant qu'auto-entrepreneur. Vous devez fournir un numéro SIRET valide et un extrait Kbis.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Résidence et identité française</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Carte d'identité de l'UE, passeport ou titre de séjour valide autorisant le travail indépendant en France.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Scale className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Réglementation des véhicules</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Les vélos sont standard. L'utilisation d'un scooter ou d'une voiture nécessite un certificat de capacité de transport de marchandises.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Compte bancaire SEPA</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">Un compte bancaire valide en zone SEPA à votre nom pour traiter les transactions et paiements européens.</p>
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
            <h3 className="text-xl font-bold text-white mb-3">Processus 100% sécurisé</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Vos documents sont cryptés et traités selon des protocoles de confidentialité stricts. Nous garantissons un processus d'enregistrement sûr.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] group">
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
              <Clock className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Rapide et efficace</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Évitez les complications. Nos formulaires simplifiés et notre équipe d'experts garantissent que votre compte est vérifié en un temps record.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <MessageSquare className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Support WhatsApp en direct</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Nous vous guidons étape par étape. De la soumission des documents à la vérification faciale en direct, notre équipe n'est qu'à un message.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
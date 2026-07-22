"use client";

import { useState, useRef } from "react";
import { 
  ArrowRight, Globe, Lock, ShieldCheck, Clock, 
  CreditCard, FileText, Video, ChevronDown 
} from "lucide-react";
import SafiAgencyForm from "../../../components/SafiAgencyForm";

export default function FrenchServicePage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  // Référence pour le défilement fluide vers la section du formulaire
  const applySectionRef = useRef<HTMLDivElement>(null);

  const scrollToApply = () => {
    applySectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Si l'utilisateur sélectionne le Royaume-Uni ou la France, afficher le formulaire d'inscription
  if (selectedCountry === "UK" || selectedCountry === "FR") {
    return (
      <div dir="ltr" className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden">
        {/* Effets lumineux du formulaire */}
        <div className={`absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${selectedCountry === 'UK' ? 'bg-emerald-600/10' : 'bg-cyan-600/10'}`}></div>
        
        <div className="max-w-2xl mx-auto mb-8 relative z-10">
          <button
            onClick={() => setSelectedCountry(null)}
            className={`group flex items-center space-x-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-md ${selectedCountry === 'UK' ? 'hover:border-emerald-500/50' : 'hover:border-cyan-500/50'}`}
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Retour au choix du pays</span>
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
      
      {/* ================= Effets lumineux 3D ================= */}
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[800px] h-[400px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 space-y-24">
        
        {/* ================= 1. HERO SECTION & PRICING ================= */}
        <section className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4" />
            <span>Service premium de zéro à cent</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight drop-shadow-lg">
            Configuration de compte Livreur Deliveroo
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed">
            Enregistrement de compte professionnel, sécurisé et sans tracas. Téléchargez vos documents et notre équipe d'experts gérera toutes les complexités juridiques, les vérifications d'antécédents et l'approbation de la plateforme.
          </p>

          {/* Badges de prix */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <div className="flex items-center space-x-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 font-black text-xl">
                UK
              </div>
              <div className="text-left">
                <p className="text-zinc-400 text-xs font-semibold uppercase">Royaume-Uni 🇬🇧</p>
                <p className="text-white font-extrabold text-2xl">£350</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 px-6 py-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-black text-xl">
                FR
              </div>
              <div className="text-left">
                <p className="text-zinc-400 text-xs font-semibold uppercase">France 🇫🇷</p>
                <p className="text-white font-extrabold text-2xl">€400</p>
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToApply}
            className="mt-8 group relative inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-10 py-4 rounded-full font-extrabold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            <span>Postuler maintenant</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </section>

        {/* ================= 2. THE PROCESS (4 STEPS) ================= */}
        <section className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Comment fonctionne notre système</h2>
            <p className="text-zinc-400">Un processus optimisé conçu pour vous mettre au travail en 1 à 4 semaines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Ligne de connexion entre les étapes */}
            <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-0.5 bg-zinc-800 z-0"></div>

            {[
              { icon: FileText, title: "1. Télécharger les documents", desc: "Soumettez votre pièce d'identité, votre justificatif de domicile et vos informations via notre formulaire sécurisé." },
              { icon: Clock, title: "2. Début du traitement", desc: "Notre équipe initie la configuration juridique et les vérifications d'antécédents (1 à 4 semaines)." },
              { icon: CreditCard, title: "3. Création du compte", desc: "Nous gérons les files d'attente de la plateforme et les exigences de conformité." },
              { icon: Video, title: "4. Vérification WhatsApp", desc: "Nous vous appelons pour un scan facial en direct afin de finaliser l'activation de votre compte." }
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
            Protocole complet de configuration et d'exploitation
          </h2>
          
          <p>
            Bienvenue sur le service de configuration de compte de livreur Deliveroo de Safi Agency. Nous comprenons que naviguer à travers des exigences légales strictes, des vérifications d'antécédents et des inscriptions sur les plateformes au Royaume-Uni et en Europe peut s'avérer fastidieux. C'est pourquoi nous proposons une solution complète de zéro à cent, conçue pour gérer la lourde charge administrative afin que vous puissiez vous concentrer sur vos gains le plus rapidement possible.
          </p>
          <p>
            Ce parcours commence dès que vous téléchargez vos documents officiels—tels que votre pièce d'identité, votre passeport et un justificatif de domicile valide—via notre portail hautement sécurisé et crypté. Dès réception de votre demande, notre équipe de traitement dédiée prend le relais. Nous examinons vos détails avec soin pour nous assurer qu'ils respectent parfaitement les normes rigoureuses exigées par Deliveroo et les autorités publiques locales.
          </p>
          <p>
            Pour nos <strong className="text-emerald-400">clients au Royaume-Uni</strong>, nous gérons l'intégration du droit du travail (Share Code) et facilitons la vérification obligatoire du casier judiciaire de base (DBS). Pour nos clients en <strong className="text-cyan-400">France</strong>, nous vous aidons à surmonter la complexité des exigences réglementaires régionales en veillant à ce que les normes Kbis et micro-entrepreneur soient pleinement satisfaites.
          </p>
          <p>
            Étant donné que nous adhérons strictement à la conformité réglementaire et que nous devons passer par les files d'attente officielles des plateformes, <strong className="text-white bg-emerald-500/20 px-2 py-0.5 rounded">le processus complet de configuration prend généralement entre 1 et 4 semaines.</strong> Pendant cette période, notre équipe surveille en permanence l'état de votre demande et gère les obstacles administratifs en interne.
          </p>
          <p>
            La transparence des prix est une valeur fondamentale chez Safi Agency. Nos frais globaux de configuration s'élèvent à <strong className="text-white">£350 pour les comptes UK</strong> et <strong className="text-white">€400 pour les comptes français</strong>. Il n'y a absolument aucuns frais cachés.
          </p>
          <p>
            La dernière étape, et la plus cruciale de ce processus, est la vérification faciale en direct. Une fois votre compte entièrement approuvé et prêt à être activé par la plateforme, notre équipe de support vous contactera directement via le numéro WhatsApp que vous avez fourni. Nous vous guiderons lors d'une coordination vidéo en direct pour confirmer que votre visage correspond aux documents officiels soumis. Après cette dernière étape de sécurité, votre compte vous est entièrement remis, actif et prêt à l'emploi !
          </p>
        </section>

        {/* ================= 4. COUNTRY SELECTION FORM TRIGGER ================= */}
        <section ref={applySectionRef} className="pt-12 border-t border-zinc-800/50">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-cyan-400 text-xs font-semibold">
              <Globe className="w-4 h-4" />
              <span>Sélectionnez votre pays</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Commencez votre candidature
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Sélectionnez votre région d'activité ci-dessous pour ouvrir le formulaire sécurisé de téléchargement de documents.
            </p>
          </div>

          {/* Grille à 4 colonnes pour 4 pays */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Royaume-Uni - Actif */}
            <div
              onClick={() => setSelectedCountry("UK")}
              className="bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800 border border-emerald-500/40 hover:border-emerald-400 p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                UK
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                🇬🇧 Royaume-Uni
              </h3>
              <p className="text-zinc-400 text-xs mb-6">Configuration et vérification complète de livreur de zéro à cent</p>
              <div className="mt-auto flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                <span>Sélectionner UK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* France - Actif */}
            <div
              onClick={() => setSelectedCountry("FR")}
              className="bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800 border border-cyan-500/40 hover:border-cyan-400 p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group shadow-[0_10px_30px_rgba(6,182,212,0.1)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                FR
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                🇫🇷 France
              </h3>
              <p className="text-zinc-400 text-xs mb-6">Configuration complète micro-entrepreneur et livreur</p>
              <div className="mt-auto flex items-center space-x-2 text-cyan-400 font-bold text-sm">
                <span>Sélectionner FR</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Allemagne - Bientôt disponible */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <Lock className="w-3 h-3" /> <span>Bientôt</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                DE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇩🇪 Allemagne</h3>
              <p className="text-zinc-500 text-xs">Vérification de compte régionale bientôt disponible.</p>
            </div>

            {/* Belgique - Bientôt disponible */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl opacity-70 cursor-not-allowed flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <Lock className="w-3 h-3" /> <span>Bientôt</span>
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 font-black text-2xl mb-4">
                BE
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">🇧🇪 Belgique</h3>
              <p className="text-zinc-500 text-xs">Vérification de compte régionale bientôt disponible.</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
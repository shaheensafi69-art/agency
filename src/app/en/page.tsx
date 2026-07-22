import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Clock, MessageSquare, 
  FileText, Briefcase, Car, Building2, CheckCircle2, Scale 
} from "lucide-react";

export default function EnglishHomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* --- افکت‌های نوری سه‌بعدی و انیمیشن‌دار پس‌زمینه --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ================= HERO SECTION ================= */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24">
        <div className="text-center max-w-4xl mx-auto space-y-8 relative">
          
          {/* بج (Badge) شناور */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-semibold shadow-[0_0_30px_rgba(16,185,129,0.2)] transform hover:scale-105 transition-transform duration-300">
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            <span>Official UK & Europe Registration Partner</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Simplify Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 drop-shadow-lg">
              Digital Journey
            </span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Safi Agency provides 100% secure and professional account setup services. From Deliveroo rider accounts to complete document verification, we handle the hard work so you can start earning.
          </p>

          {/* دکمه‌های اقدام (Call to Action) با افکت نئونی */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link 
              href="/en/service" 
              className="group relative w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-4 rounded-2xl font-extrabold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <span>Apply for Deliveroo Account</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/en/contact" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 hover:border-emerald-500/50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Support</span>
            </Link>
          </div>
        </div>
      </main>

      {/* ================= DELIVEROO REQUIREMENTS SECTION ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800/50">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Deliveroo Official Requirements
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know before applying. We support complete setup and compliance for both UK and France regions.
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
                  <h3 className="text-2xl font-bold text-white">United Kingdom</h3>
                  <p className="text-emerald-400 text-sm font-medium">Self-Employed Rider Rules</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Right to Work in the UK</h4>
                    <p className="text-zinc-400 text-sm mt-1">Valid UK/Irish Passport, Biometric Residence Permit (BRP), or official Share Code proving your right to work.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Age & Background Check</h4>
                    <p className="text-zinc-400 text-sm mt-1">Must be over 18 years old. A clean basic criminal record check (DBS) is legally required and processed during setup.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Car className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Vehicle & Insurance</h4>
                    <p className="text-zinc-400 text-sm mt-1">Bicycle, Scooter, or Car. Motorized vehicles require specific 'Hire and Reward' food delivery insurance.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">UK Bank Account</h4>
                    <p className="text-zinc-400 text-sm mt-1">An active UK bank account registered in your name to receive weekly earnings.</p>
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
                  <p className="text-cyan-400 text-sm font-medium">Micro-entrepreneur Regulations</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <Briefcase className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Micro-entrepreneur Status</h4>
                    <p className="text-zinc-400 text-sm mt-1">It is mandatory to be registered as an Auto-entrepreneur. You must provide a valid SIRET number and Extrait Kbis.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">French Residency & Identity</h4>
                    <p className="text-zinc-400 text-sm mt-1">EU Identity Card, Passport, or a valid Titre de Séjour (Residence Permit) allowing freelance work in France.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Scale className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Vehicle Regulations</h4>
                    <p className="text-zinc-400 text-sm mt-1">Bicycles are standard. Using a scooter or car requires a "Capacité de transport de marchandises" certificate.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">SEPA Bank Account</h4>
                    <p className="text-zinc-400 text-sm mt-1">A valid SEPA-zone bank account in your name to process European transactions and payouts.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">100% Secure Process</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your documents are encrypted and handled with strict privacy protocols. We guarantee a safe registration process.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] group">
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
              <Clock className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fast & Efficient</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Skip the confusion. Our streamlined forms and expert team ensure your account is verified in record time.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <MessageSquare className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Live WhatsApp Support</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We guide you step-by-step. From document submission to live face verification, our team is always one message away.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
"use client";

import { 
  MessageSquare, Phone, Megaphone, ArrowRight, 
  ShieldCheck, Clock, ChevronRight
} from "lucide-react";

export default function RussianContactPage() {
  return (
    <div dir="ltr" className="min-h-screen bg-black text-white relative overflow-hidden pt-32 pb-20">
      
      {/* --- Трехмерные световые эффекты --- */}
      <div className="absolute top-0 left-[50%] -translate-x-[50%] w-[800px] h-[400px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* ================= 1. HERO SECTION ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4" />
            <span>Приоритетная поддержка 24/7</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg">
            Как мы можем вам помочь?
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed font-medium mt-4">
            У вас есть вопрос, вы столкнулись с проблемой или нуждаетесь в руководстве? Наша команда экспертов здесь, чтобы ответить вам.
          </p>
        </section>

        {/* ================= 2. SUPPORT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Карточка №1: Великобритания и Европа */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group shadow-[0_10px_30px_rgba(16,185,129,0.05)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]">
            <div>
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Поддержка UK и Европы</h3>
              <p className="text-zinc-400 text-sm mb-6">Напишите нам напрямую для отслеживания статуса аккаунта, верификации лица или по общим вопросам.</p>
              
              <div className="flex items-center space-x-3 bg-zinc-950 p-4 rounded-xl border border-zinc-800 mb-8 w-fit">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span className="text-lg font-bold tracking-widest" dir="ltr">+44 7476 620282</span>
              </div>
            </div>

            <a 
              href="https://wa.me/447476620282" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full group/btn flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-6 py-4 rounded-2xl font-extrabold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span>Написать в WhatsApp</span>
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Карточка №2: Международная */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group shadow-[0_10px_30px_rgba(6,182,212,0.05)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]">
            <div>
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Международная поддержка</h3>
              <p className="text-zinc-400 text-sm mb-6">Напишите нам напрямую для отслеживания статуса аккаунта, верификации лица или по общим вопросам.</p>
              
              <div className="flex items-center space-x-3 bg-zinc-950 p-4 rounded-xl border border-zinc-800 mb-8 w-fit">
                <Phone className="w-5 h-5 text-cyan-500" />
                <span className="text-lg font-bold tracking-widest" dir="ltr">+1 934 203 2497</span>
              </div>
            </div>

            <a 
              href="https://wa.me/19342032497" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full group/btn flex items-center justify-center space-x-2 bg-zinc-800 border border-zinc-700 hover:border-cyan-500 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-500/10"
            >
              <span>Написать в WhatsApp</span>
              <ChevronRight className="w-5 h-5 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* ================= 3. WHATSAPP CHANNEL BANNER ================= */}
        <div className="relative p-[2px] rounded-3xl md:rounded-[2.5rem] bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-shadow duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 blur-xl opacity-30 pointer-events-none"></div>
          
          <div className="relative bg-zinc-950 rounded-[calc(1.5rem-2px)] md:rounded-[calc(2.5rem-2px)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10 w-full">
            
            <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left w-full">
              <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full mb-4">
                <Megaphone className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Новости и обновления</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
                Присоединяйтесь к нашему официальному каналу
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                Будьте в курсе! Присоединяйтесь к нашему каналу в WhatsApp для получения последних новостей, изменений правил платформ и обновлений цен.
              </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
              <a 
                href="https://whatsapp.com/channel/0029VbD9jhE8vd1LOVpEaa2o" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full md:w-auto flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-400"
              >
                <span>Присоединиться сейчас</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

        {/* ================= 4. FOOTER NOTE ================= */}
        <div className="flex items-center justify-center space-x-2 text-zinc-500 text-sm font-medium">
          <Clock className="w-4 h-4" />
          <span>Среднее время ответа: менее 2 часов</span>
        </div>

      </div>
    </div>
  );
}
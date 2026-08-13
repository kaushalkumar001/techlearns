import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTASection({ onOpenModal }) {
  return (
    <section>
      
      {/* Background Glow Orbs */}
      <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30" />

      {/* Main Banner Card (Outer Div Removed) */}
      <div className="max-w-7xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-[#5B21B6]/90 via-[#612D92] to-[#0F1D38]/90 border border-white/15 shadow-2xl backdrop-blur-xl text-center relative z-10 overflow-hidden">
        
        {/* Inner ambient light glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* YOUR FUTURE, YOUR CHOICE Tag with 10px Border Radius, 10px Padding & Glass Effect */}
        <div className="inline-flex items-center justify-center gap-3 p-[10px] px-6 rounded-[10px] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-xs sm:text-sm font-extrabold text-purple-100 uppercase tracking-widest mb-6">
          <span className="w-6 h-[1px] bg-purple-300/50 hidden sm:inline-block" />
          <span>YOUR FUTURE, YOUR CHOICE</span>
          <span className="w-6 h-[1px] bg-purple-300/50 hidden sm:inline-block" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
          Ready to experience how <br />
          technology is <span className="text-purple-200">actually built?</span>
        </h2>

        <p className="text-sm sm:text-base text-purple-100 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
          Book your free career diagnostic assessment. Get a personalized role-fit roadmap and baseline report in minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenModal()}
            className="w-full sm:w-auto py-4 px-8 rounded-xl bg-white hover:bg-slate-100 text-[#612D92] font-black text-sm tracking-wide shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#612D92]" /> Book Free Career Diagnostic
          </button>
          
          <a
            href="#programs"
            className="w-full sm:w-auto py-4 px-8 rounded-xl bg-purple-950/60 hover:bg-purple-950 border border-purple-400/40 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            Explore Programs <ArrowRight className="w-4 h-4 text-purple-200" />
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-purple-200">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>No commitment required · Confidential evaluation · Instant feedback</span>
        </div>

      </div>

    </section>
  );
}

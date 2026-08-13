import React from 'react';
import { Wrench, Zap, Award, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenModal }) {
  return (
    <section className="relative pt-24 pb-10 bg-white overflow-hidden text-center">
      
      {/* Top Hero Heading Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Sub-heading in Purple */}
        <p className="text-[11px] sm:text-xs font-extrabold text-[#612D92] uppercase tracking-[0.2em] mb-3">
          Learn. Experience. Build. Compete. Prove. Lead.
        </p>

        {/* Main H1 Headline with fluid responsive typography */}
        <h1 className="text-[clamp(1.75rem,5vw,2.875rem)] font-black text-[#0F1D38] leading-[1.2] tracking-tight max-w-4xl mx-auto mb-5">
          Learning technology isn't enough.<br className="hidden sm:inline" />
          Experience how it's built.
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-6 max-w-xl mx-auto">
          Designed to get you industry ready with
        </p>

        {/* 3 Pill Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8">
          
          <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white border border-gray-200 text-[#612D92] text-xs sm:text-sm font-bold shadow-2xs hover:border-[#612D92] transition-all">
            <Wrench className="w-4 h-4 text-[#612D92] shrink-0" />
            <span>Hands-on training</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white border border-gray-200 text-[#612D92] text-xs sm:text-sm font-bold shadow-2xs hover:border-[#612D92] transition-all">
            <Zap className="w-4 h-4 text-[#612D92] shrink-0" />
            <span>Live projects</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white border border-gray-200 text-[#612D92] text-xs sm:text-sm font-bold shadow-2xs hover:border-[#612D92] transition-all">
            <Award className="w-4 h-4 text-[#612D92] shrink-0" />
            <span>Guaranteed internship</span>
          </div>

        </div>

        {/* Student Hero Image positioned ON TOP (z-20) */}
        <div className="relative max-w-2xl mx-auto -mb-20 sm:-mb-28 z-20 pointer-events-none px-4">
          {/* Radial Violet Glow behind students */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-purple-200/80 blur-3xl -z-10" />
          
          <img
            src="/homepage-img.png"
            alt="Techlearns Students"
            loading="lazy"
            className="w-full h-auto object-contain mx-auto drop-shadow-xl max-h-[380px] sm:max-h-none"
          />
        </div>

      </div>

      {/* Marquee Ticker Strip sitting BEHIND the student image (z-10) */}
      <div className="w-full bg-[#612D92] text-white py-3.5 overflow-hidden select-none relative z-10 shadow-md">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-8 px-4 text-xs sm:text-sm font-extrabold tracking-wide uppercase shrink-0">
              <span>Hands-on Training</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>Career-Focused Curriculum</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>Job-Ready Skills</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>Industry Mentorship</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>1:1 Guidance</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>Real-World Experience</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>Placement Support</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Counter Container */}
      <div className="bg-white pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-2xl border-2 border-[#8A80BD] bg-white p-6 sm:p-8 shadow-lg shadow-purple-500/5 -mt-[16px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 text-center">
            
            {/* Stat 1 */}
            <div className="md:border-r border-gray-200 px-2 sm:px-4 mb-4 md:mb-0">
              <h2 className="text-2xl sm:text-4xl font-black text-[#612D92]">
                <span>30</span>+
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#0F1D38] mt-1.5 leading-snug">
                Years of Techlearns Industry Expertise
              </p>
            </div>

            {/* Stat 2 */}
            <div className="md:border-r border-gray-200 px-2 sm:px-4 mb-4 md:mb-0">
              <h2 className="text-2xl sm:text-4xl font-black text-[#612D92]">
                <span>20K</span>+
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#0F1D38] mt-1.5 leading-snug">
                Global Students & Alumni
              </p>
            </div>

            {/* Stat 3 */}
            <div className="md:border-r border-gray-200 px-2 sm:px-4">
              <h2 className="text-2xl sm:text-4xl font-black text-[#612D92]">
                <span>60</span>+
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#0F1D38] mt-1.5 leading-snug">
                Hiring Partners and Growing
              </p>
            </div>

            {/* Stat 4 */}
            <div className="px-2 sm:px-4">
              <h2 className="text-2xl sm:text-4xl font-black text-[#612D92]">
                <span>100</span>%
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#0F1D38] mt-1.5 leading-snug">
                Guaranteed Skill Verification for Every Student
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

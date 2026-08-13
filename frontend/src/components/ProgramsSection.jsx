import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { programsData } from '../data/programs';

export default function ProgramsSection({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollContainerRef = useRef(null);

  const categories = [
    'All',
    'AI & GenAI',
    'Software Eng',
    'Cloud & DevOps',
    'Cybersecurity',
    'Data & Analytics'
  ];

  const filteredPrograms = activeCategory === 'All'
    ? programsData
    : programsData.filter((p) => {
        if (activeCategory === 'AI & GenAI') return p.category.includes('AI');
        if (activeCategory === 'Software Eng') return p.category.includes('Software');
        if (activeCategory === 'Cloud & DevOps') return p.category.includes('Cloud');
        if (activeCategory === 'Cybersecurity') return p.category.includes('Security');
        if (activeCategory === 'Data & Analytics') return p.category.includes('Data');
        return true;
      });

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-20 bg-slate-50/50 border-t border-slate-200 relative overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eye-Catching Header matching human-crafted design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-left max-w-2xl">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-[#8B5CF6] text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Select Your Career Track</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0F1D38] uppercase tracking-tight leading-tight">
              WHERE TO START <span className="text-[#8B5CF6]">YOUR TECH JOURNEY?</span>
            </h2>

            <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-2">
              Choose from our industry-aligned corporate experience tracks designed by senior architects & engineering leads.
            </p>
          </div>

          {/* Carousel Navigation Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#0F1D38] hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6] flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#0F1D38] hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6] flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#8B5CF6] text-white shadow-md shadow-[#8B5CF6]/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-purple-300 hover:text-[#8B5CF6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrolling Carousel with Smaller, Human-Crafted Program Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6 pt-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {filteredPrograms.map((program) => {
            const tagList = program.tags || program.highlights || [];
            const roleTitle = program.certification || program.role || 'Certified Professional';

            return (
              <motion.div
                key={program.id}
                whileHover={{ y: -6 }}
                className="min-w-[300px] sm:min-w-[330px] max-w-[340px] shrink-0 snap-start bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-[#8B5CF6] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Top Pill Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-extrabold text-[#8B5CF6] uppercase tracking-wider">
                      {program.badge || program.category}
                    </span>
                    
                    <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      {program.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#0F1D38] leading-snug mb-3">
                    {program.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Program Highlights/Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mb-6">
                    {tagList.slice(0, 4).map((t, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                        <CheckCircle2 className="w-3 h-3 text-[#8B5CF6] shrink-0" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="truncate">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      CERTIFICATION
                    </span>
                    <span className="text-[11px] font-extrabold text-[#0F1D38] truncate block">
                      {roleTitle}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenModal(program.title)}
                    className="inline-flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-bold transition-all shadow-sm shrink-0 cursor-pointer"
                  >
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

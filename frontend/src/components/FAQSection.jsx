import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqsData } from '../data/stats';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header matching exact reference screenshot */}
        <div className="text-center mb-12 sm:mb-14">
          
          {/* Capsule Pill Tag */}
          <div className="inline-block mb-3">
            <span className="bg-[#F4EFFF] border border-[#8B5CF6]/30 text-[#612D92] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xs">
              TECHLEARNS · HOME SOLUTION & KNOWLEDGE BASE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0F1D38] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List matching exact reference screenshot */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#F6F4FE] rounded-2xl border-l-[5px] border-[#612D92] shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0F1D38] hover:text-[#612D92] transition-colors cursor-pointer"
                >
                  <span className="leading-snug pr-2">
                    {faq.question}
                  </span>
                  
                  {/* Circular Purple Toggle Icon matching screenshot */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#612D92] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200">
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Animated Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-purple-100/60 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

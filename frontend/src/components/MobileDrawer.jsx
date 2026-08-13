import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Sparkles } from 'lucide-react';
import { programsData } from '../data/programs';
import logo from '../assets/techlearns-logo.png';

export default function MobileDrawer({ isOpen, onClose, onOpenModal }) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Off-canvas Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white border-l border-slate-200 p-6 overflow-y-auto shadow-2xl flex flex-col justify-between z-10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <img src={logo} alt="Techlearns Logo" className="h-8 w-auto object-contain" />
                <button
                  onClick={onClose}
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-xl bg-slate-100/80 hover:bg-slate-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3 mb-6">
                <a href="#programs" onClick={onClose} className="flex items-center justify-between text-sm font-bold text-[#0F1D38] py-2 hover:text-[#8B5CF6] transition-colors">
                  Programs <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a href="#cel" onClick={onClose} className="flex items-center justify-between text-sm font-bold text-[#0F1D38] py-2 hover:text-[#8B5CF6] transition-colors">
                  Corporate Experience Learning <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a href="#pipeline" onClick={onClose} className="flex items-center justify-between text-sm font-bold text-[#0F1D38] py-2 hover:text-[#8B5CF6] transition-colors">
                  Engineering Pipeline <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a href="#infrastructure" onClick={onClose} className="flex items-center justify-between text-sm font-bold text-[#0F1D38] py-2 hover:text-[#8B5CF6] transition-colors">
                  Infrastructure & Stats <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a href="#faqs" onClick={onClose} className="flex items-center justify-between text-sm font-bold text-[#0F1D38] py-2 hover:text-[#8B5CF6] transition-colors">
                  FAQs <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </nav>

              {/* Featured Courses List */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-[11px] font-extrabold text-[#8B5CF6] uppercase tracking-wider block mb-3">
                  Explore Programs
                </span>
                <div className="flex flex-col gap-2">
                  {programsData.slice(0, 4).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onClose();
                        onOpenModal(p.title);
                      }}
                      className="text-left text-xs font-semibold text-slate-700 hover:text-[#8B5CF6] py-2 px-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-purple-200 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span className="truncate pr-2">{p.title}</span>
                      <span className="text-[10px] font-bold text-[#8B5CF6] shrink-0">{p.duration}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-slate-200 mt-6">
              <button
                onClick={() => {
                  onClose();
                  onOpenModal();
                }}
                className="w-full py-3.5 px-4 rounded-full bg-[#612D92] hover:bg-[#4F1E7E] text-white font-bold text-xs tracking-wide shadow-md shadow-[#612D92]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white" /> Book a Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

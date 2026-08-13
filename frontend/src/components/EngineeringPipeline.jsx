import React from 'react';
import { motion } from 'framer-motion';
import { pathwayStepsData } from '../data/stats';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function EngineeringPipeline({ onOpenModal }) {
  return (
    <section id="pipeline" className="py-16 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold text-[#612D92] font-mono tracking-widest uppercase block mb-2">
            YOUR ENGINEERING PIPELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F1D38] leading-tight mb-3">
            Pathway to <span className="text-gradient-purple">Your Success</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Five structural milestones that take you from logical orientation to an active corporate software engineering launch.
          </p>
        </motion.div>

        {/* 5 Steps Grid with Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {pathwayStepsData.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-5 border-slate-200 hover:border-purple-300 flex flex-col justify-between relative bg-white shadow-xs hover:shadow-md transition-all"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-purple-100 text-[#612D92] font-black text-xs flex items-center justify-center border border-purple-200">
                    {s.step}
                  </span>
                  <span className="text-2xl">{s.icon}</span>
                </div>

                <span className="text-[10px] font-bold text-[#612D92] uppercase tracking-wider block mb-1">
                  {s.tagline}
                </span>

                <h3 className="text-sm font-bold text-[#0F1D38] mb-2 leading-snug">
                  {s.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenModal(`TLET Step ${s.step}: ${s.title}`)}
                  className="text-[11px] font-bold text-[#612D92] hover:text-[#4F1E7E] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Details <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Image Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-[#612D92] to-[#0F1D38] text-white p-6 sm:p-8 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          <div className="md:col-span-7 space-y-3 text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 text-purple-200 px-3 py-1 rounded-full border border-purple-300/30 inline-flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> PRACTICAL WORKFLOW EXPERIENCE
            </span>
            <h3 className="text-xl sm:text-2xl font-black leading-snug">
              Work directly on dual-monitor development environments with AI Copilots
            </h3>
            <p className="text-xs text-purple-100 leading-relaxed font-medium">
              Train with real-world CI/CD pipelines, automated testing suites, and AI coding assistants under direct supervision of senior engineering leads.
            </p>
            <button
              onClick={() => onOpenModal()}
              className="mt-2 py-2.5 px-5 rounded-xl bg-white text-[#612D92] font-bold text-xs shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              Start Your Pipeline Diagnostic
            </button>
          </div>

          <div className="md:col-span-5 rounded-xl overflow-hidden shadow-lg border border-purple-400/30">
            <img
              src="/ai_developer.png"
              alt="AI Engineer on Dual Monitors"
              loading="lazy"
              className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

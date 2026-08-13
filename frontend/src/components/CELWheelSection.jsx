import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { celStagesData } from '../data/celStages';
import { CheckCircle } from 'lucide-react';

export default function CELWheelSection() {
  const [activeStageId, setActiveStageId] = useState('01');

  const activeStage = celStagesData.find((s) => s.id === activeStageId) || celStagesData[0];

  return (
    <section id="cel" className="py-16 bg-gradient-to-b from-white via-purple-50/20 to-white border-t border-slate-200 relative">
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
            WHY TECHLEARNS CEL SYSTEM?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F1D38] leading-tight mb-3">
            Built by Industry Leaders to Shape Future Engineers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            An operating system for your capability — select any of the 8 segments to reveal how we bridge academic theory and corporate practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 8 Stages Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
              {celStagesData.map((stage) => {
                const isActive = stage.id === activeStageId;
                return (
                  <motion.button
                    key={stage.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all flex items-center gap-3 cursor-pointer ${
                      isActive
                        ? 'bg-[#612D92] border-[#612D92] text-white shadow-lg shadow-[#612D92]/20 scale-[1.02]'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-purple-300 hover:text-[#612D92]'
                    }`}
                  >
                    <span className="text-xl shrink-0">{stage.icon}</span>
                    <div className="overflow-hidden">
                      <span className={`text-[10px] font-mono font-bold uppercase block tracking-wider ${isActive ? 'text-purple-200' : 'text-[#612D92]'}`}>
                        Stage {stage.id}
                      </span>
                      <h4 className="text-xs font-bold leading-snug truncate">
                        {stage.title}
                      </h4>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Stage Detail Card + Generated Tech Image */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStageId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-8 border-l-4 border-l-[#612D92] relative overflow-hidden shadow-xl bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#612D92] uppercase tracking-widest bg-purple-100 px-3 py-1 rounded border border-purple-200">
                    STAGE {activeStage.id} / 08
                  </span>
                  <span className="text-3xl">{activeStage.icon}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0F1D38] mb-3 leading-snug">
                  {activeStage.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-5">
                  {activeStage.description}
                </p>

                {/* Generated Image Showcase embedded inside CEL detail */}
                <div className="my-4 rounded-xl overflow-hidden border border-purple-100 shadow-md max-h-48 relative">
                  <img
                    src="/corporate_sprint.png"
                    alt="Corporate Sprint Work Rituals"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    ⚡ Live Corporate Sprint & Standup Rituals
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#612D92]">
                    <CheckCircle className="w-4 h-4 text-[#612D92]" />
                    <span>Status: {activeStage.status}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Verified Protocol
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

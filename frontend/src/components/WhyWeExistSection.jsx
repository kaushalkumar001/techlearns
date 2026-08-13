import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Rocket, Award, Briefcase, Sparkles } from 'lucide-react';
import logo from '../assets/techlearns-logo.png';

export default function WhyWeExistSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-slate-200 relative overflow-hidden" style={{ backgroundColor: '#F8F6FF' }}>
      
      {/* Decorative Floating Dots / Sparks */}
      <div className="absolute top-10 left-10 opacity-30 text-[#8B5CF6] pointer-events-none">
        <Sparkles className="w-8 h-8 animate-pulse" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-30 text-[#8B5CF6] pointer-events-none">
        <Sparkles className="w-8 h-8 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#8B5CF6] mb-3 tracking-tight">
            Why Choose Techlearns?
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-[#0B1F3A]/80 leading-relaxed max-w-2xl mx-auto">
            Techlearns empowers students with real-world IT skills, internships, freelancing opportunities, and startup guidance for a future-ready career.
          </p>
        </motion.div>

        {/* 3 Columns Grid matching porlobiit.com exactly with icons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-8">
          
          {/* Left Column: Top-Left & Bottom-Left Blocks */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 sm:space-y-16 text-left">
            
            {/* Top-Left */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#8B5CF6] flex items-center justify-center shrink-0 border border-purple-200">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B1F3A] leading-snug">
                  Industry-Driven Learning
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-11">
                Hands-on training with live projects, real clients & tools used by top tech companies.
              </p>
            </motion.div>

            {/* Bottom-Left */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 border border-indigo-200">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B1F3A] leading-snug">
                  Internship & Experience
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-11">
                Guaranteed corporate experience & internships with Techlearns ecosystem to gain real corporate exposure.
              </p>
            </motion.div>

          </div>

          {/* Center Column: Techlearns Central Logo */}
          <div className="lg:col-span-4 relative flex items-center justify-center py-4 my-2 lg:my-0">
            <div className="relative w-full max-w-sm mx-auto flex items-center justify-center">
              
              {/* SVG Curved Connecting Arrows (desktop only) */}
              <svg viewBox="0 0 400 300" className="w-full h-auto overflow-visible pointer-events-none hidden lg:block">
                <defs>
                  <marker
                    id="arrowhead-violet"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8B5CF6" />
                  </marker>
                </defs>

                {/* Top-Left Arrow */}
                <motion.path
                  d="M 140 120 C 100 80, 50 60, 10 60"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  fill="none"
                  markerEnd="url(#arrowhead-violet)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Top-Right Arrow */}
                <motion.path
                  d="M 260 120 C 300 80, 350 60, 390 60"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  fill="none"
                  markerEnd="url(#arrowhead-violet)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Bottom-Left Arrow */}
                <motion.path
                  d="M 140 180 C 100 220, 50 240, 10 240"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  fill="none"
                  markerEnd="url(#arrowhead-violet)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Bottom-Right Arrow */}
                <motion.path
                  d="M 260 180 C 300 220, 350 240, 390 240"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  fill="none"
                  markerEnd="url(#arrowhead-violet)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </svg>

              {/* Central Standalone Techlearns Logo */}
              <div className="lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 p-4 sm:p-6 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Techlearns Logo"
                  className="w-40 sm:w-52 lg:w-56 h-auto object-contain"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Top-Right & Bottom-Right Blocks */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 sm:space-y-16 text-left">
            
            {/* Top-Right */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <Rocket className="w-4 h-4" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B1F3A] leading-snug">
                  Freelancing & Startup Path
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-11">
                Learn how to earn while you study or build your own startup with expert mentoring.
              </p>
            </motion.div>

            {/* Bottom-Right */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B1F3A] leading-snug">
                  Career-Ready Portfolio
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-11">
                Graduate with a verified Skill Passport, portfolio & experience that employers instantly value.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

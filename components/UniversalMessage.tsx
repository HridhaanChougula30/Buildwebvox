'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Building, Sparkles } from 'lucide-react';

interface UniversalMessageProps {
  onOpenDemo: () => void;
}

export default function UniversalMessage({ onOpenDemo }: UniversalMessageProps) {
  const steps = [
    { title: 'YOUR BUSINESS', highlight: false },
    { title: 'YOUR WORKFLOW', highlight: false },
    { title: 'CUSTOM AI AGENT', highlight: true },
    { title: 'YOUR WEBSITE', highlight: false },
    { title: 'YOUR AUTOMATIONS', highlight: false },
    { title: 'BETTER CUSTOMER EXPERIENCE', highlight: true },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-obsidian via-obsidian-surface to-obsidian relative overflow-hidden border-y border-white/10">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          Built For{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
            Every Business.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">
          From companies and offices to clinics, hospitals, restaurants, shops, hotels, schools, real estate businesses and everything in between — Buildwebvox builds technology around the way you work.
        </p>

        {/* Workflow Diagram Pipeline */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-blue-500/20 shadow-2xl mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider transition-transform hover:scale-105 ${
                    step.highlight
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-blue-500/30 border border-cyan-400/40'
                      : 'bg-white/5 text-slate-200 border border-white/10'
                  }`}
                >
                  {step.title}
                </div>
                {idx < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-cyan-400 hidden sm:block animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all group"
          >
            <Sparkles className="w-5 h-5 text-cyan-200" />
            Tell Us About Your Business
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

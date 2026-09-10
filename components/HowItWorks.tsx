'use client';

import { motion } from 'framer-motion';
import { Search, Compass, Code2, Rocket, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenDemo: () => void;
}

export default function HowItWorks({ onOpenDemo }: HowItWorksProps) {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Workflow Analysis',
      desc: 'Understand your business, customers, workflows and goals.',
      icon: Search,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      num: '02',
      title: 'DESIGN',
      subtitle: 'Personality & Logic',
      desc: 'Design the AI personality, conversation flows and business logic.',
      icon: Compass,
      gradient: 'from-indigo-500 to-violet-500',
    },
    {
      num: '03',
      title: 'BUILD',
      subtitle: 'System Integration',
      desc: 'Connect AI, telephony, CRM, calendars, WhatsApp and other systems.',
      icon: Code2,
      gradient: 'from-violet-500 to-cyan-500',
    },
    {
      num: '04',
      title: 'DEPLOY',
      subtitle: 'Launch & Optimize',
      desc: 'Launch, monitor and continuously improve the system.',
      icon: Rocket,
      gradient: 'from-cyan-500 to-emerald-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-obsidian-surface relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            Streamlined Implementation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            From Idea To{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              AI Employee.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            A precise 4-step engineering process designed to deploy custom intelligence into your business operations.
          </p>
        </div>

        {/* 4-Step Connected Timeline */}
        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 via-violet-500 to-emerald-500 -translate-y-1/2 opacity-30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="glass-panel p-8 rounded-3xl border border-white/10 relative hover:border-blue-500/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Pill */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                        <div className="w-full h-full bg-obsidian rounded-[14px] flex items-center justify-center text-white">
                          <IconComp className="w-6 h-6 text-cyan-300" />
                        </div>
                      </div>
                      <span className="text-3xl font-extrabold font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-semibold uppercase text-slate-400 mb-1">
                      {step.subtitle}
                    </div>

                    <h3 className="text-2xl font-extrabold text-white mb-3 tracking-wide">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span>Phase {step.num}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold shadow-xl shadow-blue-600/30 hover:scale-105 transition-all"
          >
            Start Phase 01 Discover
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

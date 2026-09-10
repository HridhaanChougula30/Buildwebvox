'use client';

import { motion } from 'framer-motion';
import { Layers, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      title: 'AI Receptionist Solution',
      industry: 'Healthcare Sector',
      challenge: 'High call volume leading to unanswered patient enquiries and long hold times during peak hours.',
      solution: 'Deployed 24/7 custom AI voice agent to handle caller intake, appointment scheduling, and clinic FAQs.',
      result: 'Automated 100% of routine caller triage with instant CRM sync and seamless human nurse handoff.',
    },
    {
      title: 'AI Lead Qualification Agent',
      industry: 'Real Estate Agency',
      challenge: 'Unqualified buyer calls overwhelming sales agents with repetitive property questions.',
      solution: 'Integrated custom voice agent & web agent to pre-qualify buyer budget, timeframe, and location preference.',
      result: 'Direct calendar booking of site visits for pre-screened buyers into agent schedules.',
    },
    {
      title: 'AI Customer Support System',
      industry: 'E-commerce Brand',
      challenge: 'Delayed response times for order tracking and returns during holiday surge.',
      solution: 'Connected voice agent and web widget directly to order management API for automated status lookups.',
      result: 'Instant resolution of standard logistics enquiries with zero manual agent intervention.',
    },
    {
      title: 'AI Appointment Agent',
      industry: 'Multi-Specialty Clinic',
      challenge: 'High appointment no-show rate and complex doctor schedule management.',
      solution: 'Automated outbound confirmation calls & instant SMS reschedule links triggered via calendar sync.',
      result: 'Streamlined scheduling workflow with automated patient reminders.',
    },
    {
      title: 'Premium Website & AI Integration',
      industry: 'Technology Company',
      challenge: 'Outdated legacy website lacking interactive conversion flows and modern tech presentation.',
      solution: 'Engineered high-performance digital storefront with native Buildwebvox AI voice demo widget.',
      result: 'Unified digital experience combining brand authority with instant AI interaction.',
    },
  ];

  return (
    <section className="py-24 bg-obsidian relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            <Activity className="w-4 h-4 text-cyan-400" /> Architecture Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technology In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Action.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Illustrative implementation blueprints demonstrating how Buildwebvox technology solves operational bottlenecks.
          </p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cases.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel p-7 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {item.industry}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Case Study 0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <div className="space-y-3 text-xs mb-6">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <strong className="text-rose-400 block mb-1 font-mono uppercase text-[10px]">Challenge:</strong>
                    <span className="text-slate-300">{item.challenge}</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <strong className="text-indigo-400 block mb-1 font-mono uppercase text-[10px]">Solution:</strong>
                    <span className="text-slate-300">{item.solution}</span>
                  </div>
                  <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                    <strong className="text-emerald-400 block mb-1 font-mono uppercase text-[10px]">Result:</strong>
                    <span className="text-emerald-200">{item.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-xs text-slate-500 font-mono">
          * Implementation scenarios represent standard functional architecture blueprints.
        </div>
      </div>
    </section>
  );
}

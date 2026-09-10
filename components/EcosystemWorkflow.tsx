'use client';

import { motion } from 'framer-motion';
import { User, Globe, Mic, CheckCircle, Database, Calendar, Users, ArrowRight, ChevronRight, Zap } from 'lucide-react';

export default function EcosystemWorkflow() {
  const steps = [
    { title: 'VISITOR', icon: User, desc: 'Incoming customer on phone or website', color: 'text-slate-300 bg-slate-800' },
    { title: 'WEBSITE', icon: Globe, desc: 'High-converting digital presence', color: 'text-blue-400 bg-blue-500/10' },
    { title: 'AI CHAT / VOICE', icon: Mic, desc: 'Instant 24/7 intelligent agent response', color: 'text-cyan-400 bg-cyan-500/10' },
    { title: 'LEAD QUALIFICATION', icon: CheckCircle, desc: 'Real-time intent & needs scoring', color: 'text-indigo-400 bg-indigo-500/10' },
    { title: 'CRM', icon: Database, desc: 'HubSpot / Salesforce instant record creation', color: 'text-violet-400 bg-violet-500/10' },
    { title: 'CALENDAR', icon: Calendar, desc: 'Google / Outlook appointment booking', color: 'text-emerald-400 bg-emerald-500/10' },
    { title: 'SALES / SUPPORT TEAM', icon: Users, desc: 'Human handoff only when required', color: 'text-amber-400 bg-amber-500/10' },
  ];

  return (
    <section className="py-24 bg-obsidian relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            <Zap className="w-4 h-4 text-cyan-400" /> Connected Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your Website And AI.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Working As One.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Your website shouldn't operate separately from your AI. Buildwebvox can connect your digital presence with intelligent agents and business workflows.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${step.color} border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-mono font-bold text-white tracking-wider mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

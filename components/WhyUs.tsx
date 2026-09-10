'use client';

import { motion } from 'framer-motion';
import { SlidersHorizontal, MessageSquareHeart, Network, LineChart, ShieldCheck } from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      num: '01',
      title: 'BUILT FOR YOUR WORKFLOW',
      desc: 'We design around the way your company actually operates. No forced templates or rigid rigid setups.',
      icon: SlidersHorizontal,
      color: 'text-blue-400 border-blue-500/20 bg-blue-500/10',
    },
    {
      num: '02',
      title: 'NATURAL CONVERSATIONS',
      desc: 'AI agents designed to communicate naturally with customers, understanding accents, interruptions, and context.',
      icon: MessageSquareHeart,
      color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/10',
    },
    {
      num: '03',
      title: 'CONNECTED SYSTEMS',
      desc: 'Connect voice, websites, CRM, calendars and automation into a unified digital ecosystem.',
      icon: Network,
      color: 'text-violet-400 border-violet-500/20 bg-violet-500/10',
    },
    {
      num: '04',
      title: 'BUILT TO SCALE',
      desc: 'Start with one workflow and expand as your business grows without re-engineering your core stack.',
      icon: LineChart,
      color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
    },
  ];

  return (
    <section className="py-24 bg-obsidian relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            The Buildwebvox Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Not Just AI.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Engineered Around Your Business.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Why leading businesses choose Buildwebvox as their core AI and web engineering partner.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${pillar.color} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-mono font-extrabold text-slate-600 group-hover:text-cyan-400 transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-wide">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

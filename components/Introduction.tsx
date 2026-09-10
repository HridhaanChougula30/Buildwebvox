'use client';

import { motion } from 'framer-motion';
import { Mic, Globe, Zap, Plus, Layers, User, ShieldCheck } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="introduction" className="py-20 lg:py-28 bg-obsidian-surface border-y border-white/10 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Co-Founder Introduction Card Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 mb-16 relative overflow-hidden shadow-xl"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-400 p-[1.5px] shrink-0">
              <div className="w-full h-full bg-obsidian rounded-[14px] flex items-center justify-center text-cyan-300">
                <User className="w-8 h-8" />
              </div>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="text-sm font-extrabold text-white">Hridhaan Chougula</span>
                <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                  Co-Founder, Buildwebvox
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                "Hridhaan Chougula is the Co-Founder behind Buildwebvox, focused on combining AI voice technology, automation and modern web development to create practical digital systems for businesses."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 font-semibold mb-4 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" /> Core Technology Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            AI That Talks.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Websites That Work.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
            Businesses don't need more complicated software. They need technology that actually works for them.
          </p>
        </div>

        {/* The Ecosystem Equation: AI Voice + Websites + Automation */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center mb-16">
          {/* Card 1: AI Voice */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-3 glass-panel p-8 rounded-3xl border border-white/10 text-center relative group"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Mic className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">AI Voice</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              24/7 intelligent voice agents that answer calls, handle enquiries, and convert callers into customers.
            </p>
          </motion.div>

          {/* Plus Icon 1 */}
          <div className="md:col-span-1 flex items-center justify-center text-slate-500 my-2 md:my-0">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
              <Plus className="w-5 h-5" />
            </div>
          </div>

          {/* Card 2: Websites */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-3 glass-panel p-8 rounded-3xl border border-white/10 text-center relative group"
          >
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Websites</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              High-converting, ultra-fast digital storefronts engineered to establish authority and generate leads.
            </p>
          </motion.div>

          {/* Plus Icon 2 */}
          <div className="md:col-span-1 flex items-center justify-center text-slate-500 my-2 md:my-0">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-violet-400">
              <Plus className="w-5 h-5" />
            </div>
          </div>

          {/* Card 3: Automation */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-3 glass-panel p-8 rounded-3xl border border-white/10 text-center relative group"
          >
            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Automation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Seamlessly linking voice and web data with CRMs, calendars, WhatsApp, and operational workflows.
            </p>
          </motion.div>
        </div>

        {/* Conclusion Banner */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-blue-950/30 via-indigo-950/30 to-violet-950/30 text-center relative">
          <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-4">
            "Buildwebvox combines AI voice technology, modern web development and business automation into practical systems designed around your business."
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
            <span>Tailored Engineering • Led by Co-Founder Hridhaan Chougula</span>
          </div>
        </div>
      </div>
    </section>
  );
}

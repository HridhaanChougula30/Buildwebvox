'use client';

import { motion } from 'framer-motion';
import { User, Code2, Sparkles, ShieldCheck } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-obsidian relative border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built With A{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Builder's Mindset.
            </span>
          </h2>
        </div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 max-w-3xl mx-auto relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Avatar / Profile Graphic */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 p-[2px] shadow-xl shadow-blue-500/20">
                <div className="w-full h-full bg-obsidian rounded-[14px] flex items-center justify-center text-cyan-300">
                  <User className="w-12 h-12" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-lg border border-obsidian">
                <Code2 className="w-4 h-4" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                Hridhaan Chougula
              </h3>
              <p className="text-sm font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-6">
                Co-Founder, Buildwebvox
              </p>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                "Hridhaan Chougula is the Co-Founder behind Buildwebvox, focused on combining AI voice technology, automation and modern web development to create practical digital systems for businesses."
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <span className="text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  Engineering Driven
                </span>
                <span className="text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Practical AI Systems
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

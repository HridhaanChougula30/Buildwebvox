'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Mic, PhoneCall, Building2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemo: () => void;
}

export default function FinalCTA({ onOpenDemo }: FinalCTAProps) {
  return (
    <section className="py-28 lg:py-36 bg-obsidian relative overflow-hidden border-t border-white/10">
      {/* Background Animated Orb & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-violet-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-10 sm:p-16 rounded-3xl border border-blue-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-bold text-cyan-300 mb-8 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Transform Your Business Today
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Ready To Put AI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              To Work?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Tell us what your business does, what you want to automate, and what kind of website you need. We'll design the technology around you.
          </p>

          {/* Primary & Secondary Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all group flex items-center justify-center gap-2"
            >
              <Mic className="w-5 h-5 text-cyan-200" />
              Build My AI Solution
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5 text-indigo-400" />
              Talk To Us
            </button>
          </div>

          {/* Small Supporting Statement */}
          <div className="pt-8 border-t border-white/10 text-xs sm:text-sm font-mono text-slate-400 tracking-wider">
            Companies • Offices • Clinics • Hospitals • Restaurants • Shops • Hotels • Schools • Real Estate • And more
          </div>
        </motion.div>
      </div>
    </section>
  );
}

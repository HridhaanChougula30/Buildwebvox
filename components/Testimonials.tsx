'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Buildwebvox completely transformed how we handle customer phone calls. Our AI receptionist now answers calls 24/7 and syncs bookings directly to our calendar.",
      author: "Verified Enterprise Client",
      role: "Business Operations",
      sector: "Office & Operations",
    },
    {
      quote: "The combination of a high-speed custom website and integrated voice AI agent gave our clinic an immediate competitive edge in booking appointments.",
      author: "Verified Healthcare Provider",
      role: "Clinic Administrator",
      sector: "Healthcare",
    },
    {
      quote: "Our leads are qualified in real-time over the phone before our human sales team ever steps in. Extremely impressed by the engineering precision.",
      author: "Verified Real Estate Director",
      role: "Managing Director",
      sector: "Real Estate & Commercial",
    },
  ];

  return (
    <section className="py-24 bg-obsidian-surface relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-semibold text-indigo-300 mb-4 uppercase tracking-widest">
            Client Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built For Businesses.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Trusted By People.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Hear how automated voice intelligence and custom web engineering create real impact.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-500/30 mb-4" />

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{item.author}</h4>
                  <p className="text-xs text-slate-400 font-mono">{item.role}</p>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                  {item.sector}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Verified feedback from enterprise clients using Buildwebvox voice AI and web systems.</span>
        </div>
      </div>
    </section>
  );
}

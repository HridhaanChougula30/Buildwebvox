'use client';

import { motion } from 'framer-motion';
import { Home, Stethoscope, Utensils, ShoppingBag, ShoppingCart, GraduationCap, Hotel, Car, Building2, Briefcase, Store, Sparkles, ArrowRight } from 'lucide-react';

interface IndustriesProps {
  onOpenDemo: () => void;
}

export default function Industries({ onOpenDemo }: IndustriesProps) {
  const industries = [
    { title: 'Real Estate', case: 'Qualifies property buyers, answers listing specs & schedules site visits.', icon: Home },
    { title: 'Healthcare', case: 'Handles patient appointment bookings, FAQs, and clinic call routing.', icon: Stethoscope },
    { title: 'Restaurants', case: 'Manages table reservations, party bookings, and menu enquiries.', icon: Utensils },
    { title: 'Retail', case: 'Answers store hours, product stock availability, and location info.', icon: ShoppingBag },
    { title: 'E-commerce', case: '24/7 automated order status lookups, returns support, and product guidance.', icon: ShoppingCart },
    { title: 'Education', case: 'Handles admissions enquiries, course syllabus questions, and student intake.', icon: GraduationCap },
    { title: 'Hotels', case: 'Manages room bookings, concierge recommendations, and check-in procedures.', icon: Hotel },
    { title: 'Automotive', case: 'Schedules service department visits and processes vehicle sales leads.', icon: Car },
    { title: 'Corporate', case: 'Acts as centralized main receptionist, caller screening, and directory routing.', icon: Building2 },
    { title: 'Professional Services', case: 'Qualifies legal/accounting consultation leads and manages calendars.', icon: Briefcase },
    { title: 'Local Businesses', case: 'Answers local caller questions, dispatches quotes, and takes emergency calls.', icon: Store },
    { title: 'And More', case: 'Tailor-made custom AI voice and web logic engineered for any custom workflow.', icon: Sparkles, highlight: true },
  ];

  return (
    <section id="industries" className="py-24 bg-obsidian relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-semibold text-indigo-300 mb-4 uppercase tracking-widest">
            Cross-Domain Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            One Technology Company.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Every Industry.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Engineered AI agents customized to understand your specific sector terminology and client expectations.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className={`glass-panel p-6 rounded-2xl border ${
                  ind.highlight ? 'border-cyan-500/40 bg-cyan-950/20' : 'border-white/10'
                } hover:border-blue-500/40 transition-all flex flex-col justify-between group`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ind.case}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* "Don't See Your Industry?" Banner */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-obsidian flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
              Custom Engineering Request
            </span>
            <h4 className="text-2xl font-bold text-white mb-2">Don't See Your Industry?</h4>
            <p className="text-sm text-slate-300">
              Tell us what your business does and we'll design a custom solution around it.
            </p>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all shrink-0 flex items-center gap-2"
          >
            Build My Solution
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

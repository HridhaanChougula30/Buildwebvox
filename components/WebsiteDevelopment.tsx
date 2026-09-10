'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, CheckCircle2, ArrowRight, Monitor, Smartphone, Zap, ShieldCheck, Sparkles, Layers } from 'lucide-react';

interface WebsiteDevelopmentProps {
  onOpenDemo: () => void;
}

export default function WebsiteDevelopment({ onOpenDemo }: WebsiteDevelopmentProps) {
  const [activeTab, setActiveTab] = useState<'corporate' | 'saas' | 'healthcare' | 'realestate' | 'ecommerce' | 'restaurant' | 'local'>('corporate');

  const tabs = [
    { id: 'corporate', label: 'Corporate', headline: 'Enterprise Trust & Authority', accent: 'from-blue-600 to-indigo-600' },
    { id: 'saas', label: 'SaaS', headline: 'High-Converting Product Hub', accent: 'from-indigo-600 to-violet-600' },
    { id: 'healthcare', label: 'Healthcare', headline: 'Patient Care & Appointment Booking', accent: 'from-emerald-600 to-teal-600' },
    { id: 'realestate', label: 'Real Estate', headline: 'Property Showcase & Buyer Leads', accent: 'from-purple-600 to-indigo-600' },
    { id: 'ecommerce', label: 'E-commerce', headline: 'Next-Gen Digital Storefront', accent: 'from-cyan-600 to-blue-600' },
    { id: 'restaurant', label: 'Restaurant', headline: 'Menu Showcase & Reservation Desk', accent: 'from-amber-600 to-orange-600' },
    { id: 'local', label: 'Local Business', headline: 'Hyper-Local Service & Quote Desk', accent: 'from-rose-600 to-pink-600' },
  ];

  const features = [
    'Premium UI/UX design',
    'Lightning fast performance',
    'Responsive architecture',
    'Native AI agent integration',
    'Automated lead generation',
    'SEO-optimized structure',
    'Real-time analytics & tracking',
    'Custom backend functionality',
  ];

  return (
    <section className="py-24 lg:py-32 bg-obsidian-surface relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            <Globe className="w-4 h-4 text-cyan-400" /> Web Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your Website Should Do More Than{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Look Good.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            We build digital experiences that communicate your value, establish trust and turn visitors into customers.
          </p>
        </div>

        {/* Browser Mockup Showcase */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl mb-16">
          {/* Tab Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Large Interactive Mockup Frame */}
          <div className="bg-obsidian border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Mockup Top Header */}
            <div className="bg-obsidian-card px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-4 text-xs font-mono text-slate-400">
                  https://demo.buildwebvox.com/{activeTab}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <span className="hidden sm:inline text-emerald-400 font-semibold">● 100/100 Lighthouse</span>
              </div>
            </div>

            {/* Mockup Canvas */}
            <div className="p-8 sm:p-12 bg-gradient-to-b from-obsidian via-obsidian-surface to-obsidian-card min-h-[320px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {tabs.map(
                  (t) =>
                    t.id === activeTab && (
                      <motion.div
                        key={t.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-bold text-cyan-300">
                          {t.label} Edition Prototype
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                          {t.headline}
                        </h3>
                        <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                          Designed with responsive layouts, embedded Buildwebvox AI voice widgets, instant lead capture forms, and CRM integration out-of-the-box.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="text-xs text-slate-400 font-mono">Performance</div>
                            <div className="text-xl font-bold text-emerald-400">99.8% Speed</div>
                          </div>
                          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="text-xs text-slate-400 font-mono">Conversion</div>
                            <div className="text-xl font-bold text-cyan-300">Smart Lead Flow</div>
                          </div>
                          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="text-xs text-slate-400 font-mono">Voice Agent</div>
                            <div className="text-xl font-bold text-violet-400">Native Integrated</div>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Feature Grid & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-obsidian/80 border border-white/10 p-4 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-sm font-semibold text-slate-200">{feat}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenDemo}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            Start My Website
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

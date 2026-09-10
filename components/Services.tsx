'use client';

import { motion } from 'framer-motion';
import { Mic, Globe, CheckCircle2, ArrowRight, PhoneCall, Sparkles, Layout, Cpu, Zap, Shield, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onOpenDemo: () => void;
}

export default function Services({ onOpenDemo }: ServicesProps) {
  const voiceFeatures = [
    '24/7 call handling',
    'Natural conversations',
    'Inbound calls',
    'Outbound calls',
    'Appointment booking',
    'Lead qualification',
    'Customer support',
    'CRM integration',
    'Calendar integration',
    'Human handoff',
    'Multilingual support',
  ];

  const websiteFeatures = [
    'Premium UI/UX design',
    'High-performance development',
    'Mobile-first architecture',
    'SEO-ready structure',
    'AI agent integration',
    'Instant lead capture',
    'Analytics & tracking',
    'Custom micro-animations',
    'CMS integration',
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            <Cpu className="w-4 h-4 text-cyan-400" /> Core Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Everything Your Business Needs To{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Go Digital.
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Engineered systems designed to streamline customer communications and establish digital authority.
          </p>
        </div>

        {/* 01 — AI VOICE AGENTS */}
        <div id="voice-ai" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-3xl p-8 sm:p-12 border border-blue-500/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Info & Features */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-extrabold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      01 — Core Pillar
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Autonomous Voice Intelligence</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 flex items-center gap-3">
                    AI Voice Agents
                    <Mic className="w-8 h-8 text-cyan-400" />
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                    Give your business an intelligent voice that can answer calls, qualify leads, schedule appointments, answer questions and transfer conversations to your team when necessary.
                  </p>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {voiceFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all group"
                  >
                    Explore Voice AI
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className="lg:col-span-6">
                <div className="bg-obsidian-surface rounded-2xl border border-white/10 p-6 shadow-xl relative">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-mono font-bold text-emerald-400">VOICE ENGINE ACTIVE</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">Latency: 380ms</span>
                  </div>

                  {/* Waveform graphic */}
                  <div className="h-32 bg-obsidian-card rounded-xl p-4 border border-white/5 flex items-center justify-center gap-1.5 mb-6">
                    {[60, 90, 40, 80, 100, 75, 45, 85, 95, 65, 30, 90, 70, 85, 40, 95, 55, 75, 90, 50, 80].map((h, i) => (
                      <div
                        key={i}
                        className="w-2 bg-gradient-to-t from-blue-600 via-indigo-400 to-cyan-300 rounded-full animate-wave-bar"
                        style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Live Dialogue preview card */}
                  <div className="space-y-3 font-sans text-xs">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between text-slate-300">
                      <span>Caller: "Can I book a table for 4 people at 7 PM?"</span>
                      <span className="text-[10px] text-slate-500 font-mono">00:04</span>
                    </div>
                    <div className="bg-blue-600/15 p-3 rounded-xl border border-blue-500/20 flex items-center justify-between text-cyan-200">
                      <span>AI: "Table for 4 at 7:00 PM reserved under your name."</span>
                      <span className="text-[10px] text-cyan-400 font-mono">00:06</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 02 — PREMIUM WEBSITES */}
        <div id="websites">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-3xl p-8 sm:p-12 border border-indigo-500/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Visual Mockup */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="bg-obsidian-surface rounded-2xl border border-white/10 overflow-hidden shadow-xl">
                  {/* Browser Bar */}
                  <div className="bg-obsidian-card px-4 py-3 border-b border-white/10 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <div className="ml-4 flex-1 bg-white/5 rounded-md px-3 py-1 text-xs text-slate-400 font-mono truncate">
                      https://yourcompany.com
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="p-6 space-y-4 bg-gradient-to-b from-obsidian-surface to-obsidian-card">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <div className="h-6 w-32 bg-blue-500/30 rounded-md animate-pulse" />
                      <div className="flex gap-2">
                        <div className="h-6 w-16 bg-white/10 rounded-md" />
                        <div className="h-6 w-20 bg-blue-600 rounded-md" />
                      </div>
                    </div>

                    <div className="py-6 space-y-3">
                      <div className="h-8 w-3/4 bg-white/20 rounded-md" />
                      <div className="h-4 w-1/2 bg-white/10 rounded-md" />
                      <div className="h-10 w-36 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4" />
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
                      <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
                      <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Info & Features */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-extrabold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                      02 — Core Pillar
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Digital Storefront & Trust Engine</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 flex items-center gap-3">
                    Websites You Can Trust
                    <Globe className="w-8 h-8 text-indigo-400" />
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                    We design and develop premium websites that communicate your brand, establish trust, capture leads and integrate directly with your business systems.
                  </p>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {websiteFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all group"
                  >
                    Build My Website
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

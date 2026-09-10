'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, PhoneCall, Mic, Activity, Clock, CheckCircle2, User, Bot, Volume2, Sparkles, AlertCircle } from 'lucide-react';

export default function HeroVisual() {
  const [activeStatus, setActiveStatus] = useState<'listening' | 'understanding' | 'responding'>('responding');
  const [activeDialogueIndex, setActiveDialogueIndex] = useState(0);

  const dialogue = [
    {
      speaker: 'Customer',
      text: '"Hi, I\'d like to book an appointment for tomorrow at 3 PM."',
      time: '10:42 AM',
      type: 'user'
    },
    {
      speaker: 'Buildwebvox AI',
      text: '"Absolutely! I have tomorrow at 3:00 PM available. I\'ve reserved that spot for you and sent a confirmation SMS."',
      time: '10:42 AM',
      type: 'ai'
    },
    {
      speaker: 'Customer',
      text: '"Great! What are your business hours on weekends?"',
      time: '10:43 AM',
      type: 'user'
    },
    {
      speaker: 'Buildwebvox AI',
      text: '"We are open Saturdays from 9 AM to 6 PM and Sundays by appointment. Would you like me to add a reminder to your calendar?"',
      time: '10:43 AM',
      type: 'ai'
    }
  ];

  // Cycle status & dialogs for lively presentation
  useEffect(() => {
    const statusInterval = setInterval(() => {
      setActiveStatus((prev) => {
        if (prev === 'listening') return 'understanding';
        if (prev === 'understanding') return 'responding';
        return 'listening';
      });
    }, 2500);

    const dialogInterval = setInterval(() => {
      setActiveDialogueIndex((prev) => (prev + 1) % dialogue.length);
    }, 4500);

    return () => {
      clearInterval(statusInterval);
      clearInterval(dialogInterval);
    };
  }, []);

  return (
    <section className="relative -mt-6 pb-20 bg-obsidian overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-500/20 shadow-2xl shadow-blue-950/40 overflow-hidden"
        >
          {/* Top glowing bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-3 h-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </div>
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
                INCOMING CALL • ACTIVE AI SESSION
              </span>
            </div>

            {/* Status indicators */}
            <div className="flex items-center gap-2 bg-obsidian/80 px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono">
              <span
                className={`flex items-center gap-1.5 transition-all ${
                  activeStatus === 'listening' ? 'text-cyan-400 font-bold scale-105' : 'text-slate-500'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeStatus === 'listening' ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                ● Listening
              </span>
              <span className="text-slate-700">|</span>
              <span
                className={`flex items-center gap-1.5 transition-all ${
                  activeStatus === 'understanding' ? 'text-indigo-400 font-bold scale-105' : 'text-slate-500'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeStatus === 'understanding' ? 'bg-indigo-400 animate-pulse' : 'bg-slate-600'}`} />
                ● Understanding
              </span>
              <span className="text-slate-700">|</span>
              <span
                className={`flex items-center gap-1.5 transition-all ${
                  activeStatus === 'responding' ? 'text-violet-400 font-bold scale-105' : 'text-slate-500'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeStatus === 'responding' ? 'bg-violet-400 animate-pulse' : 'bg-slate-600'}`} />
                ● Responding
              </span>
            </div>
          </div>

          {/* Main Visual Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            {/* Left Column: Live Call Interface */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center justify-between bg-obsidian-card p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <PhoneCall className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      Buildwebvox Custom Voice Agent
                      <span className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-0.5 rounded-md font-mono">
                        v2.4 Neural
                      </span>
                    </h4>
                    <p className="text-slate-400 text-xs font-mono">Connected • High Fidelity Low Latency Voice</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Volume2 className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono text-cyan-400 font-semibold">Active Audio</span>
                </div>
              </div>

              {/* Dialogue Box */}
              <div className="bg-obsidian-surface/90 rounded-2xl p-5 border border-white/10 space-y-4 min-h-[190px] flex flex-col justify-center">
                {/* Customer line */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-slate-300">Customer</span>
                      <span className="text-[10px] font-mono text-slate-500">Live Input</span>
                    </div>
                    <p className="text-sm font-medium text-slate-200 bg-white/5 p-3 rounded-xl rounded-tl-none border border-white/5">
                      "Hi, I'd like to book an appointment."
                    </p>
                  </div>
                </div>

                {/* AI Agent line */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md shadow-blue-500/20">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-cyan-300 flex items-center gap-1">
                        Buildwebvox AI Agent
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">Response &lt;450ms</span>
                    </div>
                    <p className="text-sm font-medium text-white bg-blue-600/20 p-3 rounded-xl rounded-tl-none border border-blue-500/30">
                      "Absolutely. I can help you with that right away. What date and time work best for your schedule?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Voice Waveform */}
              <div className="bg-obsidian-card p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                <Mic className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="flex-1 flex items-center justify-between gap-1 h-8 px-2">
                  {[40, 65, 30, 85, 95, 45, 75, 100, 60, 80, 50, 90, 70, 35, 80, 65, 90, 40, 75, 55, 85, 40].map(
                    (height, idx) => (
                      <div
                        key={idx}
                        className="w-1.5 rounded-full bg-gradient-to-t from-blue-500 via-indigo-400 to-cyan-300 animate-pulse"
                        style={{
                          height: `${height}%`,
                          animationDelay: `${(idx % 5) * 0.15}s`,
                          animationDuration: '1.2s'
                        }}
                      />
                    )
                  )}
                </div>
                <span className="text-xs font-mono text-slate-400 shrink-0">48 kHz / 24-bit</span>
              </div>
            </div>

            {/* Right Column: Demo Analytics Floating Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-slate-400">Calls Handled</span>
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">20</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                  <span>↑ 99.4% Automated</span>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-slate-400">Appointments</span>
                  <Activity className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">6</div>
                <div className="text-[11px] text-indigo-300 font-semibold mt-1">
                  Direct Google/CRM sync
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-slate-400">Leads Qualified</span>
                  <CheckCircle2 className="w-4 h-4 text-violet-400" />
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">5</div>
                <div className="text-[11px] text-violet-300 font-semibold mt-1">
                  Instant lead routing
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-slate-400">Response Speed</span>
                  <Clock className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-3xl font-extrabold text-cyan-300 tracking-tight">&lt;2 hrs</div>
                <div className="text-[11px] text-cyan-400 font-semibold mt-1">
                  Fast turnaround time
                </div>
              </div>

              {/* Explicit Disclaimer for Demo Data */}
              <div className="col-span-2 bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2 text-[11px] text-slate-400">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  * Metrics shown above are illustrative simulation data demonstrating interface capabilities.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, Sparkles, Play, Square, Bot, User, RefreshCw, Info } from 'lucide-react';

export default function LiveAIDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoState, setDemoState] = useState<'idle' | 'listening' | 'thinking' | 'responding'>('idle');
  const [selectedPersona, setSelectedPersona] = useState<string>('clinic');
  const [chatLog, setChatLog] = useState<{ sender: 'user' | 'ai'; text: string; time: string }[]>([]);

  const personas = [
    {
      id: 'clinic',
      name: 'Clinic Receptionist',
      userLine: 'Hi, I need to book a dental checkup for Friday at 10 AM.',
      aiLine: 'Hello! I can certainly help schedule your dental checkup for Friday at 10:00 AM with Dr. Smith. Should I confirm this booking?',
    },
    {
      id: 'realestate',
      name: 'Real Estate Assistant',
      userLine: 'Are there 3-bedroom luxury villas available in Downtown?',
      aiLine: 'Yes, we have 2 premium 3-bedroom villas available starting at \$1.2M. Would you like me to send the brochure and schedule a private visit?',
    },
    {
      id: 'restaurant',
      name: 'Restaurant Desk',
      userLine: 'Do you have a table for 4 people tonight at 8 PM?',
      aiLine: 'Good evening! We have an outdoor garden table available at 8:00 PM tonight for 4 guests. Shall I hold this reservation under your name?',
    },
  ];

  const currentPersona = personas.find((p) => p.id === selectedPersona) || personas[0];

  const handleStartDemo = () => {
    if (isPlaying) {
      // Stop demo
      setIsPlaying(false);
      setDemoState('idle');
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      return;
    }

    setIsPlaying(true);
    setChatLog([]);
    setDemoState('listening');

    // Step 1: User Speaks
    setTimeout(() => {
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setChatLog([{ sender: 'user', text: currentPersona.userLine, time: timeStr }]);
      setDemoState('thinking');

      // Step 2: AI Thinks & Responds
      setTimeout(() => {
        setDemoState('responding');
        setChatLog((prev) => [
          ...prev,
          { sender: 'ai', text: currentPersona.aiLine, time: timeStr },
        ]);

        // Speak AI Line if Speech Synthesis is supported
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(currentPersona.aiLine);
          utterance.rate = 1.0;
          utterance.pitch = 1.0;
          utterance.onend = () => {
            setDemoState('idle');
            setIsPlaying(false);
          };
          window.speechSynthesis.speak(utterance);
        } else {
          setTimeout(() => {
            setDemoState('idle');
            setIsPlaying(false);
          }, 4000);
        }
      }, 1500);
    }, 1500);
  };

  return (
    <section className="py-24 bg-obsidian-surface relative border-t border-white/10 overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Interactive Voice Simulator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Talk To{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Our AI.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Experience how Buildwebvox neural voice agents process conversations in real-time.
          </p>
        </div>

        {/* Persona Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {personas.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                if (!isPlaying) setSelectedPersona(p.id);
              }}
              disabled={isPlaying}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                selectedPersona === p.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {p.name} Scenario
            </button>
          ))}
        </div>

        {/* Central Voice Interface Box */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-blue-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Animated Audio Orb Button */}
            <div className="relative mb-8">
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isPlaying
                    ? 'bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-400 shadow-2xl shadow-cyan-500/50 scale-105'
                    : 'bg-gradient-to-br from-blue-600/30 to-violet-600/30 border border-white/20'
                }`}
              >
                <button
                  onClick={handleStartDemo}
                  className="w-28 h-28 rounded-full bg-obsidian flex flex-col items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-inner group"
                >
                  {isPlaying ? (
                    <Square className="w-8 h-8 text-rose-400 animate-pulse" />
                  ) : (
                    <Mic className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                  )}
                  <span className="text-[10px] font-mono font-bold uppercase mt-1 text-slate-400">
                    {isPlaying ? 'Stop Demo' : 'Start AI Demo'}
                  </span>
                </button>
              </div>

              {/* Pulsing state ring */}
              {isPlaying && (
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping pointer-events-none" />
              )}
            </div>

            {/* Status indicator */}
            <div className="mb-6">
              {demoState === 'idle' && (
                <span className="text-sm font-mono text-slate-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                  Ready • Click "Start AI Demo" to simulate conversation
                </span>
              )}
              {demoState === 'listening' && (
                <span className="text-sm font-mono text-cyan-300 bg-cyan-500/20 px-4 py-1.5 rounded-full border border-cyan-500/40 animate-pulse flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  ● Listening...
                </span>
              )}
              {demoState === 'thinking' && (
                <span className="text-sm font-mono text-indigo-300 bg-indigo-500/20 px-4 py-1.5 rounded-full border border-indigo-500/40 animate-pulse flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ● Thinking & Parsing Workflow...
                </span>
              )}
              {demoState === 'responding' && (
                <span className="text-sm font-mono text-emerald-300 bg-emerald-500/20 px-4 py-1.5 rounded-full border border-emerald-500/40 animate-pulse flex items-center gap-2">
                  <Volume2 className="w-4 h-4 animate-bounce" />
                  ● Responding with Audio Synthesis...
                </span>
              )}
            </div>

            {/* Dynamic Waveform Visualizer */}
            <div className="h-16 w-full max-w-md bg-obsidian rounded-xl p-3 border border-white/10 flex items-center justify-center gap-1 mb-8">
              {[40, 70, 30, 90, 100, 60, 80, 50, 90, 75, 40, 85, 95, 60, 70, 85, 45, 90, 65, 30, 80, 50].map(
                (h, i) => (
                  <div
                    key={i}
                    className={`w-1.5 rounded-full transition-all ${
                      isPlaying
                        ? 'bg-gradient-to-t from-blue-500 to-cyan-300 animate-wave-bar'
                        : 'bg-slate-700 h-2'
                    }`}
                    style={{
                      height: isPlaying ? `${h}%` : '8px',
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                )
              )}
            </div>

            {/* Realtime Chat Transcript Stream */}
            <div className="w-full max-w-xl bg-obsidian-card rounded-2xl p-5 border border-white/10 min-h-[140px] flex flex-col justify-center space-y-3 text-left">
              {chatLog.length === 0 ? (
                <p className="text-xs font-mono text-slate-500 text-center">
                  Press "Start AI Demo" above to launch interactive simulation.
                </p>
              ) : (
                chatLog.map((log, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-3 ${
                      log.sender === 'user'
                        ? 'bg-white/5 border-white/10 text-slate-200'
                        : 'bg-blue-600/20 border-blue-500/30 text-white font-medium'
                    }`}
                  >
                    {log.sender === 'user' ? (
                      <User className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    ) : (
                      <Bot className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          {log.sender === 'user' ? 'Caller' : 'Buildwebvox AI'}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">{log.time}</span>
                      </div>
                      <p>{log.text}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Clear Disclaimer */}
            <div className="mt-6 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>
                Interactive voice simulation mode. Custom production deployments connect to live telephony infrastructure.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

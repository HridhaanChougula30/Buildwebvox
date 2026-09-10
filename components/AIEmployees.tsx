'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, PhoneCall, TrendingUp, Calendar, HelpCircle, Target, Sliders, ArrowRight, Check } from 'lucide-react';

interface AIEmployeesProps {
  onOpenDemo: () => void;
}

export default function AIEmployees({ onOpenDemo }: AIEmployeesProps) {
  const agents = [
    {
      num: '01',
      name: 'AI Receptionist',
      tagline: 'First Line of Communication',
      desc: 'Answers calls, handles FAQs and routes customers.',
      icon: PhoneCall,
      skills: ['24/7 Call Pick-Up', 'Custom Greeting', 'Smart Handoff', 'Multi-line Routing'],
      gradient: 'from-blue-500/15 via-indigo-500/10 to-transparent',
      borderColor: 'group-hover:border-blue-500/40',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      num: '02',
      name: 'AI Sales Agent',
      tagline: 'Outbound & Inbound Conversion',
      desc: 'Qualifies prospects and follows up with leads.',
      icon: TrendingUp,
      skills: ['Lead Qualification', 'Product Pitching', 'CRM Sync', 'Automated Follow-ups'],
      gradient: 'from-indigo-500/15 via-violet-500/10 to-transparent',
      borderColor: 'group-hover:border-indigo-500/40',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      num: '03',
      name: 'AI Appointment Agent',
      tagline: 'Calendar Management',
      desc: 'Books, reschedules and confirms appointments.',
      icon: Calendar,
      skills: ['Google & Outlook Sync', 'Instant Reminders', 'Reschedule Handling', 'No-show Prevention'],
      gradient: 'from-violet-500/15 via-purple-500/10 to-transparent',
      borderColor: 'group-hover:border-violet-500/40',
      badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20'
    },
    {
      num: '04',
      name: 'AI Support Agent',
      tagline: 'Instant Customer Service',
      desc: 'Handles common customer questions 24/7.',
      icon: HelpCircle,
      skills: ['Knowledge Base Integration', 'Order Status Lookups', 'Multi-Language', 'Ticket Creation'],
      gradient: 'from-cyan-500/15 via-blue-500/10 to-transparent',
      borderColor: 'group-hover:border-cyan-500/40',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      num: '05',
      name: 'AI Lead Agent',
      tagline: 'Opportunity Generation',
      desc: 'Turns incoming enquiries into qualified opportunities.',
      icon: Target,
      skills: ['Data Intake', 'Qualification Scoring', 'Instant SMS Alerts', 'HubSpot / Salesforce Sync'],
      gradient: 'from-emerald-500/15 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/40',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      num: '06',
      name: 'AI Custom Agent',
      tagline: 'Tailored Business Logic',
      desc: 'Built around your unique business workflow.',
      icon: Sliders,
      skills: ['Custom API Hooks', 'Proprietary Knowledge', 'Complex Routing', 'Workflow Orchestration'],
      gradient: 'from-fuchsia-500/15 via-indigo-500/10 to-transparent',
      borderColor: 'group-hover:border-fuchsia-500/40',
      badgeColor: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20'
    },
  ];

  return (
    <section className="py-24 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono font-semibold text-violet-300 mb-4 uppercase tracking-widest">
            <Bot className="w-4 h-4 text-violet-400" /> Digital Workforce
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Meet Your New{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Digital Employees.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            AI agents designed to handle repetitive conversations while your team focuses on the work that matters.
          </p>
        </div>

        {/* 6 AI Employee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, idx) => {
            const IconComp = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`glass-panel rounded-3xl p-7 border border-white/10 ${agent.borderColor} transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Ambient Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-b ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-extrabold font-mono text-slate-500 group-hover:text-cyan-300 transition-colors">
                      {agent.num}
                    </span>
                    <span className={`text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded-full border ${agent.badgeColor}`}>
                      {agent.tagline}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6 text-cyan-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {agent.name}
                  </h3>

                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    "{agent.desc}"
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4 mb-6">
                    {agent.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative pt-2">
                  <button
                    onClick={onOpenDemo}
                    className="w-full py-3 rounded-xl bg-white/5 group-hover:bg-blue-600 border border-white/10 group-hover:border-blue-500 text-xs font-bold text-slate-200 group-hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Deploy {agent.name}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

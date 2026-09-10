'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is an AI voice agent?',
      a: 'An AI voice agent is an intelligent software assistant capable of understanding spoken human language over phone calls or audio interfaces, processing complex business logic in real time, and responding naturally with human-like speech.',
    },
    {
      q: 'Can Buildwebvox build an AI agent for my business?',
      a: 'Yes. Buildwebvox specializes in studying your company’s unique workflows, FAQs, appointment rules, and caller interactions, then building a custom AI voice agent engineered around your specific operational needs.',
    },
    {
      q: 'Can the AI answer my business calls?',
      a: 'Yes. Your AI voice agent can be connected directly to your business telephone line to handle 24/7 inbound calls, answer customer questions, triage emergency calls, or manage call surges automatically.',
    },
    {
      q: 'Can it book appointments?',
      a: 'Absolutely. Buildwebvox AI agents connect directly to Google Calendar, Outlook, Calendly, or custom booking software to check availability in real time, confirm appointments with callers, and send instant SMS reminders.',
    },
    {
      q: 'Can it connect to my CRM?',
      a: 'Yes. We integrate AI voice agents with major CRM platforms including HubSpot, Salesforce, Zoho, Pipedrive, and custom databases so customer call data, transcripts, and leads are recorded automatically.',
    },
    {
      q: 'Can it work with WhatsApp?',
      a: 'Yes. Following a phone call or web interaction, the AI agent can trigger automated WhatsApp messages, sending location details, booking confirmations, brochures, or follow-up links directly to the customer.',
    },
    {
      q: 'Can it speak multiple languages?',
      a: 'Yes. Our AI voice agents support multilingual conversations and can automatically detect the caller’s language or switch fluently based on caller preference.',
    },
    {
      q: 'Can the AI transfer calls to a human?',
      a: 'Yes. If a caller requests a specific staff member or has a complex scenario requiring human intervention, the AI agent smoothly transfers the active call to your team along with caller context.',
    },
    {
      q: 'Can you build a website for my business?',
      a: 'Yes. Buildwebvox designs and engineers premium, high-performance websites tailored to your brand, engineered for speed, mobile responsiveness, SEO authority, and conversion optimization.',
    },
    {
      q: 'Can my website connect to my AI agent?',
      a: 'Yes. Your website and AI agent can work as a unified ecosystem. Website visitors can launch instant voice chats, submit enquiry forms that trigger automated AI call follow-ups, or interact with web-based AI widgets.',
    },
    {
      q: 'Can you build an AI solution for my industry?',
      a: 'Buildwebvox builds technology for companies, offices, clinics, hospitals, restaurants, shops, hotels, schools, real estate, automotive, e-commerce, and professional service providers of all sizes.',
    },
    {
      q: 'What if my business isn\'t listed?',
      a: 'If your specific business type or industry isn\'t explicitly listed, Buildwebvox will analyze your custom business workflow and design a bespoke AI voice and website architecture tailored specifically to your needs.',
    },
    {
      q: 'How long does implementation take?',
      a: 'Standard implementations typically take between 1 to 3 weeks depending on the complexity of your custom conversation flows, backend integrations, and website design requirements.',
    },
    {
      q: 'Do you provide ongoing support?',
      a: 'Yes. Buildwebvox provides continuous technical support, system monitoring, performance tuning, and conversation prompt updates as your business scales.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-obsidian-surface relative border-t border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-cyan-400" /> Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Questions.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Everything you need to know about Buildwebvox AI voice agents and website engineering.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors hover:border-blue-500/30"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 font-normal">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

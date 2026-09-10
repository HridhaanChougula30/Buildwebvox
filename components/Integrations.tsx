'use client';

import { motion } from 'framer-motion';
import { Layers, ShieldAlert, Cpu, Link2 } from 'lucide-react';

export default function Integrations() {
  const tools = [
    { name: 'Google Calendar', category: 'Calendar & Scheduling' },
    { name: 'WhatsApp', category: 'Messaging & Notifications' },
    { name: 'HubSpot', category: 'CRM & Lead Management' },
    { name: 'Salesforce', category: 'Enterprise CRM' },
    { name: 'Zoho', category: 'Business Suite' },
    { name: 'Slack', category: 'Internal Team Alerts' },
    { name: 'Calendly', category: 'Appointment Booking' },
    { name: 'Stripe', category: 'Payment Workflows' },
    { name: 'Twilio', category: 'Telephony & SMS' },
    { name: 'Vapi', category: 'Voice Telephony Layer' },
    { name: 'Retell', category: 'Voice AI Infrastructure' },
    { name: 'n8n', category: 'Workflow Automation' },
    { name: 'Make', category: 'Integration Scenarios' },
    { name: 'Zapier', category: 'App Connectivity' },
  ];

  return (
    <section className="py-24 bg-obsidian-surface relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            <Link2 className="w-4 h-4 text-cyan-400" /> Seamless Interoperability
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Connect Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Existing Tools.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Buildwebvox systems bridge directly into your current tech stack via secure webhooks, custom REST APIs, and native connectors.
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-4 rounded-2xl border border-white/10 text-center glass-panel-hover flex flex-col justify-center items-center min-h-[110px]"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 font-bold text-xs mb-2">
                {tool.name.slice(0, 2).toUpperCase()}
              </div>
              <h4 className="text-xs font-bold text-white mb-1 truncate w-full">
                {tool.name}
              </h4>
              <p className="text-[10px] text-slate-400 truncate w-full font-mono">
                {tool.category}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-4 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Integrations are enabled via public APIs, webhooks, and custom code bridges. Logos and trademarks belong to their respective owners.
          </span>
        </div>
      </div>
    </section>
  );
}

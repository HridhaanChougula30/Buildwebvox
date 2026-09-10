'use client';

import { motion } from 'framer-motion';
import { 
  Building2, Stethoscope, HeartPulse, Utensils, ShoppingBag, Hotel, 
  Home, GraduationCap, ShoppingCart, Car, Briefcase, Sparkles, ArrowRight 
} from 'lucide-react';

interface BusinessTypesProps {
  onOpenDemo: () => void;
}

export default function BusinessTypes({ onOpenDemo }: BusinessTypesProps) {
  const businessSectors = [
    {
      icon: Building2,
      title: 'Companies & Offices',
      desc: 'AI receptionists, customer support, lead qualification and sales calls.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Stethoscope,
      title: 'Clinics & Doctors',
      desc: 'Appointment booking, patient enquiries, reminders and FAQs.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-400',
    },
    {
      icon: HeartPulse,
      title: 'Hospitals',
      desc: 'Department enquiries, appointment requests, patient communication and call routing.',
      gradient: 'from-rose-500/20 to-pink-500/20',
      iconColor: 'text-rose-400',
    },
    {
      icon: Utensils,
      title: 'Restaurants & Cafés',
      desc: 'Reservations, customer enquiries and ordering workflows.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
    },
    {
      icon: ShoppingBag,
      title: 'Shops & Retail',
      desc: 'Product questions, customer enquiries and order assistance.',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Hotel,
      title: 'Hotels',
      desc: 'Reservations, guest enquiries and customer support.',
      gradient: 'from-indigo-500/20 to-violet-500/20',
      iconColor: 'text-indigo-400',
    },
    {
      icon: Home,
      title: 'Real Estate',
      desc: 'Lead qualification, property enquiries and site-visit scheduling.',
      gradient: 'from-purple-500/20 to-indigo-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: GraduationCap,
      title: 'Schools & Coaching Institutes',
      desc: 'Admissions enquiries, course information and parent/student support.',
      gradient: 'from-sky-500/20 to-blue-500/20',
      iconColor: 'text-sky-400',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      desc: 'Product support, lead qualification and customer service.',
      gradient: 'from-teal-500/20 to-emerald-500/20',
      iconColor: 'text-teal-400',
    },
    {
      icon: Car,
      title: 'Automotive',
      desc: 'Service bookings, vehicle enquiries and customer follow-ups.',
      gradient: 'from-blue-600/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      desc: 'Lead handling, appointment scheduling and customer communication.',
      gradient: 'from-violet-500/20 to-fuchsia-500/20',
      iconColor: 'text-violet-400',
    },
    {
      icon: Sparkles,
      title: 'And More',
      desc: 'If your industry isn\'t listed, Buildwebvox can create a custom solution around your workflow.',
      gradient: 'from-cyan-500/20 to-indigo-500/20',
      iconColor: 'text-cyan-300',
      highlight: true
    },
  ];

  return (
    <section id="business-types" className="py-24 bg-obsidian-surface relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-300 mb-4 uppercase tracking-widest">
            Universal Industry Coverage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your Business.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
              Your AI Agent.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Whatever your business does, Buildwebvox can create a custom AI voice agent and website around it.
          </p>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessSectors.map((sector, idx) => {
            const IconComponent = sector.icon;
            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className={`glass-panel p-6 rounded-2xl border ${
                  sector.highlight ? 'border-cyan-500/40 bg-cyan-950/20' : 'border-white/10'
                } glass-panel-hover flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sector.gradient} border border-white/10 flex items-center justify-center ${sector.iconColor} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {sector.highlight && (
                      <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                        Custom AI Engine
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {sector.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {sector.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-white transition-colors"
                >
                  Build for this workflow
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

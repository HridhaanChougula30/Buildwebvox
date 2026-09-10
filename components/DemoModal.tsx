'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ArrowRight, Building, Mic, Globe, Zap, Send, Mail } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const targetEmail = 'hridhaanchougula30@gmail.com';

  const businessOptions = [
    'Company / Corporate',
    'Clinic / Doctor',
    'Hospital',
    'Restaurant / Café',
    'Shop / Retail',
    'Hotel / Hospitality',
    'Real Estate',
    'School / Institute',
    'E-commerce',
    'Automotive',
    'Professional Services',
    'Other Business',
  ];

  const serviceOptions = [
    'AI Voice Agent (Calls & Appointments)',
    'Premium Website Development',
    'CRM & Calendar Automation',
    'Complete AI + Web Ecosystem',
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Post to API endpoint
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          businessType,
          selectedServices,
        }),
      });

      const data = await res.json();

      // Trigger mailto link directly to user's email address
      if (data.mailtoUrl) {
        window.location.href = data.mailtoUrl;
      } else {
        const subject = encodeURIComponent(`[Buildwebvox Lead] ${formData.businessName || formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nBusiness: ${formData.businessName}\nEmail: ${formData.email}\nCategory: ${businessType}\nServices: ${selectedServices.join(', ')}\nNotes: ${formData.notes}`
        );
        window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
      }
    } catch (err) {
      console.error(err);
      // Fallback direct mailto trigger
      const subject = encodeURIComponent(`[Buildwebvox Lead] ${formData.businessName || formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nBusiness: ${formData.businessName}\nEmail: ${formData.email}\nCategory: ${businessType}\nServices: ${selectedServices.join(', ')}\nNotes: ${formData.notes}`
      );
      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const resetModal = () => {
    setStep(1);
    setBusinessType('');
    setSelectedServices([]);
    setFormData({ name: '', businessName: '', email: '', notes: '' });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-10 border border-blue-500/30 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={resetModal}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-bold text-cyan-300 mb-3 uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Email Lead Routing
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Design Your AI & Web Solution
                </h3>
                <p className="text-sm text-slate-300 font-medium">
                  Step {step} of 3 • Submission emails directly to <span className="text-cyan-300 font-mono">{targetEmail}</span>
                </p>
              </div>

              {/* Progress Line */}
              <div className="w-full bg-white/5 h-1.5 rounded-full mb-8 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              {/* Step 1: Business Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-slate-200 block">
                    Select your industry / business category:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[260px] overflow-y-auto pr-1">
                    {businessOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setBusinessType(opt)}
                        className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                          businessType === opt
                            ? 'bg-blue-600 text-white border-cyan-400 shadow-lg shadow-blue-600/30'
                            : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      disabled={!businessType}
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm disabled:opacity-40 transition-all flex items-center gap-2"
                    >
                      Next: Choose Requirements
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: What do you need? */}
              {step === 2 && (
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-slate-200 block">
                    What solutions do you require? (Select all that apply)
                  </label>
                  <div className="space-y-3">
                    {serviceOptions.map((opt) => {
                      const selected = selectedServices.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleService(opt)}
                          className={`w-full p-4 rounded-2xl text-xs sm:text-sm font-bold text-left transition-all border flex items-center justify-between ${
                            selected
                              ? 'bg-indigo-600/30 text-white border-indigo-500 shadow-lg'
                              : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <span>{opt}</span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                              selected ? 'bg-cyan-400 border-cyan-400 text-obsidian' : 'border-white/30'
                            }`}
                          >
                            {selected && <CheckCircle2 className="w-4 h-4 fill-obsidian text-cyan-400" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-6 flex items-center justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs font-mono text-slate-400 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      disabled={selectedServices.length === 0}
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm disabled:opacity-40 transition-all flex items-center gap-2"
                    >
                      Next: Contact Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details Form */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Your Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-obsidian/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Business Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Nexus Enterprises"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-obsidian/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Work Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="alex@nexus.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-obsidian/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Workflow Notes (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what call flows or website requirements you want to automate..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-obsidian/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-mono text-slate-400 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-sm shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      {isSubmitting ? 'Sending Email...' : `Send Direct Email to ${targetEmail}`}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Confirmation Screen */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Email Dispatch Triggered!
              </h3>

              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Your request details for <strong className="text-white">{formData.businessName}</strong> have been formatted and directed to <strong className="text-cyan-300 font-mono">{targetEmail}</strong>.
              </p>

              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-mono text-slate-400 text-left max-w-md mx-auto space-y-1">
                <div>Recipient: <span className="text-cyan-300">{targetEmail}</span></div>
                <div>Applicant: {formData.name} ({formData.email})</div>
                <div>Services: {selectedServices.join(', ')}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetModal}
                  className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

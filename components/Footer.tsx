'use client';

import { ArrowRight, Sparkles, Mail, MessageSquare, Phone } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
}

export default function Footer({ onOpenDemo }: FooterProps) {
  const links = [
    { name: 'Voice AI', href: '#voice-ai' },
    { name: 'Web Development', href: '#websites' },
    { name: 'Solutions', href: '#business-types' },
    { name: 'Industries', href: '#industries' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#founder' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-obsidian-surface border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Company Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 p-[1.5px]">
                <div className="w-full h-full bg-obsidian rounded-[9px] flex items-center justify-center font-mono font-black text-[11px] text-cyan-300 tracking-tighter">
                  BWX
                </div>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                Buildwebvox
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded">
                  BWX
                </span>
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              "AI voice agents, automation and premium websites for modern businesses."
            </p>

            <div className="text-xs font-mono text-cyan-400 font-semibold pt-2">
              Voices You Build, Websites You Trust
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Options */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4">
              Connect With Us
            </h4>

            {/* Direct Phone Link */}
            <a
              href="tel:+918793234029"
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-xs font-bold text-cyan-300 flex items-center justify-between transition-colors group"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>+91 8793234029</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Direct Email Link */}
            <a
              href="mailto:hridhaanchougula30@gmail.com?subject=Buildwebvox%20Inquiry"
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 flex items-center justify-between transition-colors group"
            >
              <span className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">hridhaanchougula30@gmail.com</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenDemo}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-xs font-bold text-white flex items-center justify-between shadow-md transition-all"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                Book a Demo
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Buildwebvox (BWX). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span>Founders: Hridhaan Chougula & Team</span>
            <span>•</span>
            <a href="tel:+918793234029" className="text-cyan-400 hover:underline">
              +91 8793234029
            </a>
            <span>•</span>
            <a href="mailto:hridhaanchougula30@gmail.com" className="text-slate-400 hover:text-cyan-300 transition-colors">
              hridhaanchougula30@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

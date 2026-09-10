'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Globe, Menu, X, ArrowRight, Sparkles, PhoneCall, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Voice AI', href: '#voice-ai' },
    { name: 'Websites', href: '#websites' },
    { name: 'Solutions', href: '#business-types' },
    { name: 'Industries', href: '#industries' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#founder' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-obsidian/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-blue-950/20'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-obsidian rounded-[10px] flex items-center justify-center relative overflow-hidden font-mono font-black text-xs text-cyan-300 tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  BWX
                </span>
                <span className="absolute bottom-0.5 right-1 w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                Buildwebvox
                <span className="inline-block px-1.5 py-0.5 text-[9px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded">
                  BWX
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold font-mono">
                AI Voice & Web
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-obsidian-surface/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918793234029"
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              +91 8793234029
            </a>

            <button
              onClick={onOpenDemo}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 group-hover:from-blue-500 group-hover:to-violet-600 hover:text-white text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 active:scale-95"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-obsidian rounded-full group-hover:bg-opacity-0 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+918793234029"
              className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-300"
              aria-label="Call Buildwebvox"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-obsidian/95 border-b border-white/10 backdrop-blur-2xl px-6 py-8 lg:hidden flex flex-col gap-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:bg-white/5 hover:text-blue-400 transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:+918793234029"
                className="w-full py-3 px-6 rounded-xl bg-white/5 border border-white/10 text-cyan-300 font-mono font-bold flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                Call Us: +91 8793234029
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-bold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Book a Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

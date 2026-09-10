'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HeroVisual from '@/components/HeroVisual';
import Introduction from '@/components/Introduction';
import Services from '@/components/Services';
import BusinessTypes from '@/components/BusinessTypes';
import UniversalMessage from '@/components/UniversalMessage';
import AIEmployees from '@/components/AIEmployees';
import HowItWorks from '@/components/HowItWorks';
import Industries from '@/components/Industries';
import WebsiteDevelopment from '@/components/WebsiteDevelopment';
import EcosystemWorkflow from '@/components/EcosystemWorkflow';
import Integrations from '@/components/Integrations';
import WhyUs from '@/components/WhyUs';
import LiveAIDemo from '@/components/LiveAIDemo';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Founder from '@/components/Founder';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-obsidian text-foreground selection:bg-blue-600 selection:text-white relative">
      <Navbar onOpenDemo={handleOpenDemo} />
      <Hero onOpenDemo={handleOpenDemo} />
      <HeroVisual />
      <Introduction />
      <Services onOpenDemo={handleOpenDemo} />
      <BusinessTypes onOpenDemo={handleOpenDemo} />
      <UniversalMessage onOpenDemo={handleOpenDemo} />
      <AIEmployees onOpenDemo={handleOpenDemo} />
      <HowItWorks onOpenDemo={handleOpenDemo} />
      <Industries onOpenDemo={handleOpenDemo} />
      <WebsiteDevelopment onOpenDemo={handleOpenDemo} />
      <EcosystemWorkflow />
      <Integrations />
      <WhyUs />
      <LiveAIDemo />
      <CaseStudies />
      <Testimonials />
      <Founder />
      <FAQ />
      <FinalCTA onOpenDemo={handleOpenDemo} />
      <Footer onOpenDemo={handleOpenDemo} />

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}

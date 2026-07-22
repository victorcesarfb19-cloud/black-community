'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Library from '@/components/Library';
import Courses from '@/components/Courses';
import Tools from '@/components/Tools';
import Timeline from '@/components/Timeline';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import WelcomeModal from '@/components/WelcomeModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('black-community-visited');
    if (!hasVisited) {
      setTimeout(() => {
        setShowModal(true);
        localStorage.setItem('black-community-visited', 'true');
      }, 1000);
    }
  }, []);

  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <Features />
      <Library />
      <Courses />
      <Tools />
      <Timeline />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
      <WhatsAppButton />
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
    </main>
  );
}
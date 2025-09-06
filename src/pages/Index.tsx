import React from 'react';
import Hero from '@/components/Hero';
import GamesShowcase from '@/components/GamesShowcase';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Hero />
      <ScrollAnimatedSection animation="slide-up" delay={200}>
        <GamesShowcase />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="slide-up" delay={400}>
        <About />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="slide-up" delay={600}>
        <Contact />
      </ScrollAnimatedSection>
    </div>
  );
};

export default Index;
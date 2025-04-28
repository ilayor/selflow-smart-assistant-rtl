
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Workflow from '@/components/Workflow';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Workflow />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

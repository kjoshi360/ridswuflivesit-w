"use client";


import Hero from '@/Components/Hero';
import AboutUs from '@/Components/Sections/AboutUs';
import Different from '@/Components/Sections/Different';
import WhyUs from '@/Components/Sections/Whyus';   
import ContactSection from '@/Components/Sections/ContactSection';
import Footer from '@/Components/Footer';
import Navbar from './Navbar';

export default function HomePage() {
  return (
    <main className="scroll-smooth">
     
      <Hero />
      <AboutUs />
      <WhyUs />
      <Different />
      <ContactSection />
      <Footer />
    </main>
  );
}

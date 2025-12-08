'use client';

import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import About from '@/Components/Sections/AboutUs';
import Different from '@/Components/Sections/Different';
import ContactSection from '@/Components/Sections/ContactSection';
import Footer from '@/Components/Footer';

export const metadata = {
  title: "GreenRide - EV Cab Booking - Central India's Largest",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function Page() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Different />
      <ContactSection />
      <Footer />
    </main>
  );
}

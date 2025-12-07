'use client';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/Components/Sections.tsx/AboutUs';
import Different from '@/components/sections.tsx/Different';
import ContactSection from '@/Components/Sections.tsx/ContactSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Head>
        <title>GreenRide - EV Cab Booking - Central India's Largest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <main className="scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Different />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

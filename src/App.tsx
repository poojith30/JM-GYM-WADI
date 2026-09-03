import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Placeholders } from './components/Placeholders';
import { Booking } from './components/Booking';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { ConciergeDock } from './components/ConciergeDock';
import { AiConcierge } from './components/AiConcierge';
import { ScrollProgressBar } from './components/motion/ScrollProgressBar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white flex flex-col selection:bg-[#ff3269] selection:text-white relative">
      {/* Sticky Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Fixed Apple-Grade Glassmorphism Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Cinematic Hero Section */}
        <Hero />

        {/* Media Gallery & Workout Showcase (#experience) */}
        <Gallery />

        {/* Amenities, Reviews & Membership Plans (#reviews, #memberships) */}
        <Placeholders />

        {/* Appointment Booking Section (#book) */}
        <Booking />

        {/* Interactive Google Map Location Section */}
        <MapSection />
      </main>

      {/* Apple-Grade Minimalist Footer */}
      <Footer />

      {/* Mobile-Optimized Quick Concierge Dock */}
      <ConciergeDock />

      {/* 24/7 Floating AI Front-Desk Concierge */}
      <AiConcierge />
    </div>
  );
};

export default App;

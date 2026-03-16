'use client';

import Link from 'next/link';
import CapabilitiesRed from '@/components/CapabilitiesRed';
import ClientLogos from '@/components/ClientLogos';
import TrustBadgeRed from '@/components/TrustBadgeRed';
import ContactSection from '@/components/ContactSection';
import ShopByIndustry from '@/components/ShopByIndustry';
import StatsBanner from '@/components/StatsBanner';
import { useState, useEffect } from 'react'; // Import useState and useEffect

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const years = new Date().getFullYear() - 1998;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-zinc-900">
        {/* Slider Backgrounds */}
        <div
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: "url('/assets/hero-bg.png')",
            backgroundPosition: 'center center',
            transform: 'scale(1.15)'
          }}
        />
        <div
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: "url('/assets/hero-slider-2.png')",
            backgroundPosition: 'center center'
          }}
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/40 to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full text-white">
          <div className="max-w-3xl space-y-6">
            <TrustBadgeRed />

            {/* Fixed-height container to hold both slide text overlays */}
            <div className="relative h-[210px] md:h-[230px]">
              {/* Slide 1 Text */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] drop-shadow-xl">
                  Built for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-oxblood-400 to-oxblood-600">
                    The Toughest
                  </span>
                </h1>
              </div>

              {/* Slide 2 Text */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <h1 className="font-black uppercase tracking-tighter leading-[0.9] drop-shadow-xl">
                  <span className="text-3xl md:text-5xl block mb-2">If you are proud of</span>
                  <span className="text-3xl md:text-5xl text-slate-200 block mb-4">
                    your corporate image...
                  </span>
                  <span className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-oxblood-400 to-oxblood-600">
                    Show It
                  </span>
                </h1>
              </div>
            </div>

            <p className="text-xl text-slate-200 font-medium max-w-lg leading-relaxed drop-shadow-md">
              Established manufacturers of protective clothing, uniforms, and branded promotional solutions.
            </p>

            <div className="flex gap-4 pt-2">
              <Link
                href="/catalog"
                className="bg-oxblood-600 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg"
              >
                View Catalogue
              </Link>
              <Link
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <StatsBanner />

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Capabilities Section */}
      <CapabilitiesRed />

      {/* Shop By Industry */}
      <ShopByIndustry />

      {/* About Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-black uppercase">{years} Years of Manufacturing</h2>
          <p className="text-slate-600 leading-relaxed">
            Since our inception, Kingsport has been at the forefront of the textile manufacturing industry in Zimbabwe.
            We specialize in high-quality PPE, corporate uniforms, and promotional wear that stands the test of time.
          </p>
          <ul className="space-y-4 font-bold uppercase text-sm">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-oxblood-600 rounded-full" />
              High Quality Materials
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-oxblood-600 rounded-full" />
              100% Local Production
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-oxblood-600 rounded-full" />
              Quick Turnaround Times
            </li>
          </ul>
        </div>
        <div className="h-96 bg-slate-100 rounded-lg relative overflow-hidden">
          {/* Placeholder for factory image */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-black text-4xl uppercase transform -rotate-12 select-none">
            Factory Floor
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}

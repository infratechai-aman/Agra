import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import AnimatedReveal from './AnimatedReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#18100C] text-stone-300 pt-20 pb-12 px-4 sm:px-8 border-t border-[#C9A45C]/30 relative overflow-hidden">
      {/* Subtle ambient gold background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#C9A45C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <AnimatedReveal animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Summary */}
            <div className="lg:col-span-4 space-y-5">
              <Link to="/" className="flex items-center gap-3.5 group inline-flex">
                <img
                  src="/images/agra-logo.png"
                  alt="Agra Restaurant Official Crest Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full border-2 border-[#C9A45C]/60 bg-[#241812] p-1.5 shadow-xl group-hover:scale-105 group-hover:border-[#C9A45C] group-hover:shadow-[0_0_25px_rgba(201,164,92,0.4)] transition-all duration-300 shrink-0"
                />
                <div>
                  <span className="font-serif tracking-widest text-xl sm:text-2xl font-bold uppercase text-white block group-hover:text-[#C9A45C] transition-colors leading-none">
                    {RESTAURANT_INFO.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mt-1">
                    {RESTAURANT_INFO.city}
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
                Pune Camp’s treasured address for authentic heritage culinary experiences, rich Mughlai delicacies, and welcoming family dining since 1968.
              </p>

              <div className="pt-1 flex items-center gap-3 text-xs text-[#E8D7B0] bg-[#241812]/50 p-2.5 rounded-xl border border-[#C9A45C]/20 w-fit">
                <ShieldCheck className="w-4 h-4 text-[#C9A45C] shrink-0 animate-pulse" />
                <span>100% Halal Certified & Fresh Daily Sourcing</span>
              </div>
            </div>

            {/* Repertoire Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <span>Explore</span>
                <div className="w-4 h-0.5 bg-[#C9A45C]/50 rounded-full" />
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-light">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'Our Story & Legacy' },
                  { to: '/menu', label: 'Menu Repertoire' },
                  { to: '/gallery', label: 'Ambience & Gallery' },
                  { to: '/reservations', label: 'Table Reservations' },
                  { to: '/contact', label: 'Contact & Location' },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="hover:text-[#C9A45C] transition-all duration-200 text-stone-300 hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experiences & Hospitality */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <span>Experiences & Info</span>
                <div className="w-4 h-0.5 bg-[#C9A45C]/50 rounded-full" />
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-light">
                {[
                  { to: '/private-dining', label: 'Banquets & Private Dining' },
                  { to: '/faqs', label: 'Guest FAQs & Halal Guide' },
                  { to: '/careers', label: 'Careers & Apprenticeship' },
                  { to: '/terms', label: 'Terms of Dining & Service' },
                  { to: '/privacy-policy', label: 'Privacy & Data Policy' },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="hover:text-[#C9A45C] transition-all duration-200 text-stone-300 hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact, Location & Hours */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <span>Contact & Timings</span>
                <div className="w-4 h-0.5 bg-[#C9A45C]/50 rounded-full" />
              </h4>

              <div className="space-y-3.5 text-xs sm:text-sm text-stone-400 font-light">
                <div className="flex items-start gap-2.5 group">
                  <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-stone-200 transition-colors">{RESTAURANT_INFO.address}</span>
                </div>

                <div className="flex items-start gap-2.5 group">
                  <Clock className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[#C9A45C] block font-medium">Daily Service Hours:</span>
                    <span className="group-hover:text-stone-200 transition-colors">{RESTAURANT_INFO.hours.general}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1 group">
                  <Phone className="w-4 h-4 text-[#C9A45C] shrink-0 group-hover:scale-110 transition-transform" />
                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-[#C9A45C] font-semibold text-sm hover:underline hover:text-[#e0b96b] transition-colors"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>

        {/* Copyright & Credential Row */}
        <AnimatedReveal animation="fade-up" delay={150}>
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>© {currentYear} Agra Restaurant – Pune Camp. All rights reserved.</p>
            <p className="tracking-wide text-stone-400 flex items-center gap-1.5">
              <span>Designed with pride for Timeless Hospitality in Pune</span>
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </footer>
  );
}

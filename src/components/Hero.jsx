import React from 'react';
import { ArrowRight, Calendar, UtensilsCrossed, Users, MapPin, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import AnimatedReveal from './AnimatedReveal';

export default function Hero({ onOpenBooking, onScrollToMenu }) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-16 sm:pb-12 px-4 sm:px-8 overflow-hidden bg-[#18100C]"
    >
      {/* Background Image with Ken Burns Ambient Motion & Walnut Gradient Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-dining-hall.png"
          alt="Agra Restaurant Pune Camp Warm Interior Dining Hall"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] animate-kenburns"
        />
        {/* Chiaroscuro Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18100C] via-[#241812]/60 to-[#18100C]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#18100C]/95 via-[#18100C]/75 to-[#18100C]/60 sm:to-transparent" />
        
        {/* Subtle Ambient Golden Ember Radiance */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none animate-pulse-gold" />
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-10 sm:py-16">
        <div className="max-w-2xl mx-auto sm:mx-0 flex flex-col items-center sm:items-start text-center sm:text-left">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 mb-4 animate-fade-in">
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#C9A45C] shimmer-gold-bar" />
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#C9A45C] uppercase">
              <span>{RESTAURANT_INFO.tagline}</span>
            </p>
            <span className="w-8 sm:hidden h-[1.5px] bg-[#C9A45C] shimmer-gold-bar" />
          </div>

          {/* Editorial Display Heading with Smooth Stagger Entrance */}
          <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-serif font-normal text-white leading-[1.08] sm:leading-[1.05] tracking-tight mb-5 sm:mb-6 animate-slide-up text-center sm:text-left">
            Agra Restaurant<br />
            <span className="italic font-normal text-[#E8D7B0] transition-colors hover:text-[#C9A45C]">
              {RESTAURANT_INFO.city}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-stone-200 font-light leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto sm:mx-0 text-center sm:text-left animate-fade-in" style={{ animationDelay: '0.15s' }}>
            {RESTAURANT_INFO.description}
          </p>

          {/* Dual Action CTAs with Micro-Animations */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-4 animate-fade-in w-full sm:w-auto" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={onScrollToMenu}
              className="btn-shine w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group cursor-pointer hover:shadow-2xl hover:-translate-y-1 hover:shadow-[#C9A45C]/30 active:scale-95"
            >
              <span>Explore Repertoire</span>
              <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl bg-[#241812]/75 hover:bg-[#241812] text-white font-medium text-xs sm:text-sm tracking-wide border border-stone-400/50 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:border-[#C9A45C] hover:-translate-y-1 hover:shadow-lg active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#C9A45C] transition-transform group-hover:scale-110" />
              <span>Reserve a Table</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trust Bar / Heritage Highlights */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 sm:pt-8 border-t border-white/10">
        {/* Mobile View: Minimalist, clean single-line luxury divider (Not AI-cluttered) */}
        <div className="sm:hidden flex items-center justify-center gap-2.5 text-[11px] text-[#E8D7B0] tracking-widest uppercase font-medium">
          <span>Authentic Mughlai</span>
          <span className="text-[#C9A45C]/60">•</span>
          <span>Family Suites</span>
          <span className="text-[#C9A45C]/60">•</span>
          <span>Since 1968</span>
        </div>

        {/* Desktop View: Original 4-pillar cards */}
        <div className="hidden sm:block">
          <AnimatedReveal animation="fade-up" delay={200} stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Item 1: Authentic Cuisine */}
            <div className="group hover-lift flex items-center gap-3.5 p-3.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 hover:border-[#C9A45C]/50 hover:bg-[#241812]/90 transition-all cursor-default">
              <div className="w-10 h-10 rounded-full border border-[#C9A45C]/50 flex items-center justify-center text-[#C9A45C] shrink-0 bg-[#241812]/80 group-hover:scale-110 group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all duration-300">
                <UtensilsCrossed className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </div>
              <div>
                <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide group-hover:text-[#E8D7B0] transition-colors">
                  Authentic
                </h4>
                <p className="text-stone-300 text-xs font-light">Mughlai Cuisine</p>
              </div>
            </div>

            {/* Item 2: Family Friendly Dining */}
            <div className="group hover-lift flex items-center gap-3.5 p-3.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 hover:border-[#C9A45C]/50 hover:bg-[#241812]/90 transition-all cursor-default">
              <div className="w-10 h-10 rounded-full border border-[#C9A45C]/50 flex items-center justify-center text-[#C9A45C] shrink-0 bg-[#241812]/80 group-hover:scale-110 group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all duration-300">
                <Users className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide group-hover:text-[#E8D7B0] transition-colors">
                  Family Friendly
                </h4>
                <p className="text-stone-300 text-xs font-light">Dedicated AC Suites</p>
              </div>
            </div>

            {/* Item 3: Prime Location */}
            <div className="group hover-lift flex items-center gap-3.5 p-3.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 hover:border-[#C9A45C]/50 hover:bg-[#241812]/90 transition-all cursor-default">
              <div className="w-10 h-10 rounded-full border border-[#C9A45C]/50 flex items-center justify-center text-[#C9A45C] shrink-0 bg-[#241812]/80 group-hover:scale-110 group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all duration-300">
                <MapPin className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide group-hover:text-[#E8D7B0] transition-colors">
                  Prime Location
                </h4>
                <p className="text-stone-300 text-xs font-light">Heart of Pune Camp</p>
              </div>
            </div>

            {/* Item 4: Loved by Thousands */}
            <div className="group hover-lift flex items-center gap-3.5 p-3.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 hover:border-[#C9A45C]/50 hover:bg-[#241812]/90 transition-all cursor-default">
              <div className="w-10 h-10 rounded-full border border-[#C9A45C]/50 flex items-center justify-center text-[#C9A45C] shrink-0 bg-[#241812]/80 group-hover:scale-110 group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all duration-300">
                <Award className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </div>
              <div>
                <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide group-hover:text-[#E8D7B0] transition-colors">
                  Loved by
                </h4>
                <p className="text-stone-300 text-xs font-light">3 Generations</p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import StorySection from '../components/StorySection';
import DiningRoomsSection from '../components/DiningRoomsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AnimatedReveal from '../components/AnimatedReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { History, Award, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="animate-fade-in pt-16 sm:pt-24 bg-[#FAF8F3] overflow-hidden">
      {/* Archival Editorial Header Banner */}
      <section className="relative overflow-hidden bg-[#241812] text-white py-14 sm:py-28 px-4 sm:px-8 border-b border-[#C9A45C]/30">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/hero-dining-hall.png"
            alt="Agra Hotel Heritage"
            className="w-full h-full object-cover filter brightness-[0.35] contrast-125 animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18100C] via-[#241812]/80 to-[#18100C]/90" />
        </div>

        <AnimatedReveal animation="fade-up" className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#36241B] text-[#E8D7B0] text-xs uppercase tracking-[0.2em] font-bold border border-[#C9A45C]/30">
            <History className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Since Generations in Pune Camp</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF8F3] max-w-4xl tracking-tight leading-tight">
            A Legacy of Authentic Flavours & Warm Hospitality
          </h1>

          <p className="text-xs sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
            From our humble beginnings in the historic cantonment of Pune Camp in 1968 to becoming a cherished landmark for families and culinary wanderers across Maharashtra.
          </p>

          {/* Archival Key Milestones Ribbon with Animated Numbers */}
          <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mt-8">
            {RESTAURANT_INFO.milestones.map((m, idx) => (
              <div key={idx} className="hover-lift flex flex-col items-center p-3 text-center transition-all cursor-default">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E8D7B0] hover:text-[#C9A45C] transition-colors">
                  <AnimatedCounter target={m.number} duration={2000} />
                </span>
                <span className="text-[11px] text-[#C9A45C] uppercase tracking-wider font-semibold mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* Story Narrative & Sacred Standards */}
      <StorySection onExploreMore={() => {}} />

      {/* A Walk Through Our Dining Rooms (Featuring Rattan Booths & Brick Wall Dining Room) */}
      <DiningRoomsSection onReserveCorner={onOpenBooking} />

      {/* Testimonials Across Decades */}
      <TestimonialsSection />

      {/* Call to Action Banner */}
      <section className="py-20 px-4 sm:px-8 bg-[#241812] text-white overflow-hidden">
        <AnimatedReveal animation="fade-up" className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.2em] text-[#C9A45C] uppercase block">
            Plan Your Visit
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FAF8F3]">
            Experience Pune Camp Dining at its Finest
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
            Whether welcoming back an old family tradition or introducing the next generation to authentic Mughlai craftsmanship, we keep your table ready with genuine warmth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="btn-shine px-8 py-3.5 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
            >
              Reserve a Table
            </button>
            <Link
              to="/menu"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all border border-white/20 hover:-translate-y-0.5"
            >
              View Full Menu
            </Link>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}

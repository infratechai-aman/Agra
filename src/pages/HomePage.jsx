import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SpecialtiesSection from '../components/SpecialtiesSection';
import AnimatedReveal from '../components/AnimatedReveal';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Phone, 
  MapPin, 
  Award, 
  Users, 
  CheckCircle2, 
  Maximize2 
} from 'lucide-react';

export default function HomePage({ onOpenBooking, onAddToCart, cartItems }) {
  return (
    <div className="animate-fade-in overflow-hidden">
      {/* 1. Hero Banner with Image 1 */}
      <Hero
        onOpenBooking={onOpenBooking}
        onScrollToMenu={() => {}}
      />

      {/* 2. Brand Story Teaser with Image 2 */}
      <section className="py-14 sm:py-24 px-4 sm:px-8 bg-[#FAF8F3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Story Copy */}
            <AnimatedReveal animation="fade-left" className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#775a19] uppercase block flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#C9A45C]" />
                <span>Our Story</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#241812] leading-[1.15]">
                A Taste Loved<br />for Generations
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
                Agra Restaurant, located in the heart of Pune Camp, has been serving delicious and authentic North Indian and Mughlai preparations with consistent quality and warm hospitality since 1968.
              </p>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Rooted in classic North Indian spice crafts and time-honored Dum cooking techniques, every culinary preparation is a celebration of our family’s love for hearty meals.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="btn-shine inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#241812] hover:bg-[#36241B] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md group hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
                >
                  <span>Know More About Our Heritage</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A45C] transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </AnimatedReveal>

            {/* Visual Card with Image 2 & Floating Animated Badge */}
            <AnimatedReveal animation="fade-right" className="lg:col-span-7 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 img-zoom group">
                <img
                  src="/images/rattan-dining-booths.png"
                  alt="Agra Restaurant Comfortable Green Paneling and Rattan Family Dining Area"
                  className="w-full h-[320px] sm:h-[460px] object-cover object-center filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge (Shown on tablet/desktop, hidden on mobile for clean minimalist aesthetics) */}
              <div className="hidden sm:flex lg:absolute -bottom-6 lg:-bottom-6 right-0 lg:-right-4 w-full sm:max-w-sm mt-4 lg:mt-0 bg-[#2E3321] text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/10 items-start gap-4 animate-float-slow hover:border-[#C9A45C]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide mb-1">
                    Comfortable Family Dining
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    A clean, spacious and welcoming space for everyone in Pune Camp.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* 3. Popular Signature Dishes with direct Add to Tray */}
      <SpecialtiesSection
        onAddToCart={onAddToCart}
        cartItems={cartItems}
        onExploreMenu={() => {}}
      />

      {/* 4. Real Ambience Feature showcasing both images */}
      <section className="py-14 sm:py-24 px-4 sm:px-8 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto space-y-12">
          <AnimatedReveal animation="fade-up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#775a19] uppercase block mb-2">
                The Dining Spaces
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#241812]">
                Crafted for Family & Celebration
              </h2>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#241812]/40 hover:border-[#241812] bg-white hover:bg-[#241812] text-[#241812] hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm group hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore All Photo Archives</span>
              <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </AnimatedReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Rattan Booths */}
            <AnimatedReveal animation="fade-left" delay={100} className="hover-lift group relative rounded-3xl overflow-hidden shadow-xl bg-[#241812] min-h-[300px] sm:min-h-[380px] border border-stone-800 img-zoom">
              <img
                src="/images/rattan-dining-booths.png"
                alt="Agra Restaurant Cane & Rattan Dining Enclave"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18100C]/95 via-[#241812]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white transition-opacity">
                <span className="text-xs uppercase tracking-widest text-[#E8D7B0] font-bold">
                  Cozy Booths
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1 group-hover:text-[#C9A45C] transition-colors">
                  Cane & Rattan Dining Enclave
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 font-light mt-1 max-w-md">
                  Warm wooden finishes, green feature wall, and soft ambient globe sconces for unhurried meals.
                </p>
              </div>
            </AnimatedReveal>

            {/* Card 2: Exposed Brick Hall & Dessert Bar */}
            <AnimatedReveal animation="fade-right" delay={150} className="hover-lift group relative rounded-3xl overflow-hidden shadow-xl bg-[#241812] min-h-[300px] sm:min-h-[380px] border border-stone-800 img-zoom">
              <img
                src="/images/brick-wall-dining.jpg"
                alt="Agra Restaurant Exposed Brick Wall Lounge"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18100C]/95 via-[#18100C]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white transition-opacity">
                <span className="text-xs uppercase tracking-widest text-[#E8D7B0] font-bold">
                  Family Lounge
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1 group-hover:text-[#C9A45C] transition-colors">
                  Exposed Brick Hall & Dessert Bar
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 font-light mt-1 max-w-md">
                  Modern texture, plush banquette seating, and curated fresh desserts in the heart of Pune Camp.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* 5. Heritage Pillars */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 bg-[#2E3321] text-white border-t border-[#C9A45C]/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <AnimatedReveal animation="fade-up" className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] text-[#C9A45C] uppercase block">
              More than just a meal
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Why Guests Keep Returning to Agra Restaurant
            </h2>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={100} stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {RESTAURANT_INFO.pillars.map((pillar) => (
              <div key={pillar.num} className="hover-lift group p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9A45C]/40 hover:bg-white/10 space-y-3 transition-all cursor-default">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all">
                  <span className="font-serif text-lg sm:text-xl font-bold">{pillar.num}</span>
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#E8D7B0] group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </AnimatedReveal>
        </div>
      </section>

      {/* 6. Visit & Table Reservation Banner */}
      <section className="relative bg-[#18100C] text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[500px]">
          {/* Left Side: Photo with Ken Burns */}
          <div className="lg:col-span-6 relative min-h-[240px] sm:min-h-[360px] lg:min-h-full overflow-hidden">
            <img
              src="/images/hero-dining-hall.png"
              alt="Agra Restaurant Dining Room"
              className="w-full h-full object-cover filter brightness-90 animate-kenburns"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#18100C]/90 lg:block hidden pointer-events-none" />
          </div>

          {/* Right Side: Information Panel */}
          <AnimatedReveal animation="fade-left" className="lg:col-span-6 bg-[#232719] p-6 sm:p-14 lg:p-16 flex flex-col justify-center">
            <div className="max-w-xl space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#C9A45C] uppercase block">
                Visit Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif text-white leading-tight">
                Dine, Relax<br />and Enjoy
              </h2>
              <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
                Whether it’s a family meal, a gathering with friends or a quick bite, Agra Restaurant is always a memorable experience in Pune Camp.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="btn-shine px-6 py-3.5 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </button>

                <Link
                  to="/menu"
                  className="px-6 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 text-stone-200 border border-[#C9A45C]/40 font-semibold text-xs sm:text-sm tracking-wide transition-all hover:border-[#C9A45C] hover:-translate-y-0.5"
                >
                  Explore Full Menu
                </Link>
              </div>

              {/* Info Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <h4 className="text-[#C9A45C] uppercase font-bold">Open Daily</h4>
                  <p className="text-stone-300 mt-0.5">{RESTAURANT_INFO.hours.general}</p>
                </div>
                <div>
                  <h4 className="text-[#C9A45C] uppercase font-bold">Call Us</h4>
                  <a href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`} className="text-stone-300 hover:text-[#C9A45C] transition-colors mt-0.5 block">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div>
                  <h4 className="text-[#C9A45C] uppercase font-bold">Location</h4>
                  <p className="text-stone-300 mt-0.5">{RESTAURANT_INFO.city}</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}

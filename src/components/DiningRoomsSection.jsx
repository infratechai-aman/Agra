import React from 'react';
import { ArrowRight, Users, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import AnimatedReveal from './AnimatedReveal';

export default function DiningRoomsSection({ onReserveCorner }) {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <AnimatedReveal animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[#775a19] text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4 text-[#C9A45C] animate-sparkle" />
            <span>Atmosphere & Ambience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#241812] tracking-tight">
            A Walk Through Our Dining Rooms
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Crafted with warm teak panelling, exposed brickwork, soft golden lighting, and partitioned family alcoves to ensure both intimacy and festive cheer.
          </p>
        </div>

        <button
          onClick={onReserveCorner}
          className="btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#241812] hover:bg-[#36241B] text-[#FAF8F3] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer hover:border-[#C9A45C] group self-start md:self-end hover:-translate-y-0.5 hover:shadow-xl"
        >
          <span>Reserve Your Corner</span>
          <ArrowRight className="w-4 h-4 text-[#C9A45C] transform transition-transform duration-300 group-hover:translate-x-1.5" />
        </button>
      </AnimatedReveal>

      {/* Spatial Visual Layout Featuring the 2 Authentic Interior Photos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Photo 1: Rattan Booths & Green Feature Wall */}
        <AnimatedReveal animation="fade-left" className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border border-[#D8C7A5]/50 relative min-h-[440px] bg-[#241812] group img-zoom hover-lift">
          <img
            src="/images/rattan-dining-booths.png"
            alt="Warm ambient interior of Agra Hotel with rattan cane booths and amber lighting"
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18100C]/95 via-[#241812]/30 to-transparent flex flex-col justify-end p-8 text-white transition-opacity">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E8D7B0]">
              The Cane & Rattan Enclave
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF8F3] mt-1 group-hover:text-[#C9A45C] transition-colors">
              Handcrafted Cane Booths & Olive Panelling
            </h3>
            <p className="text-sm text-stone-300 font-light mt-2 max-w-lg leading-relaxed">
              Designed for leisurely weekend family lunches with acoustic privacy, comfortable cane-back banquettes, and ambient globe sconces.
            </p>
          </div>
        </AnimatedReveal>

        {/* Side Column: Photo 2 & Mezzanine Card */}
        <AnimatedReveal animation="fade-right" className="lg:col-span-5 flex flex-col gap-6">
          {/* Main Photo 2: Exposed Brick Dining Hall & Dessert Counter */}
          <div className="flex-1 rounded-3xl overflow-hidden relative shadow-xl min-h-[260px] bg-[#241812] group border border-[#D8C7A5]/50 img-zoom hover-lift">
            <img
              src="/images/brick-wall-dining.jpg"
              alt="Exposed brick wall dining room and dessert bar at Agra Hotel Pune Camp"
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18100C]/95 via-[#18100C]/40 to-transparent p-6 flex flex-col justify-end text-white transition-opacity">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8D7B0]">
                The Brick Hearth Lounge
              </span>
              <h4 className="text-xl font-serif font-bold text-white mt-0.5 group-hover:text-[#C9A45C] transition-colors">
                Exposed Brick Hall & Dessert Display
              </h4>
              <p className="text-xs text-stone-200 font-light mt-1 line-clamp-2">
                Warm textured brickwork paired with plush banquet seating and fresh dessert displays.
              </p>
            </div>
          </div>

          {/* Family Mezzanine Specs Card */}
          <div className="hover-lift rounded-3xl bg-[#FAF5EC] border border-[#E0D3C1] p-6 shadow-sm hover:border-[#C9A45C]/50 transition-all flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[#775a19] font-bold text-xs uppercase tracking-wider">
                <Users className="w-4 h-4 text-[#C9A45C]" />
                <span>Private Family Mezzanine</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-[#241812]">
                Spacious Seating for Multi-Gen Feasts
              </h4>
              <p className="text-xs text-[#4e4540] leading-relaxed">
                Accommodates large table groupings of up to 24 guests together, equipped with baby high chairs, wheelchair access, and attentive attendant service.
              </p>
            </div>

            <div className="pt-3 border-t border-[#E0D3C1] flex items-center justify-between text-xs text-[#775a19] font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 animate-sparkle" />
                <span>Capacity: 80 Guests</span>
              </span>
              <span className="text-[#241812] bg-[#EAE0CF] px-3 py-1 rounded-full text-[11px] font-bold">
                Fully Air-Conditioned
              </span>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

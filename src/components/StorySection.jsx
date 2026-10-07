import React from 'react';
import { History, Flame, HeartHandshake, CheckCircle2, Award, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import AnimatedReveal from './AnimatedReveal';
import AnimatedCounter from './AnimatedCounter';

export default function StorySection({ onExploreMore }) {
  return (
    <section id="story" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Main Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Story Narrative Content */}
          <AnimatedReveal animation="fade-left" className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#775a19] text-xs font-bold uppercase tracking-[0.2em]">
              <History className="w-4 h-4 text-[#C9A45C]" />
              <span>Our Legacy in Pune Camp</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#241812] leading-[1.15]">
              A Taste Loved<br />for Generations
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
              Agra Restaurant, located in the historic heart of Pune Camp, has been serving authentic North Indian and royal Mughlai preparations with unwavering consistency and heartfelt hospitality.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              In the mid-20th century, Pune Camp was vibrant with military cantonment life, colonial avenues, and the fragrant smoke of charcoal tandoors drifting across Camp Road. Rooted in that timeless heritage, our kitchen preserves old-world culinary crafts: long-grain Basmati steamed over coal embers, naans hand-slapped against scorch-fired clay walls, and stone-crushed spice bouquets created fresh every dawn.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="p-4 rounded-xl bg-[#F5EDE1] border border-[#E0D3C1] shadow-sm flex items-center gap-3 hover-lift">
                <CheckCircle2 className="w-6 h-6 text-[#775a19] shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[#241812]">Timeless Integrity</h4>
                  <p className="text-xs text-stone-600">Zero synthetic food colors, pure ghee, and heirloom recipes.</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Story Visual with Overlapping Animated Badge */}
          <AnimatedReveal animation="fade-right" className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 img-zoom group">
              <img
                src="/images/rattan-dining-booths.png"
                alt="Agra Restaurant Comfortable Green Paneling and Rattan Family Dining Area"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Overlapping Badge */}
            <div className="relative lg:absolute -bottom-6 lg:-bottom-6 right-0 lg:-right-4 max-w-sm mt-4 lg:mt-0 bg-[#2E3321] text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/10 flex items-start gap-4 animate-float-slow hover:border-[#C9A45C]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide mb-1">
                  Comfortable Family Dining
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  A clean, spacious and welcoming dining haven for families, reunions and travellers since 1968.
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>

        {/* Archival Milestones Ribbon with Animated Numbers */}
        <AnimatedReveal animation="scale" className="w-full rounded-2xl bg-[#241812] text-white p-6 sm:p-8 shadow-2xl border border-[#C9A45C]/30 relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#C9A45C]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">
            {RESTAURANT_INFO.milestones.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center pt-4 md:pt-0 group cursor-default">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E8D7B0] group-hover:text-[#C9A45C] transition-colors">
                  <AnimatedCounter target={item.number} duration={2000} />
                </span>
                <span className="text-xs uppercase tracking-wider text-[#C9A45C] font-semibold mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedReveal>

        {/* Sacred Standards: 3 Founding Codes */}
        <div className="space-y-10">
          <AnimatedReveal animation="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#775a19] text-xs font-bold uppercase tracking-[0.2em] block">
              Sacred Standards
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#241812]">
              Our Culinary Philosophy
            </h3>
            <p className="text-stone-600 text-sm sm:text-base font-light">
              Great Mughlai cuisine is not manufactured; it is tended to with reverence, memory, and patient hands.
            </p>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={120} stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hover-lift group p-8 rounded-2xl bg-[#FAF5EC] border border-[#E0D3C1] hover:border-[#C9A45C]/60 shadow-sm flex flex-col justify-between space-y-5 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EADCC7] border border-[#C9A45C]/40 flex items-center justify-center text-[#775a19] group-hover:scale-110 group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all duration-300">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#241812] group-hover:text-[#775a19] transition-colors">
                  Hand-Ground Spices & Masalas
                </h4>
                <p className="text-sm text-[#4e4540] leading-relaxed">
                  Whole Kashmiri chilies, mace, nutmeg, black cardamom, and rose petals are slow-roasted on iron tawas and stone-crushed fresh every morning.
                </p>
              </div>
              <div className="pt-2 text-xs uppercase tracking-wider text-[#775a19] font-bold">
                Daily Mortar Milling
              </div>
            </div>

            <div className="hover-lift group p-8 rounded-2xl bg-[#FAF5EC] border border-[#E0D3C1] hover:border-[#C9A45C]/60 shadow-sm flex flex-col justify-between space-y-5 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EADCC7] border border-[#C9A45C]/40 flex items-center justify-center text-[#775a19] group-hover:scale-110 group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all duration-300">
                  <Flame className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#241812] group-hover:text-[#775a19] transition-colors">
                  Slow Dum Cooking
                </h4>
                <p className="text-sm text-[#4e4540] leading-relaxed">
                  Heavy degchis sealed with kneaded whole wheat dough capture natural steam and bone marrow richness, delivering velvet textures and aroma.
                </p>
              </div>
              <div className="pt-2 text-xs uppercase tracking-wider text-[#775a19] font-bold">
                4-Hour Clay Simmering
              </div>
            </div>

            <div className="hover-lift group p-8 rounded-2xl bg-[#FAF5EC] border border-[#E0D3C1] hover:border-[#C9A45C]/60 shadow-sm flex flex-col justify-between space-y-5 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EADCC7] border border-[#C9A45C]/40 flex items-center justify-center text-[#775a19] group-hover:scale-110 group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all duration-300">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#241812] group-hover:text-[#775a19] transition-colors">
                  Family Hospitality
                </h4>
                <p className="text-sm text-[#4e4540] leading-relaxed">
                  Every diner entering our Camp threshold is treated as an honored personal guest. We remember your preferred table, spice levels, and family celebrations.
                </p>
              </div>
              <div className="pt-2 text-xs uppercase tracking-wider text-[#775a19] font-bold">
                Generational Welcome
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

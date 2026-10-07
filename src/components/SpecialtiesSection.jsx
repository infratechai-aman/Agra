import React from 'react';
import { ArrowRight, Plus, Check, Sparkles } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import AnimatedReveal from './AnimatedReveal';

export default function SpecialtiesSection({ onAddToCart, cartItems, onExploreMenu }) {
  return (
    <section id="specialties" className="py-14 sm:py-32 px-4 sm:px-8 bg-[#F3EFE6] border-y border-[#E0D3C1] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header row with Reveal */}
        <AnimatedReveal animation="fade-up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[#775a19] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Sparkles className="w-4 h-4 text-[#C9A45C] animate-sparkle" />
              <span>Our Specialties</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#241812]">
              Popular Dishes
            </h2>
          </div>

          <button
            onClick={onExploreMenu}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#241812]/40 hover:border-[#241812] bg-[#FAF8F3] hover:bg-[#241812] text-[#241812] hover:text-[#FAF8F3] text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer shadow-sm group hover:-translate-y-0.5"
          >
            <span>View Full Culinary Ledger</span>
            <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </AnimatedReveal>

        {/* 4 Culinary Cards Grid with Staggered Scroll Reveal */}
        <AnimatedReveal animation="fade-up" delay={120} stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_DISHES.map((dish) => {
            const inCart = cartItems?.find((item) => item.id === dish.id);

            return (
              <article
                key={dish.id}
                className="hover-lift group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl bg-[#241812] aspect-[4/5] flex flex-col justify-end p-5 transition-all duration-500 border border-stone-800 img-zoom"
              >
                {/* Background Food Photography with Zoom */}
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:brightness-95"
                />

                {/* Dark Vignette Overlay with dynamic deepening on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18100C] via-[#18100C]/65 to-transparent transition-opacity group-hover:opacity-95" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#18100C]/85 backdrop-blur-md text-[#E8D7B0] text-[10px] font-bold uppercase tracking-widest border border-[#C9A45C]/40 group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all">
                    {dish.badge}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-serif font-bold text-[#E8D7B0] group-hover:text-white transition-colors">
                      ₹{dish.price}
                    </span>
                    <span className="text-[11px] text-stone-300 font-light">
                      {dish.portion}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C9A45C] transition-colors leading-tight">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-stone-300 font-light mt-1 line-clamp-2">
                      {dish.tagline}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onAddToCart(dish)}
                      className={`btn-shine w-full py-2.5 px-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:-translate-y-0.5 ${
                        inCart
                          ? 'bg-[#16a34a] hover:bg-[#15803d] text-white shadow-emerald-900/30'
                          : 'bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] hover:shadow-[#C9A45C]/30'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 animate-badge-bounce" />
                          <span>Added ({inCart.quantity})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Feast Tray</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </AnimatedReveal>
      </div>
    </section>
  );
}

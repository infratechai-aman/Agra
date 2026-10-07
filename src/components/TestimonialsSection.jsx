import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';
import AnimatedReveal from './AnimatedReveal';

export default function TestimonialsSection() {
  return (
    <section className="bg-[#EFE8DC] py-24 sm:py-32 px-4 sm:px-8 border-y border-[#D8C7A5]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <AnimatedReveal animation="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[#775a19] text-xs font-bold uppercase tracking-[0.2em]">
            <MessageSquareQuote className="w-4 h-4 text-[#C9A45C]" />
            <span>Community Memory</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#241812] tracking-tight">
            Testimonials Across Decades
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            The true measure of our kitchen lives in the reminiscences of Pune citizens who have celebrated milestones with us since their school days.
          </p>
        </AnimatedReveal>

        <AnimatedReveal animation="fade-up" delay={120} stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="hover-lift group p-8 rounded-2xl bg-[#FAF5EC] border border-[#D8C7A5]/70 hover:border-[#C9A45C]/60 shadow-sm flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                {/* 5 Stars with hover glow */}
                <div className="flex text-[#C9A45C] gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A45C] group-hover:scale-115 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>

                <blockquote className="text-sm font-serif italic text-[#241812] leading-relaxed group-hover:text-[#18100C] transition-colors">
                  “{t.quote}”
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#D8C7A5]/40">
                <div className="font-serif font-bold text-base text-[#241812] group-hover:text-[#775a19] transition-colors">
                  {t.name}
                </div>
                <div className="text-[11px] text-[#775a19] font-medium mt-0.5">
                  {t.title}
                </div>
              </div>
            </div>
          ))}
        </AnimatedReveal>
      </div>
    </section>
  );
}

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MarqueeTicker() {
  const tickerItems = [
    'Traditional Taste of Pune Since 1968',
    '100% Halal Certified Daily Fresh Cuts',
    'Hand-Pounded Stone Spices & Pure Desi Ghee',
    'Sealed Clay Dum Pukht Specialties',
    'Live Charcoal Sigri & Clay Pit Tandoor',
    'Air-Conditioned Family Dining Suites in Pune Camp',
    'Heirloom Mughlai Recipes Treasured Across 3 Generations'
  ];

  return (
    <div className="w-full bg-[#18100C] text-[#E8D7B0] py-3 border-y border-[#C9A45C]/25 overflow-hidden select-none">
      <div className="marquee-container">
        {/* Track 1 */}
        <div className="marquee-content flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em]">
          {tickerItems.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-6 shrink-0">
              <span className="hover:text-[#C9A45C] transition-colors">{item}</span>
              <Sparkles className="w-3 h-3 text-[#C9A45C] animate-sparkle shrink-0" />
            </div>
          ))}
        </div>

        {/* Track 2 for infinite loop */}
        <div className="marquee-content flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em]" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center gap-6 shrink-0">
              <span className="hover:text-[#C9A45C] transition-colors">{item}</span>
              <Sparkles className="w-3 h-3 text-[#C9A45C] animate-sparkle shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

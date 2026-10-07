import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, UtensilsCrossed, Phone, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#18100C] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle ambient golden glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none animate-pulse-gold" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-6 animate-scale-in">
        {/* Mughal Arch Motif */}
        <div className="w-16 h-16 border-2 border-[#C9A45C] rounded-t-full flex items-center justify-center mx-auto bg-[#241812] shadow-2xl">
          <svg
            className="w-8 h-8 text-[#C9A45C]"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M3 21h18M5 21V9a7 7 0 0 1 14 0v12M9 21V11a3 3 0 0 1 6 0v10" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="font-mono text-sm tracking-widest text-[#C9A45C] uppercase font-bold block">
            Error 404 • Destination Not Found
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-white font-bold leading-tight">
            This Dining Corner Seems Unoccupied
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 font-light max-w-md mx-auto leading-relaxed">
            The vintage corridor or page you are looking for has been moved or does not exist. Let us guide you back to our hearth.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-shine w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl cursor-pointer hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/menu"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#241812] hover:bg-[#36241B] text-white border border-[#C9A45C]/40 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:border-[#C9A45C]"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#C9A45C]" />
            <span>Explore Menu</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-stone-400">
          <span>Need help finding us? </span>
          <a
            href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
            className="text-[#C9A45C] font-semibold hover:underline"
          >
            Call Desk: {RESTAURANT_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

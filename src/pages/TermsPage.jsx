import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ShieldCheck, Utensils, AlertCircle, ArrowLeft } from 'lucide-react';
import AnimatedReveal from '../components/AnimatedReveal';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function TermsPage() {
  return (
    <div className="animate-fade-in pt-16 sm:pt-24 bg-[#FAF8F3] min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#18100C] text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-[#C9A45C]/30 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
        <AnimatedReveal animation="fade-up" className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#36241B] text-[#E8D7B0] text-xs uppercase tracking-[0.2em] font-bold border border-[#C9A45C]/30">
            <BookOpen className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Guest Information & Dining Etiquette</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl font-serif text-[#FAF8F3] tracking-tight">
            Terms of Dining & Service
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Welcome to Agra Hotel. To ensure every family, patron, and traveller experiences the utmost comfort and prompt service, please review our dining guidelines.
          </p>
        </AnimatedReveal>
      </section>

      {/* Main Legal Content Container */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl border border-[#E0D3C1] space-y-10 text-stone-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1: Reservation Hold */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#241812]">
              <Clock className="w-5 h-5 text-[#C9A45C]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold">1. Table Reservations & Courtesy Hold</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              During peak dinner hours (07:30 PM – 10:30 PM) and weekend lunch sessions, Agra Hotel reserves tables with a <strong>15-minute courtesy grace period</strong> from your scheduled arrival time. If your party anticipates a delay due to Pune Camp traffic, please notify our desk via telephone so we may preserve your seating.
            </p>
          </div>

          {/* Section 2: Purity & Dietary Codes */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#241812]">
              <ShieldCheck className="w-5 h-5 text-[#C9A45C]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold">2. Culinary Purity & Halal Standards</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              All mutton, poultry, and meat preparations at Agra Hotel are strictly <strong>100% Halal certified</strong>, inspected daily, and prepared in sanitized kitchen stations. We use zero artificial food colorings and slow-cook our dishes using traditional desi ghee, cold-pressed oils, and hand-ground spices.
            </p>
          </div>

          {/* Section 3: Large Parties & Banquets */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#241812]">
              <Utensils className="w-5 h-5 text-[#C9A45C]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold">3. Large Parties & Family Receptions</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              For gatherings of 8 guests or more, pre-ordering signature specialties (such as our Dum Biryani handis or Royal Thaal platters) is strongly recommended to ensure synchronised kitchen service.
            </p>
          </div>

          {/* Section 4: Outside Food & Beverages */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#241812]">
              <AlertCircle className="w-5 h-5 text-[#C9A45C]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold">4. Outside Food & Beverage Regulations</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              In accordance with municipal food safety mandates and our strict halal hygiene protocol, outside cooked meals, snacks, and alcoholic beverages are strictly prohibited on the restaurant premises. Celebratory birthday cakes may be brought with prior notice to our floor captain.
            </p>
          </div>

          {/* Section 5: Billing & Payments */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241812]">5. Billing & Applicable Taxes</h2>
            <p className="text-xs sm:text-sm text-stone-600">
              All prices displayed on our menu repertoire are subject to standard GST (5%) as per Government of India restaurant hospitality guidelines. We accept all major UPI applications (Google Pay, PhonePe, Paytm), credit/debit cards, and cash. We do not levy any mandatory discretionary service charge.
            </p>
          </div>

          <div className="pt-6 border-t border-[#E0D3C1] flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#775a19] hover:text-[#241812] uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/privacy-policy"
              className="text-xs font-bold text-[#775a19] hover:underline uppercase tracking-wider"
            >
              Read Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Clock, 
  UtensilsCrossed, 
  PartyPopper, 
  Building2, 
  MessageCircle, 
  Phone,
  CheckCircle2,
  ShieldCheck,
  Flame
} from 'lucide-react';
import AnimatedReveal from '../components/AnimatedReveal';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function PrivateDiningPage({ onShowToast }) {
  const [hostName, setHostName] = useState('');
  const [hostPhone, setHostPhone] = useState('');
  const [eventType, setEventType] = useState('Family Reunion / Dawat');
  const [guestCount, setGuestCount] = useState('25');
  const [eventDate, setEventDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hostName.trim() || !hostPhone.trim()) {
      if (onShowToast) onShowToast('Please fill in your name and telephone number', 'error');
      return;
    }

    setSubmitted(true);
    if (onShowToast) onShowToast('Banquet inquiry submitted! We will contact you shortly.', 'success');

    // Generate WhatsApp dispatch message
    const message = `*AGRA HOTEL PUNE CAMP - PRIVATE DINING & BANQUET INQUIRY*%0A%0A` +
      `*Host Name:* ${hostName}%0A` +
      `*Phone:* ${hostPhone}%0A` +
      `*Event Type:* ${eventType}%0A` +
      `*Estimated Guests:* ${guestCount}%0A` +
      `*Target Date:* ${eventDate}%0A` +
      `*Special Requirements:* ${specialRequests || 'Standard banquet package'}%0A%0A` +
      `Please provide menu tier packages and availability.`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  const packages = [
    {
      title: 'Family Dawat & Reunion',
      capacity: '15 – 35 Guests',
      hall: 'Cane & Rattan Dining Enclave',
      highlights: [
        'Semi-private dedicated wing with custom seating',
        'Unlimited Dum Biryani & Charcoal Kebabs starter service',
        'Choice of 2 gravies, fresh assorted naans & rotis',
        'Signature dessert service (Shahi Tukda & Gulab Jamun)',
        'Dedicated floor captain & priority kitchen queue'
      ],
      price: 'From ₹650 / guest'
    },
    {
      title: 'Corporate Feasts & Luncheons',
      capacity: '20 – 60 Guests',
      hall: 'Exposed Brick Lounge & AC Hall',
      highlights: [
        'Audio/Visual space setup on request',
        'Speedy synchronised corporate lunch service',
        'Balanced veg and non-veg luxury buffet spread',
        'Complimentary traditional welcome drinks & coolers',
        'Detailed GST tax invoice provided'
      ],
      price: 'From ₹750 / guest'
    },
    {
      title: 'Grand Outdoor Dawat Catering',
      capacity: '50 – 300+ Guests',
      hall: 'Delivered across Pune & Camp venues',
      highlights: [
        'Clay degchis sealed with whole-wheat dough opened on-site',
        'Live charcoal Sigri counters with master tandoor ustaads',
        'Traditional brassware & chafing dish buffet setup',
        'Full uniformed service crew and kitchen assistance',
        '100% Halal audited meat sourcing'
      ],
      price: 'Custom quotation'
    }
  ];

  return (
    <div className="animate-fade-in pt-16 sm:pt-24 bg-[#FAF8F3] min-h-screen">
      {/* Editorial Header Banner */}
      <section className="relative overflow-hidden bg-[#241812] text-white py-16 sm:py-24 px-4 sm:px-8 border-b border-[#C9A45C]/30 text-center">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/brick-wall-dining.jpg"
            alt="Agra Hotel Banquet & Celebrations"
            className="w-full h-full object-cover filter brightness-[0.32] contrast-125 animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18100C] via-[#241812]/80 to-[#18100C]/90" />
        </div>

        <AnimatedReveal animation="fade-up" className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#36241B] text-[#E8D7B0] text-xs uppercase tracking-[0.2em] font-bold border border-[#C9A45C]/30">
            <PartyPopper className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Celebrations • Reunions • Banquets</span>
          </div>

          <h1 className="text-3xl xs:text-5xl sm:text-6xl font-serif text-[#FAF8F3] tracking-tight">
            Private Dining & Banquets
          </h1>

          <p className="text-xs sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Host your most cherished milestones with generational Mughlai warmth. From intimate family dawats in our AC suites to large celebrations catered across Pune.
          </p>
        </AnimatedReveal>
      </section>

      {/* 3 Banquet Tiers */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <AnimatedReveal animation="fade-up" className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#775a19] font-bold block">
            Curated Formats
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#241812]">
            Tailored for Every Occasion
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light">
            Every gathering receives personalized culinary consultation with our master kitchen chefs.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <AnimatedReveal key={idx} animation="fade-up" delay={idx * 100} className="hover-lift rounded-3xl bg-white p-7 sm:p-8 shadow-xl border border-[#E0D3C1] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E0D3C1]">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#775a19]">
                    {pkg.capacity}
                  </span>
                  <span className="font-serif font-bold text-sm text-[#241812]">
                    {pkg.price}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#241812]">
                  {pkg.title}
                </h3>
                <p className="text-xs text-[#775a19] font-semibold">
                  Section: {pkg.hall}
                </p>

                <ul className="space-y-2.5 pt-2 text-xs text-stone-600">
                  {pkg.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Agra%20Hotel!%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine w-full py-3 rounded-xl bg-[#241812] hover:bg-[#36241B] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A45C]" />
                <span>Inquire on WhatsApp</span>
              </a>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 bg-[#241812] text-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedReveal animation="fade-up" className="bg-[#18100C] rounded-3xl p-6 sm:p-12 border border-[#C9A45C]/35 shadow-2xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A45C] block">
                Reserve Your Date
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#FAF8F3]">
                Plan Your Private Gathering
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light max-w-lg mx-auto">
                Fill in your expected group details, and our banquet manager will get back to you with menu options and custom pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={hostName}
                    onChange={(e) => setHostName(e.target.value)}
                    placeholder="e.g. Farooq Merchant"
                    className="w-full px-4 py-2.5 bg-[#241812] rounded-xl text-xs sm:text-sm text-white border border-stone-600 focus:border-[#C9A45C] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={hostPhone}
                    onChange={(e) => setHostPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 bg-[#241812] rounded-xl text-xs sm:text-sm text-white border border-stone-600 focus:border-[#C9A45C] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#241812] rounded-xl text-xs sm:text-sm text-white border border-stone-600 focus:border-[#C9A45C] outline-none cursor-pointer"
                  >
                    <option value="Family Reunion / Dawat">Family Reunion / Dawat</option>
                    <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                    <option value="Corporate Luncheon">Corporate Luncheon</option>
                    <option value="Engagement / Reception">Engagement / Reception</option>
                    <option value="Outdoor Event Catering">Outdoor Event Catering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                    Estimated Guests
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="500"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#241812] rounded-xl text-xs sm:text-sm text-white border border-stone-600 focus:border-[#C9A45C] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                    Target Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#241812] rounded-xl text-xs sm:text-sm text-white border border-stone-600 focus:border-[#C9A45C] outline-none cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                  Special Culinary or Seating Requests
                </label>
                <textarea
                  rows="3"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Tell us about your preferred dishes (Mutton Dum Biryani, Butter Chicken, Desserts), spice levels, or hall setup..."
                  className="w-full px-4 py-2.5 bg-[#241812] rounded-xl text-xs sm:text-sm text-white border border-stone-600 focus:border-[#C9A45C] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-shine w-full py-4 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-all hover:-translate-y-0.5"
              >
                <PartyPopper className="w-4 h-4" />
                <span>Submit Banquet Inquiry & Chat on WhatsApp</span>
              </button>
            </form>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}

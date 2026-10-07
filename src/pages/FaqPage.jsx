import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Bike 
} from 'lucide-react';
import AnimatedReveal from '../components/AnimatedReveal';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqData = [
    {
      category: 'Reservations',
      question: 'Do I need a reservation to dine at Agra Hotel Pune Camp?',
      answer: 'Walk-in guests are always warmly welcomed! However, during weekend dinners (Friday to Sunday, 07:30 PM – 10:30 PM) and public holidays, reserving a table via our online booking form or telephone is strongly recommended to avoid waiting.'
    },
    {
      category: 'Reservations',
      question: 'How long will you hold our reserved table if we are delayed?',
      answer: 'We provide a 15-minute courtesy grace period from your reservation time. If you face unexpected Pune Camp traffic, simply give our kitchen desk a quick call and we will happily hold your table.'
    },
    {
      category: 'Halal & Sourcing',
      question: 'Is all food served at Agra Hotel 100% Halal certified?',
      answer: 'Yes, absolutely. All mutton, chicken, and meat sourced by Agra Hotel is 100% Halal certified, procured fresh daily from audited local distributors. Our kitchen operates under strict hygiene and purity protocols.'
    },
    {
      category: 'Halal & Sourcing',
      question: 'Do you use synthetic food colors or artificial tenderizers?',
      answer: 'Never. Our deep gravies and biryani colors are derived naturally from Kashmiri dry red chilies, saffron strands, browned onions (birista), and pure desi ghee. We adhere to time-honored Dum Pukht techniques with zero synthetic shortcuts.'
    },
    {
      category: 'Location & Parking',
      question: 'Where is Agra Hotel located in Pune Camp?',
      answer: 'We are situated in the historic cantonment quarter of Pune Camp, easily accessible from MG Road, East Street, and Pune Railway Station. Landmark: Near the historic Camp Post Office area.'
    },
    {
      category: 'Location & Parking',
      question: 'Is parking available for cars and two-wheelers?',
      answer: 'Yes, two-wheeler street parking is readily available right outside. For four-wheelers, dedicated lane parking is available along the adjoining Camp avenues. Our security personnel assist guests with parking during dinner hours.'
    },
    {
      category: 'Takeaway & Delivery',
      question: 'Can I order food for takeaway or home delivery?',
      answer: 'Yes! You can assemble your order using our interactive "Feast Tray" on this website and send it directly to our kitchen desk via WhatsApp. Takeaway parcels are packed in food-grade, leak-proof containers that preserve tandoor warmth and aroma.'
    },
    {
      category: 'Takeaway & Delivery',
      question: 'How far in advance should I order signature Handi Dum Biryani for home parties?',
      answer: 'For individual family portions, 30–45 minutes is standard. For full degchis (feeding 10–25 people), we request 3–4 hours prior notice so our chefs can seal and dum-cook the handi fresh over charcoal embers.'
    },
    {
      category: 'Dietary & Family',
      question: 'Do you offer vegetarian options?',
      answer: 'Yes! We feature a dedicated vegetarian selection including Paneer Tikka Masala, Dal Makhani slow-cooked for 12 hours, Subz Dum Biryani, Mushroom Rogan Josh, and freshly baked tandoori rotis.'
    },
    {
      category: 'Dietary & Family',
      question: 'Is the restaurant air-conditioned and family-friendly?',
      answer: 'Yes, we have both our classic dining area and dedicated air-conditioned family suites, complete with comfortable cane-and-rattan seating booths and child-friendly seating.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'Reservations', label: 'Reservations & Timings' },
    { id: 'Halal & Sourcing', label: 'Halal & Sourcing' },
    { id: 'Location & Parking', label: 'Location & Parking' },
    { id: 'Takeaway & Delivery', label: 'Takeaway & Orders' },
    { id: 'Dietary & Family', label: 'Dietary & Family' }
  ];

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const queryMatch = !query || 
        item.question.toLowerCase().includes(query) || 
        item.answer.toLowerCase().includes(query);
      return categoryMatch && queryMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="animate-fade-in pt-16 sm:pt-24 bg-[#FAF8F3] min-h-screen">
      {/* Header */}
      <section className="bg-[#18100C] text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-[#C9A45C]/30 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
        <AnimatedReveal animation="fade-up" className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#36241B] text-[#E8D7B0] text-xs uppercase tracking-[0.2em] font-bold border border-[#C9A45C]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Guest Dining Guide</span>
          </div>

          <h1 className="text-3xl xs:text-5xl sm:text-6xl font-serif text-[#FAF8F3] tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-xs sm:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Everything you need to know about our legacy cuisine, table reservations, halal standards, and dining in Pune Camp.
          </p>

          {/* Search bar inside header */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-[#775a19] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., parking, halal, biryani, booking)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white text-xs sm:text-sm text-[#241812] outline-none shadow-xl border border-[#C9A45C]/40 focus:ring-2 focus:ring-[#C9A45C]"
              />
            </div>
          </div>
        </AnimatedReveal>
      </section>

      {/* Main Body */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 max-w-4xl mx-auto space-y-8">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#241812] text-white shadow-md scale-105'
                  : 'bg-[#FAF5EC] text-stone-700 hover:bg-[#EAE0D0] border border-[#E0D3C1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white border border-[#E0D3C1] text-xs text-stone-500">
              No answers matched your search. Please reach out to our desk directly below!
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#E0D3C1] shadow-sm hover:border-[#C9A45C]/60 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#241812] hover:text-[#775a19] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C9A45C] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-slide-down">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Contact Help Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#241812] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#C9A45C]/30">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-white">
              Still have a question?
            </h4>
            <p className="text-xs text-stone-300 font-light">
              Our front desk captain in Pune Camp is happy to assist you anytime.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              className="btn-shine px-4 py-2.5 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Agra%20Hotel!%20I%20have%20a%20question.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

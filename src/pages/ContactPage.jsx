import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import AnimatedReveal from '../components/AnimatedReveal';

export default function ContactPage({ onShowToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      if (onShowToast) onShowToast('Please fill in required fields', 'error');
      return;
    }

    setSubmitted(true);
    if (onShowToast) onShowToast('Message sent! Our manager will respond shortly.', 'success');
  };

  return (
    <div className="animate-fade-in pt-16 sm:pt-24 bg-[#FAF8F3] overflow-hidden">
      {/* Header */}
      <section className="bg-[#18100C] text-white py-14 sm:py-24 px-4 sm:px-8 border-b border-[#C9A45C]/30 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
        <AnimatedReveal animation="fade-up" className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A45C] font-bold block flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 animate-sparkle" />
            <span>Visit Us in Pune Camp</span>
          </span>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl font-serif text-[#FAF8F3]">
            Contact & Location
          </h1>
          <p className="text-xs sm:text-base text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
            Located in the historic cantonment quarter. Whether you're planning a visit, placing a takeaway order, or arranging an event, reach out to us anytime.
          </p>
        </AnimatedReveal>
      </section>

      {/* Main Grid: Details & Inquiry Form */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT 6 COLS: Contact Cards */}
          <AnimatedReveal animation="fade-left" className="lg:col-span-6 space-y-6">
            {/* Address */}
            <div className="hover-lift p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E0D3C1] shadow-sm space-y-3 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#E0D3C1] flex items-center justify-center text-[#775a19]">
                <MapPin className="w-6 h-6 animate-sparkle" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#241812]">
                Restaurant Address
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {RESTAURANT_INFO.address}
              </p>
              <p className="text-xs text-[#775a19] font-semibold">
                Landmark: {RESTAURANT_INFO.landmark}
              </p>
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#241812] hover:bg-[#36241B] text-white text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5"
                >
                  <MapPin className="w-4 h-4 text-[#C9A45C]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="hover-lift p-6 rounded-3xl bg-white border border-[#E0D3C1] shadow-sm space-y-2 transition-all">
                <Phone className="w-5 h-5 text-[#775a19]" />
                <h4 className="font-serif text-lg font-bold text-[#241812]">Phone Calls</h4>
                <p className="text-xs text-stone-500">Reservations & kitchen takeaway</p>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-sm text-[#775a19] hover:underline block pt-1 hover:text-[#C9A45C] transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="hover-lift p-6 rounded-3xl bg-white border border-[#E0D3C1] shadow-sm space-y-2 transition-all">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <h4 className="font-serif text-lg font-bold text-[#241812]">WhatsApp</h4>
                <p className="text-xs text-stone-500">Fast chat & table confirmation</p>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Agra%20Hotel!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-[#25D366] hover:underline block pt-1"
                >
                  Chat with Desk
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="hover-lift p-8 rounded-3xl bg-[#241812] text-white border border-[#C9A45C]/30 shadow-xl space-y-4 transition-all">
              <div className="flex items-center gap-2 text-[#E8D7B0] text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#C9A45C]" />
                <span>Operating Timings</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Open Daily Throughout the Week
              </h3>
              <div className="space-y-2.5 text-xs text-stone-300">
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span>General Service:</span>
                  <strong className="text-white">{RESTAURANT_INFO.hours.general}</strong>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span>Lunch Dawat:</span>
                  <strong className="text-white">{RESTAURANT_INFO.hours.lunch}</strong>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span>Dinner Service:</span>
                  <strong className="text-white">{RESTAURANT_INFO.hours.dinner}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Live Charcoal Sigri:</span>
                  <strong className="text-[#C9A45C]">{RESTAURANT_INFO.hours.sigri}</strong>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* RIGHT 6 COLS: Send Message / Inquiry Form */}
          <AnimatedReveal animation="fade-right" className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl border border-[#E0D3C1]">
            <div className="space-y-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#775a19]">
                Get In Touch
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#241812]">
                Send an Inquiry or Feedback
              </h3>
              <p className="text-xs text-stone-500">
                Have a special request, banquet inquiry, or dietary question? Our hospitality manager will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#FAF5EC] border-2 border-[#C9A45C] text-center space-y-4 animate-scale-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-badge-bounce" />
                <h4 className="font-serif text-2xl font-bold text-[#241812]">
                  Thank You, {name}!
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Your message has been delivered to the Agra Hotel Pune Camp desk. We will call or WhatsApp your number shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#241812] hover:bg-[#36241B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Farhan Shaikh"
                    className="w-full px-4 py-3 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] outline-none focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98..."
                      className="w-full px-4 py-3 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] outline-none focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] outline-none focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Message / Inquiry *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about banquet bookings, customized menus, bulk orders, or table requests..."
                    className="w-full px-4 py-3 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] outline-none focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-shine w-full py-4 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Agra Hotel</span>
                  </button>
                </div>
              </form>
            )}
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}

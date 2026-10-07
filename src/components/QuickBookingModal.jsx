import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function QuickBookingModal({ isOpen, onClose, onShowToast }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('4');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('07:30 PM (Dinner)');
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      if (onShowToast) onShowToast('Please fill in your name and phone number', 'error');
      return;
    }

    const ref = `AGRA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setConfirmed(true);
    if (onShowToast) onShowToast(`Table booked! Reference: ${ref}`, 'success');
  };

  const getWhatsAppUrl = () => {
    const text = `Hello Agra Restaurant Pune Camp! I would like to reserve a table:%0A%0A*Reference:* ${bookingRef}%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Guests:* ${guests}%0A*Date:* ${date}%0A*Time:* ${time}%0A%0APlease confirm my booking. Thank you!`;
    return `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 modal-overlay flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div className="relative bg-[#18100C] border border-[#C9A45C]/40 rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl text-white animate-scale-in max-h-[92vh] overflow-y-auto no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-stone-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:rotate-90 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="space-y-6 text-center py-4 animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-[#C9A45C]/20 border border-[#C9A45C] flex items-center justify-center text-[#C9A45C] mx-auto animate-badge-bounce shadow-[0_0_25px_rgba(201,164,92,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                Table Reserved!
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                We Expect Your Arrival
              </h3>
              <p className="text-xs text-stone-300">
                Booking Reference: <strong className="text-[#C9A45C] font-mono text-sm px-2.5 py-1 bg-[#241812] rounded-lg border border-[#C9A45C]/40 ml-1 inline-block">{bookingRef}</strong>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-left space-y-1.5 text-stone-300">
              <p><strong>Guest:</strong> {name}</p>
              <p><strong>Party:</strong> {guests}</p>
              <p><strong>Date & Time:</strong> {date} at {time}</p>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer btn-shine active:scale-95 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 animate-bounce" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider cursor-pointer active:scale-95 transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-center gap-3.5 pb-4 border-b border-white/10">
              <img
                src="/images/agra-logo.png"
                alt="Agra Restaurant Crest"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-full border border-[#C9A45C]/50 bg-[#18100C] p-1 shadow-md shrink-0"
              />
              <div className="space-y-0.5">
                <span className="text-[10px] text-[#C9A45C] tracking-widest uppercase font-semibold block">
                  Reserve Your Experience
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-bold leading-tight">
                  Book a Table at Agra Restaurant
                </h3>
                <p className="text-[11px] text-stone-400">
                  Instant confirmation for your dining in Pune Camp
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-[#241812] border border-stone-600 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765..."
                    className="w-full bg-[#241812] border border-stone-600 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#241812] border border-stone-600 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none cursor-pointer transition-all"
                  >
                    <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                    <option value="4 Guests (Family)">4 Guests (Family)</option>
                    <option value="6 Guests (Large Table)">6 Guests (Large Table)</option>
                    <option value="8+ Guests (Celebration)">8+ Guests (Celebration)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#241812] border border-stone-600 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none cursor-pointer transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#241812] border border-stone-600 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none cursor-pointer transition-all"
                  >
                    <option value="12:30 PM (Lunch)">12:30 PM (Lunch)</option>
                    <option value="01:30 PM (Lunch)">01:30 PM (Lunch)</option>
                    <option value="07:30 PM (Dinner)">07:30 PM (Dinner)</option>
                    <option value="08:30 PM (Dinner)">08:30 PM (Dinner)</option>
                    <option value="09:30 PM (Dinner)">09:30 PM (Dinner)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg btn-shine hover:-translate-y-0.5 active:scale-95 hover:shadow-[0_0_20px_rgba(201,164,92,0.4)]"
                >
                  Confirm Reservation Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

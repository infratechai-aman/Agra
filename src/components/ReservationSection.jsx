import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles,
  Armchair,
  PartyPopper,
  AlertCircle
} from 'lucide-react';
import { RESTAURANT_INFO, FAQS } from '../data/restaurantData';
import AnimatedReveal from './AnimatedReveal';

export default function ReservationSection({ onShowToast }) {
  // Form state
  const [guests, setGuests] = useState(4);
  const [diningDate, setDiningDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [mealSession, setMealSession] = useState('dinner'); // 'lunch' or 'dinner'
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('08:00 PM');
  const [seatingPreference, setSeatingPreference] = useState('Cozy Wood Booth');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [diningNotes, setDiningNotes] = useState('');

  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Time slots for lunch & dinner
  const lunchSlots = ['12:00 PM', '12:45 PM', '01:30 PM', '02:15 PM', '03:00 PM', '03:30 PM'];
  const dinnerSlots = ['07:00 PM', '07:30 PM', '08:00 PM', '08:45 PM', '09:30 PM', '10:15 PM'];

  const currentTimeSlots = mealSession === 'lunch' ? lunchSlots : dinnerSlots;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) {
      if (onShowToast) onShowToast('Please provide your name and phone number', 'error');
      return;
    }

    const bookingRef = `AGRA-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      ref: bookingRef,
      name: guestName,
      phone: guestPhone,
      email: guestEmail,
      guests,
      date: diningDate,
      time: selectedTimeSlot,
      session: mealSession,
      seating: seatingPreference,
      notes: diningNotes
    };

    setConfirmedBooking(newBooking);
    if (onShowToast) onShowToast(`Table booked successfully! Reference: ${bookingRef}`, 'success');
  };

  const getWhatsAppBookingUrl = (booking) => {
    const text = `Hello Agra Hotel Pune Camp! I would like to confirm my table reservation:%0A%0A*Reference:* ${booking.ref}%0A*Name:* ${booking.name}%0A*Guests:* ${booking.guests} Guests%0A*Date:* ${booking.date}%0A*Time:* ${booking.time} (${booking.session.toUpperCase()})%0A*Seating Preference:* ${booking.seating}${booking.notes ? `%0A*Special Notes:* ${booking.notes}` : ''}%0A%0APlease confirm our table availability. Thank you!`;
    return `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`;
  };

  return (
    <section id="reservations" className="w-full bg-[#FAF5EC] py-14 sm:py-32 px-4 sm:px-8 border-t border-[#E0D3C1] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header Section */}
        <AnimatedReveal animation="fade-up" className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#775a19] text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4 text-[#C9A45C] animate-sparkle" />
            <span>Experience Traditional Hospitality</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-serif text-[#241812] tracking-tight">
            Reserve Your <span className="italic font-normal text-[#775a19]">Table</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Whether it’s a treasured family celebration, an intimate dinner, or a hearty group feast in historic Pune Camp, our hearth and hospitality await you.
          </p>

          {/* Quick Assurances */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 sm:pt-4 text-xs font-semibold text-[#241812]">
            <span className="flex items-center gap-2 hover:text-[#775a19] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#775a19] animate-sparkle" />
              <span>Instant Guarantee</span>
            </span>
            <span className="hidden xs:inline">•</span>
            <span className="flex items-center gap-2 hover:text-[#775a19] transition-colors">
              <Armchair className="w-4 h-4 text-[#775a19]" />
              <span>AC Family Hall & Booths</span>
            </span>
            <span className="hidden xs:inline">•</span>
            <span className="flex items-center gap-2 hover:text-[#775a19] transition-colors">
              <Clock className="w-4 h-4 text-[#775a19]" />
              <span>15-Min Courtesy Hold</span>
            </span>
          </div>
        </AnimatedReveal>

        {/* Booking Form & Policies Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT 7 COLUMNS: Interactive Form */}
          <AnimatedReveal animation="fade-left" className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-xl border border-[#E0D3C1]">
            <div className="pb-6 mb-8 border-b border-[#E0D3C1] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#775a19]">
                  Step-by-Step Booking
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#241812] mt-1">
                  Table Reservation Form
                </h3>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0D0] text-[#241812] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Live Availability</span>
              </div>
            </div>

            {confirmedBooking ? (
              /* Confirmation Receipt Card */
              <div className="space-y-6 animate-scale-in p-6 sm:p-8 rounded-2xl bg-[#FAF5EC] border-2 border-[#C9A45C]">
                <div className="flex items-center gap-3 text-emerald-800">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-badge-bounce" />
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-[#241812]">
                      Table Reservation Recorded!
                    </h4>
                    <p className="text-xs text-stone-600">
                      Booking Reference: <strong className="text-[#241812] font-mono">{confirmedBooking.ref}</strong>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E0D3C1] text-xs">
                  <div>
                    <span className="text-stone-500 block">Lead Guest:</span>
                    <strong className="text-[#241812] text-sm">{confirmedBooking.name}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Party Size:</span>
                    <strong className="text-[#241812] text-sm">{confirmedBooking.guests} Guests</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Date & Time:</span>
                    <strong className="text-[#241812] text-sm">{confirmedBooking.date} at {confirmedBooking.time}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Seating Section:</span>
                    <strong className="text-[#241812] text-sm">{confirmedBooking.seating}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Phone:</span>
                    <strong className="text-[#241812] text-sm">{confirmedBooking.phone}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Meal Period:</span>
                    <strong className="text-[#241812] text-sm uppercase">{confirmedBooking.session}</strong>
                  </div>
                </div>

                {confirmedBooking.notes && (
                  <div className="p-3 rounded-xl bg-white border border-[#E0D3C1] text-xs">
                    <span className="text-stone-500 block font-semibold">Special Instructions:</span>
                    <p className="text-stone-700 mt-0.5">{confirmedBooking.notes}</p>
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppBookingUrl(confirmedBooking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send WhatsApp Confirmation</span>
                  </a>

                  <button
                    onClick={() => setConfirmedBooking(null)}
                    className="py-3 px-5 rounded-xl bg-[#241812] hover:bg-[#36241B] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    Book Another Table
                  </button>
                </div>
              </div>
            ) : (
              /* Step-by-Step Interactive Form */
              <form onSubmit={handleBookingSubmit} className="space-y-8">
                {/* Step 1: Party Size */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="font-serif text-lg font-bold text-[#241812] flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#241812] text-[#FAF8F3] text-xs flex items-center justify-center font-sans">
                        1
                      </span>
                      <span>Select Number of Guests</span>
                    </label>
                    <span className="text-xs font-semibold text-[#775a19]">
                      {guests} Guests Selected
                    </span>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 pt-1">
                    {[1, 2, 3, 4, 5, 6, 8, '10+'].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuests(num)}
                        className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          guests === num
                            ? 'bg-[#241812] text-[#E8D7B0] shadow-md border-2 border-[#C9A45C]'
                            : 'bg-[#FAF5EC] hover:bg-[#EAE0D0] text-[#241812] border border-[#E0D3C1]'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Date & Service Preference */}
                <div className="space-y-4 pt-2">
                  <label className="font-serif text-lg font-bold text-[#241812] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#241812] text-[#FAF8F3] text-xs flex items-center justify-center font-sans">
                      2
                    </span>
                    <span>Date & Meal Period</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Date Picker */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-semibold text-stone-700">Dining Date</span>
                      <div className="relative">
                        <input
                          type="date"
                          value={diningDate}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setDiningDate(e.target.value)}
                          required
                          className="w-full px-4 py-2.5 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] outline-none"
                        />
                      </div>
                    </div>

                    {/* Meal Period Toggle */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-semibold text-stone-700">Service Preference</span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setMealSession('lunch');
                            setSelectedTimeSlot(lunchSlots[0]);
                          }}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            mealSession === 'lunch'
                              ? 'bg-[#C9A45C] text-[#18100C] shadow-md'
                              : 'bg-[#FAF5EC] hover:bg-[#EAE0D0] text-[#241812] border border-[#E0D3C1]'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>Lunch Dawat</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setMealSession('dinner');
                            setSelectedTimeSlot(dinnerSlots[1]);
                          }}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            mealSession === 'dinner'
                              ? 'bg-[#241812] text-[#E8D7B0] shadow-md'
                              : 'bg-[#FAF5EC] hover:bg-[#EAE0D0] text-[#241812] border border-[#E0D3C1]'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                          <span>Dinner Service</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Available Time Slots Pills */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs text-stone-500 font-medium">
                      Available {mealSession === 'lunch' ? 'Lunch' : 'Dinner'} Slots:
                    </span>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {currentTimeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            selectedTimeSlot === slot
                              ? 'bg-[#775a19] text-white shadow-md border border-[#C9A45C]'
                              : 'bg-[#FAF5EC] hover:bg-[#EAE0D0] text-[#241812] border border-[#E0D3C1]'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 3: Seating Preference */}
                <div className="space-y-3 pt-2">
                  <label className="font-serif text-lg font-bold text-[#241812] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#241812] text-[#FAF8F3] text-xs flex items-center justify-center font-sans">
                      3
                    </span>
                    <span>Seating Section Preference</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        title: 'Cozy Wood Booth',
                        desc: 'Intimate walnut high-back partition booths with amber lighting.',
                        icon: Armchair
                      },
                      {
                        title: 'Family Hall (AC)',
                        desc: 'Quiet air-conditioned section ideal for kids and elders.',
                        icon: Users
                      },
                      {
                        title: 'Banquet Long Table',
                        desc: 'Spacious setup suited for group feasts & family reunions.',
                        icon: PartyPopper
                      }
                    ].map((sec) => {
                      const Icon = sec.icon;
                      const isSelected = seatingPreference === sec.title;

                      return (
                        <div
                          key={sec.title}
                          onClick={() => setSeatingPreference(sec.title)}
                          className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                            isSelected
                              ? 'bg-[#FDD487]/20 border-[#C9A45C] shadow-md'
                              : 'bg-[#FAF5EC] hover:bg-[#F5EDE1] border-[#E0D3C1]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-[#775a19]' : 'text-stone-500'}`} />
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#775a19] bg-[#775a19]' : 'border-stone-400'}`}>
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#241812]">{sec.title}</h4>
                          <p className="text-[11px] text-stone-600 mt-1 leading-normal">{sec.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4: Contact & Guest Details */}
                <div className="space-y-4 pt-2">
                  <label className="font-serif text-lg font-bold text-[#241812] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#241812] text-[#FAF8F3] text-xs flex items-center justify-center font-sans">
                      4
                    </span>
                    <span>Primary Contact Details</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-stone-700">Full Name *</span>
                      <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="e.g. Rajesh Kulkarni"
                        required
                        className="w-full px-4 py-2.5 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-stone-700">Phone Number (+91) *</span>
                      <input
                        type="tel"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="e.g. 98220 12345"
                        required
                        className="w-full px-4 py-2.5 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] outline-none"
                      />
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <span className="text-xs font-semibold text-stone-700">Email Address (Optional)</span>
                      <input
                        type="email"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="rajesh@example.com"
                        className="w-full px-4 py-2.5 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] outline-none"
                      />
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <span className="text-xs font-semibold text-stone-700">Dining Notes & Special Requests</span>
                      <textarea
                        value={diningNotes}
                        onChange={(e) => setDiningNotes(e.target.value)}
                        placeholder="Anniversary celebration, baby high-chair needed, wheelchair accessibility, spicy/mild preferences..."
                        rows={2}
                        className="w-full px-4 py-2 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 space-y-3">
                  <button
                    type="submit"
                    className="btn-shine w-full py-4 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C9A45C]/30"
                  >
                    Confirm Table Reservation Request
                  </button>
                  <p className="text-center text-[11px] text-stone-500">
                    No booking fees. Instant confirmation sent via SMS & WhatsApp within 15 minutes.
                  </p>
                </div>
              </form>
            )}
          </AnimatedReveal>

          {/* RIGHT 5 COLUMNS: Dining Guidelines, Banquets & Map */}
          <AnimatedReveal animation="fade-right" className="lg:col-span-5 space-y-6">
            {/* Dining Policies Card */}
            <div className="hover-lift bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E0D3C1] space-y-5 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] flex items-center justify-center text-[#775a19]">
                  <ShieldCheck className="w-5 h-5 animate-sparkle" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#241812]">Dining Policies</h4>
              </div>

              <div className="space-y-4 text-xs text-stone-600 leading-relaxed">
                <div>
                  <strong className="text-[#241812] block mb-0.5 font-bold">15-Minute Courtesy Hold:</strong>
                  Tables are cheerfully held for 15 minutes past your reserved time before being released to walk-in patrons.
                </div>
                <div>
                  <strong className="text-[#241812] block mb-0.5 font-bold">Walk-Ins Always Welcomed:</strong>
                  We retain 30% of our dining floor for spontaneous Cantonment strolls and walk-in diners every evening.
                </div>
                <div>
                  <strong className="text-[#241812] block mb-0.5 font-bold">Dedicated AC Family Hall:</strong>
                  Families with young children and multi-generation gatherings enjoy our tranquil AC dining room.
                </div>
              </div>
            </div>

            {/* Private Dining & Large Banquets */}
            <div className="hover-lift bg-[#241812] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#C9A45C]/30 space-y-4 transition-all">
              <span className="px-3 py-1 rounded-full bg-[#C9A45C] text-[#18100C] text-[10px] uppercase font-bold tracking-widest inline-block animate-float-slow">
                Parties & Feasts
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#FAF8F3]">
                Private Dining & Banquets
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Planning an anniversary, celebratory birthday banquet, or corporate dinner in Pune Camp? We curate bespoke Mughlai Dastarkhwan setups and set menus for up to 60-80 guests.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="btn-shine flex-1 py-2.5 px-4 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Coordinator</span>
                </a>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Agra%20Hotel!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20private%20banquet%20for%20our%20family%20gathering.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location & Directions Card */}
            <div className="hover-lift bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E0D3C1] transition-all">
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#775a19] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#C9A45C]" />
                  <span>Pune Camp Location</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#241812]">
                  Agra Hotel – Cantonment Landmark
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
                <div className="pt-2">
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF5EC] hover:bg-[#EAE0D0] text-[#241812] text-xs font-semibold border border-[#E0D3C1] cursor-pointer hover:-translate-y-0.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>

        {/* FAQs Accordion */}
        <AnimatedReveal animation="fade-up" className="max-w-4xl mx-auto space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#775a19]">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#241812]">
              Planning Your Visit to Agra Hotel
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = expandedFaq === faq.id;

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E0D3C1] overflow-hidden shadow-sm transition-all hover:border-[#C9A45C]/50"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between font-serif font-bold text-base text-[#241812] cursor-pointer hover:bg-[#FAF5EC]/50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C9A45C] transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-slide-down">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

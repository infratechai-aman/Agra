import React, { useState } from 'react';
import { 
  Briefcase, 
  Flame, 
  HeartHandshake, 
  Award, 
  CheckCircle2, 
  Send,
  MessageCircle,
  Phone
} from 'lucide-react';
import AnimatedReveal from '../components/AnimatedReveal';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function CareersPage({ onShowToast }) {
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [selectedRole, setSelectedRole] = useState('Floor Captain / Hospitality');
  const [experience, setExperience] = useState('1 - 3 Years');
  const [notes, setNotes] = useState('');
  const [applied, setApplied] = useState(false);

  const roles = [
    {
      title: 'Master Tandoor & Sigri Ustaad',
      type: 'Full Time • Camp Kitchen',
      desc: 'Expertise in clay pit tandoori marinades, live charcoal Sigri skewering, and traditional hand-stretched naan, kulcha, and roti breads.',
      reqs: ['3+ years tandoor experience', 'Knowledge of authentic spices', 'Speed during peak dinner rush']
    },
    {
      title: 'Dum Pukht Biryani & Curries Demi-Chef',
      type: 'Full Time • Heritage Hearth',
      desc: 'Preparing slow-cooked mutton, chicken, and vegetarian kormas, hand-ground masalas, and dum-sealed handi basmati biryanis.',
      reqs: ['2+ years North Indian / Mughlai cuisine', 'Strict halal hygiene compliance', 'Passion for authentic tastes']
    },
    {
      title: 'Floor Captain & Dining Host',
      type: 'Full Time / Part Time • Front of House',
      desc: 'Greeting patrons with generational warmth, assisting families with table bookings, order recommendations, and ensuring pristine dining hall ambience.',
      reqs: ['Warm hospitality demeanor', 'Hindi & Marathi fluency (English bonus)', 'Customer-first mindset']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!candidateName.trim() || !candidatePhone.trim()) {
      if (onShowToast) onShowToast('Please enter your name and phone number', 'error');
      return;
    }

    setApplied(true);
    if (onShowToast) onShowToast('Application submitted! Our manager will call you for an interview.', 'success');

    const msg = `*AGRA HOTEL PUNE CAMP - JOB APPLICATION*%0A%0A` +
      `*Name:* ${candidateName}%0A` +
      `*Phone:* ${candidatePhone}%0A` +
      `*Position Applied:* ${selectedRole}%0A` +
      `*Experience:* ${experience}%0A` +
      `*Background:* ${notes || 'Ready to join immediately'}%0A%0A` +
      `Please let me know when I can visit for a kitchen or floor interview.`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="animate-fade-in pt-16 sm:pt-24 bg-[#FAF8F3] min-h-screen">
      {/* Header */}
      <section className="bg-[#18100C] text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-[#C9A45C]/30 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
        <AnimatedReveal animation="fade-up" className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#36241B] text-[#E8D7B0] text-xs uppercase tracking-[0.2em] font-bold border border-[#C9A45C]/30">
            <Briefcase className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Join Our Heritage Family</span>
          </div>

          <h1 className="text-3xl xs:text-5xl sm:text-6xl font-serif text-[#FAF8F3] tracking-tight">
            Careers at Agra Hotel
          </h1>

          <p className="text-xs sm:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Be part of Pune Camp’s timeless culinary address. We offer mentorship from veteran master chefs, supportive working hours, and long-term career growth.
          </p>
        </AnimatedReveal>
      </section>

      {/* Main Body */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
        {/* Why Work With Us 3 Pillars */}
        <AnimatedReveal animation="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E0D3C1] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#C9A45C]/40 flex items-center justify-center text-[#775a19]">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#241812]">Authentic Craft Mentorship</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Learn authentic Dum cooking, clay pit tandoori seasoning, and heirloom spice secrets handed down across 3 generations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E0D3C1] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#C9A45C]/40 flex items-center justify-center text-[#775a19]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#241812]">Supportive Culture</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Fair, reliable monthly compensation, wholesome daily staff meals from our kitchen, and a respectful family environment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E0D3C1] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#C9A45C]/40 flex items-center justify-center text-[#775a19]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#241812]">Generational Stability</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Serving Pune Camp continuously since 1968, we pride ourselves on team members who stay with us for decades.
            </p>
          </div>
        </AnimatedReveal>

        {/* Open Positions Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-[#775a19] block">
              Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#241812]">
              Current Open Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {roles.map((role, idx) => (
              <div key={idx} className="hover-lift p-6 rounded-3xl bg-white border border-[#E0D3C1] shadow-md flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[11px] font-bold uppercase text-[#775a19] block">
                    {role.type}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#241812]">
                    {role.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {role.desc}
                  </p>
                  <ul className="space-y-1 pt-1 text-xs text-stone-500">
                    {role.reqs.map((r, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedRole(role.title);
                    const el = document.getElementById('application-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#241812] hover:bg-[#36241B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Apply For This Role
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E0D3C1] space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-[#775a19] block">
              Direct Application
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#241812]">
              Submit Your Profile
            </h3>
            <p className="text-xs text-stone-500">
              No complicated resumes required. Share your contact details and previous culinary or floor experience.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. Salim Sheikh"
                  className="w-full px-4 py-2.5 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Phone Number / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={candidatePhone}
                  onChange={(e) => setCandidatePhone(e.target.value)}
                  placeholder="+91 98765..."
                  className="w-full px-4 py-2.5 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Role Interested In
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] outline-none cursor-pointer"
                >
                  <option value="Master Tandoor & Sigri Ustaad">Master Tandoor & Sigri Ustaad</option>
                  <option value="Dum Pukht Biryani & Curries Demi-Chef">Dum Pukht Biryani & Curries Demi-Chef</option>
                  <option value="Floor Captain & Dining Host">Floor Captain & Dining Host</option>
                  <option value="Kitchen Helper & Stewarding">Kitchen Helper & Stewarding</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Prior Experience
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] outline-none cursor-pointer"
                >
                  <option value="Fresher / Eager to Learn">Fresher / Eager to Learn</option>
                  <option value="1 - 3 Years">1 - 3 Years</option>
                  <option value="3 - 5 Years">3 - 5 Years</option>
                  <option value="5+ Years (Veteran Ustaad)">5+ Years (Veteran Ustaad)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Tell Us About Your Work Experience
              </label>
              <textarea
                rows="3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention past restaurants, hotels, or special dishes you cook best..."
                className="w-full px-4 py-2.5 bg-[#FAF5EC] rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-shine w-full py-3.5 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Submit & Apply Directly via WhatsApp</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

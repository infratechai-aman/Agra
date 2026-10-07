import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Phone, Mail } from 'lucide-react';
import AnimatedReveal from '../components/AnimatedReveal';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 2026';

  return (
    <div className="animate-fade-in pt-16 sm:pt-24 bg-[#FAF8F3] min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#18100C] text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-[#C9A45C]/30 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
        <AnimatedReveal animation="fade-up" className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#36241B] text-[#E8D7B0] text-xs uppercase tracking-[0.2em] font-bold border border-[#C9A45C]/30">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Transparency & Trust</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl font-serif text-[#FAF8F3] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            At Agra Restaurant Pune Camp, honoring your trust is our highest tradition. Here is how we safeguard your personal data and dining details.
          </p>
          <div className="text-[11px] text-[#C9A45C] tracking-wider uppercase font-semibold pt-2">
            Last Updated: {lastUpdated}
          </div>
        </AnimatedReveal>
      </section>

      {/* Main Legal Content Container */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl border border-[#E0D3C1] space-y-10 text-stone-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#241812]">
              <Lock className="w-5 h-5 text-[#C9A45C]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold">1. Our Commitment to Your Privacy</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              Agra Restaurant ("we", "us", or "our"), established in 1968 in Pune Camp, Maharashtra, operates the official website and digital reservation concierge. We are dedicated to maintaining the confidentiality, integrity, and security of all personal details entrusted to us by our patrons, dining guests, and event organizers.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#241812]">
              <FileText className="w-5 h-5 text-[#C9A45C]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold">2. Information We Collect</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              We collect information that you voluntarily provide when using our digital guest services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-stone-600">
              <li><strong>Table Reservations:</strong> Guest name, telephone number, email address, party size, date, preferred dining session (Lunch / Dinner), and special culinary or seating requests.</li>
              <li><strong>Feast Tray Pre-Orders:</strong> Selected dishes, contact numbers, and delivery address or dining table numbers.</li>
              <li><strong>Direct Communications:</strong> Any inquiries submitted via our contact forms, direct telephone calls to our kitchen desk, or WhatsApp concierge chats.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#241812]">
              <Eye className="w-5 h-5 text-[#C9A45C]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold">3. How Your Information Is Used</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              We use your information exclusively to provide authentic hospitality:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-stone-600">
              <li>To confirm, manage, and hold your table reservations in our dining halls.</li>
              <li>To prepare customized spice balances, halal dietary accommodations, or special family celebrations.</li>
              <li>To transmit verification receipts via WhatsApp or SMS.</li>
              <li>We never sell, rent, lease, or monetize your contact information with any external marketing agencies.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241812]">4. WhatsApp & Third-Party Integration</h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Our website provides convenient direct links to WhatsApp Web and Mobile for live order confirmations. When communicating over WhatsApp, interactions are subject to Meta's end-to-end encryption and WhatsApp Privacy Guidelines.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241812]">5. Cookies & Local Browser Storage</h2>
            <p className="text-xs sm:text-sm text-stone-600">
              We utilize browser localStorage solely to preserve your active Feast Tray selections across page navigations during your visit. We do not deploy invasive third-party tracking cookies or cross-site tracking pixels.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241812]">6. Contact Our Hospitality Concierge</h2>
            <p className="text-xs sm:text-sm text-stone-600">
              If you have any questions regarding your reservation records or wish to request data updates, please contact our desk:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#E0D3C1] text-xs space-y-1.5 text-[#241812]">
              <p><strong>Agra Restaurant — General Manager Desk</strong></p>
              <p>{RESTAURANT_INFO.address}</p>
              <p>Phone: <a href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`} className="text-[#775a19] font-bold hover:underline">{RESTAURANT_INFO.phone}</a></p>
            </div>
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
              to="/terms"
              className="text-xs font-bold text-[#775a19] hover:underline uppercase tracking-wider"
            >
              View Dining Terms & Conditions →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

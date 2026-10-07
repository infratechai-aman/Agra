import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, ShoppingBag, Menu, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ onOpenBooking, onOpenTray, trayItemCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Our Story' },
    { path: '/menu', label: 'Menu Repertoire' },
    { path: '/gallery', label: 'Ambience' },
    { path: '/reservations', label: 'Reservations' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-3 sm:px-8 ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-[#18100C]/95 backdrop-blur-md shadow-2xl border-b border-[#C9A45C]/30'
          : 'py-3.5 sm:py-5 bg-gradient-to-b from-[#18100C]/95 via-[#18100C]/70 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo with Mughal Arch Motif */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 text-left group shrink-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 border border-[#C9A45C]/70 rounded-t-full flex items-center justify-center p-1 sm:p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:border-[#C9A45C] group-hover:shadow-[0_0_20px_rgba(201,164,92,0.35)] bg-[#241812]">
            <svg
              className="w-full h-full text-[#C9A45C] transition-transform duration-300 group-hover:scale-105"
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
          <div className="flex flex-col">
            <span className="font-serif tracking-widest text-base sm:text-xl font-bold uppercase text-white drop-shadow-sm group-hover:text-[#C9A45C] transition-colors duration-300">
              {RESTAURANT_INFO.name}
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#C9A45C] font-semibold transition-all duration-300 group-hover:tracking-[0.3em]">
              {RESTAURANT_INFO.city}
            </span>
          </div>
        </Link>

        {/* Desktop Multi-Page Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`py-1 text-sm font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C9A45C] after:transition-all after:duration-300 ${
                  isActive
                    ? 'text-[#C9A45C] after:w-full font-bold shadow-sm'
                    : 'text-stone-200 hover:text-[#C9A45C] after:w-0 hover:after:w-full hover:-translate-y-0.5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Action CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-3.5">
          {/* Feast Tray Trigger Button */}
          <button
            onClick={onOpenTray}
            className="relative p-2 sm:p-2.5 rounded-full bg-[#241812] hover:bg-[#36241B] text-[#C9A45C] border border-[#C9A45C]/40 transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer hover:scale-105 hover:border-[#C9A45C] hover:shadow-[0_0_15px_rgba(201,164,92,0.25)]"
            title="View Feast Tray / Order"
            aria-label="View Feast Tray"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
            {trayItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#C9A45C] text-[#18100C] font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-badge-bounce border border-[#18100C]">
                {trayItemCount}
              </span>
            )}
          </button>

          {/* Quick Table Reservation Button */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#241812]/90 hover:bg-[#36241B] text-white border border-[#C9A45C]/50 text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer hover:border-[#C9A45C] hover:-translate-y-0.5 btn-shine hover:shadow-[0_0_20px_rgba(201,164,92,0.2)]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C9A45C] animate-pulse" />
            <span>Book Table</span>
          </button>

          {/* Call Pill */}
          <a
            href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-semibold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer hover:-translate-y-0.5 btn-shine hover:shadow-[0_0_20px_rgba(201,164,92,0.4)]"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden xs:inline">Call Desk</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg bg-[#241812]/80 border border-white/10 hover:border-[#C9A45C]/60 focus:outline-none cursor-pointer transition-all duration-200 active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#C9A45C] rotate-90 transition-transform duration-300" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu with Safe Scroll */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-h-[82vh] overflow-y-auto no-scrollbar bg-[#18100C]/98 backdrop-blur-2xl rounded-2xl p-5 sm:p-6 border border-[#C9A45C]/35 shadow-2xl flex flex-col gap-2 text-center animate-slide-down">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                style={{ animationDelay: `${idx * 40}ms` }}
                className={`py-2.5 text-sm sm:text-base rounded-xl transition-all duration-200 animate-slide-up ${
                  isActive
                    ? 'text-[#C9A45C] font-bold bg-[#241812] border border-[#C9A45C]/30 shadow-inner'
                    : 'text-stone-200 hover:text-[#C9A45C] hover:bg-[#241812]/60 hover:translate-x-1'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md btn-shine active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table Now</span>
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full py-2.5 rounded-xl bg-[#241812] hover:bg-[#36241B] text-white border border-[#C9A45C]/40 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-[#C9A45C]" />
              <span>Call Us: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

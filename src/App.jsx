import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeastTrayDrawer from './components/FeastTrayDrawer';
import QuickBookingModal from './components/QuickBookingModal';
import Toast from './components/Toast';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import ReservationsPage from './pages/ReservationsPage';
import ContactPage from './pages/ContactPage';
import PrivateDiningPage from './pages/PrivateDiningPage';
import FaqPage from './pages/FaqPage';
import CareersPage from './pages/CareersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

import { ShoppingBag, Calendar, ArrowUp } from 'lucide-react';

export default function App() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('agra_feast_tray');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('agra_feast_tray', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show Toast Helper
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((curr) => (curr?.message === message ? null : curr));
    }, 3500);
  };

  // Add item to cart
  const handleAddToCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
    showToast(`Added "${dish.name}" to Feast Tray!`);
  };

  // Remove item from cart
  const handleRemoveFromCart = (dishId) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dishId);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter((item) => item.id !== dishId);
      }
      return prev.map((item) =>
        item.id === dishId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // Clear cart
  const handleClearCart = () => {
    setCartItems([]);
    showToast('Feast Tray cleared');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#241812] flex flex-col selection:bg-[#C9A45C] selection:text-[#18100C]">
      {/* Luxury Scroll Progress Bar */}
      <ScrollProgress />

      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Persistent Multi-Page Navigation */}
      <Navbar
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenTray={() => setIsTrayOpen(true)}
        trayItemCount={totalCartCount}
      />

      {/* Route Switcher */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBooking={() => setIsBookingModalOpen(true)}
                onAddToCart={handleAddToCart}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenBooking={() => setIsBookingModalOpen(true)}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <MenuPage
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/gallery"
            element={
              <GalleryPage
                onOpenBooking={() => setIsBookingModalOpen(true)}
              />
            }
          />
          <Route
            path="/reservations"
            element={
              <ReservationsPage
                onShowToast={showToast}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                onShowToast={showToast}
              />
            }
          />
          <Route
            path="/private-dining"
            element={
              <PrivateDiningPage
                onShowToast={showToast}
              />
            }
          />
          <Route
            path="/faqs"
            element={<FaqPage />}
          />
          <Route
            path="/careers"
            element={
              <CareersPage
                onShowToast={showToast}
              />
            }
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicyPage />}
          />
          <Route
            path="/terms"
            element={<TermsPage />}
          />
          {/* Custom Branded 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Slide-out Feast Tray Drawer */}
      <FeastTrayDrawer
        isOpen={isTrayOpen}
        onClose={() => setIsTrayOpen(false)}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Quick Booking Modal */}
      <QuickBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Floating Action Controls */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center gap-2 sm:gap-3">
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsTrayOpen(true)}
            className="px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#18100C] text-[#C9A45C] border border-[#C9A45C]/50 shadow-2xl flex items-center gap-2 sm:gap-2.5 hover:bg-[#241812] transition-all duration-300 cursor-pointer hover-lift btn-shine hover:shadow-[0_0_25px_rgba(201,164,92,0.35)] animate-scale-in"
            aria-label="Open Feast Tray"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#C9A45C] text-[#18100C] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-badge-bounce border border-[#18100C]">
                {totalCartCount}
              </span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline text-white">
              View Tray
            </span>
          </button>
        )}

        <button
          onClick={() => navigate('/reservations')}
          className="px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] shadow-2xl flex items-center gap-1.5 sm:gap-2 transition-all duration-300 cursor-pointer hover-lift font-bold text-xs uppercase tracking-wider btn-shine hover:shadow-[0_0_25px_rgba(201,164,92,0.5)] active:scale-95"
          aria-label="Navigate to Reservations"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
          <span className="inline text-[11px] sm:text-xs">Reserve Table</span>
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-[#18100C]/85 hover:bg-[#18100C] text-[#C9A45C] border border-[#C9A45C]/50 backdrop-blur-md shadow-2xl transition-all duration-300 cursor-pointer animate-scale-in hover:-translate-y-1 hover:border-[#C9A45C] hover:shadow-[0_0_20px_rgba(201,164,92,0.4)] active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

      {/* Real-time Toast Notifications */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}

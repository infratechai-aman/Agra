import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Flame, 
  Check, 
  Plus, 
  Minus, 
  Phone, 
  ShieldCheck, 
  Utensils, 
  Clock, 
  Info 
} from 'lucide-react';
import { 
  MENU_CATEGORIES, 
  MENU_ITEMS, 
  SIGNATURE_THAAL, 
  RESTAURANT_INFO 
} from '../data/restaurantData';
import AnimatedReveal from './AnimatedReveal';

export default function MenuSection({ onAddToCart, onRemoveFromCart, cartItems }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all', 'veg', 'nonveg', 'chef'
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered menu logic
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;

      // Dietary match
      let dietaryMatch = true;
      if (dietaryFilter === 'veg') dietaryMatch = item.isVeg === true;
      if (dietaryFilter === 'nonveg') dietaryMatch = item.isVeg === false;
      if (dietaryFilter === 'chef') dietaryMatch = !!item.badge && item.badge.toLowerCase().includes('chef');

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const searchMatch = !query || 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        (item.portion && item.portion.toLowerCase().includes(query)) ||
        (item.badge && item.badge.toLowerCase().includes(query));

      return categoryMatch && dietaryMatch && searchMatch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  // Check item quantity in cart
  const getItemQuantity = (id) => {
    const found = cartItems?.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="w-full bg-[#FAF5EC] py-20 px-4 sm:px-8 border-t border-[#E0D3C1] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Editorial Header Banner */}
        <AnimatedReveal animation="fade-up" className="rounded-3xl bg-[#241812] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-[#C9A45C]/30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#36241B] text-[#E8D7B0] border border-[#C9A45C]/30">
                <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold">
                  Authentic Mughlai & North Indian Craft
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-serif text-[#FAF8F3] tracking-tight">
                Our Culinary Repertoire
              </h2>
              <p className="text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
                Time-honored family recipes, slow-cooked sealed dum handis, and fragrant clay-oven delicacies perfected across decades in Pune Camp.
              </p>
            </div>

            {/* Quick Meta Accreditations with Hover Lift */}
            <div className="flex flex-wrap lg:flex-col gap-3 shrink-0">
              <div className="hover-lift flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <ShieldCheck className="w-5 h-5 text-[#C9A45C]" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">100% Halal Certified</p>
                  <p className="text-[11px] text-stone-300">Audited local cuts & fresh farm produce</p>
                </div>
              </div>
              <div className="hover-lift flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <Flame className="w-5 h-5 text-[#C9A45C]" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Live Charcoal Sigri</p>
                  <p className="text-[11px] text-stone-300">Clay pit tandoor fired every evening</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>

        {/* Filter, Search & Dietary Bar */}
        <div className="sticky top-20 z-30 bg-[#F4EDE2]/95 backdrop-blur-md border border-[#C9A45C]/30 rounded-2xl shadow-lg p-3 sm:p-5 space-y-3 sm:space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#241812] text-[#FAF8F3] shadow-md scale-105'
                    : 'bg-[#EAE0D0] text-[#241812] hover:bg-[#E2D6C3] border border-[#C9A45C]/20 hover:-translate-y-0.5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input & Dietary Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 pt-1 border-t border-[#C9A45C]/20">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#775a19] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search biryani, mutton, naan, paneer..."
                className="w-full pl-10 pr-4 py-2 bg-white rounded-xl text-xs sm:text-sm text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none shadow-inner"
              />
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-[#241812] text-white'
                    : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
                }`}
              >
                All Diets
              </button>

              <button
                onClick={() => setDietaryFilter('veg')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Vegetarian</span>
              </button>

              <button
                onClick={() => setDietaryFilter('nonveg')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  dietaryFilter === 'nonveg'
                    ? 'bg-rose-700 text-white shadow-sm'
                    : 'bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <span>Non-Veg</span>
              </button>

              <button
                onClick={() => setDietaryFilter('chef')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  dietaryFilter === 'chef'
                    ? 'bg-[#775a19] text-[#FAF8F3] shadow-sm'
                    : 'bg-[#FDD487]/30 text-[#775a19] border border-[#C9A45C]/40 hover:bg-[#FDD487]/50'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Chef Specials</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid: Culinary Ledger (8 cols) + Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8 COLUMNS: The Culinary Ledger */}
          <div className="lg:col-span-8 space-y-4">
            {filteredDishes.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#F5EDE1] border border-[#E0D3C1] space-y-3">
                <Utensils className="w-10 h-10 text-stone-400 mx-auto" />
                <h4 className="text-xl font-serif text-[#241812]">No dishes match your filter</h4>
                <p className="text-stone-500 text-xs">Try selecting a different category or clearing your search keywords.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setDietaryFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#241812] text-white text-xs font-semibold cursor-pointer mt-2"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div key={selectedCategory + dietaryFilter + searchQuery} className="space-y-4 animate-fade-in">
                {filteredDishes.map((dish) => {
                  const qty = getItemQuantity(dish.id);

                  return (
                    <article
                      key={dish.id}
                      className="hover-lift group p-4 sm:p-5 rounded-2xl bg-[#F5EDE1] border border-[#E0D3C1] hover:border-[#C9A45C]/70 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                        <div className="space-y-1.5 sm:space-y-2 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            {/* Veg / Non-Veg Indicator Icon */}
                            <span
                              className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center transition-transform group-hover:scale-110 ${
                                dish.isVeg
                                  ? 'border-emerald-600 bg-white'
                                  : 'border-rose-600 bg-white'
                              }`}
                              title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  dish.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                                }`}
                              />
                            </span>

                            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241812] group-hover:text-[#775a19] transition-colors">
                              {dish.name}
                            </h3>

                            {dish.badge && (
                              <span className="px-2 py-0.5 rounded text-[10px] tracking-wide font-bold bg-[#E8C176]/30 text-[#5d4200] border border-[#C9A45C]/40 uppercase group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all">
                                {dish.badge}
                              </span>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm text-[#4e4540] leading-relaxed">
                            {dish.description}
                          </p>

                          {/* Meta Details: Spice level, portion */}
                          <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-stone-500 font-medium">
                            {dish.spiceLevel && (
                              <span className="inline-flex items-center gap-1 text-rose-700">
                                <Flame className="w-3 h-3" />
                                {dish.spiceLevel}
                              </span>
                            )}
                            {dish.portion && (
                              <>
                                <span>•</span>
                                <span>{dish.portion}</span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Price and Add to Feast Tray Buttons */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2.5 sm:pt-0 border-t sm:border-t-0 border-[#E0D3C1]/60 sm:self-stretch shrink-0">
                          <span className="font-serif text-xl sm:text-2xl font-bold text-[#241812] group-hover:text-[#775a19] transition-colors">
                            ₹{dish.price}
                          </span>

                          <div className="sm:pt-3">
                            {qty === 0 ? (
                              <button
                                onClick={() => onAddToCart(dish)}
                                className="btn-shine px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#241812] hover:bg-[#36241B] text-[#FAF8F3] text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 shadow-sm cursor-pointer hover:border-[#C9A45C] hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                              >
                                <Plus className="w-3.5 h-3.5 text-[#C9A45C]" />
                                <span>Add</span>
                              </button>
                            ) : (
                              <div className="inline-flex items-center gap-2 bg-[#241812] text-white rounded-xl px-2 py-1 shadow-md border border-[#C9A45C]/40 animate-badge-bounce">
                                <button
                                  onClick={() => onRemoveFromCart(dish.id)}
                                  className="w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer active:scale-90 transition-transform"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="font-bold text-xs px-1 text-[#E8D7B0]">{qty}</span>
                                <button
                                  onClick={() => onAddToCart(dish)}
                                  className="w-6 h-6 rounded-lg bg-[#C9A45C] hover:bg-[#b59146] flex items-center justify-center text-[#18100C] cursor-pointer active:scale-90 transition-transform"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT 4 COLUMNS: Sidebar Highlights, Platter & Hours */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Signature Heritage Platter Card */}
            <div className="hover-lift rounded-2xl bg-[#F5EDE1] border border-[#C9A45C]/50 overflow-hidden shadow-xl flex flex-col img-zoom group">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={SIGNATURE_THAAL.image}
                  alt={SIGNATURE_THAAL.title}
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#241812]/90 backdrop-blur-sm border border-[#C9A45C]/50 text-[#fdd487] text-[10px] tracking-wider uppercase font-bold animate-float-slow">
                  {SIGNATURE_THAAL.tag}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#775a19]">
                  Curated Royal Feast
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#241812] group-hover:text-[#775a19] transition-colors">
                  {SIGNATURE_THAAL.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4e4540] leading-relaxed font-normal">
                  {SIGNATURE_THAAL.description}
                </p>

                <div className="pt-3 flex items-center justify-between border-t border-[#C9A45C]/30">
                  <div>
                    <span className="text-xs text-stone-500 block">Feeds 3-4 Persons</span>
                    <span className="font-serif text-2xl font-bold text-[#241812]">
                      ₹{SIGNATURE_THAAL.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart({
                      id: 'thaal-special',
                      name: SIGNATURE_THAAL.title,
                      price: SIGNATURE_THAAL.price,
                      isVeg: false,
                      portion: 'Feeds 3-4 Persons'
                    })}
                    className="btn-shine px-4 py-2.5 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#18100C] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-1.5 hover:-translate-y-0.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Order Thaal</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Kitchen Orders Card */}
            <div className="hover-lift p-6 rounded-2xl bg-[#241812] text-[#FAF8F3] border border-[#C9A45C]/40 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A45C] flex items-center justify-center text-[#241812] shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#FAF8F3]">Direct Kitchen Orders</h4>
                  <p className="text-xs text-[#E8D7B0]">Pune Camp & Cantonment Delivery</p>
                </div>
              </div>

              <p className="text-xs text-[#EBE5D8] leading-relaxed">
                Order directly with our kitchen manager for fresh packaging in heat-sealed earthen containers. Special pricing for bulk and family gatherings.
              </p>

              <div className="pt-1">
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="btn-shine w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C9A45C] hover:bg-[#b59146] text-[#241812] text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
              </div>
              <p className="text-center text-[11px] text-[#C9A45C]/90">
                Average preparation time: 30-40 minutes
              </p>
            </div>

            {/* Dining Room Hours & Halal Notice */}
            <div className="p-6 rounded-2xl bg-[#F5EDE1] border border-[#C9A45C]/30 shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#775a19]" />
                <h4 className="font-serif text-lg font-bold text-[#241812]">Dining Room Hours</h4>
              </div>

              <div className="space-y-2.5 text-xs text-[#4e4540]">
                <div className="flex justify-between items-center pb-2 border-b border-[#C9A45C]/20">
                  <span>Lunch Dawat</span>
                  <span className="font-bold text-[#241812]">{RESTAURANT_INFO.hours.lunch}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#C9A45C]/20">
                  <span>Dinner Service</span>
                  <span className="font-bold text-[#241812]">{RESTAURANT_INFO.hours.dinner}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tandoori Sigri</span>
                  <span className="font-bold text-[#241812]">{RESTAURANT_INFO.hours.sigri}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#EAE0CF] border border-[#C9A45C]/25 text-[#241812] text-xs flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  All chicken and mutton preparations are strictly 100% Halal certified and prepared under traditional hygiene protocols.
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

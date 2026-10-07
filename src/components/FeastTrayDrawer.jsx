import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  Phone, 
  UtensilsCrossed, 
  Bike,
  Sparkles 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function FeastTrayDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onAddToCart, 
  onRemoveFromCart, 
  onClearCart 
}) {
  const [orderType, setOrderType] = useState('dine-in'); // 'dine-in' or 'takeaway'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [tableOrAddress, setTableOrAddress] = useState('');

  if (!isOpen) return null;

  // Price calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let itemsList = cartItems
      .map((item, idx) => `${idx + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`)
      .join('%0A');

    const message = `*AGRA HOTEL PUNE CAMP - FEAST TRAY ORDER*%0A%0A` +
      `*Order Type:* ${orderType === 'dine-in' ? 'Table Pre-Order / Dine-In' : 'Takeaway / Camp Delivery'}%0A` +
      `*Guest Name:* ${customerName || 'Guest'}%0A` +
      `*Phone:* ${customerPhone || 'Not provided'}%0A` +
      `*Table / Location:* ${tableOrAddress || 'Pune Camp'}%0A%0A` +
      `*Items Ordered:*%0A${itemsList}%0A%0A` +
      `*Subtotal:* ₹${subtotal}%0A` +
      `*GST (5%):* ₹${gst}%0A` +
      `*Grand Total:* ₹${grandTotal}%0A%0A` +
      `Please confirm preparation time. Thank you!`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 modal-overlay flex justify-end animate-fade-in">
      <div className="w-full max-w-md bg-[#FAF8F3] h-full shadow-2xl flex flex-col justify-between border-l border-[#C9A45C]/40 animate-slide-in-right">
        {/* Drawer Header */}
        <div className="p-6 bg-[#241812] text-white flex items-center justify-between border-b border-[#C9A45C]/30 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C9A45C] text-[#18100C] flex items-center justify-center font-bold shadow-md animate-pulse-gold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white tracking-wide">Your Feast Tray</h3>
              <p className="text-xs text-[#E8D7B0]">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items selected
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-all duration-300 hover:rotate-90 cursor-pointer"
            aria-label="Close Tray"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF5EC] border border-[#E0D3C1] flex items-center justify-center text-[#775a19] shadow-inner animate-float-slow">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl text-[#241812] font-bold">Your tray is empty</h4>
              <p className="text-xs text-stone-600 max-w-xs leading-relaxed">
                Add signature biryanis, tandoori kebabs, rich curries or breads from our culinary repertoire.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#241812] hover:bg-[#36241B] text-[#FAF8F3] text-xs font-semibold uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 shadow-md btn-shine"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Dining Mode Toggle */}
              <div className="bg-[#FAF5EC] p-1.5 rounded-2xl border border-[#E0D3C1] grid grid-cols-2 gap-1.5 shadow-inner">
                <button
                  type="button"
                  onClick={() => setOrderType('dine-in')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    orderType === 'dine-in'
                      ? 'bg-[#241812] text-white shadow-md scale-100'
                      : 'text-stone-600 hover:text-[#241812] hover:bg-stone-200/50'
                  }`}
                >
                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Table Pre-Order</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('takeaway')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    orderType === 'takeaway'
                      ? 'bg-[#241812] text-white shadow-md scale-100'
                      : 'text-stone-600 hover:text-[#241812] hover:bg-stone-200/50'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Camp Takeaway</span>
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider">
                  <span>Selected Dishes</span>
                  <button
                    onClick={onClearCart}
                    className="text-rose-700 hover:text-rose-900 flex items-center gap-1 cursor-pointer transition-colors group"
                  >
                    <Trash2 className="w-3 h-3 group-hover:scale-110 transition-transform" />
                    <span>Clear Tray</span>
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white border border-[#E0D3C1] shadow-sm hover:border-[#C9A45C]/60 hover:shadow-md transition-all duration-300 flex items-center justify-between gap-3 group"
                  >
                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        />
                        <h4 className="font-serif text-sm font-bold text-[#241812] leading-tight group-hover:text-[#775a19] transition-colors">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-stone-500">₹{item.price} each</p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 bg-[#FAF5EC] border border-[#E0D3C1] rounded-xl px-2 py-1 shrink-0">
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="w-5 h-5 rounded flex items-center justify-center hover:bg-stone-200 text-stone-700 active:scale-75 transition-all cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold text-xs px-1 text-[#241812]">{item.quantity}</span>
                      <button
                        onClick={() => onAddToCart(item)}
                        className="w-5 h-5 rounded flex items-center justify-center bg-[#C9A45C]/20 hover:bg-[#C9A45C] text-[#241812] active:scale-75 transition-all cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Line total */}
                    <span className="font-serif font-bold text-sm text-[#241812] w-14 text-right shrink-0">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Customer Inputs */}
              <div className="p-4 rounded-2xl bg-[#FAF5EC] border border-[#E0D3C1] space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#775a19] block">
                  Quick Order Info
                </span>
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white rounded-xl text-xs text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white rounded-xl text-xs text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder={
                    orderType === 'dine-in'
                      ? 'Reserved Table / Arrival Time'
                      : 'Delivery Address in Pune Camp'
                  }
                  value={tableOrAddress}
                  onChange={(e) => setTableOrAddress(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white rounded-xl text-xs text-[#241812] border border-[#E0D3C1] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none transition-all"
                />
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E0D3C1] space-y-4 shadow-lg">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#241812]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>GST & Kitchen Packaging (5%)</span>
                <span className="font-semibold text-[#241812]">₹{gst}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#241812] pt-2 border-t border-stone-200">
                <span className="font-serif">Grand Total</span>
                <span className="font-serif text-xl text-[#775a19]">₹{grandTotal}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer btn-shine hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 animate-bounce" />
                <span>Send Order via WhatsApp</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 rounded-xl bg-[#241812] hover:bg-[#36241B] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all hover:border-[#C9A45C] border border-transparent"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Call Kitchen Desk: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

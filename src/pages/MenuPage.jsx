import React from 'react';
import MenuSection from '../components/MenuSection';

export default function MenuPage({ onAddToCart, onRemoveFromCart, cartItems }) {
  return (
    <div className="animate-fade-in pt-20">
      <MenuSection
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        cartItems={cartItems}
      />
    </div>
  );
}

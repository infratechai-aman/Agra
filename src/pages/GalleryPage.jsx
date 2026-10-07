import React from 'react';
import GallerySection from '../components/GallerySection';
import DiningRoomsSection from '../components/DiningRoomsSection';

export default function GalleryPage({ onOpenBooking }) {
  return (
    <div className="animate-fade-in pt-20">
      <GallerySection />
      <DiningRoomsSection onReserveCorner={onOpenBooking} />
    </div>
  );
}

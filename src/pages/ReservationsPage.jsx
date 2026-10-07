import React from 'react';
import ReservationSection from '../components/ReservationSection';

export default function ReservationsPage({ onShowToast }) {
  return (
    <div className="animate-fade-in pt-20">
      <ReservationSection onShowToast={onShowToast} />
    </div>
  );
}

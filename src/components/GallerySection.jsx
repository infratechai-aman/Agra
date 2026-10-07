import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Layers, 
  Users, 
  Utensils,
  Award 
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import AnimatedReveal from './AnimatedReveal';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const filterTabs = [
    { id: 'all', label: 'All Moments' },
    { id: 'interiors', label: 'Restaurant Interiors' },
    { id: 'family', label: 'Family Dining' },
    { id: 'dishes', label: 'Signature Dishes' },
    { id: 'heritage', label: 'Heritage & Details' }
  ];

  return (
    <section id="gallery" className="w-full bg-[#FAF8F3] py-24 sm:py-32 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Header Banner */}
        <AnimatedReveal animation="fade-up" className="rounded-3xl bg-[#18100C] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-[#C9A45C]/30 text-center">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#36241B] text-[#E8D7B0] text-xs uppercase tracking-[0.2em] font-bold">
              <Camera className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>A Glimpse of Agra Restaurant</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif text-[#FAF8F3] tracking-tight">
              The Ambience & Flavours
            </h2>

            <div className="w-24 h-0.5 shimmer-gold-bar mx-auto my-4 rounded-full" />

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Immerse yourself in our warm wooden interiors, cozy booth dining, and mouthwatering culinary creations in Pune Camp. An authentic heritage legacy sustained over decades.
            </p>

            {/* Quick Badges with Hover Micro-Interactions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 text-left">
              <div className="hover-lift bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center gap-2.5 transition-all">
                <Layers className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#C9A45C] uppercase font-bold">Interiors</div>
                  <div className="text-xs text-white font-medium">Classic Booths</div>
                </div>
              </div>
              <div className="hover-lift bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center gap-2.5 transition-all">
                <Users className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#C9A45C] uppercase font-bold">Hospitality</div>
                  <div className="text-xs text-white font-medium">Family Gathering</div>
                </div>
              </div>
              <div className="hover-lift bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center gap-2.5 transition-all">
                <Utensils className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#C9A45C] uppercase font-bold">Cuisine</div>
                  <div className="text-xs text-white font-medium">Clay Dum Handi</div>
                </div>
              </div>
              <div className="hover-lift bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center gap-2.5 transition-all">
                <Award className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#C9A45C] uppercase font-bold">Heritage</div>
                  <div className="text-xs text-white font-medium">Pune Camp Trust</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>

        {/* Filter Navigation Bar */}
        <div className="sticky top-20 z-20 bg-[#F4EDE2]/95 backdrop-blur-md py-3 px-4 sm:py-4 sm:px-6 rounded-2xl border border-[#C9A45C]/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-[#241812] text-[#FAF8F3] shadow-md scale-105'
                    : 'bg-[#EAE0D0] text-[#241812] hover:bg-[#E2D6C3] border border-[#C9A45C]/20 hover:-translate-y-0.5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-[#775a19] font-medium">
            <Camera className="w-4 h-4 text-[#C9A45C]" />
            <span>Displaying {filteredItems.length} curated archives</span>
          </div>
        </div>

        {/* Asymmetric Gallery Grid with Staggered Entrance */}
        <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="hover-lift group relative rounded-2xl overflow-hidden bg-[#241812] shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500 h-80 sm:h-96 border border-stone-800 img-zoom"
            >
              {/* Image with smooth zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18100C] via-[#18100C]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Tag Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#18100C]/85 backdrop-blur-md text-[#E8D7B0] text-[10px] font-bold uppercase tracking-wider border border-[#C9A45C]/40 group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#18100C] transition-all">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Caption & Zoom Icon */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between z-10">
                <div className="space-y-1 pr-3">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#C9A45C] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#C9A45C] text-[#18100C] flex items-center justify-center transform group-hover:scale-115 group-hover:rotate-45 transition-transform duration-300 shadow-lg shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal with Animated Entrance */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 modal-overlay flex items-center justify-center p-3 sm:p-8 animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#C9A45C] transition-all border border-white/20 cursor-pointer hover:rotate-90 duration-300"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-8 z-50 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#C9A45C] transition-all border border-white/20 cursor-pointer hover:-translate-x-1"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-8 z-50 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#C9A45C] transition-all border border-white/20 cursor-pointer hover:translate-x-1"
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Modal Container */}
          <div className="relative max-w-5xl w-full max-h-[92vh] bg-[#18100C] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C9A45C]/40 shadow-2xl flex flex-col md:flex-row animate-scale-in my-auto overflow-y-auto no-scrollbar">
            {/* Full Image */}
            <div className="md:w-3/5 h-60 sm:h-72 md:h-[550px] relative bg-black flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-full object-cover transition-opacity duration-300 animate-fade-in"
                key={filteredItems[lightboxIndex].id}
              />
            </div>

            {/* Content Details */}
            <div className="md:w-2/5 p-5 sm:p-8 flex flex-col justify-between bg-[#241812] text-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#C9A45C]/20 text-[#E8D7B0] text-[10px] font-bold uppercase tracking-widest border border-[#C9A45C]/40">
                    {filteredItems[lightboxIndex].tag}
                  </span>
                  <span className="text-xs text-stone-400">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-tight">
                  {filteredItems[lightboxIndex].title}
                </h3>

                <p className="text-sm text-stone-300 font-light leading-relaxed">
                  {filteredItems[lightboxIndex].desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="text-xs text-[#E8D7B0] font-medium flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Agra Restaurant • Pune Camp Cantonment Archive</span>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

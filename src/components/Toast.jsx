import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-toast max-w-[calc(100vw-2rem)] sm:max-w-sm">
      <div
        className={`p-4 rounded-2xl shadow-2xl border flex items-center gap-3 backdrop-blur-xl text-xs sm:text-sm font-medium ${
          toast.type === 'error'
            ? 'bg-rose-950/95 text-rose-200 border-rose-600/50 shadow-[0_0_20px_rgba(225,29,72,0.3)]'
            : 'bg-[#18100C]/95 text-stone-200 border-[#C9A45C]/50 shadow-[0_0_20px_rgba(201,164,92,0.3)]'
        }`}
      >
        {toast.type === 'error' ? (
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 animate-badge-bounce" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-[#C9A45C] shrink-0 animate-badge-bounce" />
        )}
        <span className="flex-1 font-serif text-white tracking-wide">{toast.message}</span>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/10 rounded-full transition-transform duration-200 hover:rotate-90 cursor-pointer text-stone-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

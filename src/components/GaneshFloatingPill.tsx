import React from 'react';
import { Sparkles, Gift } from 'lucide-react';

interface GaneshFloatingPillProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const GaneshFloatingPill: React.FC<GaneshFloatingPillProps> = ({ onOpen, isOpen }) => {
  if (isOpen) return null;

  return (
    <button
      onClick={onOpen}
      className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-black font-display font-extrabold text-xs shadow-[0_4px_25px_rgba(245,158,11,0.4)] border border-amber-300 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-bounce"
      style={{ animationDuration: '3s' }}
      aria-label="Open Ganesh Chaturthi 40% OFF Festive Offer"
      id="ganesh-floating-offer-btn"
    >
      <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center shrink-0">
        <Gift className="w-3.5 h-3.5 text-black" />
      </div>
      <span className="tracking-wide">
        40% OFF <span className="hidden sm:inline">Ganesh Offer</span>
      </span>
      <Sparkles className="w-3.5 h-3.5 text-amber-900" />
    </button>
  );
};

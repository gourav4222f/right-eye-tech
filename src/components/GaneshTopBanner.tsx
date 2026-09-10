import React from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface GaneshTopBannerProps {
  onOpenOffer: () => void;
  onDismiss: () => void;
  visible: boolean;
}

export const GaneshTopBanner: React.FC<GaneshTopBannerProps> = ({
  onOpenOffer,
  onDismiss,
  visible,
}) => {
  if (!visible) return null;

  return (
    <div
      className="relative z-[60] bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-black px-4 py-2 text-xs font-display font-medium shadow-md flex items-center justify-between overflow-hidden"
      id="ganesh-top-banner"
    >
      <div className="max-w-7xl mx-auto flex-1 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center pr-6">
        <span className="inline-flex items-center gap-1 bg-black/20 text-amber-100 px-2 py-0.5 rounded-full font-mono text-[10px] tracking-wider uppercase font-bold shrink-0">
          <Sparkles className="w-3 h-3 text-amber-200" />
          FESTIVE OFFER
        </span>

        <span className="font-extrabold tracking-tight text-white">
          GANESH CHATURTHI SPECIAL: Flat 40% OFF On All Services!
        </span>

        <span className="hidden md:inline text-amber-100 font-normal">
          Use Code <strong className="font-mono bg-black/20 px-1.5 py-0.5 rounded text-white font-bold">BAPPA40</strong>
        </span>

        <button
          onClick={onOpenOffer}
          className="inline-flex items-center gap-1 bg-black hover:bg-slate-900 text-amber-300 hover:text-amber-200 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
        >
          <span>Claim 40% Off</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <button
        onClick={onDismiss}
        className="text-black/70 hover:text-black p-1 transition-colors cursor-pointer shrink-0"
        aria-label="Dismiss banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

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
      className="relative z-[60] bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-black shadow-md overflow-hidden"
      id="ganesh-top-banner"
    >
      {/* ==================================================== */}
      {/* MOBILE VIEW: SLEEK SINGLE-LINE CONTINUOUS MARQUEE    */}
      {/* ==================================================== */}
      <div className="flex sm:hidden items-center h-8 px-2 justify-between">
        {/* Fixed Mini Badge */}
        <button
          onClick={onOpenOffer}
          className="inline-flex items-center gap-1 bg-black text-amber-300 hover:text-amber-200 px-2 py-0.5 rounded-full font-mono text-[9px] tracking-wider uppercase font-bold shrink-0 shadow-xs cursor-pointer z-10 whitespace-nowrap"
        >
          <Sparkles className="w-2.5 h-2.5 text-amber-300 animate-pulse" />
          <span>40% OFF</span>
        </button>

        {/* Marquee Ticker Container (Clickable to open offer) */}
        <div
          onClick={onOpenOffer}
          className="flex-1 overflow-hidden mx-2 cursor-pointer relative select-none"
          title="Tap to claim 40% OFF Ganesh Chaturthi Offer"
        >
          <div className="animate-marquee-scroll flex items-center whitespace-nowrap text-[11px] font-display font-bold text-white tracking-wide">
            <span className="inline-flex items-center gap-3 pr-6">
              <span>GANESH CHATURTHI SPECIAL: FLAT 40% OFF ON ALL SERVICES!</span>
              <span className="text-amber-200 font-mono text-[10px] bg-black/30 px-1.5 py-0.5 rounded font-normal">CODE: BAPPA40</span>
              <span className="text-amber-100 font-normal">✦ TAP TO CLAIM ✦</span>
            </span>
            <span className="inline-flex items-center gap-3 pr-6">
              <span>GANESH CHATURTHI SPECIAL: FLAT 40% OFF ON ALL SERVICES!</span>
              <span className="text-amber-200 font-mono text-[10px] bg-black/30 px-1.5 py-0.5 rounded font-normal">CODE: BAPPA40</span>
              <span className="text-amber-100 font-normal">✦ TAP TO CLAIM ✦</span>
            </span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={onDismiss}
          className="text-black/80 hover:text-black p-1 transition-colors cursor-pointer shrink-0 z-10"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ==================================================== */}
      {/* DESKTOP VIEW: CENTERED FULL BANNER                   */}
      {/* ==================================================== */}
      <div className="hidden sm:flex items-center justify-between max-w-7xl mx-auto px-4 py-2 text-xs font-display font-medium">
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center pr-6">
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
            className="inline-flex items-center gap-1 bg-black hover:bg-slate-900 text-amber-300 hover:text-amber-200 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95 whitespace-nowrap"
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
    </div>
  );
};

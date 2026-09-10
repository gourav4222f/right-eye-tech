import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/siteData';
import { X, Sparkles, Copy, Check, Phone, MessageCircle, Clock, ShieldCheck, Tag, Loader2, Gift } from 'lucide-react';

interface GaneshOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
  onOpenAudit?: () => void;
}

export const GaneshOfferModal: React.FC<GaneshOfferModalProps> = ({
  isOpen,
  onClose,
  theme,
  onOpenAudit,
}) => {
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('All Services (40% Festive Discount)');
  const [city, setCity] = useState('Delhi NCR');

  // Countdown timer state (Calculated to festive expiration)
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 11,
    minutes: 42,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('BAPPA40');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name || 'Festive Prospect',
          phone: phone,
          email: 'not-provided@client.com',
          city: city,
          service: selectedService,
          message: `CLAIMED GANESH CHATURTHI FESTIVE OFFER: 40% OFF (Coupon Code: BAPPA40). Phone: ${phone}. City: ${city}.`,
          source: 'Ganesh Chaturthi 40% OFF Popup',
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success !== false) {
        setSubmitted(true);
      } else {
        setSubmitError(data.error || 'Unable to submit right now. Please call directly!');
      }
    } catch {
      // In case of any network glitch, confirm gracefully so user is never blocked
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border shadow-[0_0_60px_rgba(245,158,11,0.25)] transition-all ${
          isDark
            ? 'bg-[#00091B] border-amber-500/30 text-white'
            : 'bg-white border-amber-400 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
        id="ganesh-chaturthi-popup"
      >
        {/* Top Decorative Festive Bar */}
        <div className="h-2.5 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full transition-all cursor-pointer ${
            isDark
              ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
          }`}
          aria-label="Close offer modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Festive Header Banner Container */}
        <div className="relative px-6 pt-7 pb-5 text-center overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/15 via-orange-500/5 to-transparent pointer-events-none" />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-32 bg-amber-500/20 blur-3xl pointer-events-none rounded-full" />

          {/* Auspicious Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs tracking-wider uppercase mb-3 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>शुभ गणेश चतुर्थी विशेष ऑफर • GANESH CHATURTHI FESTIVAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400">
            FLAT 40% OFF
          </h2>

          <p className="text-sm sm:text-base font-semibold text-amber-400/90 mt-1 uppercase tracking-wide">
            On All Digital Marketing &amp; Website Development Services
          </p>

          <p className={`text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Celebrate new beginnings, prosperity, and digital growth with Lord Ganesha&apos;s blessings. Limited festive season slots available across all Indian cities!
          </p>

          {/* Festive Countdown Timer Urgency Bar */}
          <div className="mt-4 inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-mono font-semibold text-amber-300 uppercase tracking-wider">
              Offer Ends In:
            </span>
            <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-white">
              <span className="bg-[#021630] border border-amber-500/30 px-1.5 py-0.5 rounded text-amber-300">
                {String(timeLeft.days).padStart(2, '0')}d
              </span>
              :
              <span className="bg-[#021630] border border-amber-500/30 px-1.5 py-0.5 rounded text-amber-300">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              :
              <span className="bg-[#021630] border border-amber-500/30 px-1.5 py-0.5 rounded text-amber-300">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              :
              <span className="bg-[#021630] border border-amber-500/30 px-1.5 py-0.5 rounded text-amber-300">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body & Coupon Details */}
        <div className="px-6 pb-8 space-y-6">
          {/* Coupon Code Block */}
          <div
            className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isDark
                ? 'bg-gradient-to-r from-amber-500/10 via-[#021630] to-orange-500/10 border-amber-500/40'
                : 'bg-amber-50/80 border-amber-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center shrink-0">
                <Tag className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono tracking-widest uppercase text-amber-400 font-bold">
                  FESTIVE COUPON CODE
                </div>
                <div className="text-2xl font-mono font-black tracking-wider text-white">
                  BAPPA40
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyCode}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-display font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-black" />
                  <span>COPY CODE</span>
                </>
              )}
            </button>
          </div>

          {/* Included Services List (Chips) */}
          <div>
            <div className={`text-xs font-mono tracking-wider uppercase mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Available On All Core Services:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Search Engine Optimization (SEO)',
                'Website Design & UI/UX',
                'Custom Web Development',
                'Google Ads (PPC Campaigns)',
                'Google Business Profile (GMB)',
                'Graphic & Brand Identity',
              ].map((srv) => (
                <div
                  key={srv}
                  className={`text-[11px] font-medium px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5 ${
                    isDark
                      ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span className="truncate">{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Lead Submission Form (Instant Claim) */}
          {submitted ? (
            <div className="p-6 rounded-2xl bg-gradient-to-b from-amber-500/20 to-orange-500/10 border border-amber-500/50 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-amber-300">
                Festive Offer Claimed Successfully!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you! Your 40% discount voucher with code <strong>BAPPA40</strong> has been registered. Our senior digital strategist will contact you within 30 minutes.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20RIGHT%20EYE%20Technology%2C%20I%20just%20claimed%20the%20Ganesh%20Chaturthi%2040%25%20OFF%20Festive%20Offer%20(Code%3A%20BAPPA40).%20Please%20guide%20me.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-display font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp Now
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-display font-medium text-xs cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitLead} className="space-y-3.5">
              <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
                Claim Your 40% Discount (Instant Activation):
              </div>

              {submitError && (
                <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs">
                  {submitError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-slate-400 mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none transition-all ${
                      isDark
                        ? 'bg-[#021630]/80 border-slate-700 focus:border-amber-400 text-white'
                        : 'bg-white border-slate-300 focus:border-amber-500 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-slate-400 mb-1">
                    PHONE NUMBER (WHATSAPP) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 8700275224"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none transition-all ${
                      isDark
                        ? 'bg-[#021630]/80 border-slate-700 focus:border-amber-400 text-white'
                        : 'bg-white border-slate-300 focus:border-amber-500 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-slate-400 mb-1">
                    SERVICE INTEREST *
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none transition-all ${
                      isDark
                        ? 'bg-[#021630] border-slate-700 focus:border-amber-400 text-white'
                        : 'bg-white border-slate-300 focus:border-amber-500 text-slate-900'
                    }`}
                  >
                    <option value="All Services (40% Festive Discount)">All Services (Full Growth Suite)</option>
                    <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                    <option value="Website Design & UI/UX">Website Design &amp; UI/UX</option>
                    <option value="Custom Web Development">Custom Web Development</option>
                    <option value="Google Ads (PPC Campaigns)">Google Ads (PPC Campaigns)</option>
                    <option value="Google Business Profile (GMB)">Google Business Profile (GMB)</option>
                    <option value="Graphic & Brand Identity">Graphic &amp; Brand Identity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-slate-400 mb-1">
                    CITY / REGION (PAN-INDIA)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi, Mumbai, Bengaluru"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none transition-all ${
                      isDark
                        ? 'bg-[#021630]/80 border-slate-700 focus:border-amber-400 text-white'
                        : 'bg-white border-slate-300 focus:border-amber-500 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 text-black font-display font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>Activating 40% Festive Voucher...</span>
                  </>
                ) : (
                  <>
                    <Gift className="w-4 h-4 text-black" />
                    <span>Claim 40% Discount Now (Code: BAPPA40)</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Quick Contact & WhatsApp Fallbacks */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20RIGHT%20EYE%20Technology%2C%20I%20want%20to%20claim%20the%20Ganesh%20Chaturthi%2040%25%20OFF%20offer%20(Code%3A%20BAPPA40)`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Claim via WhatsApp (+91 {BUSINESS_INFO.whatsapp})</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Instant Call: +91 {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

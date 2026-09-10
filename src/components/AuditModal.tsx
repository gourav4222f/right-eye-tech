import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { BUSINESS_INFO } from '../data/siteData';
import { X, CheckCircle2, Phone, Sparkles, MessageCircle, Loader2 } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose, theme }) => {
  const isDark = theme === 'dark';
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Delhi NCR',
    serviceInterest: 'Search Engine Optimization (SEO)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          service: formData.serviceInterest,
          notes: formData.notes,
          source: 'Free Consultation & Audit Modal',
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success !== false) {
        setSubmitted(true);
      } else {
        setSubmitError(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err: any) {
      // In case of network disconnection, fallback to graceful confirmation
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className={`relative w-full max-w-lg rounded-2xl border p-6 md:p-8 shadow-2xl transition-all ${
          isDark
            ? 'bg-[#021630] border-[#01BDFC]/40 text-white'
            : 'bg-white border-slate-200 text-slate-900 shadow-xl'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#01BDFC] font-mono text-xs tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>PAN-INDIA DIGITAL CONSULTATION // FREE AUDIT</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold">
              Get a Free Consultation & Quote
            </h3>
            <p className={`text-xs md:text-sm mt-1 mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Speak directly with our digital strategists. We analyze your website, Google presence, or ad campaigns and provide a transparent, high-ROI growth roadmap tailored to your business.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block mb-1 text-slate-300 font-sans font-medium">Your Name / Business Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma / Apex Enterprises"
                  className={`w-full p-2.5 rounded-lg border text-sm transition-colors ${
                    isDark
                      ? 'bg-[#00091B] border-[#01BDFC]/30 text-white focus:border-[#01BDFC]'
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#01BDFC]'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-slate-300 font-sans font-medium">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="8700275224"
                    className={`w-full p-2.5 rounded-lg border text-sm transition-colors ${
                      isDark
                        ? 'bg-[#00091B] border-[#01BDFC]/30 text-white focus:border-[#01BDFC]'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#01BDFC]'
                    }`}
                  />
                </div>
                <div>
                  <label className="block mb-1 text-slate-300 font-sans font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@company.com"
                    className={`w-full p-2.5 rounded-lg border text-sm transition-colors ${
                      isDark
                        ? 'bg-[#00091B] border-[#01BDFC]/30 text-white focus:border-[#01BDFC]'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#01BDFC]'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-slate-300 font-sans font-medium">City / State (Anywhere in India)</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Mumbai, Delhi, Bengaluru, Pune"
                    className={`w-full p-2.5 rounded-lg border text-sm transition-colors ${
                      isDark
                        ? 'bg-[#00091B] border-[#01BDFC]/30 text-white focus:border-[#01BDFC]'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#01BDFC]'
                    }`}
                  />
                </div>
                <div>
                  <label className="block mb-1 text-slate-300 font-sans font-medium">Service Needed</label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className={`w-full p-2.5 rounded-lg border text-sm transition-colors ${
                      isDark
                        ? 'bg-[#00091B] border-[#01BDFC]/30 text-white focus:border-[#01BDFC]'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#01BDFC]'
                    }`}
                  >
                    <option>Search Engine Optimization (SEO)</option>
                    <option>Website Design (UI/UX)</option>
                    <option>Website Development</option>
                    <option>Google Ads / Paid Ads</option>
                    <option>Google My Business (GMB) / Local SEO</option>
                    <option>Graphic Design & Branding</option>
                    <option>Full Digital Growth Package (All 6 Services)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1 text-slate-300 font-sans font-medium">Business Website or Current Requirements</label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Website URL or brief description of what you'd like to achieve..."
                  className={`w-full p-2.5 rounded-lg border text-sm transition-colors ${
                    isDark
                      ? 'bg-[#00091B] border-[#01BDFC]/30 text-white focus:border-[#01BDFC]'
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#01BDFC]'
                  }`}
                />
              </div>

              {submitError && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-sm tracking-wide hover:brightness-110 transition-all shadow-[0_0_20px_rgba(1,189,252,0.4)] cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Inquiry...</span>
                  </>
                ) : (
                  <span>Submit Consultation Request &rarr;</span>
                )}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-700/30 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
              <a
                href={`https://wa.me/918700275224?text=Hi%20RIGHT%20EYE%20Technology,%20I%20would%20like%20a%20free%20consultation%20for%20my%20business.`}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat on WhatsApp
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#01BDFC] font-bold hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#01BDFC]/20 border border-[#01BDFC] flex items-center justify-center text-[#01BDFC]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-display font-bold text-white">Consultation Request Confirmed</h4>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Thank you, {formData.name}. Our digital consulting team will review your requirements and reach out to {formData.phone || 'you'} within 2 business hours.
            </p>
            <div className="p-4 rounded-xl bg-[#00091B] border border-[#01BDFC]/30 text-xs font-mono text-left max-w-sm mx-auto space-y-1">
              <div>LOCATION: {formData.city || 'Pan-India'}</div>
              <div>REQUESTED SERVICE: {formData.serviceInterest}</div>
              <div>ASSIGNED DESK: Senior Digital Growth Strategist</div>
              <div>STATUS: ACTIVE_REVIEW</div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-[#01BDFC] text-[#00091B] font-semibold text-xs hover:brightness-110 cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

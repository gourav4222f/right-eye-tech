import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { BUSINESS_INFO } from '../data/siteData';
import { X, CheckCircle2, Phone, Eye } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose, theme }) => {
  const isDark = theme === 'dark';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    serviceInterest: 'Digital Marketing & Growth',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
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
              <Eye className="w-4 h-4" />
              <span>OPTICAL DIAGNOSTIC // INTAKE</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold">
              Request Your Free Digital Growth Audit
            </h3>
            <p className={`text-xs md:text-sm mt-1 mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Our senior Delhi growth engineers will analyze your site speed, keyword gaps, and conversion bottlenecks within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block mb-1 text-slate-300 font-sans font-medium">Your Name / Business Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Apex Health Clinic / Rajesh Kumar"
                  className={`w-full p-2.5 rounded-lg border text-sm transition-colors ${
                    isDark
                      ? 'bg-[#00091B] border-[#01BDFC]/30 text-white focus:border-[#01BDFC]'
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#01BDFC]'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-slate-300 font-sans font-medium">Phone Number (10 Digits) *</label>
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
                    placeholder="growth@company.com"
                    className={`w-full p-2.5 rounded-lg border text-sm transition-colors ${
                      isDark
                        ? 'bg-[#00091B] border-[#01BDFC]/30 text-white focus:border-[#01BDFC]'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#01BDFC]'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-slate-300 font-sans font-medium">Current Website or Social Handle</label>
                <input
                  type="text"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://mybusiness.com or @instagram_handle"
                  className={`w-full p-2.5 rounded-lg border text-sm transition-colors ${
                    isDark
                      ? 'bg-[#00091B] border-[#01BDFC]/30 text-white focus:border-[#01BDFC]'
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#01BDFC]'
                  }`}
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-300 font-sans font-medium">Primary Growth Objective</label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className={`w-full p-2.5 rounded-lg border text-sm transition-colors ${
                    isDark
                      ? 'bg-[#00091B] border-[#01BDFC]/30 text-white focus:border-[#01BDFC]'
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#01BDFC]'
                  }`}
                >
                  <option>Full-Funnel Digital Marketing</option>
                  <option>High-Speed Web Development (Next.js/React)</option>
                  <option>Top 3 Google SEO & Local Maps Ranking</option>
                  <option>High-Yield Social Media & Google Ads</option>
                  <option>Video Production & Instagram Reels</option>
                  <option>Custom CRM & WhatsApp Automation</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-sm tracking-wide hover:brightness-110 transition-all shadow-[0_0_20px_rgba(1,189,252,0.4)] cursor-pointer"
              >
                Transmit Diagnostic Request &rarr;
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-700/30 flex items-center justify-between text-[11px] text-slate-400">
              <span>Need immediate priority response?</span>
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
            <h4 className="text-2xl font-display font-bold text-white">Diagnostic Scheduled</h4>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              We received your details. A senior growth strategist from our Rohini, Delhi office will review your domain and reach out to {formData.phone || 'you'} within 2 business hours.
            </p>
            <div className="p-4 rounded-xl bg-[#00091B] border border-[#01BDFC]/30 text-xs font-mono text-left max-w-sm mx-auto space-y-1">
              <div>TARGET DOMAIN: {formData.website || 'Direct Inquiry'}</div>
              <div>ASSIGNED ENGINEER: Senior Strategist (Rohini HQ)</div>
              <div>TELEMETRY STATUS: PENDING_REVIEW</div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-[#01BDFC] text-[#00091B] font-semibold text-xs hover:brightness-110"
            >
              Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

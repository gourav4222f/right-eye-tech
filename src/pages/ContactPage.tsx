import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { BUSINESS_INFO } from '../data/siteData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Globe,
} from 'lucide-react';

interface ContactPageProps {
  theme: ThemeMode;
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Digital Marketing & Growth Funnels',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
          <MapPin className="w-3.5 h-3.5" />
          <span>DIRECT DISPATCH // ROHINI HQ</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
          Contact Digital Marketing Agency Delhi —{' '}
          <span className="text-[#01BDFC]">Connect with Senior Engineers</span>
        </h1>
        <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          Ready to see what others miss? Contact RIGHT EYE Technology directly. Whether you prefer a diagnostic consultation at our Rohini facility or a rapid virtual briefing, we are ready to analyze your digital perimeter.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div
            className={`p-8 rounded-3xl border ${
              isDark ? 'bg-[#021630] border-[#01BDFC]/30' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h2 className="text-xl font-display font-bold mb-2">
              Dispatch Digital Inquiry
            </h2>
            <p className={`text-xs mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Fill out this briefing form and our senior directors will review your website metrics within 2 hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block mb-1.5 text-slate-300 font-sans font-medium">Your Name / Organization *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Dr. A. Sharma / Horizon Tech"
                    className={`w-full p-3 rounded-xl border text-sm font-sans ${
                      isDark ? 'bg-[#00091B] border-[#01BDFC]/30 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5 text-slate-300 font-sans font-medium">Phone Number (10 Digits) *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="8700275224"
                      className={`w-full p-3 rounded-xl border text-sm font-sans ${
                        isDark ? 'bg-[#00091B] border-[#01BDFC]/30 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-slate-300 font-sans font-medium">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="direct@company.com"
                      className={`w-full p-3 rounded-xl border text-sm font-sans ${
                        isDark ? 'bg-[#00091B] border-[#01BDFC]/30 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1.5 text-slate-300 font-sans font-medium">Primary Focus Capability</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`w-full p-3 rounded-xl border text-sm font-sans ${
                      isDark ? 'bg-[#00091B] border-[#01BDFC]/30 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  >
                    <option>Full-Funnel Digital Marketing</option>
                    <option>Custom Web Development (Next.js/React)</option>
                    <option>SEO Services Delhi & Google 3-Pack</option>
                    <option>High-Yield Social Media & Google Ads</option>
                    <option>Cinematic Video Production & Reels</option>
                    <option>Custom CRM Solutions & WhatsApp Bot</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1.5 text-slate-300 font-sans font-medium">Project Goals & Challenges</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe your current traffic, target monthly customer target, or website performance issues..."
                    className={`w-full p-3 rounded-xl border text-sm font-sans ${
                      isDark ? 'bg-[#00091B] border-[#01BDFC]/30 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-sm tracking-wide hover:brightness-110 shadow-[0_0_20px_rgba(1,189,252,0.4)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message &rarr;</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#01BDFC]/20 border border-[#01BDFC] flex items-center justify-center text-[#01BDFC]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold">Transmission Confirmed</h3>
                <p className={`text-sm max-w-sm mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Thank you, {form.name}. Our regional strategy desk at Sector-20, Rohini has received your parameters and will respond within 2 hours.
                </p>
                <div className="p-4 rounded-xl bg-[#00091B] border border-[#01BDFC]/30 text-xs font-mono text-left max-w-sm mx-auto space-y-1">
                  <div>DISPATCH_ID: RET-DL-{Math.floor(1000 + Math.random() * 9000)}</div>
                  <div>CHANNEL: DIRECT_HQ_LINE</div>
                  <div>STATUS: PRIORITY_DISPATCH</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Business NAP & Hours Card */}
        <div className="lg:col-span-5 space-y-6">
          <div
            className={`p-8 rounded-3xl border ${
              isDark ? 'bg-[#021630] border-[#01BDFC]/30' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 text-[#01BDFC] font-mono text-xs mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>VERIFIED DELHI HEADQUARTERS</span>
            </div>

            <h2 className="text-xl font-display font-bold mb-6">
              RIGHT EYE Technology
            </h2>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white font-sans font-semibold mb-0.5">
                    Physical Facility:
                  </strong>
                  <span>{BUSINESS_INFO.address}, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#01BDFC] shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                    Hotline:
                  </strong>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#01BDFC] font-bold underline">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#01BDFC] shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                    Official Email:
                  </strong>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#01BDFC] underline">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#01BDFC] shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                    Website:
                  </strong>
                  <span>righteyetechnology.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-700/20">
                <Clock className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white font-sans font-semibold mb-0.5">
                    Operating Schedule:
                  </strong>
                  <span>Monday - Saturday: 9:30 AM – 7:30 PM IST</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/20">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline Now: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="rounded-2xl overflow-hidden border border-[#01BDFC]/30 aspect-video relative">
            <iframe
              title="RIGHT EYE Technology Rohini Delhi Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.423984639462!2d77.06721131508687!3d28.718815982384784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0684fb65a95f%3A0x6a2c2069e8b0a99c!2sSector%2020%2C%20Rohini%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

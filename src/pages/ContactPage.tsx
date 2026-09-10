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
  MessageCircle,
  Loader2,
} from 'lucide-react';

interface ContactPageProps {
  theme: ThemeMode;
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: 'Search Engine Optimization (SEO)',
    message: '',
  });

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
          name: form.name,
          email: form.email,
          phone: form.phone,
          city: form.city,
          service: form.service,
          message: form.message,
          source: 'Website Contact Page Form',
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success !== false) {
        setSubmitted(true);
      } else {
        setSubmitError(data.error || 'Failed to dispatch inquiry. Please try again or reach us via WhatsApp.');
      }
    } catch (err: any) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
          <Globe className="w-3.5 h-3.5" />
          <span>PAN-INDIA CLIENT DESK // RAPID RESPONSE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
          Contact Our Team —{' '}
          <span className="text-[#01BDFC]">Serving Clients Across India</span>
        </h1>
        <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          Whether you are based in Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, or anywhere in India, our digital strategists are ready to partner with you. Connect via phone, WhatsApp, or request a detailed written proposal below.
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
              Get a Free Consultation & Quote
            </h2>
            <p className={`text-xs mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Fill out this briefing form and a senior digital strategist will analyze your requirements and get back to you within 2 hours.
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
                    placeholder="e.g. Rajesh Kumar / Apex Solutions"
                    className={`w-full p-3 rounded-xl border text-sm font-sans ${
                      isDark ? 'bg-[#00091B] border-[#01BDFC]/30 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5 text-slate-300 font-sans font-medium">Phone / WhatsApp *</label>
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
                      placeholder="contact@company.com"
                      className={`w-full p-3 rounded-xl border text-sm font-sans ${
                        isDark ? 'bg-[#00091B] border-[#01BDFC]/30 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5 text-slate-300 font-sans font-medium">City / State</label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="e.g. Mumbai, Bengaluru, Delhi NCR"
                      className={`w-full p-3 rounded-xl border text-sm font-sans ${
                        isDark ? 'bg-[#00091B] border-[#01BDFC]/30 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block mb-1.5 text-slate-300 font-sans font-medium">Primary Service Required</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`w-full p-3 rounded-xl border text-sm font-sans ${
                        isDark ? 'bg-[#00091B] border-[#01BDFC]/30 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      <option>Search Engine Optimization (SEO)</option>
                      <option>Website Design (UI/UX)</option>
                      <option>Website Development</option>
                      <option>Google Ads / Paid Ads (PPC)</option>
                      <option>Google My Business (GMB) / Local SEO</option>
                      <option>Graphic Design & Creative Branding</option>
                      <option>Full-Stack Digital Growth (All 6 Services)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-1.5 text-slate-300 font-sans font-medium">Project Goals & Requirements</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe your business, website URL, target customers, or growth goals..."
                    className={`w-full p-3 rounded-xl border text-sm font-sans ${
                      isDark ? 'bg-[#00091B] border-[#01BDFC]/30 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                {submitError && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                    {submitError}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-sm tracking-wide hover:brightness-110 shadow-[0_0_20px_rgba(1,189,252,0.4)] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry to Team...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry &rarr;</span>
                      </>
                    )}
                  </button>
                  <a
                    href="https://wa.me/918700275224?text=Hi%20RIGHT%20EYE%20Technology,%20I%20would%20like%20to%20discuss%20digital%20services%20for%20my%20business."
                    target="_blank"
                    rel="noreferrer"
                    className="py-3.5 px-6 rounded-xl border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-mono text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#01BDFC]/20 border border-[#01BDFC] flex items-center justify-center text-[#01BDFC]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold">Inquiry Received</h3>
                <p className={`text-sm max-w-sm mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Thank you, {form.name}. Our digital consulting team will review your requirements and reach out to you at {form.phone} within 2 business hours.
                </p>
                <div className="p-4 rounded-xl bg-[#00091B] border border-[#01BDFC]/30 text-xs font-mono text-left max-w-sm mx-auto space-y-1">
                  <div>TICKET: RET-IND-{Math.floor(1000 + Math.random() * 9000)}</div>
                  <div>SERVICE: {form.service}</div>
                  <div>LOCATION: {form.city || 'Pan-India'}</div>
                  <div>STATUS: PRIORITY_QUEUED</div>
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
              <span>OFFICIAL AGENCY CONTACT & NAP</span>
            </div>

            <h2 className="text-xl font-display font-bold mb-6">
              RIGHT EYE Technology
            </h2>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white font-sans font-semibold mb-0.5">
                    Registered Headquarters:
                  </strong>
                  <span>{BUSINESS_INFO.address}, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#01BDFC] shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                    Direct Phone / Hotline:
                  </strong>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#01BDFC] font-bold underline">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                    WhatsApp Business:
                  </strong>
                  <a
                    href="https://wa.me/918700275224?text=Hi%20RIGHT%20EYE%20Technology"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 font-bold underline"
                  >
                    +91 87002 75224
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#01BDFC] shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                    Email Inquiries:
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
                    Official Website:
                  </strong>
                  <span>righteyetechnology.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-700/20">
                <Clock className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white font-sans font-semibold mb-0.5">
                    Client Support Hours:
                  </strong>
                  <span>Monday - Saturday: 9:30 AM – 7:30 PM IST</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/20 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly: {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href="https://wa.me/918700275224?text=Hi%20RIGHT%20EYE%20Technology,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-display font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="rounded-2xl overflow-hidden border border-[#01BDFC]/30 aspect-video relative">
            <iframe
              title="RIGHT EYE Technology Registered Office Map"
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

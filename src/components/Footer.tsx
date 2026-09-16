import { useState, FormEvent } from 'react';
import { Dumbbell, Phone, MapPin, ArrowUp, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setErrorMessage('');
    }, 450);
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Why Train With Us', id: 'why-us' },
    { label: 'Programs', id: 'programs' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#08080a] border-t border-zinc-800/80 pt-14 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Updates Subscription Banner */}
        <div
          id="studio-updates-banner"
          className="mb-14 p-6 sm:p-8 lg:p-10 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 relative overflow-hidden shadow-xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/40 border border-red-900/50 text-red-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span>Studio Updates</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight leading-tight">
                STAY INFORMED ON <span className="text-red-500">GYM ANNOUNCEMENTS</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Receive weekly training schedule adjustments, holiday open hours, and facility announcements directly.
              </p>
            </div>

            {/* Email Subscription Form */}
            <form
              id="studio-updates-form"
              onSubmit={handleSubscribe}
              className="w-full lg:max-w-md"
            >
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <input
                  id="studio-updates-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder="Enter your email for studio updates..."
                  className="flex-1 px-4 py-3 rounded-md bg-zinc-900/90 border border-zinc-700/80 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white placeholder:text-zinc-500 text-xs sm:text-sm outline-none transition-all shadow-inner"
                  aria-label="Enter your email for studio updates"
                />
                <button
                  id="studio-updates-submit-btn"
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-500 active:scale-95 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-950/50 hover:shadow-red-900/60 disabled:opacity-50 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <span>Subscribing...</span>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>

              {/* Status feedback message */}
              {status === 'success' && (
                <div
                  id="studio-updates-success-msg"
                  className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-medium"
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Thank you for subscribing! You will receive studio updates soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div
                  id="studio-updates-error-msg"
                  className="mt-3 flex items-center gap-2 text-xs text-red-400 font-medium"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-800">
          {/* Brand & Location Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center font-bold shadow-sm shadow-red-950/40">
                <Dumbbell className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider uppercase text-white">
                The Royal <span className="text-red-500 font-extrabold">Gym</span>
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Dedicated fitness and strength facility in Gulberg III, Lahore. Train with purpose,
              stay consistent, and build your strongest self.
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone.tel}`}
                  className="hover:text-white transition-colors font-medium text-zinc-200"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-link-${link.id}`}
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-red-400 transition-colors text-left text-zinc-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Visiting Hours Notice */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-4">
              Location Details
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              1st Floor, Khan Arcade, Ferdous Market, Gulberg III, Lahore.
            </p>
            <div className="mt-3">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-red-400 hover:underline"
              >
                <span>Open Google Maps</span>
              </a>
            </div>
            <div className="mt-4 p-3 rounded bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400">
              Direct telephone inquiries accepted during regular training hours.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-zinc-500">
            © 2026 {BUSINESS_INFO.name}. All rights reserved.
          </p>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-red-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-zinc-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}

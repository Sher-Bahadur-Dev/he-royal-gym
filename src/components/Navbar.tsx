import { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'why-us', 'programs', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Why Train With Us', id: 'why-us' },
    { label: 'Programs', id: 'programs' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0d10]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-xl py-3.5'
          : 'bg-gradient-to-b from-[#0c0d10]/95 via-[#0c0d10]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <div className="w-10 h-10 rounded-md bg-red-600 border border-red-500 flex items-center justify-center group-hover:bg-red-500 transition-colors shadow-sm shadow-red-950/40">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-2xl font-bold tracking-wider uppercase text-white leading-none">
                  THE ROYAL <span className="text-red-500 font-extrabold">GYM</span>
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-medium flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block animate-pulse" />
                Gulberg III • Lahore
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeSection === link.id
                    ? 'text-white bg-zinc-800/80 border border-zinc-700/80'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="nav-call-btn"
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-wider font-semibold text-zinc-300 hover:text-white bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 rounded-md transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>{BUSINESS_INFO.phone.display}</span>
            </a>

            <button
              id="nav-join-btn"
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-sm shadow-red-950/40 active:scale-95"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="mobile-quick-call-icon"
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              aria-label="Call The Royal Gym"
              className="p-2 text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              className="p-2 text-zinc-200 hover:text-white bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#0e1014] border-b border-zinc-800 px-4 pt-3 pb-6 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-md text-xs uppercase font-semibold tracking-wider text-left transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-zinc-800/80 border border-zinc-700/80'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </button>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <a
              id="mobile-drawer-call-btn"
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="flex items-center justify-center gap-2 py-3 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-200 font-semibold text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-zinc-400" />
              <span>Call: {BUSINESS_INFO.phone.display}</span>
            </a>

            <button
              id="mobile-drawer-join-btn"
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm active:scale-98"
            >
              Join The Royal Gym
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

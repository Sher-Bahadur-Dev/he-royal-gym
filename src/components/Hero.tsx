import { ArrowRight, Phone, MapPin, ShieldCheck, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/gymData';

interface HeroProps {
  onJoinClick: () => void;
  onExplorePrograms: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0b0c0e]"
    >
      {/* Hero Visual: Full-screen refined gym composition */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="The Royal Gym Training Atmosphere"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Architectural gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/85 to-[#0b0c0e]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e]/90 via-transparent to-[#0b0c0e]/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Location & Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-300">
            Gulberg III, Lahore • 1st Floor, Khan Arcade
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-white leading-[0.92] max-w-5xl mx-auto"
        >
          BUILD YOUR <br />
          <span className="text-white">
            STRONGEST <span className="text-red-600">SELF</span>
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Train with purpose. Build strength, improve your fitness, and stay consistent on your
          journey toward becoming your strongest self.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* Primary CTA */}
          <button
            id="hero-primary-cta"
            onClick={onJoinClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-150 shadow-md shadow-red-950/50 hover:shadow-red-900/60 active:scale-[0.98] flex items-center justify-center gap-2.5 group"
          >
            <span>Join The Royal Gym</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <a
            id="hero-secondary-cta"
            href={`tel:${BUSINESS_INFO.phone.tel}`}
            className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-500 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-zinc-400" />
            <span>Call: {BUSINESS_INFO.phone.display}</span>
          </a>
        </motion.div>

        {/* Core Gym Pillar Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 sm:mt-16 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 text-left max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
            <div className="w-8 h-8 rounded bg-red-950/40 border border-red-900/50 flex items-center justify-center flex-shrink-0">
              <Flame className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-200 uppercase tracking-wide">Purposeful</div>
              <div className="text-[11px] text-zinc-400">Structured Strength</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-900/40 border border-zinc-800/80">
            <div className="w-8 h-8 rounded bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-zinc-200" />
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-200 uppercase tracking-wide">Dedicated</div>
              <div className="text-[11px] text-zinc-400">Consistent Progress</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-900/40 border border-zinc-800/80">
            <div className="w-8 h-8 rounded bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-zinc-200" />
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-200 uppercase tracking-wide">Gulberg III</div>
              <div className="text-[11px] text-zinc-400">Ferdous Market</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-900/40 border border-zinc-800/80">
            <div className="w-8 h-8 rounded bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-zinc-200" />
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-200 uppercase tracking-wide">Direct Line</div>
              <div className="text-[11px] text-zinc-400">+92 321 8430880</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

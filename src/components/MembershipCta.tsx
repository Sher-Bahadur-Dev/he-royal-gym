import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/gymData';

interface MembershipCtaProps {
  onContactClick: () => void;
}

export default function MembershipCta({ onContactClick }: MembershipCtaProps) {
  return (
    <section id="membership-cta" className="py-20 bg-[#0b0c0e] relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl p-8 sm:p-12 md:p-14 bg-zinc-900/50 border border-zinc-800 shadow-xl text-center relative overflow-hidden"
        >
          {/* Subtle badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/40 border border-red-900/50 text-red-400 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Facility Membership</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight leading-tight">
            READY TO START YOUR <br className="hidden sm:inline" />
            <span className="text-red-600">FITNESS JOURNEY?</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward a stronger, healthier, more consistent training regimen in Gulberg III.
          </p>

          {/* Actions */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              id="membership-contact-cta-btn"
              onClick={onContactClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md shadow-red-950/50 hover:shadow-red-900/60 active:scale-95 flex items-center justify-center gap-2.5 group"
            >
              <span>Contact The Royal Gym</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              id="membership-call-cta-btn"
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-500 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2.5 active:scale-95"
            >
              <Phone className="w-4 h-4 text-zinc-400" />
              <span>Call: {BUSINESS_INFO.phone.display}</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-zinc-400">
            Gulberg III, Lahore • 1st Floor, Khan Arcade, Ferdous Market
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { CheckCircle2, MapPin, Target, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/gymData';

interface AboutProps {
  onLearnMoreClick: () => void;
}

export default function About({ onLearnMoreClick }: AboutProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0e1014] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-900 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop"
                alt="The Royal Gym Training Atmosphere"
                className="w-full h-full object-cover brightness-90 hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1014] via-[#0e1014]/40 to-transparent" />

              {/* Floating Verified Location Tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-md bg-zinc-950/90 backdrop-blur-md border border-zinc-800 shadow-lg">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Verified Gym Location</span>
                </div>
                <div className="text-white font-bold text-sm sm:text-base">
                  Khan Arcade, Ferdous Market
                </div>
                <div className="text-zinc-400 text-xs mt-0.5">
                  Gulberg III, Lahore, 54000
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/40 border border-red-900/50 text-red-400 text-[11px] font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3 h-3 text-red-400" />
              <span>About The Royal Gym</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-[1.05]">
              TRAIN WITH <span className="text-red-600">PURPOSE</span>
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              <p>
                Located in the heart of Gulberg III at Ferdous Market, <strong className="text-white font-semibold">The Royal Gym</strong> provides a dedicated fitness environment focused on deliberate training, physical conditioning, and everyday consistency.
              </p>
              <p>
                Whether you are stepping into a gym for the very first time, refining your strength movements, or working toward disciplined weight management, our space is built around regular, focused sessions in a supportive and welcoming environment.
              </p>
              <p className="text-sm text-zinc-400">
                Fitness progress is not about shortcuts—it is built on showing up, training with intent, and building sustainable strength day by day.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-md bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-red-950/40 border border-red-900/50 text-red-500 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      Purpose-Driven Training
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Every workout centered on tangible strength and physical wellness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      Welcoming Environment
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Approachable for both beginners and experienced lifters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Community Note */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-zinc-800">
              <button
                id="about-explore-programs-btn"
                onClick={onLearnMoreClick}
                className="px-6 py-3 rounded-md bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs tracking-wider uppercase transition-all shadow-sm active:scale-95"
              >
                Explore Training Programs
              </button>

              <div className="text-xs text-zinc-400">
                Ready to train? Call directly at{' '}
                <a
                  href={`tel:${BUSINESS_INFO.phone.tel}`}
                  className="text-white hover:text-zinc-300 font-semibold underline underline-offset-4"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

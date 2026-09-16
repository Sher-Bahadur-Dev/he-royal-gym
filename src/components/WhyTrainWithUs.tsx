import { Dumbbell, HeartPulse, UserCheck, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURES } from '../data/gymData';
import { FeatureItem } from '../types';

interface WhyTrainWithUsProps {
  onSelectFeature?: (featureTitle: string) => void;
}

export default function WhyTrainWithUs({ onSelectFeature }: WhyTrainWithUsProps) {
  const getIcon = (name: FeatureItem['iconName']) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-white" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-white" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-white" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-white" />;
      default:
        return <Dumbbell className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0b0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/40 border border-red-900/50 text-red-400 text-[11px] font-semibold tracking-widest uppercase mb-4">
            <span>Facility Standards</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-tight">
            WHY TRAIN <span className="text-red-600">WITH US</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            A disciplined fitness facility engineered to help you stay committed, train purposefully,
            and achieve measurable results.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.number}
              id={`feature-card-${feature.number}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative p-6 sm:p-7 rounded-lg bg-zinc-900/40 border border-zinc-800 hover:border-red-600/40 transition-all duration-200 flex flex-col justify-between"
            >
              {/* Card Top: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-red-500/80 group-hover:text-red-400 tracking-wider">
                    [{feature.number}]
                  </span>
                  <div className="w-10 h-10 rounded-md bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center group-hover:border-red-500/60 group-hover:bg-red-950/30 transition-colors">
                    {getIcon(feature.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold uppercase tracking-wide text-white group-hover:text-zinc-100 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span className="uppercase tracking-wider font-semibold text-[11px]">
                  Core Standard
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-red-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { PROGRAMS } from '../data/gymData';
import { ProgramItem } from '../types';

interface ProgramsProps {
  onSelectProgram: (programTitle: string) => void;
}

export default function Programs({ onSelectProgram }: ProgramsProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Subtle loading phase to simulate content preparation smoothly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleSimulateReload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#0e1014] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/40 border border-red-900/50 text-red-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
              <span>Structured Training Pathways</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-tight">
              GYM <span className="text-red-600">PROGRAMS</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-300 max-w-xl">
              Targeted training programs tailored to your fitness stage, lifestyle, and strength goals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm text-zinc-400 max-w-xs">
              Direct member guidance available at Gulberg III. Choose a pathway to inquire with our coaching team.
            </div>
            <button
              id="programs-reload-preview-btn"
              onClick={handleSimulateReload}
              title="Refresh and preview loading state"
              className="p-2 rounded-md bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-red-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content or Loading Skeleton */}
        {isLoading ? (
          <div
            id="programs-skeleton-grid"
            aria-label="Loading programs..."
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {[1, 2, 3, 4].map((skeletonId) => (
              <div
                key={`program-skeleton-${skeletonId}`}
                className="rounded-xl overflow-hidden bg-zinc-900/40 border border-zinc-800/80 p-0 flex flex-col justify-between shadow-lg animate-pulse"
              >
                {/* Image Banner Skeleton */}
                <div className="relative h-60 sm:h-64 w-full bg-zinc-800/60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/20 to-transparent" />
                  {/* Badge Skeleton */}
                  <div className="absolute top-4 left-4">
                    <div className="w-28 h-6 rounded bg-zinc-700/70" />
                  </div>
                </div>

                {/* Card Body Skeleton */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Title skeleton */}
                    <div className="h-7 w-2/3 rounded-md bg-zinc-800/90 mb-3" />
                    {/* Description lines skeleton */}
                    <div className="space-y-2 mt-2">
                      <div className="h-3.5 w-full rounded bg-zinc-800/60" />
                      <div className="h-3.5 w-4/5 rounded bg-zinc-800/60" />
                    </div>

                    {/* Highlights bullet skeletons */}
                    <div className="mt-6 space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-zinc-800 flex-shrink-0" />
                        <div className="h-3.5 w-44 rounded bg-zinc-800/70" />
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-zinc-800 flex-shrink-0" />
                        <div className="h-3.5 w-52 rounded bg-zinc-800/70" />
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-zinc-800 flex-shrink-0" />
                        <div className="h-3.5 w-36 rounded bg-zinc-800/70" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Skeleton */}
                  <div className="pt-5 border-t border-zinc-800/80 flex items-center justify-between">
                    <div className="w-36 h-9 rounded-md bg-zinc-800/80" />
                    <div className="w-8 h-4 rounded bg-zinc-800/50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 4 Program Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROGRAMS.map((program: ProgramItem, idx: number) => (
              <motion.div
                key={program.id}
                id={`program-card-${program.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-xl overflow-hidden bg-zinc-900/40 border border-zinc-800 hover:border-red-600/40 transition-all duration-200 flex flex-col justify-between shadow-lg"
              >
                {/* Image Banner with Dark Overlay */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 brightness-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1014] via-[#0e1014]/40 to-transparent" />

                  {/* Tagline Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded backdrop-blur-md text-[10px] font-bold uppercase tracking-wider ${
                        idx === 0
                          ? 'bg-red-950/85 border border-red-800/80 text-red-300'
                          : 'bg-zinc-950/90 border border-zinc-800 text-zinc-300'
                      }`}
                    >
                      {program.tagline}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white group-hover:text-zinc-100 transition-colors">
                      {program.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-5 space-y-2">
                      {program.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inquiry Action Button */}
                  <div className="mt-7 pt-5 border-t border-zinc-800/80 flex items-center justify-between">
                    <button
                      id={`inquire-program-${program.id}`}
                      onClick={() => onSelectProgram(program.title)}
                      className="px-4 py-2.5 rounded-md bg-zinc-900 border border-zinc-700 hover:border-red-500/70 hover:bg-zinc-800 text-white font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 transition-all active:scale-95 group/btn"
                    >
                      <span>Inquire Program</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-red-400 transition-colors" />
                    </button>

                    <span className="text-xs text-red-500/80 uppercase tracking-widest font-mono font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

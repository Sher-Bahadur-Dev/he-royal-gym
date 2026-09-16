import { useState, useEffect } from 'react';
import { Eye, Info, Layers, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../data/gymData';
import { GalleryItem } from '../types';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Strength Zone', 'Powerlifting', 'Endurance', 'Hypertrophy'];

  // Initial content preparation loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setIsLoading(true);
    setActiveCategory(cat);
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  };

  const handleSimulateReload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const filteredImages =
    activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0b0c0e] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/40 border border-red-900/50 text-red-400 text-[11px] font-semibold tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-red-400" />
            <span>Visual Concept Gallery</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-tight">
            THE TRAINING <span className="text-red-600">ENVIRONMENT</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            A look inside the training atmosphere, workout zones, and disciplined setup designed for
            consistent fitness work.
          </p>

          {/* Concept Requirement Notice & Preview Reload */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400">
              <Info className="w-4 h-4 text-zinc-300 flex-shrink-0" />
              <span>
                <strong className="text-zinc-200">Concept Preview:</strong> High-resolution placeholder imagery configured for easy replacement with The Royal Gym's verified facility photography.
              </span>
            </div>

            <button
              id="gallery-reload-preview-btn"
              onClick={handleSimulateReload}
              title="Refresh and preview loading state"
              className="p-2 rounded-md bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-red-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-red-600 text-white font-bold shadow-sm shadow-red-950/40'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid or Loading Skeletons */}
        {isLoading ? (
          <div
            id="gallery-skeleton-grid"
            aria-label="Loading gallery images..."
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((skeletonId) => (
              <div
                key={`gallery-skeleton-${skeletonId}`}
                className="rounded-xl overflow-hidden bg-zinc-900/60 border border-zinc-800/80 aspect-[4/3] p-5 flex flex-col justify-between relative animate-pulse shadow-md"
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent" />

                {/* Top Quick Inspect Placeholder */}
                <div className="self-end w-8 h-8 rounded-full bg-zinc-800/70" />

                {/* Bottom Caption Skeletons */}
                <div className="space-y-2 relative z-10">
                  <div className="w-20 h-4.5 rounded bg-zinc-800/90" />
                  <div className="h-5 w-3/4 rounded bg-zinc-800/80 mt-1" />
                  <div className="h-3.5 w-1/2 rounded bg-zinc-800/50 mt-1" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredImages.map((item: GalleryItem, index: number) => {
              const isLoaded = loadedImages[item.id];
              return (
                <motion.div
                  key={item.id}
                  id={`gallery-card-${item.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[4/3] cursor-pointer shadow-md hover:border-red-600/40 transition-all"
                  onClick={() => setSelectedImage(item)}
                >
                  {/* Image with subtle skeleton fallback while loading */}
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border-2 border-red-600/40 border-t-red-600 animate-spin" />
                    </div>
                  )}

                  <img
                    src={item.image}
                    alt={item.title}
                    onLoad={() => handleImageLoad(item.id)}
                    className={`w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 brightness-90 group-hover:brightness-100 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Quick Inspect Icon */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-red-600/90 backdrop-blur-sm border border-red-500/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <Eye className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* Caption Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-300 bg-zinc-900/90 px-2.5 py-0.5 rounded border border-zinc-700/60">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white mt-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal item={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}

import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxModalProps) {
  if (!item) return null;

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#11141b] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-lightbox-btn"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-red-600 hover:border-red-500 text-white transition-colors border border-zinc-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Details Footer */}
        <div className="p-6 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-red-950/60 text-red-300 mb-1.5 border border-red-900/60">
              {item.category}
            </div>
            <h4 className="text-xl font-bold uppercase text-white tracking-wide">
              {item.title}
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              {item.caption}
            </p>
          </div>

          <div className="text-xs text-zinc-400 font-mono bg-zinc-900 px-3 py-2 rounded border border-zinc-800 whitespace-nowrap">
            Visual concept preview
          </div>
        </div>
      </div>
    </div>
  );
}

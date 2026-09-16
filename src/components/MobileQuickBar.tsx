import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface MobileQuickBarProps {
  onInquireClick: () => void;
}

export default function MobileQuickBar({ onInquireClick }: MobileQuickBarProps) {
  return (
    <div
      id="mobile-bottom-quickbar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0b0c0e]/95 backdrop-blur-md border-t border-zinc-800 px-4 py-2.5 shadow-2xl flex items-center gap-3"
    >
      {/* Direct Call Button */}
      <a
        id="mobile-sticky-call-btn"
        href={`tel:${BUSINESS_INFO.phone.tel}`}
        className="flex-1 py-2.5 px-3 rounded-md bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95"
      >
        <Phone className="w-3.5 h-3.5 text-zinc-400" />
        <span>Call Gym</span>
      </a>

      {/* Join / Inquire Button */}
      <button
        id="mobile-sticky-inquire-btn"
        onClick={onInquireClick}
        className="flex-1 py-2.5 px-3 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-red-950/50 active:scale-95"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>Inquire Now</span>
      </button>
    </div>
  );
}

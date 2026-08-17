import React from 'react';
import { Mail } from 'lucide-react';

export const FloatingHireBtn: React.FC = () => {
  return (
    <a
      href="#contact"
      className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white font-semibold text-xs shadow-xl shadow-blue-600/30 border border-blue-400/40 backdrop-blur-md transition-all hover:scale-105 group"
      aria-label="Quick Hire & Contact Action"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Mail className="w-3.5 h-3.5 text-blue-100" />
      <span>Hire / Contact</span>
    </a>
  );
};

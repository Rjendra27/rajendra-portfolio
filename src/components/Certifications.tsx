import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section className="py-16 bg-[#07090e] border-t border-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            Certifications
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="p-5 rounded-xl bg-[#0d1117] border border-[#21262d] space-y-2.5 hover:border-amber-500/30 transition-all glow-card"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-[#161b22] border border-[#21262d] text-amber-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {cert.issuer}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white leading-snug">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

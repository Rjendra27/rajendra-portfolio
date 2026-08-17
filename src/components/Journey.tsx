import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { journeyData } from '../data/journey';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-16 bg-[#07090e] border-t border-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5" />
            Engineering Journey
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            My Journey
          </h2>
        </div>

        {/* Timeline Items Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#21262d] space-y-8 max-w-3xl">
          {journeyData.map((item) => (
            <div key={item.year} className="relative group">
              
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0d1117] border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />

              <div className="p-5 rounded-xl bg-[#0d1117] border border-[#21262d] space-y-1.5 hover:border-blue-500/30 transition-all glow-card">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161b22] text-slate-400 border border-[#21262d]">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

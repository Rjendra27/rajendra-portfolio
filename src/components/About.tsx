import React from 'react';
import { GraduationCap, Target, BookOpen } from 'lucide-react';
import { candidateData } from '../data/candidate';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-[#07090e] border-t border-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            Engineered Mindset
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Positioning Narrative */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-xl bg-[#0d1117] border border-[#21262d] space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>Background</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Computer Science Engineering graduate with hands-on experience building web applications, machine learning solutions and computer vision projects. I work with Python, React, Flask, REST APIs and modern AI/ML tools, and I enjoy turning ideas into practical software.
              </p>
            </div>

            {/* School Education Records */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0d1117] border border-[#21262d] space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Class XII (Senior Secondary)</span>
                <h4 className="text-xs font-semibold text-white">Chaitanya junior college</h4>
                <p className="text-xs text-blue-400 font-medium">88.3% Percentage</p>
                <span className="text-[11px] text-slate-500">Guntur, AP • 2020 – 2022</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0d1117] border border-[#21262d] space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase">10th Standard (Secondary)</span>
                <h4 className="text-xs font-semibold text-white">ABC High School</h4>
                <p className="text-xs text-cyan-400 font-medium">9.8 GPA</p>
                <span className="text-[11px] text-slate-500">2019 – 2020</span>
              </div>
            </div>
          </div>

          {/* Education & Focus Area Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Education Card */}
            <div className="p-6 rounded-xl bg-[#0d1117] border border-[#21262d] space-y-3 hover:border-blue-500/30 transition-all glow-card">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  B.Tech (CSE)
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">
                  Bachelor of Technology (CSE)
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  Kalasalingam University • Virudhunagar, Tamil Nadu
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#161b22] text-xs">
                <div>
                  <span className="text-slate-400">Cumulative CGPA: </span>
                  <span className="font-bold text-emerald-400 text-sm">7.8</span>
                </div>
                <div className="text-slate-400 font-mono">
                  2022 – 2026
                </div>
              </div>
            </div>

            {/* Focus Areas Card */}
            <div className="p-6 rounded-xl bg-[#0d1117] border border-[#21262d] space-y-3 hover:border-blue-500/30 transition-all glow-card">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Target className="w-4 h-4" />
                  Focus Areas
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {candidateData.focusAreas.map((area) => (
                  <div
                    key={area}
                    className="p-2.5 rounded-lg bg-[#161b22] border border-[#21262d] flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500/40 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

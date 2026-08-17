import React from 'react';
import { Code, Globe, Cpu, Database, Wrench, Terminal, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-4 h-4 text-blue-400" />;
      case 'Globe': return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'Database': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-amber-400" />;
      default: return <Terminal className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 bg-[#07090e] border-t border-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            Technical Stack
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-xl bg-[#0d1117] border border-[#21262d] space-y-3.5 hover:border-blue-500/30 transition-all glow-card"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-[#161b22] pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#161b22] border border-[#21262d]">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills Badges Container */}
              <div className="flex flex-wrap gap-2 pt-0.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161b22] border border-[#21262d] text-slate-200 text-xs font-medium hover:border-blue-500/40 hover:text-white hover:bg-[#1c2129] transition-all group"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 group-hover:scale-110 transition-transform" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

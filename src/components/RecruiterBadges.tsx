import React from 'react';

export const RecruiterBadges: React.FC = () => {
  const badges = [
    { name: 'Python', icon: '🐍' },
    { name: 'React', icon: '⚛️' },
    { name: 'Flask', icon: '🌶️' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Computer Vision', icon: '👁️' },
    { name: 'Git/GitHub', icon: '📦' }
  ];

  return (
    <div className="pt-8 border-t border-[#161b22] mt-8">
      <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
        Core Engineering Capabilities
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {badges.map((b) => (
          <div
            key={b.name}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0d1117] border border-[#21262d] text-slate-200 text-xs font-medium hover:border-blue-500/40 hover:text-white transition-all shadow-sm"
          >
            <span className="text-sm">{b.icon}</span>
            <span>{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

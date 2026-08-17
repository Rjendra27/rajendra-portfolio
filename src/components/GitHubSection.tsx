import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { candidateData } from '../data/candidate';

export const GitHubSection: React.FC = () => {
  // Verified public repositories from candidate profile https://github.com/Rjendra27
  const repos = [
    {
      name: 'trip-together',
      language: 'TypeScript / React',
      description: 'AI-ready travel planning platform for Indian destinations.',
      url: 'https://github.com/Rjendra27/trip-together'
    },
    {
      name: 'Collision-Alert-System',
      language: 'Python / YOLOv8',
      description: 'Real-time computer vision vehicle tracking and proactive collision warning system.',
      url: 'https://github.com/Rjendra27/Collision-Alert-System'
    },
    {
      name: 'ipl-score-prediction',
      language: 'Python / Flask',
      description: 'Interactive score predictor using machine learning models and historical IPL data.',
      url: 'https://github.com/Rjendra27/ipl-score-prediction'
    },
    {
      name: 'ML_rainfall_prediction',
      language: 'Python / Jupyter',
      description: 'Machine learning regression modeling & Power BI analytics for rainfall forecasting.',
      url: 'https://github.com/Rjendra27/ML_rainfall_prediction'
    },
    {
      name: 'personal-voice-assistant',
      language: 'Python',
      description: 'Python desktop voice recognition application.',
      url: 'https://github.com/Rjendra27/personal-voice-assistant'
    },
    {
      name: 'Scoreboard',
      language: 'HTML / JS',
      description: 'Interactive game score tracking web utility.',
      url: 'https://github.com/Rjendra27/Scoreboard'
    }
  ];

  return (
    <section className="py-16 bg-[#07090e] border-t border-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
            Open Source
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Open Source & GitHub
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            I use GitHub to document projects, experiment with technologies and continuously build my development skills.
          </p>
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0d1117] border border-[#21262d] flex flex-col justify-between hover:border-blue-500/40 hover:bg-[#161b22]/80 transition-all glow-card group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                    <span>{repo.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#161b22] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-400">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  {repo.language}
                </span>
                <span className="text-[11px] text-slate-500">Public Repo</span>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Profile Callout CTA */}
        <div className="p-7 rounded-2xl bg-gradient-to-r from-[#0d1117] via-[#161b22] to-[#0d1117] border border-[#21262d] flex flex-col md:flex-row items-center justify-between gap-6 glow-card">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">
              Want to see how I build?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Explore my complete set of repositories, commits, and code architectures directly on GitHub.
            </p>
          </div>

          <a
            href={candidateData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap group"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore GitHub →</span>
          </a>
        </div>

      </div>
    </section>
  );
};

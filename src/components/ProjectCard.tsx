import React from 'react';
import { ExternalLink, ArrowRight, ShieldAlert, BarChart2, Mic } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onViewCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewCaseStudy }) => {
  
  // Render technical mockup previews for cards without unverified numbers
  const renderMockup = () => {
    switch (project.mockupType) {
      case 'terminal':
        return (
          <div className="bg-[#07090e] p-3.5 rounded-lg border border-[#21262d] font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between border-b border-[#161b22] pb-1.5 text-[11px] text-slate-400">
              <span className="font-bold text-white">✈️ NeverASolo</span>
              <span className="text-cyan-400">REST API Integration</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div><span className="text-blue-400">&gt; Target:</span> Indian Destinations</div>
              <div><span className="text-blue-400">&gt; Features:</span> Trip Creation & Itinerary Planning</div>
              <div><span className="text-blue-400">&gt; Architecture:</span> React + Firebase + REST API</div>
            </div>
          </div>
        );

      case 'flowchart':
        return (
          <div className="bg-[#07090e] p-3 rounded-lg border border-[#21262d] font-mono text-[10px] space-y-1.5">
            <div className="flex items-center justify-between text-slate-400 border-b border-[#161b22] pb-1.5">
              <span className="flex items-center gap-1 text-rose-400 font-bold">
                <ShieldAlert className="w-3.5 h-3.5" /> Collision Alert System
              </span>
              <span className="text-xs text-emerald-400 font-bold">Real-Time</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center pt-0.5">
              <div className="p-1 rounded bg-[#161b22] border border-[#21262d] text-slate-300">Camera Feed</div>
              <div className="p-1 rounded bg-blue-950/60 border border-blue-500/30 text-blue-300 font-bold">YOLOv8 Detect</div>
              <div className="p-1 rounded bg-[#161b22] border border-[#21262d] text-slate-300">Tracking</div>
            </div>
            <div className="flex justify-center text-slate-500 text-[9px]">↓ Spatial Trajectory Analysis ↓</div>
            <div className="grid grid-cols-3 gap-1 text-center">
              <div className="p-1 rounded bg-[#161b22] border border-[#21262d] text-slate-300">Distance Est.</div>
              <div className="p-1 rounded bg-[#161b22] border border-[#21262d] text-slate-300">Trajectory ROI</div>
              <div className="p-1 rounded bg-rose-950/70 border border-rose-500/40 text-rose-300 font-semibold">Collision Risk</div>
            </div>
          </div>
        );

      case 'calculator':
        return (
          <div className="bg-[#07090e] p-3.5 rounded-lg border border-[#21262d] font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between border-b border-[#161b22] pb-1 text-[11px] text-slate-400">
              <span className="text-amber-400 font-bold">IPL SCORE PREDICTION</span>
              <span className="text-slate-400">ML Model</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              <div><span className="text-slate-500">Venue:</span> Select Venue</div>
              <div><span className="text-slate-500">Batting:</span> Select Team</div>
              <div><span className="text-slate-500">Bowling:</span> Select Team</div>
              <div><span className="text-slate-500">Players:</span> Select Striker</div>
            </div>
            <div className="pt-1.5 border-t border-[#161b22] flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Output:</span>
              <span className="text-xs font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                ML-Based Score Prediction
              </span>
            </div>
          </div>
        );

      case 'chart':
        return (
          <div className="bg-[#07090e] p-3.5 rounded-lg border border-[#21262d] font-mono text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-[#161b22] pb-1 text-[11px] text-slate-400">
              <span className="text-cyan-400 font-semibold flex items-center gap-1">
                <BarChart2 className="w-3.5 h-3.5" /> Rainfall ML Regression Benchmark
              </span>
              <span className="text-slate-400">Power BI Report</span>
            </div>
            <div className="space-y-1.5 text-[10px] text-slate-300">
              <div>Models: Multivariate Linear, MLP, KNN, Ridge, Random Forest, SVR</div>
              <div className="flex justify-between items-center text-emerald-400 font-bold pt-1 border-t border-[#161b22]">
                <span>Evaluation Metrics:</span>
                <span>RMSE • MAE</span>
              </div>
            </div>
          </div>
        );

      case 'voice':
      default:
        return (
          <div className="bg-[#07090e] p-3.5 rounded-lg border border-[#21262d] font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between border-b border-[#161b22] pb-1 text-[11px] text-slate-400">
              <span className="text-purple-400 font-bold flex items-center gap-1">
                <Mic className="w-3.5 h-3.5" /> Voice Command Listener
              </span>
              <span className="text-slate-400">Python App</span>
            </div>
            <div className="text-[11px] text-slate-300 space-y-1">
              <div><span className="text-slate-500">Feature:</span> Voice recognition pipeline</div>
              <div className="text-purple-400">&gt; Executing Python desktop automation...</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0d1117] rounded-xl border border-[#21262d] overflow-hidden hover:border-blue-500/40 transition-all duration-300 glow-card group">
      
      {/* Technical Preview Banner */}
      <div className="p-4 bg-[#161b22]/60 border-b border-[#21262d]">
        {renderMockup()}
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          
          {/* Category & Badge */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
              {project.category}
            </span>
            {project.subtitle && (
              <span className="text-[11px] text-slate-400 font-mono">
                {project.subtitle}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          {/* One-Sentence Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technical Tag Bar */}
          <div className="p-2 rounded-lg bg-[#161b22] border border-[#21262d] text-xs font-mono text-cyan-300">
            {project.highlightText}
          </div>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-[#07090e] border border-[#21262d] rounded"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Buttons Action Bar */}
        <div className="pt-3 border-t border-[#161b22] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-slate-200 hover:text-white text-xs font-semibold transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onViewCaseStudy(project)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#161b22] transition-colors group/btn"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};

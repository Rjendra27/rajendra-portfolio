import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Lightbulb, AlertTriangle, BookOpen } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Card Box */}
      <div className="relative w-full max-w-4xl bg-[#0d1117] border border-[#21262d] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header Bar */}
        <div className="p-6 bg-[#161b22] border-b border-[#21262d] flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                {project.category}
              </span>
              {project.subtitle && (
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  {project.subtitle}
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-white mt-1">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-[#0d1117] border border-[#21262d] transition-colors"
            aria-label="Close Case Study Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content - Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-slate-300 text-sm">
          
          {/* Section 1: Overview */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Overview</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Section 2 & 3: Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-[#161b22]/70 border border-[#21262d] space-y-2">
              <h4 className="text-sm font-bold text-rose-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Problem</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#161b22]/70 border border-[#21262d] space-y-2">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>Solution</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.caseStudy.approach}
              </p>
            </div>
          </div>

          {/* Section 4: Technologies */}
          <div className="space-y-2.5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>Technologies</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#161b22] border border-[#21262d] text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section 5: Architecture Pipeline */}
          {project.caseStudy.architecture && (
            <div className="space-y-2.5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Architecture</span>
              </h3>
              <div className="p-4 rounded-xl bg-[#07090e] border border-[#21262d] font-mono text-xs text-slate-300">
                <div className="flex flex-wrap items-center gap-2">
                  {project.caseStudy.architecture.map((step, idx) => (
                    <React.Fragment key={step}>
                      <div className="px-3 py-1.5 rounded bg-[#161b22] border border-[#21262d] text-blue-300 font-medium">
                        {step}
                      </div>
                      {idx < project.caseStudy.architecture!.length - 1 && (
                        <span className="text-slate-500 font-bold">↓</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section 6: Key Features */}
          <div className="space-y-2.5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Features</span>
            </h3>
            <ul className="space-y-2 font-sans">
              {project.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 7 & 8: Challenges & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.caseStudy.challenges && (
              <div className="p-5 rounded-xl bg-[#161b22]/70 border border-[#21262d] space-y-2">
                <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Challenges</span>
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.caseStudy.challenges}
                </p>
              </div>
            )}

            <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-500/20 space-y-2">
              <h4 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>What I Learned</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.caseStudy.whatILearned}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer Action Bar */}
        <div className="p-5 bg-[#161b22] border-t border-[#21262d] flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-10">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0d1117] hover:bg-[#21262d] border border-[#30363d] text-slate-200 hover:text-white font-semibold text-xs transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
};

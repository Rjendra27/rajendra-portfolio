import React from 'react';
import { Mail, FileText, Code2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { candidateData } from '../data/candidate';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="bg-[#05070a] border-t border-[#161b22] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-6 h-6 rounded bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-white text-base">
                {candidateData.name}
              </span>
            </div>
            <p className="text-slate-400 font-mono text-[11px]">
              {candidateData.headline}
            </p>
          </div>

          {/* Recruiter Quick Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={candidateData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>GitHub</span>
            </a>

            {candidateData.linkedin && (
              <a
                href={candidateData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>LinkedIn</span>
              </a>
            )}

            <a
              href={`mailto:${candidateData.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Email</span>
            </a>

            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Resume</span>
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-[#161b22] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© 2026 Rajendra Reddy. Built with passion for software development.</p>
          <p className="font-mono">Python • React • Flask • AI/ML • Computer Vision</p>
        </div>

      </div>
    </footer>
  );
};

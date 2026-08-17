import React, { useState } from 'react';
import { ArrowRight, Download, Terminal, CheckCircle2, Copy } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { candidateData } from '../data/candidate';
import { RecruiterBadges } from './RecruiterBadges';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'env'>('profile');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/Bijjam_Rajendra_Reddy_Resume.pdf';
    link.download = 'Bijjam_Rajendra_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column - Headline & CTAs */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              SOFTWARE DEVELOPER • PYTHON • FULL-STACK • AI/ML
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              I build software that <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                solves real problems.
              </span>
            </h1>

            {/* Supporting Text Lines */}
            <div className="space-y-2 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                Computer Science graduate building practical software with Python, React, Flask, machine learning, and computer vision.
              </p>
              <p className="text-sm sm:text-base text-slate-400">
                Focused on turning ideas into usable applications and continuously improving my engineering skills.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleDownloadPdf}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-slate-200 hover:text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download Resume</span>
              </button>

              <a
                href={candidateData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-slate-300 hover:text-white font-semibold text-sm transition-colors group"
              >
                <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                <span>GitHub</span>
                <span className="text-blue-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              {candidateData.linkedin && (
                <a
                  href={candidateData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-slate-300 hover:text-white font-semibold text-sm transition-colors group"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400 group-hover:text-white" />
                  <span>LinkedIn</span>
                  <span className="text-blue-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              )}
            </div>

            {/* Subtle Recruiter Status Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0d1117] border border-[#21262d] text-slate-300 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Graduate Software Developer & Full-Stack opportunities</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 font-mono text-slate-400 hover:text-blue-400 transition-colors bg-[#0d1117] px-2.5 py-1 rounded border border-[#21262d] text-[11px]"
              >
                <span>{candidateData.email}</span>
                {copied ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
              </button>
            </div>

            {/* Compact Recruiter Tech Badges */}
            <RecruiterBadges />
          </div>

          {/* Right Column - Terminal Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0d1117] border border-[#21262d] overflow-hidden shadow-2xl glow-card">
              
              {/* Terminal Top Bar */}
              <div className="bg-[#161b22] px-4 py-3 border-b border-[#21262d] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>developer_profile.sh</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                      activeTab === 'profile' ? 'bg-blue-600/30 text-blue-400' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    profile
                  </button>
                  <button
                    onClick={() => setActiveTab('env')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                      activeTab === 'env' ? 'bg-blue-600/30 text-blue-400' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    stack
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-4 bg-[#07090e]/90 min-h-[290px]">
                {activeTab === 'profile' ? (
                  <>
                    <div className="space-y-1">
                      <span className="text-emerald-400">$ whoami</span>
                      <p className="text-white font-semibold text-sm pl-3 border-l-2 border-emerald-500/50">
                        {candidateData.name}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-blue-400">$ focus</span>
                      <ul className="pl-3 space-y-1 text-slate-300 border-l-2 border-blue-500/50">
                        <li>• Software Development</li>
                        <li>• AI / Machine Learning</li>
                        <li>• Full-Stack Development</li>
                        <li>• Computer Vision</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <span className="text-cyan-400">$ currently_building</span>
                      <p className="text-slate-300 pl-3 border-l-2 border-cyan-500/50">
                        real-world applications with Python, React & Computer Vision
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#161b22] text-[11px] text-slate-500 flex items-center justify-between">
                      <span>Status: Open for Software Developer Roles</span>
                      <span className="text-emerald-400">● Available</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-1">
                      <span className="text-amber-400">$ cat stack.json</span>
                      <pre className="text-slate-300 text-[11px] bg-[#0d1117] p-3 rounded border border-[#21262d] overflow-x-auto leading-relaxed">
{`{
  "language": ["Python", "Java"],
  "web": ["React", "Flask", "HTML", "CSS", "REST APIs"],
  "ai_ml": ["scikit-learn", "Pandas", "OpenCV", "PyTorch"],
  "db": ["MySQL", "DBMS"],
  "tools": ["Git", "GitHub", "Power BI", "VS Code"]
}`}
                      </pre>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Foundational CS + hands-on engineering mindset.
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, FileText } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { candidateData } from '../data/candidate';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/Bijjam_Rajendra_Reddy_Resume.pdf';
    link.download = 'Bijjam_Rajendra_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-[#21262d] py-3 shadow-xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a href="#home" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/30 transition-colors">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-blue-400 transition-colors">
              {candidateData.name}
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">SOFTWARE DEVELOPER</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0d1117]/80 p-1.5 rounded-full border border-[#21262d]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-[#161b22] rounded-full transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Compact Right Recruiter Action Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#projects"
            className="px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#161b22] border border-[#21262d] rounded-lg transition-all"
          >
            Projects
          </a>

          <a
            href={candidateData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded-lg transition-all group"
            title="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
            <span>GitHub</span>
          </a>

          {candidateData.linkedin && (
            <a
              href={candidateData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded-lg transition-all group"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
              <span>LinkedIn</span>
            </a>
          )}

          <button
            onClick={handleDownloadPdf}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-sm cursor-pointer"
            title="Download PDF Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume ↗</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-[#161b22] border border-[#21262d]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1117] border-b border-[#21262d] px-4 py-5 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-[#161b22] rounded-md"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#21262d] grid grid-cols-2 gap-2">
            <a
              href={candidateData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-[#161b22] border border-[#30363d] rounded-lg"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadPdf();
              }}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

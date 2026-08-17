import React from 'react';
import { FileText, Download, X, ExternalLink } from 'lucide-react';
import { candidateData } from '../data/candidate';

interface ResumeCTAProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ isOpen, onClose }) => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Bijjam_Rajendra_Reddy_Resume.pdf';
    link.download = 'Bijjam_Rajendra_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPdf = () => {
    window.open('/Bijjam_Rajendra_Reddy_Resume.pdf', '_blank');
  };

  return (
    <>
      {/* Recruiter Resume Banner Section */}
      <section className="py-14 bg-[#07090e] border-t border-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-7 sm:p-8 rounded-2xl bg-[#0d1117] border border-[#21262d] flex flex-col md:flex-row items-center justify-between gap-6 glow-card">
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
                <FileText className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">
                  Interested in my background?
                </h3>
                <p className="text-slate-300 text-sm max-w-xl">
                  Download my resume for a concise overview of my education, technical skills and projects.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={handleViewPdf}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-slate-200 hover:text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span>View Resume</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Resume Quick Preview Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0d1117] border border-[#21262d] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-[#161b22] pb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Bijjam Rajendra Reddy — Official Resume</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-[#161b22]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 font-mono text-xs text-slate-300">
              <div className="p-4 rounded-lg bg-[#07090e] border border-[#21262d] space-y-1">
                <p className="text-white font-bold text-sm">{candidateData.name}</p>
                <p className="text-blue-400">{candidateData.headline}</p>
                <p className="text-slate-400">Phone: {candidateData.phone} | Email: {candidateData.email}</p>
                <p className="text-slate-400">GitHub: {candidateData.github}</p>
                {candidateData.linkedin && (
                  <p className="text-slate-400">LinkedIn: {candidateData.linkedin}</p>
                )}
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider text-blue-400">Education</h4>
                <div className="p-3 rounded bg-[#161b22] border border-[#21262d] space-y-1">
                  <p className="text-white font-semibold">Bachelor of Technology (CSE), Kalasalingam University (2022 – 2026)</p>
                  <p className="text-slate-400">Virudhunagar, Tamil Nadu • CGPA: 7.8</p>
                  <p className="text-white font-semibold pt-1">Class XII, Chaitanya junior college (2020 – 2022)</p>
                  <p className="text-slate-400">Guntur, Andhra Pradesh • Percentage: 88.3%</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">Skills</h4>
                <div className="p-3 rounded bg-[#161b22] border border-[#21262d] space-y-1 leading-relaxed">
                  <p><strong className="text-white">Programming Languages:</strong> Python, Java.</p>
                  <p><strong className="text-white">Core:</strong> OOP, Data Structures, Algorithms.</p>
                  <p><strong className="text-white">Web/Backend:</strong> HTML, CSS, React, Flask, REST APIs.</p>
                  <p><strong className="text-white">Database:</strong> MySQL, DBMS.</p>
                  <p><strong className="text-white">Machine Learning:</strong> scikit-learn, Pandas, OpenCV, PyTorch, YOLOv8.</p>
                  <p><strong className="text-white">Tools:</strong> Git, GitHub, VS Code, Power BI, Excel.</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider text-emerald-400">Projects</h4>
                <ul className="space-y-2 font-sans text-xs text-slate-300">
                  <li className="p-2.5 rounded bg-[#161b22] border border-[#21262d]">
                    <strong className="text-white">AI Travel Companion – NeverASolo</strong> (React, Flask/REST APIs, Firebase)
                    <br />
                    • Developed a modern travel planning platform focused on Indian destinations with multilingual support.
                  </li>
                  <li className="p-2.5 rounded bg-[#161b22] border border-[#21262d]">
                    <strong className="text-white">IPL Score Prediction</strong> (Python, Flask, scikit-learn)
                    <br />
                    • Developed a Flask web application predicting IPL scores using Random Forest Regressor.
                  </li>
                  <li className="p-2.5 rounded bg-[#161b22] border border-[#21262d]">
                    <strong className="text-white">Collision Alert System – Computer Vision for Vehicle Safety</strong> (Python, YOLOv8, OpenCV, PyTorch)
                    <br />
                    • Built a real-time computer vision application using YOLOv8 for vehicle tracking and collision prediction.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider text-amber-400">Certificates</h4>
                <p className="text-slate-300">DBMS | DAA | Hackathon</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#161b22] flex items-center justify-between">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </button>

              <button
                onClick={handleViewPdf}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#161b22] border border-[#21262d] text-slate-300 hover:text-white text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                <span>Open PDF</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Copy } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { candidateData } from '../data/candidate';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 bg-[#07090e] border-t border-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            I&apos;m currently looking for opportunities where I can contribute as a software developer and grow by solving real-world engineering problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Contact Info Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0d1117] border border-[#21262d] space-y-5 glow-card">
              <h3 className="text-base font-bold text-white border-b border-[#161b22] pb-3">
                Direct Contact Information
              </h3>

              {/* Email Item */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Email</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${candidateData.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {candidateData.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 text-slate-400 hover:text-white rounded bg-[#161b22]"
                      title="Copy Email"
                    >
                      {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Phone</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {candidateData.phone}
                  </p>
                </div>
              </div>

              {/* LinkedIn Item */}
              {candidateData.linkedin && (
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono text-slate-500 uppercase">LinkedIn</span>
                    <a
                      href={candidateData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors block truncate max-w-[220px] sm:max-w-xs"
                    >
                      {candidateData.linkedin}
                    </a>
                  </div>
                </div>
              )}

              {/* GitHub Link Item */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">GitHub</span>
                  <a
                    href={candidateData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-purple-400 transition-colors block"
                  >
                    {candidateData.github}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0d1117] border border-[#21262d] glow-card">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#21262d] text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#21262d] text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#21262d] text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                {submitted && (
                  <div className="p-3.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Thank you for your message. I will review it and get back to you shortly.</span>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

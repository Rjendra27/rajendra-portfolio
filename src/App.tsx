import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubSection } from './components/GitHubSection';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingHireBtn } from './components/FloatingHireBtn';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-blue-600 selection:text-white relative">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Featured Projects Showcase & Case Studies */}
        <Projects />

        {/* GitHub & Open Source Section */}
        <GitHubSection />

        {/* Journey & Timeline Section */}
        <Journey />

        {/* Certifications Section */}
        <Certifications />

        {/* Recruiter Resume Download / View CTA */}
        <ResumeCTA
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
          onOpen={() => setResumeModalOpen(true)}
        />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Floating Desktop Hire CTA Button */}
      <FloatingHireBtn />
    </div>
  );
}

export default App;

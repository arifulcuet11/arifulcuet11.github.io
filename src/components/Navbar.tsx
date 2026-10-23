import React from 'react';
import { Github, Linkedin, Mail, Code2, FileDown, Menu, X } from 'lucide-react';
import aboutData from './about.json';

const navLinks = [
  { label: 'About', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-gray-100' : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center gap-2">
        <a href="#hero" className="flex items-center gap-2">
          <div className="p-2 bg-indigo-50 rounded-xl">
            <Code2 className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <span className="font-bold text-gray-900 tracking-tight text-lg block" style={{ lineHeight: 1.1 }}>
              {aboutData.name}
            </span>
            <span className="text-xs text-indigo-600 font-medium block">
              Azure · AWS · On-Premises | Kubernetes (AKS) | .NET · React
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href="./Ariful_Islam_CV.pdf?v=202610"
            target="_blank"
            rel="noopener noreferrer"
            download="Ariful_Islam_CV.pdf"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-indigo-700 transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <FileDown className="w-4 h-4" /> Resume
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={aboutData.github}
            className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={aboutData.linkedin}
            className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${aboutData.email}`}
            className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-600 font-medium py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="./Ariful_Islam_CV.pdf?v=202610"
              target="_blank"
              rel="noopener noreferrer"
              download="Ariful_Islam_CV.pdf"
              className="bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold text-center hover:bg-indigo-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" /> Download CV (PDF)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

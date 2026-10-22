import React from 'react';
import { Github, Linkedin, Mail, Phone, FileDown } from 'lucide-react';
import aboutData from './about.json';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-gray-900 font-bold text-xl">{aboutData.name}</p>
          <p className="text-gray-500 text-sm">{aboutData.headline}</p>
        </div>

        <div className="flex gap-4">
          <a
            href={aboutData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={aboutData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${aboutData.email}`}
            className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${aboutData.phone.replace(/\s+/g, '')}`}
            className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="./Ariful_Islam_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Ariful_Islam_CV.pdf"
            className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            aria-label="Download CV"
          >
            <FileDown className="w-5 h-5" />
          </a>
        </div>

        <div className="text-gray-500 text-sm">
          © {currentYear} {aboutData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

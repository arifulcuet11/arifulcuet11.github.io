import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight, Terminal, FileDown, MapPin, Mail, Phone, Cloud, ShieldCheck } from 'lucide-react';
import aboutData from './about.json';

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 md:px-6 relative overflow-hidden portfolio-hero-bg">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full mb-4 border border-indigo-100 max-w-full">
              <Terminal className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Associate Lead – Software Development
              </span>
            </div>

            <h1
              className="text-gray-900 mb-3 font-bold tracking-tight"
              style={{ fontSize: 'clamp(1.85rem, 4vw, 3.25rem)', lineHeight: 1.15 }}
            >
              Hi, I&apos;m <span className="portfolio-gradient-text">{aboutData.name}</span>
            </h1>

            <p className="text-indigo-600 font-semibold text-base md:text-lg mb-4 leading-snug">
              {aboutData.headline}
            </p>

            <p className="text-gray-600 mb-6 max-w-2xl leading-relaxed text-sm md:text-base">
              {aboutData.about}
            </p>

            <div className="flex flex-wrap gap-2 mb-6 text-xs md:text-sm text-gray-600">
              <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm">
                <MapPin className="w-4 h-4 text-indigo-600" /> {aboutData.location}
              </span>
              <a
                href={`mailto:${aboutData.email}`}
                className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm hover:text-indigo-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-600" /> {aboutData.email}
              </a>
              <a
                href={`tel:${aboutData.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm hover:text-indigo-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-indigo-600" /> {aboutData.phone}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="./Ariful_Islam_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Ariful_Islam_CV.pdf"
                className="portfolio-btn-primary"
              >
                <FileDown className="w-4 h-4" /> Download CV
              </a>
              <a href="#experience" className="portfolio-btn-secondary">
                Work Experience <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="portfolio-btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center w-full">
            <div className="relative w-full portfolio-hero-frame overflow-hidden flex items-end justify-center pt-4 px-4">
              <ImageWithFallback
                src="./hero.png"
                alt="Ariful Islam — Associate Lead – Software Development"
                className="w-full h-full object-contain pointer-events-none select-none"
                style={{ zIndex: 1 }}
              />
            </div>

            <div
              className="grid grid-cols-2 gap-3 w-full max-w-lg mt-4"
              style={{ zIndex: 2 }}
            >
              <div className="portfolio-card p-3 md:p-4 flex items-center gap-2">
                <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Multi-Cloud &amp; Hybrid</p>
                  <p className="text-xs md:text-sm font-bold text-gray-900">Azure, AWS &amp; On-Prem</p>
                </div>
              </div>
              <div className="portfolio-card p-3 md:p-4 flex items-center gap-2">
                <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Identity &amp; Security</p>
                  <p className="text-xs md:text-sm font-bold text-gray-900">SCIM &amp; Entra ID</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlight Stats */}
        <div className="mt-12 portfolio-stat-grid">
          {aboutData.stats.map((stat) => (
            <div
              key={stat.label}
              className="portfolio-card p-4 md:p-6 text-center"
            >
              <p className="text-xl md:text-2xl font-bold portfolio-gradient-text mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

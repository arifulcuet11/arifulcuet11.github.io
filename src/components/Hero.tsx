import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight, Terminal, FileDown, MapPin, Mail, Phone, Cloud, ShieldCheck, Layers } from 'lucide-react';
import aboutData from './about.json';

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden portfolio-hero-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full mb-6 border border-indigo-100">
              <Terminal className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Associate Lead – Software Development
              </span>
            </div>

            <h1
              className="text-gray-900 mb-4 font-bold tracking-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.15 }}
            >
              Hi, I&apos;m <span className="portfolio-gradient-text">{aboutData.name}</span>
            </h1>

            <p className="text-indigo-600 font-semibold text-lg mb-4">
              Azure &middot; AWS &middot; On-Premises &nbsp;|&nbsp; Kubernetes (AKS) &nbsp;|&nbsp; .NET &middot; React
            </p>

            <p className="text-gray-600 mb-6 max-w-2xl leading-relaxed text-base">
              {aboutData.about}
            </p>

            <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
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

            <div className="flex flex-wrap gap-4">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/5] portfolio-hero-frame overflow-hidden flex items-end justify-center p-4">
              <ImageWithFallback
                src="./hero.png"
                alt="Ariful Islam - Associate Lead Software Development"
                className="w-full h-full object-contain pointer-events-none select-none"
                style={{ zIndex: 1 }}
              />
            </div>

            <div
              className="grid grid-cols-2 gap-4 w-full max-w-lg mt-4"
              style={{ zIndex: 2 }}
            >
              <div className="portfolio-card p-4 flex items-center gap-3">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Multi-Cloud &amp; Hybrid</p>
                  <p className="text-sm font-bold text-gray-900">Azure, AWS &amp; On-Prem</p>
                </div>
              </div>
              <div className="portfolio-card p-4 flex items-center gap-3">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Identity &amp; Security</p>
                  <p className="text-sm font-bold text-gray-900">SCIM &amp; Entra ID</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Highlight Stats */}
        <div className="mt-16 portfolio-stat-grid">
          {aboutData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="portfolio-card p-6 text-center"
            >
              <p className="text-2xl font-bold portfolio-gradient-text mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

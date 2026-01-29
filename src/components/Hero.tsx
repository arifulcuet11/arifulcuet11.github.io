import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight, Terminal } from 'lucide-react';
import aboutData from './about.json';

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full mb-6">
            <Terminal className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Available for new opportunities</span>
          </div>
          <h1 className="text-gray-900 mb-6 leading-tight">
            Building digital <span className="text-indigo-600">experiences</span> that scale & inspire.
          </h1>
          <div className="mb-8 flex flex-col items-start">
            <p className="text-gray-600 mb-6 max-w-2xl whitespace-pre-line leading-relaxed text-base text-justify">
              {aboutData.about}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              View Projects <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => window.location.href = '#contact'} className="bg-white border border-gray-200 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-[4/5] flex items-center justify-center"
        >
          <ImageWithFallback
            src="./hero2.png"
            alt="Arif - Software Engineer"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />
          {/* Decorative elements */}
        </motion.div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{zIndex: 1}}></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{zIndex: 1}}></div>
      </div>
    </section>
  );
}

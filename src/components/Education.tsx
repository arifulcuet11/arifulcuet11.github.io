import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import education from './education.json';

const certifications = [
  {
    title: 'Microsoft Entra ID for Developers',
    issuer: 'Microsoft / Enterprise Identity',
    category: 'Identity & Security'
  },
  {
    title: 'ASP.NET Core Advanced Security',
    issuer: '.NET Ecosystem',
    category: 'Backend Security'
  },
  {
    title: 'Angular (Intermediate)',
    issuer: 'HackerRank / Frontend',
    category: 'Frontend Engineering'
  },
  {
    title: 'Docker Compose',
    issuer: 'Containerization & DevOps',
    category: 'Cloud & Containers'
  },
  {
    title: 'GitHub',
    issuer: 'CI/CD & Version Control',
    category: 'DevOps Automation'
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-24 bg-white px-4 md:px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full mb-4">
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Credentials</span>
          </div>
          <h2 className="text-gray-900 mb-4 font-bold" style={{ fontSize: '2rem' }}>
            Education &amp; Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic foundation in Computer Science &amp; Engineering paired with industry certifications in cloud identity, security, and DevOps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Academic Education */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-indigo-600" /> Academic Background
            </h3>
            <div className="space-y-6">
              {(education as Array<{ degree: string; institution: string; period: string; details: string }>).map((edu) => (
                <div
                  key={edu.degree}
                  className="portfolio-card p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-semibold bg-indigo-50 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" /> {edu.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-indigo-600 font-semibold text-sm mb-3">{edu.institution}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-indigo-600" /> Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="portfolio-card p-5 md:p-6 flex flex-wrap items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{cert.title}</h4>
                      <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="portfolio-pill">{cert.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

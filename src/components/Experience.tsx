import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'TechFlow Systems',
    period: '2022 - Present',
    description: 'Leading the core platform team in architecting microservices and improving system reliability by 40%.',
    achievements: ['Redesigned data pipeline', 'Mentored 5 junior devs', 'Implemented CI/CD']
  },
  {
    role: 'Full Stack Developer',
    company: 'Creative Pixels',
    period: '2020 - 2022',
    description: 'Developed and maintained various client projects focusing on responsive design and performance.',
    achievements: ['Optimized load times', 'Built custom CMS', 'Internal tool dev']
  },
  {
    role: 'Software Intern',
    company: 'Launchpad Labs',
    period: '2019 - 2020',
    description: 'Supported the frontend team in building intuitive user interfaces for SaaS products.',
    achievements: ['Bug fixing', 'UI testing', 'Documentation']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-gray-900 text-center mb-16">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-indigo-100 last:border-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-50" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-indigo-600 font-medium">
                    <Briefcase className="w-4 h-4" /> {exp.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 md:mt-0 bg-white px-3 py-1 rounded-full shadow-sm">
                  <Calendar className="w-4 h-4" /> {exp.period}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.achievements.map((item, i) => (
                  <span key={i} className="text-xs bg-white border border-gray-100 text-gray-500 px-3 py-1 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

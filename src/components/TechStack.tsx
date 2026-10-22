import React from 'react';
import { motion } from 'motion/react';
import { Cloud, Workflow, Server, Layout, ShieldCheck, Code2 } from 'lucide-react';
import aboutData from './about.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  Workflow,
  Server,
  Layout,
  ShieldCheck,
};

export function TechStack() {
  return (
    <section id="skills" className="py-24 portfolio-section-alt px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full mb-4">
            <Code2 className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Technical Expertise</span>
          </div>
          <h2 className="text-gray-900 mb-4 font-bold" style={{ fontSize: '2rem' }}>
            Core Skills &amp; Cloud Ecosystem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized in Azure cloud-native engineering, Kubernetes (AKS), enterprise identity integration, and full-stack microservices.
          </p>
        </div>

        <div className="portfolio-grid-3">
          {aboutData.skills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="portfolio-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-gray-900 text-lg font-bold">
                      {skill.category}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {skill.items.split(',').map((item) => (
                      <li
                        key={item.trim()}
                        className="portfolio-badge"
                      >
                        {item.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

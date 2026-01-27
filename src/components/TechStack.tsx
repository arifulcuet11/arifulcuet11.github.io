import React from 'react';
import { motion } from 'motion/react';

const skills = [
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React / Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'AWS / Cloud', category: 'DevOps' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Tailwind CSS', category: 'UI/UX' },
  { name: 'Figma', category: 'UI/UX' },
];

export function TechStack() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Mastered Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My diverse toolkit allows me to tackle problems from any angle, ensuring robust 
            and scalable solutions for every project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <span className="text-xs font-medium text-indigo-500 mb-2 block uppercase tracking-wider">{skill.category}</span>
              <h3 className="text-gray-900 group-hover:text-indigo-600 transition-colors">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

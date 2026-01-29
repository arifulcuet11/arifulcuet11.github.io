import { motion } from 'motion/react';
import aboutData from './about.json';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-indigo-700 text-lg font-semibold mb-3 text-center">
                {skill.category}
              </h3>
              <ul className="flex flex-wrap gap-2 justify-center">
                {skill.items.split(',').map((item, i) => (
                  <li
                    key={item.trim()}
                    className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                  >
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CloudScale Dashboard',
    description: 'A real-time monitoring tool for cloud infrastructure with predictive scaling alerts.',
    image: 'https://images.unsplash.com/photo-1759322945173-76b604965b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzY5NTA0MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'D3.js', 'Node.js', 'AWS'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Nexus E-Commerce',
    description: 'High-performance headless commerce platform with personalized shopping experiences.',
    image: 'https://images.unsplash.com/photo-1739343338040-2dae68f6bdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kJTIwZGFya3xlbnwxfHx8fDE3Njk0Nzg3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'Shopify', 'Stripe', 'Tailwind'],
    links: { github: '#', demo: '#' }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-xl">
              A collection of handpicked projects that demonstrate technical complexity and design thinking.
            </p>
          </div>
          <a href="#" className="hidden md:block text-indigo-600 font-semibold hover:underline">View All Projects →</a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.links.demo} className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-indigo-600">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={project.links.github} className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-indigo-600">
                    <Github className="w-4 h-4" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

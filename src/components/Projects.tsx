import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: '7Pack ERP',
    company: 'STS Capital',
    period: 'Jan 2020 - Present',
    image: 'https://placehold.co/600x400?text=7Pack+ERP',
    description: 'Internal ERP project of 7pack.it to manage and integrate sales, marketing, order, purchasing inventory, finance, HR, delivery system, planning and more.',
    tags: ['ASP.NET Web API', 'NgRx', 'Microsoft SQL Server', 'Azure Webjobs', 'Angular-9', 'TypeScript', 'RxJS'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Rail Sheba (PWA Mobile App)',
    company: 'FairPattern.com',
    period: 'Jan 2022 - Jun 2022',
    image: 'https://placehold.co/600x400?text=Rail+Sheba',
    description: 'Official PWA app for Bangladesh Railway. Users can purchase train tickets, pay via multiple methods, view travel history, and download e-tickets. Over 1M+ users.',
    tags: ['Angular-11', 'Azure DevOps', 'PWAs', 'NgRx', 'Git', 'Tailwind CSS', 'Angular Material', 'TypeScript'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Digital Entrepreneur Academy',
    company: 'PEN Worldwide',
    period: 'May 2021 - Dec 2021',
    image: 'https://placehold.co/600x400?text=Digital+Entrepreneur+Academy',
    description: 'Platform for youth entrepreneurship and self-employment. Led a team, designed project architecture, configured CI/CD, and deployed to Linux. 10k+ users.',
    tags: ['GitHub', 'React', 'Next.js', 'Jira', 'Microsoft SQL Server', 'Git', 'Tailwind CSS', 'Redux', 'TypeScript', '.NET-6'],
    links: { github: '#', demo: '#' }
  },
  {
    title: '7Pack Courier (Mobile App)',
    company: 'STS Capital',
    period: 'Jan 2021 - Jul 2021',
    image: 'https://placehold.co/600x400?text=7Pack+Courier',
    description: 'Android app for delivery management. Features barcode scanning, GPS tracking, messaging, and real-time location monitoring. 100+ delivery people use it.',
    tags: ['Expo', 'Redux', 'TypeScript', 'styled-components', 'React Native'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Claims & Payment Processing System',
    company: 'Brain Station 23 Limited',
    period: 'Jun 2019 - Jan 2020',
    image: 'https://placehold.co/600x400?text=Claims+%26+Payment+Processing',
    description: 'Insurance project for automated claims and document management using IBM FileNet. Developed UI for document upload, validation, and reactive forms.',
    tags: ['ASP.NET Web API', 'Microsoft SQL Server', 'Git', 'Angular', 'TypeScript', 'RxJS'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Agency Digitization',
    company: 'Brain Station 23 Limited',
    period: 'Oct 2018 - Jul 2019',
    image: 'https://placehold.co/600x400?text=Agency+Digitization',
    description: 'Admin and client portals for financial associates. Features training modules, drag-and-drop, graphical statistics, and SLA notifications.',
    tags: ['ASP.NET Web API', 'Jira', 'Microsoft SQL Server', 'Git', 'Angular', 'TypeScript', 'RxJS'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Eshkol ERP',
    company: 'Projukti Next Ltd',
    period: 'Jun 2016 - Aug 2018',
    image: 'https://placehold.co/600x400?text=Eshkol+ERP',
    description: 'Cloud-based ERP for educational institutes. Designed responsive UI and developed features for accounting, inventory, HR, and attendance.',
    tags: ['Azure DevOps', 'ASP.NET Web API', 'JavaScript', 'Microsoft SQL Server', 'Git', 'AngularJS', 'C#'],
    links: { github: '#', demo: '#' }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24">
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

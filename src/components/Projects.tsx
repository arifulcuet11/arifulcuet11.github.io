import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, Building2, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Multi-Tenant SCIM Identity Platform (Azure, AWS & On-Premises)',
    company: 'Kloudynet Technologies',
    period: '2022 – Present',
    badge: 'Multi-Cloud & Enterprise Identity',
    description:
      'Designed and deployed a multi-tenant SCIM & Entra ID identity platform (.NET, React, SQL Server microservices) delivered to Azure (private AKS, Container Apps via Bicep & Helm), AWS (ECS Fargate, RDS, ALB/WAF via Terraform), and customer on-premises VMs (Docker Compose behind NGINX) from one set of container images.',
    tags: ['.NET Core', 'React', 'SCIM', 'Entra ID', 'Azure AKS', 'AWS ECS Fargate', 'Bicep', 'Terraform', 'Helm', 'Docker Compose', 'GitHub Actions (OIDC)', 'MassTransit', 'RabbitMQ'],
    links: { demo: '' }
  },
  {
    title: '7Pack ERP',
    company: 'STS Capital',
    period: 'Feb 2020 – June 2022',
    badge: 'Enterprise ERP',
    description:
      'Comprehensive ERP platform for 7pack.lt integrating sales, marketing, orders, purchasing inventory, finance, HR, delivery planning, and reusable modern Angular components.',
    tags: ['ASP.NET Web API', 'Angular', 'SQL Server', 'Cosmos DB', 'Azure App Service', 'Azure Functions', 'CI/CD', 'TypeScript'],
    links: { demo: 'https://7pack.lt/' }
  },
  {
    title: 'Rail Sheba & Ticketing Systems (PWA)',
    company: 'FairPattern.com',
    period: 'Jan 2022 – June 2022',
    badge: '1M+ Users · FinTech & Transit',
    description:
      'High-traffic PWA and ticketing platform for railway, bus, and launch booking alongside mobile recharge and loan management systems serving over 1M+ users.',
    tags: ['Angular', 'NgRx', 'PWAs', 'TailwindCSS', 'Material-UI', 'TypeScript', 'Azure DevOps'],
    links: { demo: '' }
  },
  {
    title: 'Digital Entrepreneur Academy & Online Exam System',
    company: 'PEN Worldwide',
    period: 'May 2021 – Dec 2021',
    badge: '10k+ Users · EdTech',
    description:
      'Full-stack online examination and youth entrepreneurship platform built with React, Next.js, and .NET 6 on SQL Server, deployed via automated GitHub CI/CD to Ubuntu and Nginx.',
    tags: ['React', 'Next.js', '.NET 6', 'SQL Server', 'GitHub Actions', 'Ubuntu', 'Nginx', 'TailwindCSS'],
    links: { demo: '' }
  },
  {
    title: '7Pack Courier (Mobile App)',
    company: 'STS Capital',
    period: 'Jan 2021 – Jul 2021',
    badge: 'Logistics & Mobile',
    description:
      'Cross-platform delivery management mobile application featuring barcode scanning, real-time GPS tracking, and instant courier messaging.',
    tags: ['React Native', 'Expo', 'Redux', 'TypeScript', 'REST APIs'],
    links: { demo: '' }
  },
  {
    title: 'Insurance Claims, Document Management & Training Portal',
    company: 'Brain Station 23 Limited',
    period: 'Oct 2018 – Jan 2020',
    badge: 'InsureTech',
    description:
      'Automated insurance claims and online document management system alongside an interactive Angular training portal with SLA tracking and analytics.',
    tags: ['Angular', 'ASP.NET Web API', 'SQL Server', 'TypeScript', 'RxJS'],
    links: { demo: '' }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 portfolio-section-alt scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full mb-4">
            <Layers className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Portfolio Highlights</span>
          </div>
          <h2 className="text-gray-900 mb-4 font-bold" style={{ fontSize: '2rem' }}>
            Featured Projects &amp; Systems
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Key enterprise platforms, cloud-native microservices, and high-scale applications delivered across finance, education, and transportation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group portfolio-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div
                  className="p-6 border-b border-gray-100 flex items-center justify-between"
                  style={{
                    background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)',
                  }}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-white px-3 py-1 rounded-full shadow-sm">
                    {project.badge}
                  </span>
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-indigo-500" /> {project.period}
                  </span>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs text-indigo-600 font-semibold">
                    <span className="inline-flex items-center gap-1">
                      <Building2 className="w-4 h-4" /> {project.company}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="portfolio-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {project.links.demo && (
                <div className="px-8 pb-6 pt-2 flex gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink className="w-4 h-4" /> Visit Live Platform
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Associate Lead – Software Development',
    company: 'Kloudynet Technologies',
    location: 'Kuala Lumpur',
    period: 'Aug 2025 – Current',
    bullets: [
      'Lead development and deployment of cloud-native microservices using .NET, React and SQL Server on Azure AKS with Docker and Helm; integrated SCIM for automated user provisioning.',
      'Built automated GitHub Actions CI/CD pipelines that build Docker images and deploy to Azure Container Apps and a private-network AKS cluster.',
      'Monitor and tune production performance with Azure Monitor and Application Insights.',
      'Mentor engineers, run code reviews enforcing clean architecture and SOLID, and drive technical decisions.'
    ],
    tags: [
      '.NET Core', 'React', 'Azure AKS (Private Cluster)', 'Azure Container Apps', 'Docker', 'Helm', 'GitHub Actions', 'SCIM', 'SQL Server', 'Azure Monitor', 'Application Insights'
    ]
  },
  {
    role: 'Senior Full Stack Engineer',
    company: 'Kloudynet Technologies',
    location: 'Kuala Lumpur',
    period: 'June 2022 – Aug 2025',
    bullets: [
      'Built scalable .NET microservices with event-driven messaging using MassTransit and RabbitMQ.',
      'Integrated Microsoft SCIM and Entra ID for automated identity management across enterprise systems.',
      'Designed Azure solutions (App Services, Functions, Cosmos DB, SQL Server, Logic Apps) for performance and cost efficiency, and built a Microsoft Teams app.'
    ],
    tags: [
      '.NET Core', 'Microservices', 'MassTransit', 'RabbitMQ', 'SCIM', 'Entra ID', 'Azure App Services', 'Azure Functions', 'Cosmos DB', 'SQL Server', 'Logic Apps', 'Microsoft Teams App', 'React'
    ]
  },
  {
    role: 'Senior Frontend Developer (Part-time)',
    company: 'FairPattern.com',
    location: 'Dhaka',
    period: 'Jan 2022 – June 2022',
    bullets: [
      'Built bus and launch ticket booking, mobile recharge, and loan management systems for major clients.'
    ],
    tags: [
      'Angular', 'TypeScript', 'NgRx', 'RxJS', 'TailwindCSS', 'Material-UI', 'PWA'
    ]
  },
  {
    role: 'Software Developer (Remote)',
    company: 'STS Capital',
    location: 'Vilnius, Lithuania',
    period: 'Feb 2020 – June 2022',
    bullets: [
      'Built reusable ERP components and migrated legacy AngularJS code to modern Angular.'
    ],
    tags: [
      'Angular', 'AngularJS Migration', 'TypeScript', '.NET Core', 'Azure', 'SQL Server', 'Cosmos DB', 'React Native'
    ]
  },
  {
    role: 'Full Stack Engineer (Part-time)',
    company: 'PEN Worldwide',
    location: 'Essen, Germany',
    period: 'May 2021 – Dec 2021',
    bullets: [
      'Built an online exam system with React, Next.js and .NET 6 on SQL Server, deployed via GitHub CI/CD to Ubuntu and Nginx.'
    ],
    tags: [
      'React', 'Next.js', '.NET 6', 'SQL Server', 'GitHub Actions CI/CD', 'Ubuntu', 'Nginx', 'TailwindCSS'
    ]
  },
  {
    role: 'Technical Consultant (Remote, Part-time)',
    company: 'Sheba.xyz',
    location: 'Bangladesh',
    period: 'April 2020 – July 2020',
    bullets: [
      'Improved Angular component efficiency and reduced website load times.'
    ],
    tags: [
      'Angular', 'TypeScript', 'Performance Optimization', 'Frontend Architecture'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Brain Station 23 Limited',
    location: 'Dhaka',
    period: 'Oct 2018 – Jan 2020',
    bullets: [
      'Built an Angular training module and an online document management system for an insurance company.'
    ],
    tags: [
      'Angular', 'TypeScript', 'ASP.NET Web API', 'SQL Server', 'RxJS'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Projukti Next Ltd',
    location: 'Dhaka',
    period: 'May 2017 – Sep 2018',
    bullets: [
      'Built inventory, admission, accounting and attendance modules with AngularJS and Cordova; integrated biometric devices.'
    ],
    tags: [
      'AngularJS', 'Cordova', '.NET', 'SQL Server', 'MySQL', 'Biometric Integration'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Career Journey</span>
          </div>
          <h2 className="text-gray-900 mb-4 font-bold" style={{ fontSize: '2rem' }}>
            Work Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            9+ years of delivering enterprise-grade cloud platforms, identity integrations, and scalable web applications across global teams.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-indigo-100"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-50" />

              <div className="portfolio-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm mt-2">
                      <span className="inline-flex items-center gap-1 text-indigo-600 font-semibold">
                        <Briefcase className="w-4 h-4" /> {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1 text-gray-500">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-indigo-600 text-xs font-semibold bg-indigo-50 px-3 py-1 rounded-full self-start">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </div>
                </div>

                <ul className="portfolio-bullet-list mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((item) => (
                    <span key={item} className="portfolio-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

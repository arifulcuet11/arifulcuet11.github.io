import React from 'react';
import { Briefcase, Calendar, MapPin, Layers, Cloud, ShieldCheck, Users } from 'lucide-react';

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  highlights?: { icon: typeof Layers; title: string; text: string }[];
  impact?: { value: string; label: string }[];
  bulletsHeading?: string;
  bullets: string[];
  tags: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: 'Associate Lead – Software Development',
    company: 'Kloudynet Technologies',
    location: 'Kuala Lumpur',
    period: 'Aug 2025 – Current',
    summary:
      'Lead engineer on <strong>KloudIdentity</strong>, a multi-tenant identity governance platform that provisions users from Microsoft Entra ID into enterprise applications via SCIM, with identity sync, access reviews and governance insights. Own the architecture and delivery model that lets one product run on <strong>Azure, AWS or a customer’s own data centre</strong>.',
    highlights: [
      {
        icon: Layers,
        title: 'Product & Architecture',
        text: 'Event-driven .NET microservices (MassTransit, RabbitMQ), a React management portal and SQL Server, with SCIM provisioning, identity sync, access reviews and governance insights as separate services.'
      },
      {
        icon: Cloud,
        title: 'Multi-Cloud Delivery',
        text: 'One container image set, three targets: Azure (private AKS, Container Apps, Bicep), AWS (VPC, ECS Fargate, RDS, ALB/WAF, Terraform) and on-premises (Docker Compose behind NGINX).'
      },
      {
        icon: ShieldCheck,
        title: 'Security by Default',
        text: 'OIDC-federated pipelines, secrets kept in Key Vault or Secrets Manager, private networking, and least-privilege SQL logins per service.'
      },
      {
        icon: Users,
        title: 'Technical Leadership',
        text: 'Mentor engineers, run code reviews (clean architecture, SOLID), drive technical decisions, and write client onboarding runbooks and customer setup guides.'
      }
    ],
    impact: [
      { value: '1 release → 3 platforms', label: 'The same images and configuration run on Azure, AWS and on-premises' },
      { value: 'Keyless CI/CD', label: 'GitHub Actions sign in to Azure and AWS through OIDC federation' },
      { value: 'Repeatable onboarding', label: 'A new client is config files plus two pipeline runs: infrastructure, then services' }
    ],
    bulletsHeading: 'Platform details',
    bullets: [
      'Azure: Bicep and GitHub Actions (OIDC) pipelines deploying to Container Apps and a private-network AKS cluster with Helm; VNets, private endpoints and private DNS, Key Vault and App Configuration, with an isolated environment per client.',
      'AWS: Terraform-provisioned VPC with public and private subnets, NAT gateway, route tables, security groups and VPC endpoints; ECS Fargate behind an Application Load Balancer and WAF; RDS for SQL Server, Secrets Manager, KMS, and CloudWatch alarms with SNS.',
      "On-premises / private cloud: Docker Compose on customer VMs behind an NGINX reverse proxy (TLS, WebSockets, subnet allow-lists), an outbound-only self-hosted GitHub runner, the customer's SQL Server, and secrets pulled from Azure Key Vault at deploy time.",
      'Least-privilege database access on all three platforms with re-runnable PowerShell, Bash and Python scripts; production monitoring with Azure Monitor and Application Insights.'
    ],
    tags: [
      '.NET Core', 'React', 'SQL Server', 'SCIM', 'Azure AKS (Private)', 'Container Apps', 'Bicep', 'AWS ECS Fargate', 'AWS RDS', 'Terraform', 'VPC / VNet', 'Helm', 'Docker Compose', 'NGINX', 'GitHub Actions (OIDC)', 'Key Vault', 'Secrets Manager'
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
      'Built bus and launch ticket booking, mobile recharge, and loan management systems serving 1M+ users for major clients.'
    ],
    tags: [
      'Angular', 'TypeScript', 'NgRx', 'RxJS', 'TailwindCSS', 'Material-UI', 'PWA'
    ]
  },
  {
    role: 'Full Stack Engineer (Part-time)',
    company: 'PEN Worldwide',
    location: 'Essen, Germany',
    period: 'May 2021 – Dec 2021',
    bullets: [
      'Built an online exam system for 10,000+ students with React, Next.js and .NET 6 on SQL Server, deployed via GitHub CI/CD to Ubuntu and Nginx.'
    ],
    tags: [
      'React', 'Next.js', '.NET 6', 'SQL Server', 'GitHub Actions CI/CD', 'Ubuntu', 'Nginx', 'TailwindCSS'
    ]
  },
  {
    role: 'Software Developer (Remote)',
    company: 'STS Capital',
    location: 'Vilnius, Lithuania',
    period: 'Feb 2020 – June 2022',
    bullets: [
      'Built reusable ERP components and migrated legacy AngularJS code to modern Angular across 8+ core business modules.'
    ],
    tags: [
      'Angular', 'AngularJS Migration', 'TypeScript', '.NET Core', 'Azure', 'SQL Server', 'Cosmos DB', 'React Native'
    ]
  },
  {
    role: 'Technical Consultant (Remote, Part-time)',
    company: 'Sheba.xyz',
    location: 'Bangladesh',
    period: 'Apr 2020 – Jul 2020',
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
    <section id="experience" className="py-20 md:py-24 bg-white px-4 md:px-6 scroll-mt-24">
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
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="relative pl-5 md:pl-8 border-l-2 border-indigo-100"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-50" />

              <div className="portfolio-card p-5 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm mt-2">
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

                {exp.summary && (
                  <p
                    className="portfolio-exp-summary text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: exp.summary }}
                  />
                )}

                {exp.highlights && (
                  <div className="portfolio-highlight-grid">
                    {exp.highlights.map(({ icon: Icon, title, text }) => (
                      <div key={title} className="portfolio-highlight">
                        <span className="portfolio-highlight-icon">
                          <Icon className="w-5 h-5" />
                        </span>
                        <div>
                          <p className="portfolio-highlight-title">{title}</p>
                          <p className="portfolio-highlight-text">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {exp.impact && (
                  <div className="portfolio-impact">
                    {exp.impact.map((item) => (
                      <div key={item.value} className="portfolio-impact-item">
                        <span className="portfolio-impact-value">{item.value}</span>
                        <span className="portfolio-impact-label">{item.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {exp.bulletsHeading && <p className="portfolio-subheading">{exp.bulletsHeading}</p>}

                <ul className="portfolio-bullet-list mb-6 text-sm md:text-base">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

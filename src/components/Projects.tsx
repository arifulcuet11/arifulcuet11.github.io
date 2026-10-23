import React from 'react';
import { ExternalLink, Layers, Building2, Calendar, CheckCircle2, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Multi-Tenant SCIM Identity Platform (Azure, AWS & On-Premises)',
    company: 'Kloudynet Technologies',
    period: '2022 – Present',
    badge: '3 Cloud/Hybrid Targets · 1 Image Set',
    description:
      'Designed and deployed a multi-tenant SCIM & Entra ID identity platform (.NET, React, SQL Server microservices) delivered to Azure (private AKS, Container Apps via Bicep & Helm), AWS (ECS Fargate, RDS, ALB/WAF via Terraform), and customer on-premises VMs (Docker Compose behind NGINX) from one set of container images.',
    metrics: [
      '1 container image set deployed across 3 target topologies (Azure, AWS, On-Premises)',
      '100% IaC & zero-secret OIDC CI/CD via Bicep, Terraform, Helm & GitHub Actions',
      'Per-client network isolation with VNet/VPC private endpoints & least-privilege DB scripts'
    ],
    hasDiagram: true,
    tags: ['.NET Core', 'React', 'SCIM', 'Entra ID', 'Azure AKS', 'AWS ECS Fargate', 'Bicep', 'Terraform', 'Helm', 'Docker Compose', 'GitHub Actions (OIDC)', 'MassTransit', 'RabbitMQ'],
    links: { demo: '' }
  },
  {
    title: '7Pack ERP',
    company: 'STS Capital',
    period: 'Feb 2020 – June 2022',
    badge: '8+ ERP Modules · Angular Migration',
    description:
      'Comprehensive ERP platform for 7pack.lt integrating sales, marketing, orders, purchasing inventory, finance, HR, delivery planning, and reusable modern Angular components.',
    metrics: [
      'Migrated legacy AngularJS codebase to modern Angular across 8+ core business modules',
      'Integrated real-time inventory, order fulfillment, finance, and delivery planning'
    ],
    hasDiagram: false,
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
    metrics: [
      'Engineered responsive PWAs serving 1M+ active passengers and FinTech users',
      'Unified bus/launch ticketing, mobile recharge, and loan workflows'
    ],
    hasDiagram: false,
    tags: ['Angular', 'NgRx', 'PWAs', 'TailwindCSS', 'Material-UI', 'TypeScript', 'Azure DevOps'],
    links: { demo: '' }
  },
  {
    title: 'Digital Entrepreneur Academy & Online Exam System',
    company: 'PEN Worldwide',
    period: 'May 2021 – Dec 2021',
    badge: '10,000+ Students · EdTech',
    description:
      'Full-stack online examination and youth entrepreneurship platform built with React, Next.js, and .NET 6 on SQL Server, deployed via automated GitHub CI/CD to Ubuntu and Nginx.',
    metrics: [
      'Supported 10,000+ students across global entrepreneurship cohorts',
      'Automated zero-downtime Ubuntu + NGINX deployments via GitHub Actions'
    ],
    hasDiagram: false,
    tags: ['React', 'Next.js', '.NET 6', 'SQL Server', 'GitHub Actions', 'Ubuntu', 'Nginx', 'TailwindCSS'],
    links: { demo: '' }
  },
  {
    title: '7Pack Courier (Mobile App)',
    company: 'STS Capital',
    period: 'Jan 2021 – Jul 2021',
    badge: 'Real-Time Logistics · Mobile',
    description:
      'Cross-platform delivery management mobile application featuring barcode scanning, real-time GPS tracking, and instant courier messaging.',
    metrics: [
      'Streamlined last-mile dispatch with live GPS route tracking & barcode scanning'
    ],
    hasDiagram: false,
    tags: ['React Native', 'Expo', 'Redux', 'TypeScript', 'REST APIs'],
    links: { demo: '' }
  },
  {
    title: 'Insurance Claims, Document Management & Training Portal',
    company: 'Brain Station 23 Limited',
    period: 'Oct 2018 – Jan 2020',
    badge: 'Enterprise InsureTech',
    description:
      'Automated insurance claims and online document management system alongside an interactive Angular training portal with SLA tracking and analytics.',
    metrics: [
      'Digitized end-to-end policy document workflows and agent onboarding'
    ],
    hasDiagram: false,
    tags: ['Angular', 'ASP.NET Web API', 'SQL Server', 'TypeScript', 'RxJS'],
    links: { demo: '' }
  }
];

function ScimArchitectureDiagram() {
  return (
    <div className="mb-6 rounded-2xl border border-indigo-100 bg-slate-50 p-3 md:p-5 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
          <Cpu className="w-4 h-4 text-indigo-600" /> Reference Architecture: Single Image Set &rarr; 3 Deployment Topologies
        </span>
        <span className="text-xs text-gray-500 font-medium">
          Zero hardcoded secrets &middot; OIDC CI/CD &middot; Least-Privilege SQL
        </span>
      </div>
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 960 430"
          className="w-full h-auto"
          role="img"
          aria-label="Multi-Tenant SCIM Identity Platform Architecture across Azure, AWS, and On-Premises"
          style={{ minWidth: '640px' }}
        >
          <defs>
            <linearGradient id="archHeader" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#4338ca" />
            </linearGradient>
            <marker id="arrowIndigo" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#6366f1" />
            </marker>
          </defs>

          {/* Background */}
          <rect x="0" y="0" width="960" height="430" rx="16" fill="#f8fafc" />

          {/* Top Bar: Identity Source + CI/CD & Shared Container Images */}
          <rect x="20" y="14" width="920" height="72" rx="12" fill="url(#archHeader)" />
          <text x="44" y="42" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">
            Shared Build &amp; Identity Core — GitHub Actions (OIDC) + Single Container Image Set
          </text>
          <text x="44" y="64" fill="#c7d2fe" fontSize="11.5" fontWeight="500" fontFamily="Inter, sans-serif">
            Entra ID / OAuth2 / OIDC   &bull;   SCIM 2.0 Provisioning Engine (.NET Core)   &bull;   React Admin Portal   &bull;   MassTransit / RabbitMQ
          </text>

          {/* Connector arrows from Top Bar to 3 Columns */}
          <line x1="170" y1="86" x2="170" y2="112" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowIndigo)" />
          <line x1="480" y1="86" x2="480" y2="112" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowIndigo)" />
          <line x1="790" y1="86" x2="790" y2="112" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowIndigo)" />

          {/* Column 1: AZURE */}
          <rect x="20" y="118" width="294" height="296" rx="12" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <rect x="20" y="118" width="294" height="38" rx="12" fill="#eef2ff" />
          <text x="36" y="142" fill="#312e81" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">
            1. Azure Cloud (Bicep &amp; Helm)
          </text>

          <rect x="36" y="168" width="262" height="52" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="48" y="188" fill="#1e293b" fontSize="11.5" fontWeight="700" fontFamily="Inter, sans-serif">
            Isolated Client VNet &amp; Private DNS
          </text>
          <text x="48" y="206" fill="#475569" fontSize="10.5" fontFamily="Inter, sans-serif">
            Private Endpoints &bull; Subnet Isolation &bull; TLS Ingress
          </text>

          <rect x="36" y="230" width="262" height="56" rx="8" fill="#eef2ff" stroke="#c7d2fe" />
          <text x="48" y="250" fill="#312e81" fontSize="11.5" fontWeight="700" fontFamily="Inter, sans-serif">
            Private AKS Cluster &amp; Container Apps
          </text>
          <text x="48" y="268" fill="#4338ca" fontSize="10.5" fontFamily="Inter, sans-serif">
            Helm Charts &bull; .NET SCIM API &amp; React Workloads
          </text>

          <rect x="36" y="296" width="262" height="52" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="48" y="316" fill="#1e293b" fontSize="11.5" fontWeight="700" fontFamily="Inter, sans-serif">
            Azure SQL &bull; Key Vault &bull; App Config
          </text>
          <text x="48" y="334" fill="#475569" fontSize="10.5" fontFamily="Inter, sans-serif">
            Least-Privilege DB Scripts &bull; Azure Monitor / App Insights
          </text>

          <rect x="36" y="358" width="262" height="42" rx="8" fill="#f1f5f9" />
          <text x="48" y="376" fill="#334155" fontSize="10.5" fontWeight="600" fontFamily="Inter, sans-serif">
            Provisioning: Bicep + GitHub OIDC
          </text>
          <text x="48" y="391" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">
            Dedicated environment per enterprise tenant
          </text>

          {/* Column 2: AWS */}
          <rect x="333" y="118" width="294" height="296" rx="12" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <rect x="333" y="118" width="294" height="38" rx="12" fill="#eef2ff" />
          <text x="349" y="142" fill="#312e81" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">
            2. AWS Cloud (Terraform)
          </text>

          <rect x="349" y="168" width="262" height="52" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="361" y="188" fill="#1e293b" fontSize="11.5" fontWeight="700" fontFamily="Inter, sans-serif">
            VPC (Public/Private Subnets) + WAF
          </text>
          <text x="361" y="206" fill="#475569" fontSize="10.5" fontFamily="Inter, sans-serif">
            ALB &bull; NAT Gateway &bull; Security Groups &bull; VPC Endpoints
          </text>

          <rect x="349" y="230" width="262" height="56" rx="8" fill="#eef2ff" stroke="#c7d2fe" />
          <text x="361" y="250" fill="#312e81" fontSize="11.5" fontWeight="700" fontFamily="Inter, sans-serif">
            Amazon ECS Fargate (Private Subnets)
          </text>
          <text x="361" y="268" fill="#4338ca" fontSize="10.5" fontFamily="Inter, sans-serif">
            Same Container Images &bull; Auto-Scaled Tasks
          </text>

          <rect x="349" y="296" width="262" height="52" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="361" y="316" fill="#1e293b" fontSize="11.5" fontWeight="700" fontFamily="Inter, sans-serif">
            RDS (SQL Server) &bull; Secrets Manager &bull; KMS
          </text>
          <text x="361" y="334" fill="#475569" fontSize="10.5" fontFamily="Inter, sans-serif">
            CloudWatch Alarms + SNS Alerts &bull; Encrypted Storage
          </text>

          <rect x="349" y="358" width="262" height="42" rx="8" fill="#f1f5f9" />
          <text x="361" y="376" fill="#334155" fontSize="10.5" fontWeight="600" fontFamily="Inter, sans-serif">
            Provisioning: Terraform + GitHub OIDC
          </text>
          <text x="361" y="391" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">
            Automated state &amp; least-privilege IAM/DB roles
          </text>

          {/* Column 3: ON-PREMISES */}
          <rect x="646" y="118" width="294" height="296" rx="12" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <rect x="646" y="118" width="294" height="38" rx="12" fill="#eef2ff" />
          <text x="662" y="142" fill="#312e81" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">
            3. On-Premises / Private Cloud
          </text>

          <rect x="662" y="168" width="262" height="52" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="674" y="188" fill="#1e293b" fontSize="11.5" fontWeight="700" fontFamily="Inter, sans-serif">
            NGINX Reverse Proxy &amp; Perimeter
          </text>
          <text x="674" y="206" fill="#475569" fontSize="10.5" fontFamily="Inter, sans-serif">
            TLS Termination &bull; WebSockets &bull; Subnet Allow-Lists
          </text>

          <rect x="662" y="230" width="262" height="56" rx="8" fill="#eef2ff" stroke="#c7d2fe" />
          <text x="674" y="250" fill="#312e81" fontSize="11.5" fontWeight="700" fontFamily="Inter, sans-serif">
            Docker Compose on Customer VMs
          </text>
          <text x="674" y="268" fill="#4338ca" fontSize="10.5" fontFamily="Inter, sans-serif">
            Outbound-Only Self-Hosted GitHub Runner
          </text>

          <rect x="662" y="296" width="262" height="52" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="674" y="316" fill="#1e293b" fontSize="11.5" fontWeight="700" fontFamily="Inter, sans-serif">
            Customer SQL Server + Key Vault Pull
          </text>
          <text x="674" y="334" fill="#475569" fontSize="10.5" fontFamily="Inter, sans-serif">
            Deploy-Time Secret Fetch &bull; PowerShell/Bash/Python DB Scripts
          </text>

          <rect x="662" y="358" width="262" height="42" rx="8" fill="#f1f5f9" />
          <text x="674" y="376" fill="#334155" fontSize="10.5" fontWeight="600" fontFamily="Inter, sans-serif">
            Provisioning: Self-Hosted Runner + Runbooks
          </text>
          <text x="674" y="391" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">
            No inbound firewall ports required from internet
          </text>
        </svg>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 px-4 md:px-6 portfolio-section-alt scroll-mt-24">
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
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group portfolio-card overflow-hidden flex flex-col justify-between ${
                project.hasDiagram ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div
                  className="p-4 md:p-6 border-b border-gray-100 flex flex-wrap items-center justify-between gap-2"
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

                <div className="p-5 md:p-8">
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs text-indigo-600 font-semibold">
                    <span className="inline-flex items-center gap-1">
                      <Building2 className="w-4 h-4" /> {project.company}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">{project.description}</p>

                  {project.metrics && project.metrics.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {project.metrics.map((metric) => (
                        <li key={metric} className="flex items-start gap-2 text-xs md:text-sm text-gray-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.hasDiagram && <ScimArchitectureDiagram />}

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
                <div className="px-5 md:px-8 pb-6 pt-2 flex gap-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

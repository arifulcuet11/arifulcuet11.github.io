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
      'Infrastructure as code (Bicep, Terraform, Helm) and OIDC CI/CD with no long-lived cloud keys',
      'Private networking per environment (Azure private endpoints, AWS private subnets) and least-privilege SQL logins'
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

const archColumns = [
  {
    title: '1. Azure Cloud (Bicep & Helm)',
    boxes: [
      { title: 'Per-Client VNet & Private DNS', text: 'Private endpoints • subnet isolation' },
      { title: 'Private AKS & Container Apps', text: 'Helm charts • same container images', accent: true },
      { title: 'Azure SQL • Key Vault', text: 'Entra ID SQL auth • App Insights' }
    ],
    footer: { title: 'Provisioning: Bicep + GitHub OIDC', text: 'Isolated environment per client' }
  },
  {
    title: '2. AWS Cloud (Terraform)',
    boxes: [
      { title: 'VPC: Public / App / Data Subnets', text: '2 AZs • NAT gateway • security groups' },
      { title: 'ECS Fargate (Private Subnets)', text: 'Behind ALB + WAF • no public IPs', accent: true },
      { title: 'RDS SQL Server • Secrets Manager', text: 'KMS encryption • CloudWatch + SNS' }
    ],
    footer: { title: 'Provisioning: Terraform + GitHub OIDC', text: 'S3 remote state • one-off DB bootstrap' }
  },
  {
    title: '3. On-Premises / Private Cloud',
    boxes: [
      { title: 'NGINX Reverse Proxy', text: 'TLS • WebSockets • subnet allow-lists' },
      { title: 'Docker Compose on Customer VMs', text: 'Same images • migrations before start', accent: true },
      { title: "Customer's SQL Server", text: 'Secrets pulled from Key Vault at deploy' }
    ],
    footer: { title: 'Provisioning: Self-Hosted Runner', text: 'Outbound only • no inbound CI/CD ports' }
  }
];

function ScimArchitectureDiagram() {
  const font = 'Inter, sans-serif';
  const colW = 296;
  const colGap = 16;
  const colTop = 186;
  const colX = (i: number) => 20 + i * (colW + colGap);

  return (
    <div className="mb-6 rounded-2xl border border-indigo-100 bg-slate-50 p-3 md:p-5 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
          <Cpu className="w-4 h-4 text-indigo-600" /> Reference Architecture: Single Image Set &rarr; 3 Deployment Topologies
        </span>
        <span className="text-xs text-gray-500 font-medium">
          No hardcoded secrets &middot; OIDC CI/CD &middot; Least-Privilege SQL
        </span>
      </div>
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 960 500"
          className="w-full h-auto"
          role="img"
          aria-label="One container image set deployed to Azure, AWS and on-premises, sharing Entra ID and Azure App Configuration"
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

          <rect x="0" y="0" width="960" height="500" rx="16" fill="#f8fafc" />

          {/* Shared release: one image set built by GitHub Actions */}
          <rect x="20" y="14" width="920" height="70" rx="12" fill="url(#archHeader)" />
          <text x="40" y="42" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily={font}>
            Shared Release — GitHub Actions (OIDC) builds one container image set
          </text>
          <text x="40" y="64" fill="#c7d2fe" fontSize="11.5" fontWeight="500" fontFamily={font}>
            .NET SCIM &amp; identity microservices  •  React management portal  •  MassTransit / RabbitMQ  •  SQL Server
          </text>

          {/* Shared control plane used by every target */}
          <rect x="20" y="96" width="920" height="54" rx="12" fill="#eef2ff" stroke="#c7d2fe" strokeWidth="1.5" />
          <text x="40" y="119" fill="#312e81" fontSize="12.5" fontWeight="700" fontFamily={font}>
            Shared Azure Control Plane — used by all three targets
          </text>
          <text x="40" y="138" fill="#4338ca" fontSize="11" fontFamily={font}>
            Entra ID (sign-in &amp; SCIM source)  •  App Configuration (settings)  •  Key Vault (secrets for Azure &amp; on-premises)
          </text>

          {[0, 1, 2].map((i) => (
            <line
              key={i}
              x1={colX(i) + colW / 2}
              y1={150}
              x2={colX(i) + colW / 2}
              y2={colTop - 6}
              stroke="#6366f1"
              strokeWidth="2"
              markerEnd="url(#arrowIndigo)"
            />
          ))}

          {archColumns.map((col, i) => {
            const x = colX(i);
            return (
              <g key={col.title}>
                <rect x={x} y={colTop} width={colW} height={300} rx="12" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
                <rect x={x} y={colTop} width={colW} height={38} rx="12" fill="#eef2ff" />
                <text x={x + 16} y={colTop + 24} fill="#312e81" fontSize="13" fontWeight="700" fontFamily={font}>
                  {col.title}
                </text>

                {col.boxes.map((box, j) => {
                  const y = colTop + 50 + j * 62;
                  return (
                    <g key={box.title}>
                      <rect
                        x={x + 14}
                        y={y}
                        width={colW - 28}
                        height={52}
                        rx="8"
                        fill={box.accent ? '#eef2ff' : '#f8fafc'}
                        stroke={box.accent ? '#c7d2fe' : '#e2e8f0'}
                      />
                      <text x={x + 26} y={y + 21} fill={box.accent ? '#312e81' : '#1e293b'} fontSize="11.5" fontWeight="700" fontFamily={font}>
                        {box.title}
                      </text>
                      <text x={x + 26} y={y + 39} fill={box.accent ? '#4338ca' : '#475569'} fontSize="10.5" fontFamily={font}>
                        {box.text}
                      </text>
                    </g>
                  );
                })}

                <rect x={x + 14} y={colTop + 238} width={colW - 28} height={48} rx="8" fill="#f1f5f9" />
                <text x={x + 26} y={colTop + 257} fill="#334155" fontSize="10.5" fontWeight="600" fontFamily={font}>
                  {col.footer.title}
                </text>
                <text x={x + 26} y={colTop + 274} fill="#64748b" fontSize="10" fontFamily={font}>
                  {col.footer.text}
                </text>
              </g>
            );
          })}
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

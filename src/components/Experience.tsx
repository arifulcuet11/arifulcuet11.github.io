import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Associate Lead – Software Development',
    company: 'Kloudynet Technologies',
    location: 'WP. Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia (Remote)',
    period: 'Aug 2025 - Present · 6 mos',
    description: 'Led development and deployment of cloud-native microservices using .NET, React, and SQL Server. Deployed scalable solutions on Azure AKS using Kubernetes, Docker, and Helm. Built CI/CD pipelines with Azure DevOps for automated deployments. Collaborated with DevOps, QA, and Product teams for successful project delivery. Integrated SCIM for secure user provisioning and identity management. Applied best practices in microservice design, API gateways, and service discovery. Conducted code reviews and enforced clean architecture and SOLID principles. Mentored team members and supported technical decision-making. Participated in Agile ceremonies and sprint planning. Monitored and improved app performance with Azure Monitor and App Insights.',
    achievements: [
      '.NET Core', 'React', 'Azure', 'Microservices', 'Azure Kubernetes Service (AKS)', 'Docker', 'SCIM'
    ]
  },
  {
    role: 'Senior Full Stack Engineer',
    company: 'Kloudynet Technologies',
    location: 'Kuala Lumpur, Malaysia',
    period: 'Jun 2022 - Aug 2025 · 3 yrs 3 mos',
    description: 'Developed and maintained microservices using .NET, ensuring high scalability and performance in a cloud-native environment. Integrated Microsoft SCIM for automated user provisioning and identity management across enterprise systems. Designed and deployed cloud solutions using Azure services (App Services, Functions, Cosmos DB, SQL Server, Logic App, EntraID) to optimize performance and cost efficiency. Built responsive front-end applications with React, seamlessly connecting to RESTful APIs and microservices. Developed a Microsoft Teams app to streamline internal workflows and improve team collaboration. Implemented Hangfire for reliable background job scheduling and execution. Used MassTransit with RabbitMQ for event-driven communication between microservices, ensuring decoupled and resilient architecture. Containerized applications using Docker for consistent deployments across development and production environments. Managed databases (Cosmos DB, SQL Server) for high availability, performance, and data integrity.',
    achievements: [
      '.NET Core', 'React.js', 'Azure', 'Microsoft SQL Server', 'Docker', 'Azure Cosmos DB', 'RabbitMQ', 'Microservices', 'Entra', 'SCIM'
    ]
  },
  {
    role: 'Senior Frontend Developer',
    company: 'FairPattern.com',
    location: 'Dhaka, Bangladesh (Remote)',
    period: 'Jan 2022 - Jun 2022 · 6 mos',
    description: 'Developed an online ticket booking system for buses and launches, enhancing user experience. Implemented a mobile recharge application, improving accessibility for customers. Created an advanced loan system for top companies, streamlining financial processes.',
    achievements: [
      'RxJS', 'Angular Material', 'Tailwind CSS', 'NgRx', 'TypeScript', 'PWAs', 'Angular-11'
    ]
  },
  {
    role: 'Software Developer',
    company: 'STS Capital',
    location: 'Vilniaus, Lithuania (Remote)',
    period: 'Feb 2020 - Jun 2022 · 2 yrs 5 mos',
    description: 'Developed reusable custom components for an ERP project, enhancing efficiency and scalability. Migrated older AngularJS code to newer Angular versions, improving performance and user experience. Integrated third-party APIs and NPM libraries, expanding functionality and connectivity within the system.',
    achievements: [
      'ASP.NET', 'Microsoft Azure', 'Azure Cosmos DB', 'Azure Virtual Machines', 'ASP.NET Web API', 'Azure Service Bus', 'React.js', 'Azure DevOps Server', 'Azure DevOps', 'Azure Active Directory', 'Microsoft SQL Server', 'Redux.js', 'Docker', 'TypeScript', 'Angular', 'Microservices', 'Azure Key Vault', '.NET Core', '.NET Framework', 'Azure Functions', 'React Native', 'Azure Logic Apps'
    ]
  },
  {
    role: 'Full Stack Engineer',
    company: 'PEN Worldwide',
    location: 'Essen, Germany (Remote)',
    period: 'May 2021 - Dec 2021 · 8 mos',
    description: 'Developed frontend using React.js and Next.js for an online exam system. Implemented backend APIs with .Net-6 and managed SQL Server 2019 database. Deployed projects to Ubuntu server with Nginx for efficient performance. Established GitHub CI/CD pipelines for streamlined project management.',
    achievements: [
      'Redux', 'Next.js', 'Tailwind CSS', 'React.js', 'Git', 'Microsoft SQL Server', 'Jira', '.NET Core', 'GitHub'
    ]
  },
  {
    role: 'Technical Consultant',
    company: 'Sheba.xyz',
    location: 'Bangladesh (Remote)',
    period: 'Apr 2020 - Jul 2020 · 4 mos',
    description: 'Provided technical consultation on frontend development for Sheba.xyz in Bangladesh. Optimized website load times and application performance to enhance user experience. Enhanced Angular components for improved efficiency and seamless user interaction.',
    achievements: [
      'TypeScript', 'Angular', 'GitHub', 'Jira'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Brain Station 23 Limited',
    location: 'Dhaka, Bangladesh (On-site)',
    period: 'Oct 2018 - Jan 2020 · 1 yr 4 mos',
    description: 'Developed custom training module using Angular-6, JavaScript, and jQuery for enhanced user experience. Implemented online documents management system for an insurance company, improving efficiency. Worked on reactive form validation to ensure data accuracy and integrity. Followed agile methodology to deliver projects efficiently.',
    achievements: [
      'TypeScript', '.NET Core'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Projukti Next Ltd',
    location: 'Dhaka, Bangladesh (On-site)',
    period: 'May 2017 - Sep 2018 · 1 yr 5 mos',
    description: 'Optimized JavaScript code and developed inventory, online admission, accounting, and attendance modules using Angularjs, jQuery, and Cordova. Integrated biometric attendance device and worked with .NET, Firebase, MySQL, and SQL Server technologies.',
    achievements: [
      'TypeScript'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-900 text-center mb-16">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-indigo-100 last:border-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-50" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-indigo-600 font-medium">
                    <Briefcase className="w-4 h-4" /> {exp.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 md:mt-0 bg-white px-3 py-1 rounded-full shadow-sm">
                  <Calendar className="w-4 h-4" /> {exp.period}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.achievements.map((item, i) => (
                  <span key={i} className="text-xs bg-white border border-gray-100 text-gray-500 px-3 py-1 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

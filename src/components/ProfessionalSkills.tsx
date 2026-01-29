import React from 'react';
import aboutData from './about.json';

export function ProfessionalSkills() {
  return (
    <section id="professional-skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-gray-900 mb-8 text-center text-2xl font-bold">Professional Skills</h2>
        <div className="rounded-2xl bg-indigo-50 p-8 shadow-sm w-full">
          <ul className="flex flex-col gap-4 text-gray-700 text-base">
            {aboutData.skills.map((skill, idx) => (
              <li key={idx} className="flex flex-row flex-wrap items-baseline gap-2">
                <span className="font-semibold text-indigo-700 min-w-[160px] text-right md:text-left">{skill.category}:</span>
                <span className="text-gray-700 flex-1">{skill.items}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
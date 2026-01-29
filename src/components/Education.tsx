import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import education from './education.json';

export function Education() {
  return (
    <section id="education" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-gray-900 text-center mb-16">Education</h2>
        <div className="space-y-12">
          {(education as Array<any>).map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-indigo-100 last:border-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-50" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-600" /> {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-indigo-600 font-medium">
                    {edu.institution}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 md:mt-0 bg-white px-3 py-1 rounded-full shadow-sm">
                  <Calendar className="w-4 h-4" /> {edu.period}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

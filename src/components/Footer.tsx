import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-gray-900 font-bold text-xl">dev.arif</p>
          <p className="text-gray-500 text-sm">Building with purpose and passion.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/arifulcuet11" className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/ariful11/" className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/arifulcuet11" className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="text-gray-400 text-sm">
          © {currentYear} Arif. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

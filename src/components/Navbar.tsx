import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-indigo-600" />
          <span className="font-bold text-gray-900 tracking-tight">dev.alex</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <button className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-600 transition-colors">
            Resume
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-400 hover:text-gray-900"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-gray-900"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </motion.nav>
  );
}

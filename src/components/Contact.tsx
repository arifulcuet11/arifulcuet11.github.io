import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Linkedin, Github, CheckCircle } from 'lucide-react';
import aboutData from './about.json';

export function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${aboutData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="portfolio-contact-bg rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-800 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-800 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10 items-center">
            <div>
              <h2 className="text-white mb-6 font-bold" style={{ fontSize: '2rem' }}>
                Let&apos;s build scalable cloud solutions together
              </h2>
              <p className="text-indigo-200 mb-10 text-base leading-relaxed">
                Looking for an Associate Lead or Azure Cloud &amp; AKS specialist to architect microservices, automate CI/CD, or integrate enterprise identity (SCIM / Entra ID)? Reach out directly.
              </p>

              <div className="space-y-6">
                <a
                  href={`mailto:${aboutData.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-indigo-800 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-200" />
                  </div>
                  <div>
                    <p className="text-indigo-300 text-xs uppercase tracking-wider">Email</p>
                    <p className="font-semibold text-white">{aboutData.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${aboutData.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-indigo-800 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-indigo-200" />
                  </div>
                  <div>
                    <p className="text-indigo-300 text-xs uppercase tracking-wider">Phone</p>
                    <p className="font-semibold text-white">{aboutData.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-800 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-200" />
                  </div>
                  <div>
                    <p className="text-indigo-300 text-xs uppercase tracking-wider">Location</p>
                    <p className="font-semibold text-white">{aboutData.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={aboutData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-800 px-4 py-2 rounded-xl text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href={aboutData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-800 px-4 py-2 rounded-xl text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-2xl"
              onSubmit={handleSubmit}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" /> Opening Email Client...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

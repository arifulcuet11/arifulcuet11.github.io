import React from 'react';
import { Send, Mail, MapPin, Phone, Linkedin, Github, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import aboutData from './about.json';

export function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/5a2e4ae318791231a182555c888ed6c5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Inquiry from ${name || 'Visitor'}`,
          _template: 'table',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent directly to my inbox.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setStatusMessage(
          data.message || 'Unable to send message right now. Please email me directly at ' + aboutData.email
        );
      }
    } catch {
      setStatus('error');
      setStatusMessage(
        'Network error while sending message. Please email me directly at ' + aboutData.email
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 px-4 md:px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="portfolio-contact-bg rounded-3xl md:rounded-[3rem] p-6 md:p-16 text-white overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-800 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-800 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 relative z-10 items-center">
            <div>
              <h2 className="text-white mb-6 font-bold" style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)' }}>
                Let&apos;s build scalable cloud solutions together
              </h2>
              <p className="text-indigo-200 mb-10 text-sm md:text-base leading-relaxed">
                Looking for an Associate Lead or Multi-Cloud (Azure, AWS &amp; On-Premises) specialist to architect microservices, automate IaC (Bicep / Terraform) &amp; CI/CD, or integrate enterprise identity (SCIM / Entra ID)? Reach out directly.
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
                    <p className="font-semibold text-white text-sm md:text-base">{aboutData.email}</p>
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
                    <p className="font-semibold text-white text-sm md:text-base">{aboutData.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-800 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-200" />
                  </div>
                  <div>
                    <p className="text-indigo-300 text-xs uppercase tracking-wider">Location</p>
                    <p className="font-semibold text-white text-sm md:text-base">{aboutData.location}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
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

            <form
              className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl"
              onSubmit={handleSubmit}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-gray-100 border border-gray-200 text-rose-500 text-sm font-medium flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-rose-500" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4" /> Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

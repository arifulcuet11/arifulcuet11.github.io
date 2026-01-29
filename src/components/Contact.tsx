import { motion } from 'motion/react';
import { Send, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-indigo-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-800 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-800 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-white mb-6">Let's work together</h2>
              <p className="text-indigo-200 mb-10 text-lg">
                Have a project in mind? Or just want to say hi? 
                Feel free to reach out. I'm always open to discussing new projects, 
                creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-800 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-indigo-300 text-sm">Email me at</p>
                    <p className="font-semibold">hello@alexdev.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-800 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-indigo-300 text-sm">Based in</p>
                    <p className="font-semibold">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.form 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

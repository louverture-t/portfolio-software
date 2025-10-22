import { Mail, Github, Linkedin } from 'lucide-react';
import ContactForm from '../components/Contact/ContactForm';
import Resume from '../components/Contact/Resume';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] dark:bg-slate-900 container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Get In Touch
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          I'd love to hear from you! Whether you have a question, project idea, or just want to connect.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Contact Information
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:joseph@example.com"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>joseph@example.com</span>
                </a>
                <a
                  href="https://github.com/louverture-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/louverture-t</span>
                </a>
                <a
                  href="https://linkedin.com/in/josephdekole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/josephdekole</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Resume Section */}
        <Resume />
      </div>
    </div>
  );
}

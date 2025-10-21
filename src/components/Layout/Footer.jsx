import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/josephdekole',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/josephdekole',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:joseph@example.com',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            <p className="flex items-center gap-1">
              © {currentYear} Joseph Dekole. Made with
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              using React & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

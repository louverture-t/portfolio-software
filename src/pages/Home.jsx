import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Avatar */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-5xl font-bold text-white">JD</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            Hi, I'm <span className="text-primary">Joseph Dekole</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-slate-700 dark:text-slate-300">
            Frontend Developer & Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            I build modern, responsive web applications with a focus on clean code and exceptional user experiences.
            Currently completing UCF Frontend Development certification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button size="lg" className="w-full sm:w-auto">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Badges Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Responsive Design', 'Vite'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-700 dark:text-blue-200 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* React Development Card */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                React Development
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Building modern, component-based web applications with React,
                focusing on reusability and maintainability.
              </p>
            </div>

            {/* Responsive Design Card */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Responsive Design
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Creating pixel-perfect, mobile-first designs that work seamlessly
                across all devices and screen sizes.
              </p>
            </div>

            {/* Interactive UIs Card */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Interactive Experiences
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Crafting engaging user experiences with smooth animations,
                intuitive interactions, and thoughtful UX design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            Ready to Start a Project?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            I'm always open to discussing new opportunities and collaborations.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

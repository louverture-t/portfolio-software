import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

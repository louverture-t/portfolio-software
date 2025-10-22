import { useState } from 'react';
import ProjectCard from '../components/Portfolio/ProjectCard';
import { projects } from '../data/projects';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  // Available categories
  const categories = ['All', 'Frontend', 'AI/ML'];

  return (
    <div className="min-h-screen bg-[#f1f5f9] dark:bg-slate-900 container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          My Portfolio
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          A collection of projects showcasing my frontend development skills.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              aria-label={`Filter by ${category}`}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

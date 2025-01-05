import React from 'react';
import ProjectCard from './ui/ProjectCard';
import { projects } from '../config/projects.data';

interface ProjectsProps {
  limit?: number;
}

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-20 bg-black" id="projects">
      <div className="container mx-auto px-6">
        {!limit && (
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Featured Projects
          </h2>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import '../css/Projects.css';

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      {/* IDE Path Breadcrumb Header */}
      <div className="projects-header">
        <p className="path-text">~/projects</p>
        <h2 className="section-title">
          projects <span>&#123;&#125;</span>
        </h2>
      </div>

      {/* Grid List */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
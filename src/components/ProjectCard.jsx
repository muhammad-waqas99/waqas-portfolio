import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectCard = ({ project }) => {
  return <ProjectItem {...project} />;
};

export default ProjectCard;
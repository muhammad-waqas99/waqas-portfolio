import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiPostman, SiVite, SiRedux, SiSocketdotio, SiJsonwebtokens } from 'react-icons/si';
import { Globe } from 'lucide-react';

const ProjectItem = ({ title, url, description, image, tags, liveUrl, githubUrl }) => {


  const getTagDetails = (tagName) => {
    const lower = tagName.toLowerCase();

    if (lower.includes('react')) return { icon: <FaReact />, color: '#61DAFB' };
    if (lower.includes('js') || lower.includes('javascript')) return { icon: <SiJavascript />, color: '#F7DF1E' };
    if (lower.includes('node')) return { icon: <FaNodeJs />, color: '#339933' };
    if (lower.includes('express')) return { icon: <SiExpress />, color: '#E8EAE5' };
    if (lower.includes('mongo')) return { icon: <SiMongodb />, color: '#47A248' };
    if (lower.includes('tailwind')) return { icon: <SiTailwindcss />, color: '#38BDF8' };
    if (lower.includes('typescript') || lower.includes('ts')) return { icon: <SiTypescript />, color: '#3178C6' };
    if (lower.includes('next')) return { icon: <SiNextdotjs />, color: '#E8EAE5' };
    if (lower.includes('socket')) return { icon: <SiSocketdotio />, color: '#FFFFFF' };
    if (lower.includes('jwt')) return { icon: <SiJsonwebtokens />, color: '#000000' };
    if (lower.includes('html')) return { icon: <FaHtml5 />, color: '#E34F26' };
    if (lower.includes('css')) return { icon: <FaCss3Alt />, color: '#1572B6' };
    if (lower.includes('vite')) return { icon: <SiVite />, color: '#646CFF' };
    if (lower.includes('git')) return { icon: <FaGitAlt />, color: '#F05032' };

    return { icon: null, color: 'var(--accent, #34D399)' };
  };

  return (
    <div className="project-card">
     
      <div className="browser-header">
        <div className="window-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="address-bar">
          <Globe size={13} className="globe-icon" />
          <span className="url-text">{url}</span>
        </div>
      </div>

  
      <div className="project-img-wrapper">
        <img src={image} alt={title} className="project-img" />
      </div>

     
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

  
        <div className="tech-tags">
          {tags && tags.map((tag, index) => {
            const { icon, color } = getTagDetails(tag);
            return (
              <span key={index} className="tag-pill">
                {icon && <span className="tag-icon" style={{ color }}>{icon}</span>}
                {tag}
              </span>
            );
          })}
        </div>

        <div className="project-actions">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-live"
          >
            <FaExternalLinkAlt size={14} /> Live Preview
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-github"
          >
            <FaGithub size={16} /> Code Repos
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
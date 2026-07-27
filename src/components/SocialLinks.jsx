import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const SocialLinks = ({ socials }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaGithub': return <FaGithub />;
      case 'FaLinkedin': return <FaLinkedin />;
      case 'FaEnvelope': return <FaEnvelope />;
      case 'FaFileAlt': return <FaFileAlt />;
      default: return <FaGithub />;
    }
  };

  return (
    <div className="contact-block">
      <h3 className="block-title">links.json</h3>
      <div className="social-grid">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <div className="social-left">
              <span className="social-icon">{getIcon(item.icon)}</span>
              <div className="social-details">
                <span className="social-name">{item.name}</span>
                <span className="social-user">{item.username}</span>
              </div>
            </div>
            <FiArrowUpRight className="arrow-icon" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
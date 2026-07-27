import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const FooterLinks = ({ socials }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaGithub': return <FaGithub />;
      case 'FaLinkedin': return <FaLinkedin />;
      case 'FaEnvelope': return <FaEnvelope />;
      default: return <FaGithub />;
    }
  };

  return (
    <div className="footer-links-wrapper">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="footer-social-card"
        >
          <div className="footer-social-left">
            <span className="footer-social-icon">{getIcon(item.icon)}</span>
            <span className="footer-social-name">{item.name}</span>
          </div>
          <FiArrowUpRight className="footer-arrow-icon" />
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
import React from 'react';
import { footerData } from '../data/footerData';
import FooterLinks from './FooterLinks';
import '../css/Footer.css';

const Footer = () => {
  const { header, terminalMessage, socials, copyright, terminalExit } = footerData;

  return (
    <footer className="footer-container" id="footer">
      <div className="footer-wrapper">
        
      
        <div className="footer-header">
          <p className="path-text">{header.path}</p>
          <h2 className="section-title">{header.file}</h2>
      
        </div>

        <div className="footer-divider"></div>

        <div className="terminal-msg-block">
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="cmd-echo">echo </span>
            <span className="cmd-string">"Thanks for visiting."</span>
          </div>
          <div className="terminal-output">
            {terminalMessage.lines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        <div className="footer-divider"></div>

   
        <FooterLinks socials={socials} />

        <div className="footer-divider"></div>

        <div className="copyright-block">
          <p className="copy-text">
            © {copyright.year} {copyright.name}
          </p>
          <p className="tech-text">{copyright.techStack}</p>
        </div>

        <div className="footer-divider"></div>

   
        <div className="terminal-exit-block">
          <p className="exit-cmd">{terminalExit.command}</p>
          <p className="exit-status">{terminalExit.status}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
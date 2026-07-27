import React from 'react';
import '../css/Hero.css';
import { Mail, Download, Check } from 'lucide-react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


import profileImg from '../assets/images/profileimage.jpeg';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        
        <div className="left-content">
          <div className="work-status">
            <span className="status-dot"></span>
            <p>Available . open to roles & freelance</p>
          </div>

          <div className="desc-wrapper">
            <p className="greeting">// hi, my name is <span>Muhammad Waqas</span></p>
            <h2>Fullstack <span>Developer</span></h2>
            <p className="bio">
              I build responsive and scalable full-stack web applications using the MERN stack, with a focus on clean user experiences, efficient backend architecture, and real-world solutions.
            </p>
          </div>

<div className="action-btns">

  <a 
    href="/Muhammad-Waqas-Resume.pdf" 
    download="Muhammad-Waqas-Resume.pdf"
    className="btn-primary"
  >
    <Download size={16} /> Download Resume
  </a>

  <a 
    href="https://github.com/muhammad-waqas99" 
    target="_blank" 
    rel="noreferrer" 
    className="icon-btn" 
    aria-label="GitHub"
  >
    <FaGithub size={18} />
  </a>

  <a 
    href="mailto:muhammadwaqas.dev99@gmail.com" 
    className="icon-btn" 
    aria-label="Mail"
  >
    <Mail size={18} />
  </a>

  <a 
    href="https://www.linkedin.com/in/waqas-fullstack/" 
    target="_blank" 
    rel="noreferrer" 
    className="icon-btn" 
    aria-label="LinkedIn"
  >
    <FaLinkedinIn size={18} />
  </a>

</div>
        </div>

      
        <div className="right-content">
          <div className="window-card">
        
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">waqas.jpg</span>
            </div>

        
            <div className="image-container">
           
              <img src={profileImg} alt="Muhammad Waqas" className="profile-img" />
              
       
              <div className="glass-overlay">
                <div className="check-badge">
                  <Check size={18} />
                </div>
                <div className="overlay-text">
                  <h4>Muhammad Waqas</h4>
                  <p>Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
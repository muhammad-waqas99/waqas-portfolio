import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import { FileText, Braces, FolderGit2, Terminal, Menu, X, File } from 'lucide-react';
import ResumeModal from './ResumeModal';

const Navbar = ({ activeTab = 'about', setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  
  useEffect(() => {
    const sections = ['hero', 'stack', 'about', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.replace('section-', '');
          if (setActiveTab) {
            setActiveTab(sectionId);
          }
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(`section-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveTab]);

  const handleTabClick = (tabName) => {
    if (tabName === 'resume') {
      setShowResume(true);
      setIsOpen(false);
      return;
    }

    if (setActiveTab) {
      setActiveTab(tabName);
    }
    setIsOpen(false);

    const sectionElement = document.getElementById(`section-${tabName}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-container">
          
          <button 
            className="hamburger-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            type="button"
          >
            <div className="hamburger-left">
              {isOpen ? <X size={18} /> : <Menu size={18} />}
              <span>EXPLORER</span>
            </div>
            <span className="current-tab-name">{activeTab}</span>
          </button>

          <ul className={`nav-ls ${isOpen ? 'open' : ''}`}>

            <li className={activeTab === 'stack' ? 'active' : ''}>
              <button onClick={() => handleTabClick('stack')} type="button">
                <Braces className="file-icon icon-json" />
                <span>stack.json</span>
              </button>
            </li>

            <li className={activeTab === 'about' ? 'active' : ''}>
              <button onClick={() => handleTabClick('about')} type="button">
                <FileText className="file-icon icon-md" />
                <span>about.md</span>
              </button>
            </li>

            <li className={activeTab === 'projects' ? 'active' : ''}>
              <button onClick={() => handleTabClick('projects')} type="button">
                <FolderGit2 className="file-icon icon-folder" />
                <span>projects/</span>
              </button>
            </li>

            <li className={activeTab === 'contact' ? 'active' : ''}>
              <button onClick={() => handleTabClick('contact')} type="button">
                <Terminal className="file-icon icon-sh" />
                <span>contact.sh</span>
              </button>
            </li>

            <li>
              <button onClick={() => handleTabClick('resume')} type="button">
                <File className="file-icon icon-pdf" />
                <span>resume.pdf</span>
              </button>
            </li>

          </ul>
        </div>
      </nav>

   
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
};

export default Navbar;
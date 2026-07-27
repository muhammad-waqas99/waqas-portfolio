import React, { useState } from 'react';
import '../css/Navbar.css';
import { FileText, Braces, FolderGit2, Terminal, Menu, X } from 'lucide-react';

const Navbar = ({ activeTab = 'about', setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tabName) => {
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

          <li className={activeTab === 'projects' ? 'active' : ''}>
            <button onClick={() => handleTabClick('projects')} type="button">
              <FolderGit2 className="file-icon icon-folder" />
              <span>projects/</span>
            </button>
          </li>
          <li className={activeTab === 'about' ? 'active' : ''}>
            <button onClick={() => handleTabClick('about')} type="button">
              <FileText className="file-icon icon-md" />
              <span>about.md</span>
            </button>
          </li>
          <li className={activeTab === 'contact' ? 'active' : ''}>
            <button onClick={() => handleTabClick('contact')} type="button">
              <Terminal className="file-icon icon-sh" />
              <span>contact.sh</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { aboutData } from '../../data/aboutData';
import DeveloperConfig from '../DeveloperConfig';
import QuickInfo from './QuickInfo';
import JourneyTimeline from './JourneyTimeline';
import EducationCard from './EducationCard';
import '../../css/About.css';

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-wrapper">
   
        <div className="about-header">
          <p className="path-text">{aboutData.header.path}</p>
          <h2 className="section-title">
            {aboutData.header.file}
          </h2>
          <p className="section-subtitle">{aboutData.header.description}</p>
        </div>

        <div className="divider"></div>

  
        <div className="bio-wrapper">
          {aboutData.bio.map((paragraph, idx) => (
            <p key={idx} className="bio-paragraph">{paragraph}</p>
          ))}
        </div>

        <div className="divider"></div>

  
        <DeveloperConfig config={aboutData.developerConfig} />

        <div className="divider"></div>


        <QuickInfo infoData={aboutData.quickInfo} />

        <div className="divider"></div>


        <JourneyTimeline timelineData={aboutData.timeline} />

        <div className="divider"></div>

        <EducationCard education={aboutData.education} />

        <div className="divider"></div>


        <div className="closing-quote">
          <p>{aboutData.closingQuote}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { skillsData } from '../../data/skills';
import SkillCard from './SkillCard';
import '../../css/Skills.css';

const Skills = () => {
  return (
    <section className="skills-container">

      <div className="skills-header">
        <p className="path-text">~/stack.json</p>
        <h2 className="section-title">
          skills <span>&#123;&#125;</span>
        </h2>
      </div>

      <div className="cards-wrapper">
        {skillsData.map((catGroup) => (
          <SkillCard
            key={catGroup.category}
            category={catGroup.category}
            skills={catGroup.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
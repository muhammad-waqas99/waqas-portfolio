import React from 'react';
import SkillItem from './SkillItem';

const SkillCard = ({ category, skills }) => {
  return (
    <div className="skill-card">
      <div className="card-header">
        <span className="category-title">{category} &#123;&#125;</span>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillItem key={`${skill.name}-${index}`} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
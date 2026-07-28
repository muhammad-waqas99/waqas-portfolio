import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';

const SkillItem = ({ name, icon, color }) => {
  const renderIcon = (iconName) => {
    const IconComponent = FaIcons[iconName] || SiIcons[iconName] || TbIcons[iconName];
    if (IconComponent) {
      return <IconComponent size={20} style={{ color: color }} />;
    }
    return <FaIcons.FaCode size={20} style={{ color: color }} />;
  };

  return (
    <div className="skill-item">
      <div className="icon-wrapper" style={{ '--icon-color': color }}>
        {renderIcon(icon)}
      </div>
      <span className="skill-name">{name}</span>
    </div>
  );
};

export default SkillItem;
import React from 'react';
import { FaCode, FaMapMarkerAlt, FaLayerGroup, FaBriefcase } from 'react-icons/fa';

const QuickInfo = ({ infoData }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaCode': return <FaCode />;
      case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
      case 'FaLayerGroup': return <FaLayerGroup />;
      case 'FaBriefcase': return <FaBriefcase />;
      default: return <FaCode />;
    }
  };

  return (
    <div className="about-block">
      <h3 className="block-title">quick-info.json</h3>
      <div className="quick-info-grid">
        {infoData.map((item, index) => (
          <div key={index} className="info-card">
            <div className="info-card-header">
              <span className="info-icon">{getIcon(item.icon)}</span>
              <span className="info-title">{item.title}</span>
            </div>
            <p className="info-value">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickInfo;
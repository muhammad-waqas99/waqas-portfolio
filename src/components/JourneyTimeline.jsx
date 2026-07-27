import React from 'react';

const JourneyTimeline = ({ timelineData }) => {
  return (
    <div className="about-block">
      <h3 className="block-title">journey.log</h3>
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
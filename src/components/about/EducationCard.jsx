import React from 'react';

const EducationCard = ({ education }) => {
  const entries = Object.entries(education);

  return (
    <div className="about-block">
      <h3 className="block-title">education.json</h3>
      <div className="code-card">
        <span className="bracket">&#123;</span>
        <div className="code-content">
          {entries.map(([key, value], index) => (
            <div key={key} className="code-line multiline">
              <span className="json-key">"{key}"</span>
              <span className="json-colon">: </span>
              <span className="json-value-string">"{value}"</span>
              {index < entries.length - 1 && <span className="json-comma">,</span>}
            </div>
          ))}
        </div>
        <span className="bracket">&#125;</span>
      </div>
    </div>
  );
};

export default EducationCard;
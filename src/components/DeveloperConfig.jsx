import React from 'react';

const DeveloperConfig = ({ config }) => {
  const entries = Object.entries(config);

  return (
    <div className="about-block">
      <h3 className="block-title">developer.config</h3>
      <div className="code-card">
        <span className="bracket">&#123;</span>
        <div className="code-content">
          {entries.map(([key, value], index) => (
            <div key={key} className="code-line">
              <span className="json-key">"{key}"</span>
              <span className="json-colon">: </span>
              <span className="json-value-boolean">{String(value)}</span>
              {index < entries.length - 1 && <span className="json-comma">,</span>}
            </div>
          ))}
        </div>
        <span className="bracket">&#125;</span>
      </div>
    </div>
  );
};

export default DeveloperConfig;
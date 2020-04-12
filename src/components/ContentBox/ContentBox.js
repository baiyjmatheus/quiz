import React from 'react';

import './ContentBox.css';

const ContentBox = ({subtitle, content}) => {
  return (
    <div id="content-box">
      <div id="subtitle-container">
        <h3 className="content-subtitle">{subtitle}</h3>
      </div>
      <div id="content">
        {content}
      </div>
    </div>
  );
};

export default ContentBox;

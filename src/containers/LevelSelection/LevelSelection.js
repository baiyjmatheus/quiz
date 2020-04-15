import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import ContentBox from '../../components/ContentBox/ContentBox';

import './LevelSelection.css';

const LevelSelection = () => {
  const content = (
    <div id="level-selection-container">
      <Link to="/game/level1">
        <button className="btn btn-lg btn-success">Level 1</button>
      </Link>
    </div>
  );

  return (
    <div id="app-wrapper">
      <div id="main-content">
        <Title />
        <ContentBox
          subtitle="Choose your level"
          content={content}
        />
      </div>
      <div id="sidebar">
        <img className="squared-img" src={process.env.PUBLIC_URL + "/img/ready.png"} alt="Ready?" />
      </div>
    </div>
  );
};

export default LevelSelection;

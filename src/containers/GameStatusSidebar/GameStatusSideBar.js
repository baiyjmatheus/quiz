import React from 'react';

import './GameStatusSideBar.css';

const GameStatusSideBar = ({points, currentQuestionCounter, totalQuestionsNumber}) => {
  return (
    <div id="game-status-sidebar">
      <p>
        Question<br/>
        {currentQuestionCounter}/{totalQuestionsNumber}
      </p>
      <p>
        Right answers<br/>
        {points}
      </p>
    </div>
  );
}

export default GameStatusSideBar;

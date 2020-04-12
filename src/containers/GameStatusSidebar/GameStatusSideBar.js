import React from 'react';

import './GameStatusSideBar.css';

const GameStatusSideBar = ({points, currentQuestionCounter, totalQuestionsNumber}) => {
  return (
    <div id="game-status-sidebar">
      <p>Question: {currentQuestionCounter}/{totalQuestionsNumber}</p>
      <p>Right answers: {points}</p>
    </div>
  );
}

export default GameStatusSideBar;

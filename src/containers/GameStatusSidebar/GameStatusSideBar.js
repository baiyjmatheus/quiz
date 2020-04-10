import React from 'react';

const GameStatusSideBar = ({points, currentQuestionCounter, totalQuestionsNumber}) => {
  return (
    <div id="game-status-sidebar">
      <p>Pergunta: {currentQuestionCounter}/{totalQuestionsNumber}</p>
      <p>Pontos: {points}</p>
    </div>
  );
}

export default GameStatusSideBar;

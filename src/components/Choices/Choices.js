import React from 'react';

import './Choices.css';

const Choices = ({choices, selectedAnswer, handleChoiceSelection, handleAnswerSubmission, isAnswered}) => {
  const choicesRadio = choices.map(choice => {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="choices"
          value={choice}
          onChange={handleChoiceSelection}
          checked={selectedAnswer === choice}
        />
        <label className="form-check-label">
          { choice }
        </label>
      </div>
    );
  });
  
  return (
    <div id='choices'>
      <form onSubmit={handleAnswerSubmission}>
        { choicesRadio }
        {
          selectedAnswer !== null &&
          !isAnswered &&
          <button className="btn btn-lg btn-primary" type="submit">Enviar resposta</button>
        }
      </form>
    </div>
  );
};

export default Choices;

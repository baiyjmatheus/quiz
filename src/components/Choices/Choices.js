import React from 'react';

class Choices extends React.Component {
  render() {
    const {
      choices,
      selectedAnswer,
      handleChoiceSelection,
      handleAnswerSubmission,
      isAnswered
    } = this.props;

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
          { !isAnswered && <button type="submit">Enviar resposta</button> }
        </form>
      </div>
    );
  }
}

export default Choices;

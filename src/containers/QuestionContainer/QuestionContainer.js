import React from 'react';

import Question from '../../components/Question/Question';
import Choices from '../../components/Choices/Choices';

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null,
      isAnswered: false,
    }
  }

  handleChoiceSelection = (e) => {
    this.setState({
      selectedAnswer: e.target.value
    });
  }

  render() {
    const {
      questionDescription,
      choices,
      correctResultMessage,
      wrongAnswerMessage,
    } = this.props.question;
    const { isAnswerCorrect } = this.props;
    
    return(
      <div id="question-container">
        <Question questionDescription={questionDescription} />
        <Choices
          choices={choices}
          handleChoiceSelection={this.handleChoiceSelection}
          handleAnswerSubmission={this.props.handleAnswerSubmission}
          selectedAnswer={this.state.selectedAnswer}
          isAnswered={this.state.isAnswered}
        />
        {
          isAnswerCorrect !== null && 
          <div>
            <p>
              { isAnswerCorrect ? correctResultMessage : wrongAnswerMessage }
            </p>
          </div>
        }
      </div>
    );
  }
};

export default QuestionContainer;

import React from 'react';

import Question from '../../components/Question/Question';
import Choices from '../../components/Choices/Choices';
import { Link } from 'react-router-dom';

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null,
      isAnswerCorrect: null,
      isAnswered: false,
    }
  }

  handleChoiceSelection = (e) => {
    this.setState({
      selectedAnswer: e.target.value
    });
  }

  handleAnswerSubmission = (e) => {
    e.preventDefault();
    const { question, increasePoint } = this.props;
    this.setState({
      isAnswerCorrect: this.state.selectedAnswer === question.correctAnswer,
      isAnswered: true,
    });
    if (this.state.selectedAnswer === question.correctAnswer) {
      increasePoint();
    }
  }

  handleNextQuestion = () => {
    this.setState({
      selectedAnswer: null,
      isAnswerCorrect: null,
      isAnswered: false,
    });
    this.props.goToNextQuestion();
  }

  render() {
    const {
      questionDescription,
      choices,
      correctResultMessage,
      wrongAnswerMessage,
    } = this.props.question;
    const { isLastQuestion, points } = this.props;
    const { isAnswerCorrect } = this.state;
    const proceedBtn = isLastQuestion
      ? <Link to={{
        pathname: "/result",
        aboutProps: {
          points,
        },
      }}><button>Finalizar</button></Link>
      : <button onClick={this.handleNextQuestion}>Proxima pergunta</button>

    return(
      <div id="question-container">
        <Question questionDescription={questionDescription} />
        <Choices
          choices={choices}
          handleChoiceSelection={this.handleChoiceSelection}
          handleAnswerSubmission={this.handleAnswerSubmission}
          selectedAnswer={this.state.selectedAnswer}
          isAnswered={this.state.isAnswered}
        />
        {
          isAnswerCorrect !== null && 
          <div>
            <p>
              { isAnswerCorrect ? correctResultMessage : wrongAnswerMessage }
            </p>
            { proceedBtn }
          </div>
        }
      </div>
    );
  }
};

export default QuestionContainer;

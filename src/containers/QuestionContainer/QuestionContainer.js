import React from 'react';

import Choices from '../../components/Choices/Choices';

import { Link } from 'react-router-dom';

import './QuestionContainer.css';

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

  handleAnswerSubmission = (e) => {
    e.preventDefault();
    const { question, increasePoint, setIsAnswerCorrect } = this.props;
    const isAnswerCorrect = this.state.selectedAnswer === question.correctAnswer;
    setIsAnswerCorrect(isAnswerCorrect)
    this.setState({
      isAnswerCorrect,
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
    } = this.props.question;
    const { isLastQuestion, points, totalQuestions } = this.props;
    const { selectedAnswer, isAnswered } = this.state;
    const proceedBtn = isLastQuestion
      ? <Link to={{
        pathname: "/result",
        aboutProps: {
          points,
          totalQuestions,
        },
      }}><button className="btn btn-lg btn-success">Finalizar</button></Link>
      : <button className="btn btn-lg btn-primary" onClick={this.handleNextQuestion}>Proxima pergunta</button>

    return(
      <div id="question-container">
        <p className="question-description">{questionDescription}</p>

        <Choices
          choices={choices}
          handleChoiceSelection={this.handleChoiceSelection}
          handleAnswerSubmission={this.handleAnswerSubmission}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
        />
        {
          isAnswered && 
          <div>
            { proceedBtn }
          </div>
        }
      </div>
    );
  }
};

export default QuestionContainer;

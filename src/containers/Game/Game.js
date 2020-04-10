import React from 'react';

import QuestionContainer from '../QuestionContainer/QuestionContainer';
import GameStatusSideBar from '../GameStatusSidebar/GameStatusSideBar';
import { Redirect } from 'react-router-dom';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLastQuestion: false,
      points: 0,
      currentQuestion: 0,
      isAnswered: false,
      isAnswerCorrect: null,
    }    
  }

  toggleIsLastQuestion = () => {
    this.setState(prevState => ({
      isLastQuestion: !prevState.isLastQuestion,
    }));
  }

  increasePoint = () => {
    this.setState(prevState => ({
      points: prevState.points + 1,
    }));
  }

  goToNextQuestion = () => {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + 1,
      selectedAnswer: null,
      isAnswerCorrect: null,
      isAnswered: false,
    }), () => {
      if (this.state.currentQuestion === this.props.questions.length - 1) {
        this.toggleIsLastQuestion();
      }
    });
  }

  handleAnswerSubmission = (e) => {
    e.preventDefault();
    const question = this.props.questions[this.state.currentQuestion];
    const isAnswerCorrect = this.state.selectedAnswer === question.correctAnswer
    this.setState({
      isAnswerCorrect,
      isAnswered: true,
    });
    if (isAnswerCorrect) {
      this.increasePoint();
    }
  }

  render() {
    const { currentQuestion, points, isLastQuestion, isAnswered, isAnswerCorrect } = this.state;
    const question = this.props.questions[this.state.currentQuestion];
    return (
      <div id="game-container">
        <QuestionContainer 
          question={question}
          increasePoint={this.increasePoint}
          isLastQuestion={isLastQuestion}
          points={points}
          handleAnswerSubmission={this.handleAnswerSubmission}
          isAnswerCorrect={isAnswerCorrect}
        />
        <GameStatusSideBar
          points={points}
          currentQuestionCounter={currentQuestion + 1}
          totalQuestionsNumber={this.props.questions.length}
        />
        {
          isAnswered &&
          <button onClick={this.goToNextQuestion}>{isLastQuestion ? "Finalizar" : "Proxima pergunta"}</button>
        }
      </div>
    );
  }
}

export default Game;

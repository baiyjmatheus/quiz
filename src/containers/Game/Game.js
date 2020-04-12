import React from 'react';

import QuestionContainer from '../QuestionContainer/QuestionContainer';
import GameStatusSideBar from '../GameStatusSidebar/GameStatusSideBar';
import questions from './questions';

class Game extends React.Component {
  constructor(props) {
    super(props);
    const { level } = this.props.match.params;
    this.state = {
      isLastQuestion: false,
      points: 0,
      currentQuestion: 0,
      questions: questions[level],
    };
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
    }), () => {
      if (this.state.currentQuestion === this.props.questions.length - 1) {
        this.toggleIsLastQuestion();
      }
    });
  }

  render() {
    const { questions, currentQuestion, points, isLastQuestion } = this.state;
    const question = questions[currentQuestion];
    return (
      <div id="game-container">
        <QuestionContainer 
          question={question}
          increasePoint={this.increasePoint}
          goToNextQuestion={this.goToNextQuestion}
          isLastQuestion={isLastQuestion}
          points={points}
        />
        <GameStatusSideBar
          points={points}
          currentQuestionCounter={currentQuestion + 1}
          totalQuestionsNumber={questions.length}
        />
      </div>
    );
  }
}

export default Game;

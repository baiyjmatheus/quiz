import React from 'react';

import QuestionContainer from '../QuestionContainer/QuestionContainer';
import GameStatusSideBar from '../GameStatusSidebar/GameStatusSideBar';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLastQuestion: false,
      points: 0,
      currentQuestion: 0,
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
    }), () => {
      if (this.state.currentQuestion === this.props.questions.length - 1) {
        this.toggleIsLastQuestion();
      }
    });
  }

  render() {
    const { currentQuestion, points, isLastQuestion } = this.state;
    const question = this.props.questions[this.state.currentQuestion];
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
          totalQuestionsNumber={this.props.questions.length}
        />
      </div>
    );
  }
}

export default Game;

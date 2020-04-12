import React from 'react';

import Title from '../../components/Title/Title';
import ContentBox from '../../components/ContentBox/ContentBox';
import QuestionContainer from '../QuestionContainer/QuestionContainer';
import GameStatusSideBar from '../GameStatusSidebar/GameStatusSideBar';
import MessageBox from '../../components/MessageBox/MessageBox';
import questions from './questions';

import './Game.css';

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
      if (this.state.currentQuestion === this.state.questions.length - 1) {
        this.toggleIsLastQuestion();
      }
    });
  }

  render() {
    const { questions, currentQuestion, points, isLastQuestion } = this.state;
    const question = questions[currentQuestion];

    const content = (
      <QuestionContainer 
        question={question}
        increasePoint={this.increasePoint}
        goToNextQuestion={this.goToNextQuestion}
        isLastQuestion={isLastQuestion}
        totalQuestions={questions.length}
        points={points}
      />
    );


    return (
      <div id="app-wrapper">
        <div id="main-content">
          <Title />
          <ContentBox
            subtitle={question.title}
            content={content}
          />
          <MessageBox
            isAnswerCorrect={true}
            correctResultMessage={"correctResultMessage"}
            solution={"correctAnswer"}
          />
        </div>
        <div id="sidebar">
          <GameStatusSideBar
            points={points}
            currentQuestionCounter={currentQuestion + 1}
            totalQuestionsNumber={questions.length}
          />
        </div>
      </div>
    );
  }
}

export default Game;

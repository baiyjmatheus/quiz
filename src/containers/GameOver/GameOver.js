import React from 'react';
import Title from '../../components/Title/Title';
import ContentBox from '../../components/ContentBox/ContentBox';
import { Link } from 'react-router-dom';

const GameOver = (props) => {
  const { points, totalQuestions } = props.location.aboutProps;

  const playerWin = points >= totalQuestions / 2;

  const contentMessage = playerWin
    ? <p>Excellent! You hit { points } questions out of { totalQuestions }! Let's keep learning?</p>
    : <p>What a pity! A little complicated, isn't it ? But, step by step, you will understand the difference and learn the Portuguese. Which is a wonderful language!</p>;

  const content = (
    <div>
      { contentMessage }
      <Link to="/level-selection">
        <button className="btn btn-lg btn-primary">Play again</button>
      </Link>
    </div>
  );

  const img = playerWin
    ? <img className="squared-img" src={process.env.PUBLIC_URL + "/img/congrats.png"} alt="Congrats" />
    : <img className="squared-img" src={process.env.PUBLIC_URL + "/img/facepalm.png"} alt="Facepalm" />;

  return (
    <div id="app-wrapper">
      <div id="main-content">
        <Title />
        <ContentBox
          subtitle="Choose your level"
          content={content}
        />
      </div>
      <div id="sidebar">
        { img }
      </div>
    </div>
  );
}

export default GameOver;

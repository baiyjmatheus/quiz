import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import ContentBox from '../../components/ContentBox/ContentBox';

const Welcome = () => {
  const content = (
    <div>
      <div className="sentence-translated">
        <p>Let's learn how to speak and write in Portuguese correctly!</p>
        <p className="translation">Vamos aprender a falar e escrever <span className="bold">Português</span>corretamente!</p>
      </div>
      <div className="sentence-translated">
        <p>Let's go!</p>
        <p className="translation">Vamos lá!</p>
      </div>
      <Link to="/fun-fact">
        <button className="btn btn-lg btn-primary">Next</button>
      </Link>
    </div>
  );

  return (
    <div id="app-wrapper">
      <div id="main-content">
        <Title />
        <ContentBox
          subtitle="Welcome"
          content={content}
        />
      </div>
      <div id="sidebar">
        <img className="squared-img" src={process.env.PUBLIC_URL + "/img/hi.png"} alt="Hi" />
      </div>
    </div>
  );
};

export default Welcome;

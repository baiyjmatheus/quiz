import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import ContentBox from '../../components/ContentBox/ContentBox';

const Welcome = () => {
  const content = (
    <div>
      <div className="sentence-translated">
        <p>The language spoken in Brazil is Portuguese.</p>
        <p className="translation">O idioma que se fala no Brasil é o <span className="bold">Português</span>.</p>
      </div>
      <div className="sentence-translated">
        <p>Due the portuguese colonization, Brazil has adopted portuguese as their language.</p>
        <p className="translation">Devido a colonização portuguesa, o Brasil adotou o português como seu idioma.</p>
      </div>
      <div className="sentence-translated">
        <p>However, brazilian Portuguese is slightly different from Portugal's, ok?</p>
        <p className="translation">Mas o <span className="bold">Português</span> brasileiro é um pouco diferente de Portugal, ok?</p>
      </div>
      <div className="sentence-translated">
        <p>Let's start learning?</p>
        <p className="translation">Vamos começar a aprender?</p>
      </div>
      <Link to="/game">
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
        <img className="squared-img" src="/img/reading.png" alt="See you in class" />
      </div>
    </div>
  );
};

export default Welcome;

import React from 'react';
import { Link } from 'react-router-dom';

import './StartingPage.css';

const StartingPage = () => {
  return (
    <div id='starting-page'>
      <img className="squared-img" src={process.env.PUBLIC_URL + '/img/see-you-in-class.png'} alt="See you in class"/>
      <h1 className='title'>Do you speak <span className="highlighted">Português</span>?</h1>
      <h6 className="sub-title">by: Inês Kim</h6>
      <Link to="/welcome">
        <button className='btn btn-primary'>
          Começar
        </button>
      </Link>
    </div>
  );
};

export default StartingPage;

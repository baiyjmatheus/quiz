import React from 'react';
import { Link } from 'react-router-dom';

import './StartingPage.css';

const StartingPage = () => {
  return (
    <div id='starting-page'>
      <h1 class='title'>Do you speak Português?</h1>
      <Link to="/game">
        <button class='btn btn-primary'>
          Começar
        </button>
      </Link>
    </div>
  );
};

export default StartingPage;

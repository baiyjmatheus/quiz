import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import questions from './questions';

import StartingPage from './containers/StartingPage/StartingPage';
import Game from './containers/Game/Game';
import GameOver from './containers/GameOver/GameOver';
import Welcome from './containers/Welcome/Welcome';

const App = () => {
  return (
    <Router>
      <Switch>
          <Route path="/result" component={GameOver} />
          <Route path="/game">
            <Game questions={questions} />
          </Route>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/">
            <StartingPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

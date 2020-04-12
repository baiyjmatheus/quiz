import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import StartingPage from './containers/StartingPage/StartingPage';
import Game from './containers/Game/Game';
import GameOver from './containers/GameOver/GameOver';
import Welcome from './containers/Welcome/Welcome';
import FunFact from './containers/FunFact/FunFact';
import LevelSelection from './containers/LevelSelection/LevelSelection';

const App = () => {
  return (
    <Router>
      <Switch>
          <Route path="/result" component={GameOver} />
          <Route path="/game/:level" component={Game} />
          <Route path="/level-selection" component={LevelSelection} />
          <Route path="/fun-fact" component={FunFact} />
          <Route path="/welcome" component={Welcome}/>
          <Route path="/">
            <StartingPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

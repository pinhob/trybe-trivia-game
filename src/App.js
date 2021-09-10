import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Ranking from './components/Ranking';

import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Trivia from './pages/Trivia';

export default function App() {
  const state = useSelector((s) => s);

  useEffect(() => {
    console.log(
      state.player.score && localStorage.setItem('state', JSON.stringify(state)),
    );
  }, [state]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/trivia" component={ Trivia } />
          <Route path="/settings" component={ Settings } />
          <Route path="/feedback" component={ Feedback } />
          <Route path="/ranking" component={ Ranking } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

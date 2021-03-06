import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
import Ranking from './pages/Ranking';

import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Trivia from './pages/Trivia';
import GlobalStyle from './shared/GlobalStyles';

// import GlobalStyle from './components/Styled/GlobalStyle';

export default function App() {
  const state = useSelector((s) => s);

  function setStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  useEffect(() => {
    if (state.player !== undefined) {
      setStorage('state', state);
      setStorage('ranking', state.ranking);
    }
    // state.player.score ? localStorage.setItem(
    //   'ranking', JSON.stringify(state.ranking),
    // ) : null;
  }, [state]);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/trivia" component={ Trivia } />
          <Route path="/settings" component={ Settings } />
          <Route path="/feedback" component={ Feedback } />
          <Route path="/ranking" component={ Ranking } />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

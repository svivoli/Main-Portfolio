import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Error from './pages/Error';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

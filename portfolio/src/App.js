import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

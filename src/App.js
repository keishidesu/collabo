
import Auth from './components/Auth';
import Home from './components/home';
import Task from './components/Task';
import Schedule from './components/Schedule';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/task">
          <Task />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}
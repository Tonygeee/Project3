import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from '../src/pages/Main';
import LoginPage from '../src/pages/Login';
import NoMatch from '../src/pages/Login';
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/loggedin" component={MainPage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;

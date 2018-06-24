import React, { Component } from 'react';
// import Login from './components/Login';
import ProfileForm from './components/ProfileForm';
import Header from './components/Header'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProfileForm />
      </div>
    );
  }
}

export default App;

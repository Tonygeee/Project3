import React, { Component } from 'react';
// import Login from './components/Login';
import ProfileForm from './components/ProfileForm';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserCard from './components/UserCard';
import Menu from './components/Menu';
import Main from './components/Main';
import ConnectionCard from './components/ConnectionCard';
// import ChatContainer from './components/ChatContainer';
// import ChatScreen from './components/ChatScreen';
// import ChatTitle from './components/ChatTitle';
// import MessageFrom from './components/MessageFrom';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header className="item1" />
        <Sidebar className="item2">
          <UserCard />
          <Menu />
        </Sidebar>
        <Main className="item3">
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
        </Main>
        {/* <ChatContainer>
          <ChatTitle />
          <ChatScreen />
          <MessageFrom />
        </ChatContainer> */}
      </div>
    );
  }
}

export default App;

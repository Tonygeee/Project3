import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import UserCard from '../../components/UserCard';
import Menu from '../../components/Menu';
import Main from '../../components/Main';
import ConnectionCard from '../../components/ConnectionCard';
import ChatContainer from '../../components/ChatContainer';
import ChatScreen from '../../components/ChatScreen';
import ChatTitle from '../../components/ChatTitle';
import MessageForm from '../../components/MessageForm';

const instanceLocator = "v1:us1:9444a659-fe48-4c3c-b739-9445db574fcd"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/9444a659-fe48-4c3c-b739-9445db574fcd/token"
const username = "test123"
const roomId = 10348859
const isLoggedIn = true

class MainPage extends Component {

    constructor() {
    super()
    this.state = {
      messages: []
    }
    console.log(this.state);
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    })

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.currentUser.subscribeToRoom({
          roomId: roomId,
          hooks: {
            onNewMessage: message => {

              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: roomId
    })
  }

  render () {
    return (
        <div className="grid-container">
            <Header className="item1" />
            <Sidebar className="item2">
                <UserCard />
                <Menu />
                <ChatContainer>
                    <ChatTitle />
                    <ChatScreen
                        roomId={this.state.roomId}
                        messages={this.state.messages} />
                    <MessageForm
                        sendMessage={this.sendMessage} />
                </ChatContainer>
            </Sidebar>
            <Main className="item3">
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
            </Main>
        </div>
    )
  }
}

export default MainPage;
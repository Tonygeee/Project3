import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit';
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
import { EventList, EventListItem } from "../../components/EventList";
import API from '../../utils/API';

const instanceLocator = "v1:us1:9444a659-fe48-4c3c-b739-9445db574fcd"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/9444a659-fe48-4c3c-b739-9445db574fcd/token"
console.log(typeof testToken);
class MainPage extends Component {

  constructor() {
    super()
    this.state = {
      messages: [],
      friends: [],
      user: {},
      eventId: "",
      events: {},
      zipCode: "",
      searchTerm: "",
      // roomId: 10348859
    }
    // console.log(this.state);
    // this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    API.getProfiles()
      .then(res => {
        console.log(res.data[1].events);
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err));

    console.log(localStorage.getItem("userName"));

    API.getProfile(localStorage.getItem("userName"))
      .then(res => {
        console.log(res.data[0]);
        this.setState({
          user: {
            image: res.data[0].image,
            userName: res.data[0].userName,
            bio: res.data[0].bio
          }
        })
        console.log(this.state.user.userName);
      })
      .catch(err => console.log(err));

  }

  // sendMessage(text) {
  //   this.currentUser.sendMessage({
  //     text,
  //     roomId: this.state.roomId
  //   })
  // }

  // createChat = event => {
  //   event.preventDefault();
  //   const chatManager = new ChatManager({
  //     instanceLocator: instanceLocator,
  //     userId: localStorage.getItem("userName"),
  //     tokenProvider: new TokenProvider({ url: testToken })
  //   })

  //   chatManager.connect()
  //     .then(currentUser => {
  //       this.currentUser = currentUser
  //       currentUser.createRoom({
  //         name: 'general',
  //         private: true,
  //         addUserIds: ['craig', 'kate']
  //       }).then(room => {
  //         console.log(`Created room called ${room.name}`)
  //       })
  //         .catch(err => {
  //           console.log(`Error creating room ${err}`)
  //         })

  //       this.currentUser.subscribeToRoom({
  //         roomId: this.state.roomId,
  //         hooks: {
  //           onNewMessage: message => {

  //             this.setState({
  //               messages: [...this.state.messages, message]
  //             })
  //           }
  //         }
  //       })
  //     })
  // }

  //handlers
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get events update the events state
    event.preventDefault();
    API.getEvents(this.state.zipCode)
      .then(res => this.setState({ events: res.data._embedded.events }))
      .catch(err => console.log(err));
  };


  findFriends = event => {
    event.preventDefault();
    //reset state.friends to everyone
    API.getProfiles()
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        })
        console.log(this.state.friends)
      })
      .catch(err => console.log(err));
    //check if event exists already
    let i = event.target.dataset.index;
    console.log(this.state.events[i].id);
    API.checkForEvent(this.state.events[i].id.trim())
      .then(async (res) => {
        console.log(res.data);
        if (!res.data.length) {
          console.log("no matching event found");
          let eventInfo = {
            eventName: this.state.events[i].name.trim(),
            eventId: this.state.events[i].id.trim(),
            url: this.state.events[i].url.trim(),
            image: this.state.events[i].images[0].url,
            startDateTime: this.state.events[i].dates.start.dateTime,
            venue: this.state.events[i]._embedded.venues[0].name,
            localDate: this.state.events[i].dates.start.locaDate,
            localTime: this.state.events[i].dates.start.localTime,
          }
          console.log(res.data);
          const eventRes = await API.saveEvent(eventInfo);
          console.log(this.state.user.userName);
          const userID = await API.getProfile(this.state.user.userName);
          this.setState({ eventID: eventRes.data._id })

          console.log(this.state.eventID);
          console.log(userID.data[0]._id);

          API.addEventToUser(this.state.eventID, userID.data[0]._id)
            .then(res => console.log(res))
            .catch(err => console.log(err));

          API.addUserToEvent(userID.data[0]._id, this.state.eventID)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        } else {
          console.log("Matching event found");
          console.log(res.data[0]._id);
          this.setState({ eventID: res.data[0]._id })
          console.log(this.state.user.userName)
          const userID = await API.getProfile(this.state.user.userName);

          console.log(this.state.eventID);
          console.log(userID.data[0].events);

          if (userID.data[0].events.indexOf(this.state.eventID) < 0) {
            console.log("event id not found in user events")
            const addEvent = await API.addEventToUser(this.state.eventID, userID.data[0]._id)
              .then(res => console.log(res))
              .catch(err => console.log(err));

            const addUser = await API.addUserToEvent(userID.data[0]._id, this.state.eventID)
              .then(res => console.log(res))
              .catch(err => console.log(err));

            console.log(addEvent);
            console.log(addUser);
          }
        }

        const eventRes = await API.checkForEvent(this.state.events[i].id.trim());
        console.log(eventRes.data[0]._id);
        console.log(this.state.friends[1].events)
        console.log(this.state.friends[1].events.indexOf(eventRes.data[0]._id));
        let friends = this.state.friends.filter(friend => friend.events.indexOf(eventRes.data[0]._id) > -1);
        this.setState({ friends });
        console.log(this.state.friends);
      })
      .catch(err => console.log(err))
  }

  handleLogOut = event => {
    event.preventDefault();
    console.log("logged out");
    localStorage.removeItem("userName");
  }

  render() {
    return (
      <div className="grid-container">
        <Header className="item1"
          handleClick={this.handleLogOut}
        />
        <Sidebar className="item2">
          <UserCard
            image={this.state.user.image}
            userName={this.state.user.userName}
            bio={this.state.user.bio}
          />
          <Menu onClick={this.findFriends} >
            <div className="panel-heading">
              <h2 className="panel-title">
                Zip Code: <input
                  type="text"
                  name="zipCode"
                  value={this.state.zipCode}
                  onChange={this.handleInputChange}
                />
              </h2>
              {/* <h2 className="panel-title">
                        Search: <input
                            type="text"
                            name="searchTerm"
                            value={this.state.searchTerm}
                            onChange={this.handleInputChange}
                        />
                    </h2> */}
              <button
                onClick={this.handleFormSubmit}
                type="success"
                className="input-lg"
              >Submit</button>
            </div>
            <div className="panel-body">Events
                    {!this.state.events.length ? (
                <h1 className="text-center">We didn't find any events for you</h1>
              ) :
                (
                  <EventList>
                    {this.state.events.map((event, index) => {
                      return (
                        <EventListItem
                          key={index}
                          index={index}
                          title={event.name}
                          url={event.url}
                          venue={event._embedded.venues[0].name}
                          eventDate={event.dates.start.localDate}
                          eventTime={event.dates.start.localTime}
                          onClick={this.findFriends}
                        />
                      );
                    })}
                  </EventList>
                )}
            </div>
          </ Menu>
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
          {this.state.friends.map((friend, index) =>
            <ConnectionCard
              key={index}
              id={friend.id}
              userName={friend.userName}
              image={friend.image}
              facebookURL={friend.facebookURL}
              instagramURL={friend.instagramURL}
              bio={friend.bio}
              events={friend.events}
              handleConnect={this.createChat}
            />
          )
          }


        </Main>
      </div>
    )
  }
}


export default MainPage;
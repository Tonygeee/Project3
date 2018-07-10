import React from 'react';
import './Menu.css';
import API from '../../utils/API';
import { EventList, EventListItem } from "../EventList";

class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            events: {},
            zipCode: "",
            searchTerm: ""
        };
        console.log(this.state);
    }

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
        //check if event exists already
        let i = event.target.index;
        console.log(event.target.index);
        API.checkForEvent(this.state.events[i].name.trim())
            .then(((res) => {
                if (!res.length) {
                    console.log(event.target);
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
                    API.saveEvent(eventInfo)
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
                } else {
                    console.log(res);
                    // API.addEventToUser(res)
                }
            })
            )



        //add id to users event list

        //add user id to event's user list?

        //filter cards by event's mogodb id
    }

    render() {
        return (
            < div className="panel panel-default" >
                <div className="panel-heading">
                    {/* <h3 className="panel-title">Menu</h3> */}
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
                                    console.log(event)
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
            </div >
        )
    }
}
export default Menu;
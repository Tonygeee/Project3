import React from 'react';
import './Menu.css';
import API from '../../utils/API';
import { EventList, EventListItems } from '../EventList';

class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            events: [],
            postalCode: "",
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
        API.getEvents(this.state.searchTerm)
            .then(res => this.setState({ events: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            < div className="panel panel-default" >
                <div className="panel-heading">
                    <h3 className="panel-title">Menu</h3>
                    <h2 className="panel-title">
                        Zip Code: <input
                            type="text"
                            name="zipCode"
                            value={this.state.zipCode}
                            onChange={this.handleInputChange}
                        />
                    </h2>
                    <h2 className="panel-title">
                        Search: <input
                            type="text"
                            name="searchTerm"
                            value={this.state.searchTerm}
                            onChange={this.handleInputChange}
                        />
                    </h2>
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
                                {this.state.events.map(event => {
                                    return (
                                        <EventListItems
                                            key={event.title}
                                            title={event.title}
                                            href={event.href}
                                            artist={event.ingredients}
                                            thumbnail={event.thumbnail}
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
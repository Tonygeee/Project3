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
            <div>
                <div className="panel panel-default" >
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            Enter Your Zip Code: <input
                                type="text"
                                name="zipCode"
                                value={this.state.event}
                                onChange={this.handleInputChange}
                            />
                        </h2>
                        <button
                            onClick={this.handleFormSubmit}
                            type="success"
                            className="btn-card btn btn-info"
                        >Submit</button>
                    </div>
                    <div className="panel-body">
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;

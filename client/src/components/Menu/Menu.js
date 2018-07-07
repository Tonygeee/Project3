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
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
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
                    {!this.state.events.length ? (
                            <div w-type="event-discovery"
                                w-tmapikey="5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG"
                                w-googleapikey="YOUR_GOOGLE_API_KEY"
                                w-keyword=""
                                w-theme="listview"
                                w-colorscheme="custom"
                                w-width="350" w-height="600"
                                w-size="25" w-border="2"
                                w-borderradius="20"
                                w-postalcode=""
                                w-radius="25"
                                w-period="week"
                                w-layout="vertical"
                                w-attractionid=""
                                w-promoterid=""
                                w-venueid=""
                                w-affiliateid=""
                                w-segmentid=""
                                w-proportion="custom"
                                w-titlelink="off"
                                w-sorting="groupByName"
                                w-id="id_ugaaj6"
                                w-countrycode="US"
                                w-source=""
                                w-backgroundcolor="#ffffff"
                                w-bordercolor="#F5865c"
                                w-countercolor="#ffffff"
                                w-titlehovercolor="#ffffff"
                                w-latlong=""></div>
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
        </div>
        )
    }
}
export default Menu;

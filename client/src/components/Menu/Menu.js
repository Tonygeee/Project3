import React from 'react';
import './Menu.css';

// function Menu() {
//     return (
//         <div className="panel panel-default">
//             <div className="panel-heading">
//                 <h3 className="panel-title">Menu</h3>
//             </div>
//             <div className="events"> </div>
//             <div className="panel-body">Events</div>
//         </div>
//     )
// }
export default class Menu extends React.Component {
    state = {
      events: []
    }
  
    // componentDidMount() {
    //   axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey={NyUgIOdhF4S6fXn0BFIY7Afii13kPKnc}`)
    //     .then(res => {
    //       const persons = res.data;
    //       this.setState({ persons });
    //     })
    // }
  
    render() {
      return (
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      )
    }
  }
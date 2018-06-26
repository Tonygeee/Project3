import React from 'react';
import './ConnectionCard.css'

// I think we need something like whats below to link the card to the database. Not sure so I am commenting out the code...

// class Profiles extends Component {
//   state = {
//     profiles: []
//   };

//   componentDidMount() {
//     this.loadProfiles();
//   }

//   loadProfiles = () => {
//     API.getProfiles()
//       .then(res => this.setState({ profiles: res.data }))
//       .catch(err => console.log(err));
//   };


const ConnectionCard = () => {
    return (
        <div>
            <div className="panel panel-default cCard">
                <div className="panel-heading">
                    <h3 className="panel-title">Potential Connection Name</h3>
                </div>
                <div className="panel-body">
                    <p>Bio and rating</p>
                    <button type="button" className="btn btn-info">Connect</button>
                </div>
            </div>
        </div>
    )
}

export default ConnectionCard;
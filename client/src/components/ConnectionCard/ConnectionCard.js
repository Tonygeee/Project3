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


const ConnectionCard = props => {
    return (
        <div>
         <div className="card">
             <div className="img-container">
                  <img alt={props.userName} src={props.image} />
                  </div>
                      <div className="panel-heading">
                          <h3 className="panel-title"><strong>{props.userName}</strong> </h3>
                      </div>
                            <div className="content">
                                <ul>
                                  <li>
                                    <strong>Facebook:</strong> {props.facebookURL}
                                  </li>
                                  <li>
                                    <strong>Instagram:</strong> {props.instagramURL}
                                  </li>
                                  <li>
                                    <strong>Bio:</strong> {props.bio}
                                  </li>
                                </ul>
                              </div>
                          <button type="button" className="btn btn-info">Connect</button>
                      </div>
                  </div>
        
    )
}

export default ConnectionCard;
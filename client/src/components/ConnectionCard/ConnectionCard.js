import React from 'react';
import './ConnectionCard.css'



const ConnectionCard = props => {
    return (
        <div>
         <div className="card">
             <div className="img-container">
                  <img alt={props.userName} src={props.image} />
                  </div>
                        <div className="content">
                            <ul>
                            <li>
                                <h3 className="panel-title2"><strong>{props.userName}</strong> </h3>
                              </li>
                              <li>
                                <strong>Facebook:</strong> {props.facebookURL}
                              </li>
                              <li>
                                <strong>Instagram:</strong> {props.instagramURL}
                              </li>
                              <li>
                                <strong>Bio:</strong> {props.bio}
                              </li>
                              <li>
                                 <button type="button" className="btn btn-info btn-card text-center">Connect</button>
                              </li>
                            </ul>
                          </div>
                      </div>
                  </div>
        
    )
}

export default ConnectionCard;
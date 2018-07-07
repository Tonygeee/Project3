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
            {props.facebookURL && <li>
              <a href={props.facebookURL}><strong>Facebook</strong> </a>
            </li>}
            {props.instagramURL && <li>
              <a href={props.instagramURL}><strong>Instagram</strong> </a>
            </li>}
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
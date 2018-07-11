import React from 'react';
import './ConnectionCard.css'



const ConnectionCard = props => {
  return (
    <div>
      <div className="card">
        <div className="img-container">
          <img className="center-block" alt={props.userName} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <h3 className="panel-title2"><strong>{props.userName}</strong> </h3>
            </li>
            <div id="connectDiv">
              {props.facebookURL && <li>
                <a href={props.facebookURL}>
                  <img id="socialMedia" src="/images/facebook.png" alt="Facebook Logo" />
                </a>
              </li>}
              {props.instagramURL && <li>
                <a href={props.instagramURL}>
                  <img id="socialMedia" src="/images/instagram.png" alt="instagram Logo" />
                </a>
              </li>}
              <li>
                <button type="button" className="btn btn-info btn-card text-center">Connect</button>
              </li>
            </div>
            <li>
              <strong>Bio:</strong> {props.bio}
            </li>

          </ul>
        </div>
      </div>
    </div>

  )
}

export default ConnectionCard;

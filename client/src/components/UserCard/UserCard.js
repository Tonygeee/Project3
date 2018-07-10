import React from 'react';
import './UserCard.css';

const UserCard = props => {
    // console.log(props);
    return (
        <div className="panel panel-default top-panel">

            <div className="profilePic">
                <img alt={props.userName} src={props.image} />
            </div>
            <h3 className="panel-top">{props.username}</h3>
            <div className="panel-body">
                <p>{props.bio}</p>
                <button className="btn-card btn btn-info">Events</button>
            </div>
        </div>
    )
}
export default UserCard;
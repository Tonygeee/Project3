import React from 'react';
import './UserCard.css';

const UserCard = props => {
    return (
        <div className="panel panel-default top-panel">
     
            <div className="profilePic">{props.image}</div>
            <div className="panel-top">{props.userName} User Name</div>
            <div className="panel-body">
                <button className="btn-card btn btn-info">Connections</button>
            </div>
        </div>
    )
}
export default UserCard;
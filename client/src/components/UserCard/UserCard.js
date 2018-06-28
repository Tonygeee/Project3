import React from 'react';
import './UserCard.css';

function UserCard() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">Name and Picture</div>
            <div className="panel-body">
                <button>Edit Profile</button>
                <button>Connections</button>
                <button>Events</button>
                <button>Past Connections</button>
            </div>
        </div>
    )
}
export default UserCard;
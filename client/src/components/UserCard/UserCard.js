import React, { Component } from 'react';
import './UserCard.css';

function UserCard() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">Name and Picture</div>
            <div className="panel-body">
                <a href="#" >Edit Profile</a>
                <a href="#" >Connections</a>
                <a href="#" >Events</a>
                <a href="#" >Past Connections</a>
            </div>
        </div>
    )
}
export default UserCard;
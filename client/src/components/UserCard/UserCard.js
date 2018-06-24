import React, { Component } from 'react';
import './UserCard.css';

function UserCard() {
    return (
        <div>
            <div className="panel panel-default">
                <div className="panel-heading">Panel heading without title</div>
                <div className="panel-body">
                    Panel content
        </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                    Panel content
  </div>
            </div>

        </div>
    )
}
export default UserCard;
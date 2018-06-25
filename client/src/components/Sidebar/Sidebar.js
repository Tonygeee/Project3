import React, { Component } from 'react';
import './Sidebar.css';

function Sidebar(props) {
    return (
        <div className="item2">
            {props.children}
        </div>
    )
}
export default Sidebar;
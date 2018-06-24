import React, { Component } from 'react';
import './Sidebar.css';

function Sidebar(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}
export default Sidebar;
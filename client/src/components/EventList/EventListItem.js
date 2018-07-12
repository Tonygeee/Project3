import React from 'react';
import './eventlistitem.css';


export const EventListItem = props => (

    <div id="events">
        <li>
            <a href={props.url}><h3>{props.title}</h3></a>
            <h4>{props.venue}</h4>
            <p>{props.eventDate}</p>
            <p>{props.eventTime}</p>
            <button onClick={props.onClick} data-index={props.index}>Intrested</button>
        </li>
    </div>
);
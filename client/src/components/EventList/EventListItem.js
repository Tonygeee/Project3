import React from 'react';

export const EventListItem = props => (

    <li>
        <a href={props.url}><h3>{props.title}</h3></a>
        <h4>{props.venue}</h4>
        <p>{props.eventDate}</p>
        <p>{props.eventTime}</p>
        <button onClick={props.onClick} index={props.index}>Intrested</button>
    </li>
);
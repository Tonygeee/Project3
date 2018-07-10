import React from 'react';

export const EventListItem = props => (
    <li>
        <a href={props.url}><h3>{props.title}</h3></a>
        <h4>Venue: {props.venue}</h4>
    </li>
);
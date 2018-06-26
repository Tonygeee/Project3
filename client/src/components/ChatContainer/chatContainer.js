import React from 'react';
import './chatContainer.css';

const ChatContainer = props => {

    return (
        <div className="chatContainer"> {props.children} </div>
    )
}

export default ChatContainer; 
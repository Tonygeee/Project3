import React from 'react';
import './chatContainer.css';

const ChatContainer = (props) => {
    return (
        <div>{props.children}</div>
    )
}

export default ChatContainer;
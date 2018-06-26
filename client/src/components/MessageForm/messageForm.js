import React from 'react';
import './messageForm.css';

const MessageForm = () => {

    return (
        <form
            onSubmit={this.handleSubmit}
            className="send-message-form">
            <input
                onChange={this.handleChange}
                value={this.state.message}
                placeholder="Type your message and hit ENTER"
                type="text" />
        </form>
    )
}

export default MessageForm;
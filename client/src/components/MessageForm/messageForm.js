import React from 'react';
import './messageForm.css';

class MessageForm extends React.Component {

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form" >
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                    className="message-input"
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

export default MessageForm; 
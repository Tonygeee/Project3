import React from 'react';
import './messageForm.css';

class MessageForm extends React.Component {

    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }

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
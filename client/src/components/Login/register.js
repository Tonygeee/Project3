import React from 'react';

export default class Register extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            hidden: true
        }
    };

    render() { 
        return (
        <div>
            <div>Displayed</div>
            <div style={this.state.hidden ? { display: 'none' } : {}}>Hidden</div>
            <button onClick={() => this.setState({hidden: !this.state.hidden})}>Toggle Display</button>
        </div>
        )
    }
};
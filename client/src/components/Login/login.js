import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './login.css';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			redirect: false
		};
	}
	validateForm = () => {
		return this.state.email.length > 0 && this.state.password.length > 0;
}
	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}


	handleSubmit = event => {
		event.preventDefault();
	}
	setRedirect = () => {
		this.setState({
		  redirect: true
		})
	}
	renderRedirect() {
		if (this.state.redirect) {
			return <Redirect to='/' />
		}
	}
	
	render() {
		return (
			<div className="Login">
				{this.renderRedirect()}	
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="username" bsSize="large">
						<ControlLabel>Username</ControlLabel>
						<FormControl
							autoFocus
							type="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId="email" bsSize="large">
						<ControlLabel>Email</ControlLabel>
						<FormControl
							autoFocus
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId="password" bsSize="large">
						<ControlLabel>Password</ControlLabel>
						<FormControl
							value={this.state.password}
							onChange={this.handleChange}
							type="password"
						/>
					</FormGroup>
					<Button
						onClick={this.setRedirect}
						block
						bsSize="large"
						disabled={!this.validateForm()}
						type="submit"
					>
						Login
          			</Button>
				</form>
			</div>
		);
	}
}
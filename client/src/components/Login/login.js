import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';
import axios from 'axios';

class Login extends Component {
	state = {
		currentSelection: 'login',
		password: '',
		email: '',
		userName: '',
		confirmPassword: '',
		bio: '',
		rememberMe: false,
		redirect: false,
		redirectPath: ''

	}

	toggleStateOnSelection = (event, selection) => {
		event.preventDefault();
		this.setState({
			currentSelection: selection,
			password: '',
			email: '',
			userName: '',
			confirmPassword: '',
			bio: '',
			rememberMe: false
		})
	}

	getDisplayStyle = (formType) => {
		if (this.state.currentSelection === formType) {
			return { display: '' };
		} else {
			return { display: 'none' };
		}
	}

	getLinkStyles = (linkType) => {
		if (this.state.currentSelection === linkType) {
			return { color: "#029f5b", fontSize: "18px" };
		} else {
			return { color: "#666", fontSize: "15px" };
		}
	}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	handleLoginSubmit = event => {
		event.preventDefault();

		axios.get('/api/main', {
			email: this.state.email,
			password: this.state.password
		}).then(res => {
			this.setRedirect('/')
		})
	}

	validateLoginForm = () => {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	validateRegisterForm = () => {
		return this.state.email.length > 0 && this.state.password.length > 0 && this.state.userName.length > 0 && this.state.bio.length > 0 && (this.state.password === this.state.confirmPassword);
	}

	showPasswordConfirmationAlert = () => {
		if (this.state.password !== this.state.confirmPassword) {
			return (
				<div className="alert alert-danger" role="alert">
					<strong>Oh snap!</strong> Your passwords don't match.
				</div>
			)
		}
	}

	handleRegisterSubmit = event => {
		event.preventDefault();

		axios.post('/api/profiles/main', {
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password,
			bio: this.state.bio
		}).then(res => {
			console.log(res.data);
			this.setRedirect('login')
		})
	}

	handleLoginSubmit = event => {
		event.preventDefault();
	}

	setRedirect = (path) => {
		this.setState({
			redirect: true,
			redirectPath: `/${path}`,
			currentSelection: path
		})
		console.log(this.state.redirect)
	}
	renderRedirect() {
		if (this.state.redirect) {
			return <Redirect to={this.redirectPath} />
		}
	}

	render() {
		return (
			<div>
				{/* colorBody where gradient background is */}
				<div id="colorBody">
					{/* all white logo */}
					<img id="loginLogo" src="/images/logoAllWhite.png" id="loginLogo" alt="Buddy Up Logo" />
					{/* container holds both forms */}
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-md-offset-3">
								{/* panel bootstrap styling for form */}
								<div className="panel panel-login">
									<div className="panel-heading">
										<div className="row">
											<div className="col-xs-6">
												{/* button to toggle between login and register */}
												<div onClick={(e) => this.toggleStateOnSelection(e, 'login')} id="login-form-link">Login</div>
											</div>
											<div className="col-xs-6">
												<div onClick={(e) => this.toggleStateOnSelection(e, 'register')} id="register-form-link">Register</div>
											</div>
										</div>
										<hr />
									</div>
									<div className="panel-body">
										<div className="row">
											<div className="col-lg-12">
												{/* login form starts here */}
												<form id="login-form" style={this.getDisplayStyle('login')} onSubmit={this.handleLoginSubmit}>
													<div className="form-group">
														<input type="text" name="email" id="username1" tabIndex="1" className="form-control" placeholder="Username" value={this.state.email} autoComplete="new-username" onChange={this.handleInputChange} />
													</div>
													<div className="form-group">
														<input autoComplete="new-password" type="password" name="password" id="password1" tabIndex="2" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
													</div>
													<div className="form-group text-center">
														<input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
														<label htmlFor="remember"> Remember Me</label>
													</div>
													<div className="form-group">
														<div className="row">
															<div className="col-sm-6 col-sm-offset-3">
																<input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" disabled={!this.validateLoginForm()} />
															</div>
														</div>
														{/* <div className="row">
															<div className="fb-login-button" data-width="375" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true">
															</div>
														</div> */}

													</div>
													<div className="form-group">
														<div className="row">
															<div className="col-lg-12">
																<div className="text-center">
																	<button tabIndex="5" className="forgot-password">Forgot Password?</button>
																</div>
															</div>
														</div>
													</div>
												</form>
												<form onSubmit={this.handleRegisterSubmit} id="register-form" style={this.getDisplayStyle('register')}>
													<div className="form-group">
														<input autoComplete="new-email" type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" value={this.state.email} onChange={this.handleInputChange} />
													</div>
													<div className="form-group">
														<input type="text" autoComplete="new-username" name="userName" id="userName" tabIndex="1" className="form-control" placeholder="User Name" value={this.state.userName} onChange={this.handleInputChange} />
													</div>
													<div className="form-group">
														<input type="password" autoComplete="new-password" name="password" id="password2" tabIndex="2" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
													</div>
													<div className="form-group">
														<input type="password" autoComplete="new-password" name="confirmPassword" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleInputChange} />
													</div>
													{this.showPasswordConfirmationAlert()}
													<div className="form-group">
														<input type="text" name="bio" id="bio" tabIndex="2" className="form-control" placeholder="Biography" value={this.state.bio} onChange={this.handleInputChange} />
													</div>


													<div className="form-group">
														<div className="row">
															<div className="col-sm-6 col-sm-offset-3">
																<input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now" disabled={!this.validateRegisterForm()} />
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div >
			</div>
		)
	}

}

export default Login;
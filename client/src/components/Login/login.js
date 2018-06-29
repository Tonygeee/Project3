import React, { Component } from 'react';
import './login.css';

class Login extends Component {
	state = {
		currentSelection: 'login'
	}

	toggleStateOnSelection = (event, selection) => {
		event.preventDefault();
		this.setState({
			currentSelection: selection
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

	render() {
		return (
			<div>
				<div id="colorBody">
					<img src="/images/logodark.png" />
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-md-offset-3">
								<div className="panel panel-login">
									<div className="panel-heading">
										<div className="row">
											<div className="col-xs-6">
												<button style={this.getLinkStyles('login')} onClick={(e) => this.toggleStateOnSelection(e, 'login')} id="login-form-link">Login</button>
											</div>
											<div className="col-xs-6">
												<a href="/profile" style={this.getLinkStyles('register')} onClick={(e) => this.toggleStateOnSelection(e, 'register')} id="register-form-link">Register</a>
											</div>
										</div>
										<hr />
									</div>
									<div className="panel-body">
										<div className="row">
											<div className="col-lg-12">
												<form id="login-form" action="/main" method="post" style={this.getDisplayStyle('login')}>
													<div className="form-group">
														<input type="text" name="username" id="username1" tabIndex="1" className="form-control" placeholder="Username" value="" />
													</div>
													<div className="form-group">
														<input type="password" name="password" id="password1" tabIndex="2" className="form-control" placeholder="Password" />
													</div>
													<div className="form-group text-center">
														<input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
														<label htmlFor="remember"> Remember Me</label>
													</div>
													<div className="form-group">
														<div className="row">
															<div className="col-sm-6 col-sm-offset-3">
																<input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" />
															</div>
															<div className="row">
																<div className="fb-login-button" data-width="375" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true">
																</div>
															</div>
														</div>
													</div>
													<div className="form-group">
														<div className="row">
															<div className="col-lg-12">
																<div className="text-center">
																	<button> tabIndex="5" className="forgot-password">Forgot Password?</button>
																</div>
															</div>
														</div>
													</div>
												</form>
												<form id="register-form" action="/profile" method="post" style={this.getDisplayStyle('register')}>
													<div className="form-group">
														<input type="text" name="username" id="username2" tabIndex="1" className="form-control" placeholder="Username" value="" />
													</div>
													<div className="form-group">
														<input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" value="" />
													</div>
													<div className="form-group">
														<input type="password" name="password" id="password2" tabIndex="2" className="form-control" placeholder="Password" />
													</div>
													<div className="form-group">
														<input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password" />
													</div>
													<div className="form-group">
														<div className="row">
															<div className="col-sm-6 col-sm-offset-3">
																<input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now" />
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
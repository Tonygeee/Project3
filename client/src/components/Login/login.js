import React from 'react';
import './login.css';

const Login = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<div className="panel panel-login">
						<div className="panel-heading">
							<div className="row">
								<div className="col-xs-6">
									<a href="#" className="active" id="login-form-link">Login</a>
								</div>
								<div className="col-xs-6">
									<a href="/profile" id="register-form-link">Register</a>
								</div>
							</div>
							<hr />
						</div>
						<div className="panel-body">
							<div className="row">
								<div className="col-lg-12">
									<form id="login-form" action="/main" method="post" role="form" styles={{ display: 'block' }}>
										<div className="form-group">
											<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value="" />
										</div>
										<div className="form-group">
											<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
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
														<a href="#" tabIndex="5" className="forgot-password">Forgot Password?</a>
													</div>
												</div>
											</div>
										</div>
									</form>
									<form id="register-form" action="/profile" method="post" role="form" styles={{ display: 'none' }}>
										<div className="form-group">
											<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value="" />
										</div>
										<div className="form-group">
											<input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" value="" />
										</div>
										<div className="form-group">
											<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
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
	)
};

export default Login;

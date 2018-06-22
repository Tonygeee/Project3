import React from 'react';
import './login.css';

const Login = () => {
	return (
			<div classNameName="container">
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title">Login via site</h3>
							</div>
							<div className="panel-body">
								<form accept-charset="UTF-8">
									<fieldset>
										<div className="form-group">
											<input className="form-control" placeholder="yourmail@example.com" name="email" type="text"/>
										</div>
										<div className="form-group">
											<input className="form-control" placeholder="Password" name="password" type="password" value=""/>
										</div>
										<div className="checkbox">
											<label>
												<input name="remember" type="checkbox" value="Remember Me"/> Remember Me
											</label>
										</div>
										<input className="btn btn-lg btn-success btn-block" type="submit" value="Login"/>
									</fieldset>
								</form>
								<hr/>
								<center><h4>OR</h4></center>
								<input className="btn btn-lg btn-facebook btn-block" type="submit" value="Login via facebook"/>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}						  
export default Login;
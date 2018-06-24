import React from 'react';
import './profileform.css';

const Login = () => {
	return (
			<div classNameName="container">
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title">Profile Information</h3>
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
										<div className="form-group">
											<input className="form-control" placeholder="Your Headline" name="headline" type="headline" value=""/>
										</div>
										<div className="form-group">
											<input className="form-control" placeholder="Your Bio" name="bio" type="bio" value=""/>
										</div>


										<input className="btn btn-lg btn-success btn-block" type="submit" value="Create Profile"/>
									</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}						  
export default ProfileForm;
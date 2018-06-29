// import React from 'react';
// import axios from 'axios';

// class LeoLogin extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			userName: '',
// 			password: '',
// 			email: '',
// 		}
// 	}

// 	onChange(e, field) {
// 		this.setState({ [field]: e.target.value })
// 	}

// 	onSubmit() {
// 		const { userName, password, email } = this.state
// 		axios.post('/api/profiles/main', {
// 			userName: userName,
// 			password: password,
// 			email: email,
// 			bio: 'asdfasdfa',
// 		})
// 	}

// 	render() {
// 		return <div>
// 			<div className="form-group">
// 				<input value={this.state.password} onChange={(e) => this.onChange(e, 'password')} type="password" name="password" id="password2" tabIndex="2" className="form-control" placeholder="Password" />
// 			</div>
// 			Username
// 				<input value={this.state.userName} onChange={(e) => this.onChange(e, 'userName')} />
// 			Password
// 				<input value={this.state.password} onChange={(e) => this.onChange(e, 'password')} />
// 			Email
// 				<input value={this.state.email} onChange={(e) => this.onChange(e, 'email')} />

// 			<button onClick={() => this.onSubmit()}>Submit</button>
// 		</div>
// 	}
// }

// export default LeoLogin
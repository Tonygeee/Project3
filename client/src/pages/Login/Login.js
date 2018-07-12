import React from "react";
// import Header from '../../components/Header';
import Login from '../../components/Login';
// import LeoLogin from '../../components/Login/LeoLogin';

class LoginPage extends React.Component {
    state = {
        userName: "",
        email: "",
        password: "",
        bio: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <React.Fragment>
                <div >
                    <Login />
                </div>
                {/* <div><LeoLogin /></div> */}
            </React.Fragment>
        )
    }
}

export default LoginPage;
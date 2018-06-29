import React from "react";
import Header from '../../components/Header';
import Login from '../../components/Login';
import LeoLogin from '../../components/Login/LeoLogin';
import API from '../../utils/API';

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
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getRecipes(this.state.recipeSearch)
            .then(res => this.setState({ recipes: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <React.Fragment>
                <div className="grid-container" >
                    <Header />
                    <Login />
                </div>
                <div><LeoLogin /></div>
            </React.Fragment>
git        )
    }
}

export default LoginPage;
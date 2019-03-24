import React, {Component} from 'react';
import axios from 'axios';
import {isAdmin, isLoggedIn, userDetails} from "../actions/common/common_actions";
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            userPass:"",
            loginStatus : ""
        }
    }
    userEmail = (event) => {
        this.setState({
            userEmail: event.target.value
        });
    };
    userPass = (event) => {
        this.setState({
            userPass: event.target.value
        });
    };
    submitLogin = () => {
        let userDetails = {
            "email": this.state.userEmail,
            "password": this.state.userPass
        };
        axios.post("/user/signin", userDetails)
            .then(res => {
                console.log("login status", res.data);
                if(res.data.title === "Login Success Full") {
                    this.setState({
                        loginStatus : "Login SuccessFull"
                    });
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('email', res.data.userEmail);
                    localStorage.setItem('userName', res.data.userName);
                    this.props.isLoggedIn();
                    this.props.isAdmin();
                    this.props.userDetails(res.data.userName);
                    this.props.history.push('/');
                }
            }).catch(error => {
                console.log("error occurred with the login request");
        });
    };

    render() {
        return (
            <div className="container">
                <h1 className="">Login</h1>
                <form method="get" name="LoginForm"
                      onSubmit={this.loginSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" onChange={this.userEmail} value={this.state.userEmail} className="form-control" name=" email" id=" email"/>
                    </div>
                    <div className=" form-group">
                        <label htmlFor=" password">Password:</label>
                        <input type="password" onChange={this.userPass} value={this.state.userPass} className="form-control password" name="password" id="password"/>
                    </div>
                    <div className=" form-check">
                        <label className=" form-check-label">
                            <input className="form-check-input" type="checkbox"/> Remember me
                        </label>
                    </div>
                    <button type="button" onClick={this.submitLogin} className="btn btn-primary">Submit</button>
                </form>
                <div className="alert-success">{this.state.loginStatus}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        commonStore: state.commonStore
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        isLoggedIn: () => {
            dispatch(isLoggedIn());
        },
        isAdmin : () => {
            dispatch(isAdmin());
        },
        userDetails : (userName) => {
            dispatch(userDetails(userName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


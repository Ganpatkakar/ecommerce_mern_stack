import React, {Component} from 'react';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            cpwd: "",
            error: ""
        }
    }

    userEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    };
    userFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        });
    };
    userLastName = (event) => {
        this.setState({
            lastName: event.target.value
        });
    };
    userPassword = (event) => {
        this.setState({
            password: event.target.value
        });
    };
    confirmPasswordFun = (event) => {
        this.setState({
            cpwd: event.target.value
        }, function () {
            if(this.state.password.toString() !== this.state.cpwd.toString()) {
                this.setState({
                    error: "Confirm password doesn't match with password"
                });
            }
        });
    };
    submitRegistration = () => {
      let registerData = {
          "email": this.state.email,
          "firstName": this.state.firstName,
          "lastName": this.state.lastName,
          "password": this.state.password
      };
      console.log("Registration data", registerData);
      axios.post('/user/signup', registerData)
          .then(res =>{
              console.log("response", res);
              this.props.history.push('/login');
          }).catch(error => {
              console.log("Error occurred with the User Registration request");
      });
      this.setState({
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          cpwd: "",
          error: ""
      });
    };

    render() {
        return (
            <div className="container">
                <h1 className="">Sign Up</h1>
                <form method="get" name="registrationFrom">
                    <div className="form-group">
                        <label htmlFor="email">Email Id:</label>
                        <input type="email" className="form-control" onChange={this.userEmail} value={this.state.email}
                               name=" email" id=" email" required/>
                    </div>
                    <div className=" form-group">
                        <label htmlFor="firstName">User First Name:</label>
                        <input type=" text" className=" form-control" onChange={this.userFirstName}
                               value={this.state.firstName} name="firstName" id="firstName" required/>
                    </div>
                    <div className=" form-group">
                        <label htmlFor="lastName">User Last Name:</label>
                        <input type=" text" className=" form-control" onChange={this.userLastName}
                               value={this.state.lastName} name="lastName" id="lastName" required/>
                    </div>
                    <div className=" form-group">
                        <label htmlFor=" password">Password:</label>
                        <input type=" password" className=" form-control" onChange={this.userPassword}
                               value={this.state.password} name=" password" id=" password" required/>
                    </div>
                    <div className=" form-group">
                        <label htmlFor=" cpwd">Confirm Password:</label>
                        <input type=" password" className=" form-control" onChange={this.confirmPasswordFun}
                               value={this.state.cpwd}
                               name=" confrimPassword" id=" cpwd" required/>
                    </div>
                    <button type="button" onClick={this.submitRegistration} className=" btn btn-primary">Submit</button>
                </form>
                <div className=" error-container">
                    {(this.state.error.length > 0 ) ?
                        <div className=" alert alert-danger">{this.state.error}</div>
                        : null
                    }
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './app.css';
import axios from 'axios';
import SignUp from './signup/signup';
import Login from './login/login';
import Header from './header/header';
import Home from './Home/home';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import {isLoggedIn} from "./actions/common/common_actions";
import Footer from "./footer/footer";
import ProductForm from "./admin/product-form/product_form";

class App extends Component {
    constructor(props) {
        super(props);
    }

    getInitialData = () => {
        axios.get("/api/").then(function (response) {
            console.log("Data found", response.data);
        }).catch(function (error) {
            console.log("Error occured with Axios request", error);
        });
    };

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="page-middle">

                        <div>
                            <Route exact path="/" component={ProductForm}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/signup" component={SignUp}/>
                        </div>

                    </div>
                    <Footer/>
                </div>
            </Router>
        );
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

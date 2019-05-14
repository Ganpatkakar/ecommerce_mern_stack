import React, {Component} from 'react';
import {connect} from 'react-redux';
import './app.css';
// import axios from 'axios';
// import SignUp from './components/signup/signup';
import Login from './components/login/login';
import Header from './components/header/header';
import Home from './components/Home/home';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import {isLoggedIn} from "./redux/actions/common/common_actions";
import Footer from "./components/footer/footer";
// import ProductForm from "./components/admin/product-form/product_form";

class App extends Component {
    constructor(props) {
        super(props);
    }

    getInitialData = () => {
        // axios.get("/api/").then(function (response) {
        //     console.log("Data found", response.data);
        // }).catch(function (error) {
        //     console.log("Error occured with Axios request", error);
        // });
    };

    render() {
        return (
            <Login />
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

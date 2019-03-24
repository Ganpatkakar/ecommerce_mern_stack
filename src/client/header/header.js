import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isLoggedIn, isAdmin, userDetails} from "../actions/common/common_actions";
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Ganpat'
        }
    }

    componentDidMount() {
        console.log("componentDidMount::header");
        this.props.isLoggedIn();
        this.props.isAdmin();
    }

    componentDidUpdate(nextProps){
        if(this.props.commonStore.user_isLogedin !== nextProps.commonStore.user_isLogedin && this.props.commonStore.user_isLogedin === true) {
            let userName  = localStorage.getItem('userName');
            this.props.userDetails(userName);
        }
    }

    logout = () => {
        localStorage.clear();
        this.props.isLoggedIn();
        this.props.isAdmin();
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light" id="top">
                <div className="container">
                    <Link className="navbar-brand" to="/">Kakar Cart</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Men</a>

                                <div className="dropdown-menu container-fluid">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2"
                                                   href="/men-topwear">Topwear</a>
                                                <a className="dropdown-item" href="/men-tshirts">T-Shirt</a>
                                                <a className="dropdown-item" href="/products">Casual Shirts</a>
                                                <a className="dropdown-item" href="/products">Formal Shirts</a>
                                                <a className="dropdown-item" href="/products">Sweater & SwaeatShirts</a>
                                                <a className="dropdown-item" href="/products">Jackets</a>
                                                <a className="dropdown-item" href="/products">Blazers</a>
                                                <a className="dropdown-item" href="/products">Suits</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="">T-Shirt</a>
                                                <a className="dropdown-item" href="#">Casual Shirts</a>
                                                <a className="dropdown-item" href="#">Formal Shirts</a>
                                                <a className="dropdown-item" href="#">Sweater & SwaeatShirts</a>
                                                <a className="dropdown-item" href="#">Jackets</a>
                                                <a className="dropdown-item" href="#">Blazers</a>
                                                <a className="dropdown-item" href="#">Suits</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="">T-Shirt</a>
                                                <a className="dropdown-item" href="#">Casual Shirts</a>
                                                <a className="dropdown-item" href="#">Formal Shirts</a>
                                                <a className="dropdown-item" href="#">Sweater & SwaeatShirts</a>
                                                <a className="dropdown-item" href="#">Jackets</a>
                                                <a className="dropdown-item" href="#">Blazers</a>
                                                <a className="dropdown-item" href="#">Suits</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="">T-Shirt</a>
                                                <a className="dropdown-item" href="#">Casual Shirts</a>
                                                <a className="dropdown-item" href="#">Formal Shirts</a>
                                                <a className="dropdown-item" href="#">Sweater & SwaeatShirts</a>
                                                <a className="dropdown-item" href="#">Jackets</a>
                                                <a className="dropdown-item" href="#">Blazers</a>
                                                <a className="dropdown-item" href="#">Suits</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Women</a>

                                <div className="dropdown-menu container-fluid">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Kids</a>

                                <div className="dropdown-menu container-fluid">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Home &
                                    Living</a>

                                <div className="dropdown-menu container-fluid">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>

                                                <a className="dropdown-item text-info mt-2" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                   aria-label="Search"/>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown"
                                   href="">{this.props.commonStore.user_name}</a>
                                <div className="dropdown-menu">
                                    {(this.props.commonStore.user_isadmin) ?
                                        <div>
                                            <Link className="nav-link dropdown-item" to="/admin/products">Manage
                                                Products</Link>
                                            <Link className="nav-link dropdown-item" to="/admin/orders">Manage
                                                Orders</Link>
                                        </div>
                                        : null
                                    }

                                    {(this.props.commonStore.user_isLogedin) ?
                                        <div>
                                            <Link className="nav-link dropdown-item" to="/my-orders">My Orders</Link>
                                            <a className="nav-link dropdown-item" onClick={this.logout}>Logout</a>
                                        </div>
                                        :
                                        <div>
                                            <Link className="nav-link dropdown-item" to="/login">Login</Link>
                                            <Link className="nav-link dropdown-item" to="/signup">Sign Up</Link>
                                        </div>
                                    }
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Bag</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
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
        isAdmin: () => {
            dispatch(isAdmin());
        },
        userDetails: (userName) => {
            dispatch(userDetails(userName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

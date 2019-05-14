import * as decode from 'jwt-decode';

export function isLoggedIn() {
    if (localStorage.getItem('token') === null) {
        return {
            type : "user_logged_in",
            payload: false
        }
    }
    return {
        type : "user_logged_in",
        payload: true
    }
}

export function isAdmin() {
    if (localStorage.getItem('token') !== null) {
        //const tokenPayLoad = {user : {role: "admin"}};
        const tokenPayLoad = decode(localStorage.getItem('token'));
        if (tokenPayLoad.user.role === 'admin') {
            return {
                type: "user_isAdmin",
                payload : true
            };
        } else {
            return {
                type: "user_isAdmin",
                payload: false
            }
        }
    }

    return {
        type: "user_isAdmin",
        payload: false
    }
}

export function userDetails(userName){
    return {
        type: "user_name_update",
        payload: userName
    }
}

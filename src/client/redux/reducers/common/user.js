function isLoggedIn() {
    if (localStorage.getItem('token') === null) {
        this.token = false;
        return this.token;
    }
    this.token = true;
    return this.token;
}

function isAdmin() {
    if (localStorage.getItem('token') !== null) {
        const tokenPayLoad = decode(localStorage.getItem('token'));
        if (tokenPayLoad.user.role === 'admin') {
            return true;
        }
    }
    return false;
}
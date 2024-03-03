class User {
    id = "";
    username = "";
    email = "";
    role = "";
    isloggedIn = true;

    getIsLoggedin() {
        return this.isloggedIn;
    }

    login() {
        this.isloggedIn = true;
    }

    logout() {
        this.isloggedIn = false;
    }

    constructor() {};
}

export default User;
class User {
    id = "";
    username = "";
    email = "";
    role = "";
    isLoggedIn = false;

    constructor() {};

    setUser(id, username, email, role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
        this.isLoggedIn = true;

        return this;
    }

    toJSON() {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            role: this.role,
            isLoggedIn: this.isLoggedIn
        }
    }
}

export default User;
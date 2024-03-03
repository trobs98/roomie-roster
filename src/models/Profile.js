class Profile {
    id = "";
    first_name = "";
    last_name = "";
    picture_ids = [];
    gender = "";
    dob = new Date(0);
    preferences = {
        city: "",
        gender: "",
        area: ""
    };

    constructor() {}
};

export default Profile;
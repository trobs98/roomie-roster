class Profile {
    id = "";
    firstName = "";
    lastName = "";
    pictureIds = [];
    gender = "";
    dob = new Date(0).toJSON();
    preferences = {
        city: "",
        gender: "",
        area: ""
    };

    constructor() {}

    setProfile(id, firstName, lastName, pictureIds, gender, dob, preferences) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pictureIds = pictureIds;
        this.gender = gender;
        this.dob = new Date(dob).toJSON();
        this.preferences = {...preferences};

        return this;
    }

    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            pictureIds: this.pictureIds.slice(),
            gender: this.gender,
            dob: this.dob,
            preferences: {...this.preferences}
        }
    }
};

export default Profile;
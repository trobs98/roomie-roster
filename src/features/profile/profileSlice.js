import { createSlice } from "@reduxjs/toolkit";

class Profile {
    id = "";
    first_name = "";
    last_name = "";
    email = "";
    picture_ids = [];
    gender = "";
    dob = ""
    preferences = {
        city: "",
        gender: "",
        area: ""
    };

    constructor() {}
};

const initialProfileState = {
    profile: new Profile(),
    isLoggedIn: false,
    status: 'idle',
    error: null
};

const profileSlice = createSlice({
    name: "profile",
    initialState: initialProfileState,
    reducers: {
        login(state, action) {
            console.log("state: ", state);
            state.push(action.payload)
        },
        logout(state, action) {
        }
    }
});

export const getProfile = state => state.profile;

export default profileSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import Profile from "../../models/Profile";

const initialProfileState = {
    profile: new Profile(),
    status: 'idle',
    error: null
};

const profileSlice = createSlice({
    name: "profile",
    initialState: initialProfileState,
    reducers: {
        uploadImage(state, action) {

        },
        updateProfile(state, action) {

        }
    }
});

export const getProfile = state => state.profile;

export default profileSlice.reducer;
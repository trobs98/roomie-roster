import { createSlice } from "@reduxjs/toolkit";
import User from "../../models/User";

const initialUserState = {
    user: new User(),
    status: 'idle',
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        login(state, action) {

        },
        logout(state, action) {

        }
    }
});

export const getUser = state => state.user;

export default userSlice.reducer
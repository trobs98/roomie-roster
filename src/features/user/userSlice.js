import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../api";
import User from "../../models/User";

const initialUserState = {
    user: new User().toJSON(),
    loading: false,
    error: null
};

// THUNKS
export const setUserLogin = createAsyncThunk(
    "user/setLoginUser", 
    async(params, thunkApi) => {
    try {
        const { dispatch } = thunkApi
        const { email, password } = params;
        const response = await loginUser({email, password});

        dispatch(login(response));

        return response;

    } catch (err) {
        return thunkApi.rejectWithValue(err.message);
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        login: (state, action) => {
            const { id, username, email, role } = action.payload;

            const user = new User();
            user.setUser(id, username, email, role)

            console.log(user);

            state.loading = false;
            state.user = user.toJSON();
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setUserLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(setUserLogin.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(setUserLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const getUser = state => state.user;
export const { login } = userSlice.actions;

export default userSlice.reducer;
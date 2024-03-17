import { configureStore } from '@reduxjs/toolkit';
import profileSlice from '../features/profile/profileSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    user: userSlice
  },
});

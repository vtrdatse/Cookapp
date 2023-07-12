import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
  isAuth: false,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = undefined;
      state.isAuth = false;
    },
  },
});

export const {
  login,
  logout,
} = appSlice.actions;

export default appSlice.reducer;

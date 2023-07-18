import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './operationsAuth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
    },
    [register.rejected](state, _action) {
      state.isAuthError = true
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
    },
    [login.rejected](state, _action) {
      state.isAuthError = true;
    },
  },
});

export const authRedusers = authSlice.reducer; 

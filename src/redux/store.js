import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
import { authRedusers } from './auth/slice';

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    auth: authRedusers
  },
});

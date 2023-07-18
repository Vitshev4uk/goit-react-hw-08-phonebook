import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { authRedusers } from './auth/slice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authRedusers
});
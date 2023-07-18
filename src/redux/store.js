import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
import { authRedusers } from './auth/slice';

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    auth: authRedusers
  },
});


// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducers';

// export const store = configureStore({
//   reducer: rootReducer,
// });



import { configureStore } from "@reduxjs/toolkit";
import{ persistedContactsReducer}  from "./ContactsSlise";
import { filterReducer } from "./FilterSlice";
import { persistStore } from 'redux-persist';




export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  }
});

export const persistor = persistStore(store);
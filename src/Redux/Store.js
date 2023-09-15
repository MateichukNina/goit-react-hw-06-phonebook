

import { configureStore } from "@reduxjs/toolkit";
import{ persistedContactsReducer }  from "./ContactsSlise";
import { filterReducer } from "./FilterSlice";


export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  }
});


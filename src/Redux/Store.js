

import { configureStore } from "@reduxjs/toolkit";
import  ContactSlice  from "./ContactsSlise";
import FilterSlice from "./FilterSlice";


export const store = configureStore({
  reducer: {
    contacts: ContactSlice,
    filters: FilterSlice,
  }
});


import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

 const ContactSlice = createSlice({
  name: "contacts",
  initialState: { items: []},
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
    
});
export const contactReducer = ContactSlice.reducer;
const persistConfig = {
  key: 'root',
  storage,
};

 export const persistedContactsReducer = persistReducer(
   persistConfig,
  contactReducer
);

export const { addContact, deleteContact } = ContactSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filters: "",
};

const ContactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers:{
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
  }
,
})

export const { addContact, deleteContact, setFilter } = ContactSlice.actions;
export default ContactSlice.reducer;
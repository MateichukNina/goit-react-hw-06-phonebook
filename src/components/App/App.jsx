import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { AppWrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'Redux/FilterSlice';
 import { deleteContact } from 'Redux/ContactsSlise';

// import {ContactSlice} from 'Redux/ContactsSlise';



export const App = () => {
  const reduxContacts = useSelector((state) => state.contacts);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return [];
  // });

 

  // const addContact = newContact => {
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  const addContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  // const handleFilterChange = evt => {
  //   const search = evt.currentTarget.value;
  //   setFilter(search);
  // };
  

  const handleFilterChange = (evt) => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  const deleteContactItem = (contactId) => {
    dispatch(deleteContact(contactId));
  };


  const selectedContact = filters
  ? reduxContacts.filter(({ name }) => 
      name.toLowerCase().includes(filters.toLowerCase())
    )
  : [];

console.log(selectedContact);
  

  return (
    <AppWrapper>
      <ContactForm addContact={addContact} />
      {/* <p>{JSON.stringify(reduxContacts)}</p> */}
      <Filter filters={filters} newContact={handleFilterChange} />
      <ContactsList selectedContact={reduxContacts} deleteContact={deleteContactItem} />
    </AppWrapper>
  );
};

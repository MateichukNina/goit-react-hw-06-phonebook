import React, { useEffect} from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { AppWrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'Redux/ContactsSlise';
// import {ContactSlice} from 'Redux/ContactsSlise';



export const App = () => {
  const contacts = useSelector((state) => state.contacts);
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

  const deleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };


  const selectedContact = filters
  ? contacts.contacts.filter(({ name }) => 
      name.toLowerCase().includes(filters.toLowerCase())
    )
  : [...contacts.contacts];


    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  

  return (
    <AppWrapper>
      <ContactForm addContact={addContact} />
      <p>{JSON.stringify(contacts)}</p>
      <Filter filters={filters} newContact={handleFilterChange} />
      <ContactsList selectedContact={selectedContact} deleteContact={deleteContact} />
    </AppWrapper>
  );
};

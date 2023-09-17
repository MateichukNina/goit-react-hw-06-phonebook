import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { AppWrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { useCallback } from 'react';
import { setFilter } from 'Redux/FilterSlice';
import { deleteContact} from 'Redux/ContactsSlise';

// import {ContactSlice} from 'Redux/ContactsSlise';

export const App = () => {
  const reduxContacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return [];
  // });
  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('reduxContacts'));
  //   if (savedContacts) {
  //     const existingContacts = reduxContacts.length > 0;
  //     if (!existingContacts) {
  //       dispatch(addContact(savedContacts));
  //     }
  //   }
  // }, [dispatch, reduxContacts]);

  // const addContact = newContact => {
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };


  

  // const addContactNew = useCallback(
  //   newContact => {
  //     dispatch(addContact(newContact));
  //   },
  //   [dispatch]
  // );

  // const handleFilterChange = evt => {
  //   const search = evt.currentTarget.value;
  //   setFilter(search);
  // };

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));

  };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  const deleteContactItem = contactId => {
    dispatch(deleteContact(contactId));
  };

  const selectedContact = filters
    ? reduxContacts.filter(({ name }) =>
        name.toLowerCase().includes(filters.toLowerCase())
      )
    : reduxContacts;

  // const selectedContact = reduxContacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filters.toLowerCase())
  // );



  return (
    <AppWrapper>
      <ContactForm />
      {/* <p>{JSON.stringify(reduxContacts)}</p> */}
      <Filter filter={filters} newContact={handleFilterChange} />
      <ContactsList
        selectedContact={selectedContact}
        deleteContact={deleteContactItem}
      />
    </AppWrapper>
  );
};

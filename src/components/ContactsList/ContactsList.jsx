
import { Item, List, DeleteBtn } from './ContactsList.styled';
import { useSelector, useDispatch  } from 'react-redux';
import { deleteContact } from 'Redux/ContactsSlise';



export const ContactsList = () => {

 const contacts = useSelector(state => state.contacts.items);
 const filters = useSelector(state => state.filter )
 const dispatch = useDispatch();

 const selectedList = () => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filters))
}

const selectedContact = selectedList()


  return (
    <List><ul>
    {selectedContact.map(contact => {
      return (
        <Item key={contact.id}>
          <p>{contact.name}: {contact.number}</p>
          <DeleteBtn onClick = {() => dispatch(deleteContact(contact.id))}>Delete</DeleteBtn>
        </Item>
      );
    })}
  </ul></List>
    
  )
}


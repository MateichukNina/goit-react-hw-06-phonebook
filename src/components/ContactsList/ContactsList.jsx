
import { Item, List, DeleteBtn } from './ContactsList.styled';



export const ContactsList = ({selectedContact, deleteContact}) => {
  // const myContacts = useSelector(state => state.contacts)

  return (
    <List><ul>
    {selectedContact.map(contact => {
      return (
        <Item key={contact.id}>
          <p>{contact.name}: {contact.number}</p>
          <DeleteBtn onClick={() => deleteContact(contact.id)}>Delete</DeleteBtn>
        </Item>
      );
    })}
  </ul></List>
    
  )
}


import PropTypes from 'prop-types';
import { Item, List, DeleteBtn } from './ContactsList.styled';
// import { useSelector } from 'react-redux';


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


ContactsList.propTypes = {
  selectedContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
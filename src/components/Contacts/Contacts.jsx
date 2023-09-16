import { ContactList, ListItem, DelBtn } from './Contacts.styled';

const Contacts = ({ contacts, deleteButton }) => {
  return (
    <ContactList>
      {contacts.map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <DelBtn type="button" onClick={() => deleteButton(id)}>
              Delete
            </DelBtn>
          </ListItem>
        );
      })}
    </ContactList>
  );
};

export default Contacts;

import css from './App.module.css';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  setFilter,
  selectContacts,
  selectFilter,
} from '../redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSubmit = contact => {
    dispatch(addContact(contact));
  };

  const filterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = filterContacts();
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form contacts={contacts} onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

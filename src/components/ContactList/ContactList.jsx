import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from 'components/ContactList/ContactList.module.css';
// import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  const filter = useSelector(state => state.contacts.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.ContactList}>
      {filteredContacts.map((contact, id) => {
        return (
          <li className={css.ContactListItem} key={id}>
            <p className={css.Name}>
              {contact.name}: {contact.phone}
            </p>
            <button
              className={css.BtnSubmit}
              onClick={() => {
                handleDeleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

// ContactList.propTypes = {
//   filteredContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onContactDelete: PropTypes.func.isRequired
// };

export default ContactList;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from 'components/ContactForm/ContactForm.module.css';
// import PropTypes from 'prop-types';
import { addContact } from 'redux/operations';
import { useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';

function ContactForm(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const contactNameRef = useRef();
  const contactNumberRef = useRef();

  const onFormSubmit = event => {
    event.preventDefault();

    const contactName = contactNameRef.current.value;
    const contactNumber = Number(contactNumberRef.current.value);

    const existingContact = contacts.find(
      contact => contact.name === contactName
    );
    if (existingContact) {
      alert(`${contactName} is already in contacts`);
      contactNameRef.current.value = '';
      contactNumberRef.current.value = '';
      return;
    }

    dispatch(
      addContact({ name: contactName, phone: contactNumber, id: nanoid() })
    );

    contactNameRef.current.value = '';
    contactNumberRef.current.value = '';
  };

  return (
    <form className={css.Form} onSubmit={onFormSubmit}>
      <p className={css.InputName}>Name</p>
      <input
        className={css.InputForm}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        ref={contactNameRef}
      />
      <p className={css.InputName}>Number</p>
      <input
        className={css.InputForm}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="tel"
        required
        ref={contactNumberRef}
      />
      <button className={css.BtnForm} type="submit">
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

export default ContactForm;

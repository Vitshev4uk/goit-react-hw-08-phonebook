import React from 'react';
import { useAuth } from 'hooks';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Content.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/auth/operationsAuth';
import { filterContacts } from 'redux/auth/slice';

function Content() {
  const {
    user: { name, email },
  } = useAuth();

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  // const [filteredContact, setFilteredContact] = useState('');

  const dispatch = useDispatch();

  console.log({ contactName, contactNumber });

  const contacts = useSelector(state => state.auth.contacts);

  const handleSubmit = event => {
    event.preventDefault();

    const existingContact = contacts.find(
      contact => contact.name === contactName
    );
    if (existingContact) {
      alert(`${contactName} is already in contacts`);
      setContactName('');
      setContactNumber('');
      return;
    }

    dispatch(
      addContact({ id: nanoid(), name: contactName, number: contactNumber })
    );

    setContactName('');
    setContactNumber('');
  };

  const filterNameRef = useRef();

  const handleFilteredContact = () => {
    const filterValue = filterNameRef.current.value;
    dispatch(filterContacts(filterValue));
  };

  return (
    <div>
      <p>Hello {name}!!!</p> <br />
      <div>your email: {email}</div>
      <form className={css.Form} onSubmit={handleSubmit}>
        <p className={css.InputName}>Name</p>
        <input
          className={css.InputForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contactName}
          onChange={event => {
            setContactName(event.target.value);
          }}
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
          value={contactNumber}
          onChange={event => {
            setContactNumber(event.target.value);
          }}
        />
        <button className={css.BtnForm} type="submit">
          Add contact
        </button>
      </form>
      <div className={css.FilterContainer}>
        <p className={css.FindContactsText}>Find contacts by name</p>
        <input
          className={css.InputFilter}
          type="text"
          placeholder="filter"
          //   value={filteredContact}
          ref={filterNameRef}
          onChange={handleFilteredContact}
        />
      </div>
    </div>
  );
}

export default Content;

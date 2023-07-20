import React from 'react';
import { useAuth } from 'hooks';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Content.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { addContact, deleteContact, logout } from 'redux/auth/operationsAuth';
import { filterContacts } from 'redux/auth/slice';
import { AppBar, Button, Container, TextField, Typography } from '@mui/material';

function Content() {
  const {
    user: { name, email },
  } = useAuth();

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

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

  const filter = useSelector(state => state.auth.filterValue);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleLogout = () => {
    dispatch(logout());
}

  return (
    <div>
      <AppBar position='static'>
         <Typography
            variant='h4'
            sx={{mb: 4, ml: 17, mt: 4}}
        >Hello {name}!!!</Typography>
      </AppBar>
      <Container sx={{ mt: 2 }}>
        <div>
                 
      {/* <div>your email: {email}</div> */}
      <Button onClick={handleLogout} variant='contained'>Logout</Button>
        </div>

      <form className={css.Form} onSubmit={handleSubmit}>
        <p className={css.InputName}>Name</p>
        <TextField
          // className={css.InputForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          label="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contactName}
          onChange={event => {
            setContactName(event.target.value);
          }}
            sx={{mb: 2}}
        />
        <p className={css.InputName}>Number</p>
        <TextField
          // className={css.InputForm}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          label="tel"
          required
          value={contactNumber}
          onChange={event => {
            setContactNumber(event.target.value);
          }}
            sx={{mb: 2}}
        />
        <Button className={css.BtnForm} type="submit" variant='contained' sx={{ml: 62.5, mb: 5}}>
          Add contact
        </Button>
      </form>
      <div className={css.FilterContainer}>
        <p className={css.FindContactsText}>Find contacts by name</p>
        <input
          className={css.InputFilter}
          type="text"
          placeholder="filter"
          ref={filterNameRef}
            onChange={handleFilteredContact}
            sx={{mb: 3}}
        />
      </div>
      <ul className={css.ContactList}>
        {filteredContacts.map((contact, id) => {
          return (
            <li className={css.ContactListItem} key={id}>
              <Typography className={css.Name} sx={{fontSize: 22}}>
                {contact.name}: {contact.number}
              </Typography>
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
      </Container>
     
    </div>
  );
}

export default Content;

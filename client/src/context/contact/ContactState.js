import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Bob Joe',
        email: 'bjoe@gmail.com',
        phone: '0455555555',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Jill Jam',
        email: 'jjam@gmail.com',
        phone: '0422222222',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Actions

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

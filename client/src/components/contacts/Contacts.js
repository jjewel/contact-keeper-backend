import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>No Contacts...</h4>;
  }
  return (
    <Fragment>
      {filtered
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;

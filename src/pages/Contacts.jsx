import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm.jsx';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Title } from '../components/SharedStyledComponent/sharedStyledComponent';
const Contacts = () => {
  return (
    <>
      <Title>PhoneBook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter></Filter>
      <ContactList />
    </>
  );
};

export default Contacts;
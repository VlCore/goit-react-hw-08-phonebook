import React from 'react';
import { useSelector } from 'react-redux';
import { Section } from '../Section/Section';
import { SimpleForm } from '../Form/SimpleForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';

const ContactsPage = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filtered = useSelector(state => state.filter);

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  };

  return (
    <div>
      <h2>Contacts Page</h2>
      <Section>
        <SimpleForm contacts={contacts} />
      </Section>
      <Section>
        <Filter />
      </Section>
      <Section title="Contacts">
        <ContactsList listContact={filterContact()} />
      </Section>
    </div>
  );
};

export default ContactsPage;
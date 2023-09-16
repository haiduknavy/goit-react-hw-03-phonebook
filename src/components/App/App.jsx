import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from 'components/Contacts/Contacts';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Wrapper } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount = () => {
const localData = localStorage.getItem('contacts');
if(localData){
  this.setState({contacts:JSON.parse(localData)})
}
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  addContact = formData => {
    const { name, number } = formData;
    const { contacts } = this.state;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  filterInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  findContact = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteButton = conId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== conId),
    }));
  };

  render() {
    const dataFilter = this.findContact();

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter findContact={this.filterInput} />
        <Contacts contacts={dataFilter} deleteButton={this.deleteButton} />
      </Wrapper>
    );
  }
}

import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import ContactForm from '../components/ContactForm/contactform'
import ContactList from '../components/ContactList/contactlist'
import Filter from '../components/Filter/filter'
import css from '../components/app.module.css'

export class App extends Component {
  
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = state => {
    const isMatch = this.state.contacts.find(
      contact => contact.name.toLowerCase() === state.name.toLowerCase()
    );
    if (isMatch) {
      Notiflix.Notify.warning(`${state.name} is already in contacts list!`);
      return;
    }

    const contact = {
      id: nanoid(),
      ...state,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  contactSearch = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  contactDel = state => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== state),
    }));
  };

  //!
  componentDidMount() {
    this.setState( JSON.parse(localStorage.getItem('contacts')) );
  }

  componentDidUpdate () {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  //!

  render() {
    const { filter } = this.state;
    const filterToLowerCase = filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase));
    
    return (
      <div className={css.contact_book}>
        <h2 className={css.contact_book__head}>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmit} />
        <h2 className={css.contact_book__head}>Contacts</h2>
        <Filter value={filter} onChange={this.contactSearch} />
        <ContactList contacts={filteredContacts} onClick={this.contactDel} />
      </div>
  )}
};
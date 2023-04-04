import { useState } from 'react';
// import PropTypes from 'prop-types';
import { StyleForm } from './contactForm.styled';
import { ButtonsStyle } from 'components/buttonsStyle.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const contact = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const [name, newName] = useState('')
  const [number, newNumber] = useState('')

  const handleChange = evt => {
    const { value, name } = evt.target;
    switch (name) {
      case 'name':
        newName(value);
        break;
      case 'number':
        newNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const alertFind = contact.find(contact => contact.name === name);
    if (alertFind) {
      return alert(`${name} is already in contacts`);
    }
    let id = nanoid();
    dispatch(addContact({ name, number, id }));
    reset();
  };

  const reset = () => {
   newName('');
   newNumber('');
  };

    return (
      <StyleForm onSubmit={handleSubmit}>
        <label>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
            id="nameInputId"
            onChange={handleChange}
          />
        </label>

        <label>
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            value={number}
            required
            id="numberInputId"
          />
        </label>
        <ButtonsStyle type="submit">add contact</ButtonsStyle>
      </StyleForm>
    );
};

// ContactForm.propTypes = {
//   addContactName: PropTypes.func.isRequired,
// };
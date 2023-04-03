import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { delContact } from "redux/contactsSlice";
import { ContactStyle } from "./contacts.styled";
import { ButtonsStyle } from "components/buttonsStyle.styled";

export const Contacts = () => {
    const contact = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const filterRenderValue = () => {
        const normalizedFilter = filter.toLocaleCase();
        return contact.filter(contact >
            contact.name.toLocaleCase().includes(normalizedFilter)
        );
    };

    const filterRender = filterRenderValue();

    return (
        <ContactStyle>
            <h2>Contacts</h2>
            <ul>
                {filterRender.map(({name, number, id}) => (
                    <li key={id}>
                        <p>Name:</p>
                        <span>{name}</span>
                        <p>Number:</p>
                        <span>{number}</span>
                        <ButtonsStyle
                            onClick={() => dispatch(delContact(id))
                            }
                        >Delete</ButtonsStyle>
                    </li>
                ))}
            </ul>
        </ContactStyle>
    );
};

Contacts.propTypes = {
    dataContact: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};
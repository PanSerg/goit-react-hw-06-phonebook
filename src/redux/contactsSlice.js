import { createSlice } from "@reduxjs/toolkit"

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {items: []},
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        delContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        }
    }
});

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterContacts(state, action) {
            return (state = action.payload);
        },
    },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
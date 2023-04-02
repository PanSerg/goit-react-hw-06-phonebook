import { createSlice } from "@reduxjs/toolkit"

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact(state, action) {
            return state + action.payload;
        },
        delContact(state, action) {
            return state - action.payload;
        }
    }
});



export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
import types from './contacts-types';

export const addContact = (newContact) => ({
    type: types.ADD,
    payload: newContact
});

export const deleteContact = (contactId) => ({
    type: types.DELETE,
    payload: contactId
});

export const changeFilter = (value) => ({
    type: types.CHANGE_FILTER,
    payload: value
});
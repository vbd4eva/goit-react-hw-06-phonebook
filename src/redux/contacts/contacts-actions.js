import { createAction  } from '@reduxjs/toolkit';
// import types from './contacts-types';


// export const addContact = (newContact) => ({
//     type: types.ADD,
//     payload: newContact
// });

// export const deleteContact = (contactId) => ({
//     type: types.DELETE,
//     payload: contactId
// });

// export const changeFilter = (value) => ({
//     type: types.CHANGE_FILTER,
//     payload: value
// });


export const addContact = createAction('contacts/Add');

export const deleteContact = createAction('contacts/Delete');

export const changeFilter = createAction('contacts/ChangeFilter');
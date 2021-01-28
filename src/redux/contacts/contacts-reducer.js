import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';

import {addContact, deleteContact, changeFilter} from './contacts-actions';

// const initialItems = () => (JSON.parse(localStorage.getItem('contacts')) ?? []);

const itemsReducer = createReducer([], {
    [addContact]: (state, { payload }) => [payload, ...state],
    [deleteContact]: (state, { payload }) => state.filter(({ id }) => (id !== payload))
});

const filterReducer = createReducer('', {
    [changeFilter]: (_,{payload})=>payload
})



export default combineReducers({
    items: itemsReducer,
    filter: filterReducer
});

// const itemsReducer = (state = initialItems(), { type, payload }) => {

//     // return state;
//     switch (type) {
//         case types.ADD: 
//             return [payload, ...state]

//         case types.DELETE: 
//             return state.filter(({ id }) => (id !== payload));
                
//         default:
//             return state
//     }
// }

// const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case [changeFilter]:
//             return payload
        
//         default:
//             return state
//     }
// }
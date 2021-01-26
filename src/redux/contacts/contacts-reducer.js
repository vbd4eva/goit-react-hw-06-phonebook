import types from './contacts-types';    

import { combineReducers } from 'redux';
// const state = {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
const initialItems = () => (JSON.parse(localStorage.getItem('contacts')) ?? []);

const itemsReducer = (state = initialItems(), { type, payload }) => {

    // return state;
    switch (type) {
        case types.ADD: 
            return [payload, ...state]

        case types.DELETE: 
            return state.filter(({ id }) => (id !== payload));
                
        default:
            return state
    }
}

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payload
        
        default:
            return state
    }
}

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer
});
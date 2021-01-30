import {useSelector, useDispatch} from 'react-redux';

import * as actions from 'redux/contacts/contacts-actions';
import {getFilterValue} from 'redux/contacts/contacts-selectors';

import s from './ContactFilter.module.css';

export default function ContactFilter() {
    
    const filterValue = useSelector(getFilterValue);
    const dispatch = useDispatch();
    
    return (
         <label className={s.label}>
            Find contacts by name
            <input
                className={s.input}
                 type="text"
                 name="filter"
                 value={filterValue}
                 onChange={(e)=>dispatch(actions.changeFilter(e.currentTarget.value))}
             />
         </label>
    )
}


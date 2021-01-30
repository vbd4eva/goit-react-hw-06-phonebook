import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types'

import {deleteContact} from 'redux/contacts/contacts-actions';

import s from './ContactListItem.module.css';
export default function ContactListItem({ id, name, number}) {
    
    const dispatch = useDispatch();

    return (
        <>
            <span className={s.name}>{name}</span> : <span className={s.number}>{number}</span> <button className={s.deleteBtn} type="button" onClick={()=>dispatch(deleteContact(id))} >delete</button>
        </>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}


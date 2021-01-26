import { connect } from 'react-redux';

import PropTypes from 'prop-types'

import * as actions from '../../../redux/contacts/contacts-actions';

import s from './ContactListItem.module.css'
function ContactListItem({ id, name, number, deleteContact}) {

    return (
        <>
            <span className={s.name}>{name}</span> : <span className={s.number}>{number}</span> <button className={s.deleteBtn} type="button" onClick={()=>deleteContact(id)} >delete</button>
        </>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch =>({
    deleteContact: contactId => dispatch(actions.deleteContact(contactId))
})


export default connect(null, mapDispatchToProps)(ContactListItem);


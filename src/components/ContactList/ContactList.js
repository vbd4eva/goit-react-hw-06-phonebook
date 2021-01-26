import { connect } from 'react-redux';

import PropTypes from 'prop-types'
import ContactListItem from './ContactListItem/ContactListItem'
import Notification from '../Notification/Notification'
import s from './ContactList.module.css'


function ContactList({contactCards, filterValue}) {

    const getFilteredContacts = () => {
        return contactCards.filter(
            ({ name }) => name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
        );
    };

    const contactList = getFilteredContacts();

    return (
        (contactList.length > 0)
        ?
        <ul className={s.list}>
            {contactList.map(
                ({ id, name, number }) => 
                    (<li key={id} className={s.item}>
                    <ContactListItem
                            id={id}
                            name={name}
                            number={number}
                        />
                    </li>)
            )}
        </ul>
        :
        <Notification message="is Nothing finded...Try to change request"/>
            
    )
}

ContactList.propTypes = {
    contactCards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
    filterValue : PropTypes.string,
}

const mapStateToProps = ({contacts}) => ({
    contactCards: contacts.items,
    filterValue: contacts.filter
})

export default connect(mapStateToProps)(ContactList);


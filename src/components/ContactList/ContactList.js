import { useSelector } from 'react-redux';
import {getContactList} from 'redux/contacts/contacts-selectors'

import Notification from 'components/Notification/Notification'
import ContactListItem from './ContactListItem/ContactListItem'
import s from './ContactList.module.css'

const notificationMessages = {
    NOTHING_FINDED: "is Nothing finded...Try to change request",
}

export default function ContactList() {

    const contactList = useSelector(getContactList)

    if (!contactList.length) return <Notification message={notificationMessages.NOTHING_FINDED} />;

    return (
        <ul className={s.list}>
            {contactList.map(
                (contact) =>
                (<li key={contact.id} className={s.item}>
                    <ContactListItem {...contact} />
                </li>)
            )}
        </ul>
    );
}


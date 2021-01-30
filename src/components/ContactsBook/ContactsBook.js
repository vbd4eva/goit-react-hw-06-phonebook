import { useSelector } from 'react-redux';
import {getContactListLength} from 'redux/contacts/contacts-selectors'
import Notification from 'components/Notification/Notification';
import Header from 'components/Header/Header';
import s from './ContactsBook.module.css';
 
export default function ContactsBook({children}) {

    const bookLength = useSelector(getContactListLength);

    if (!bookLength) return <Notification message="PhoneBook is emty" />;

    return (
        <>
            <Header title={'Contacts'} />
                <div className={s.contactsContainer}>
                    {children}
                </div>
        </>
    )
}

import {connect} from 'react-redux'

import PropTypes from 'prop-types'
import Notification from '../Notification/Notification'
import s from './ContactsBook.module.css'
 
function ContactsBook({bookLength, children}) {
    return (
        <>
            {bookLength
                ?
            (<>
            <h2>Contacts</h2>
                <div className={s.contactsContainer}>
                    {children}
                </div>
            </>)
                :
            <Notification message="PhoneBook is emty"/>
            }
        </>
    )
}

ContactsBook.propTypes = {
    bookLength: PropTypes.number.isRequired,
}

const mapStateToProps = ({contacts}) => ({
    bookLength: contacts.items.length
})

export default connect(mapStateToProps)(ContactsBook)

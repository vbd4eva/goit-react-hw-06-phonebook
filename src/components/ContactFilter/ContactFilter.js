import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import * as actions from '../../redux/contacts/contacts-actions';

import s from './ContactFilter.module.css';

function ContactFilter({ filterValue, changeFilter }) {

    return (
         <label className={s.label}>
            Find contacts by name
            <input
                className={s.input}
                 type="text"
                 name="filter"
                 value={filterValue}
                 onChange={(e)=>changeFilter(e.currentTarget.value)}
             />
         </label>
    )
}

ContactFilter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}

const mapStateToProps = ({contacts}) => ({
    filterValue: contacts.filter
})

const mapDispatchToProps = dispatch => ({
    changeFilter: value => dispatch(actions.changeFilter(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);


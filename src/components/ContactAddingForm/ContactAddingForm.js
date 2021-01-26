import { useState } from 'react';
import { connect } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import * as actions from '../../redux/contacts/contacts-actions';


import s from './ContactAddingForm.module.css';


const ContactAddingForm = ({contactCards, addContactCart,changeFilter}) => { 
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const stateRange = {
        name: setName,
        number: setNumber
    }

    function handleChange(e) {
        const { name, value } = e.currentTarget;
        const setState = stateRange[name];
        setState(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name && number) handleContactCart({ id: uuidv4(), name, number });
        reset();
    }

    function reset() { 
        setName('');
        setNumber('');
    }


    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.labelContainer}>
                <label className={s.label}>
                    <span className={s.labelText}>Name</span>
                    <input
                        className={s.inputText}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className={s.label}>
                    <span className={s.labelText}>Phone</span>
                    <input
                        className={s.inputText}
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        placeholder="067-333-4444"
                        required
                    />
                </label>
            </div>
      
            <button className={s.submitBtn} type="submit">
                <span className={s.submitBtn__text}>Add contact</span>
            </button>
        </form>
    );

    function handleContactCart(newContactCart){   
        const doubleContact = findInContacts(newContactCart.name);  
        if (doubleContact) { 
            onDoubleAddingReaction(doubleContact);
            return;
        }
        addContactCart(newContactCart);
    }

    function findInContacts(newContactName) {
        return contactCards.find(({ name }) => name === newContactName);
    };
    
    function onDoubleAddingReaction(doubleContact) { 
        const { name } = doubleContact; 
        toast(name + ' is already in contacts.');
        changeFilter(name);
    }  
}

ContactAddingForm.propTypes = {
    contactCards: PropTypes.array.isRequired,
    addContactCart: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => ({
    contactCards: contacts.items,
});

const mapDispatchToProps = dispatch => ({
    addContactCart: newContact => dispatch(actions.addContact(newContact)),
    changeFilter: value => dispatch(actions.changeFilter(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactAddingForm);
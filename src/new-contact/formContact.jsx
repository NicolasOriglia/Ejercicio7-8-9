import React, {useRef} from 'react';
import { ContactoClass } from '../classContacto/contacto-class';
import PropTypes from 'prop-types';

const FormContact = ({ add }) => {
    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const estadoRef = useRef(false);

    function addContacts(ev){
        ev.preventDefault();
        const newContact = new ContactoClass(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContacts} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='input-name' type='text' className='form-control form-control-lg' placeholder='nombre'></input>
              
                <input ref={lastNameRef} id='input-lastname' type='text' className='form-control form-control-lg' placeholder='apellido'></input>            
              
                <input ref={emailRef} id='email-name' type='email' className='form-control form-control-lg' placeholder='email@'></input>            
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>
    );
}

FormContact.propTypes={
    add: PropTypes.func.isRequired,
}

export default FormContact;

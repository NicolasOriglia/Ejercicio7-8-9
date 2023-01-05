import React from 'react';
import PropTypes from 'prop-types';
import {ContactoClass} from '../classContacto/contacto-class'
import '../styles/style.css';

const Estado = ( {contacto , change} ) => {

    function Conectado(){
        if(contacto.conectado){
            return (<i onClick={()=>change(contacto)} className='bi bi-circle-fill active' style={{color : 'green', fontWeight: 'bold' }}> Conectado</i>)
        }else{
            return (<i onClick={()=>change(contacto)} className='bi bi-circle-fill active' style={{color : 'red', fontWeight: 'bold' }}> Desconectado</i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <td className='align-middle'>{contacto.nombre}</td>
            <td className='align-middle'>{contacto.email}</td>
            <td className='align-middle'>{contacto.apellido}</td>
            <td className='align-middle'>{Conectado()}</td>
        </tr>
    );
}
Estado.propTypes={
    contacto: PropTypes.instanceOf(ContactoClass).isRequired,
    change: PropTypes.func.isRequired,
}
export default Estado;

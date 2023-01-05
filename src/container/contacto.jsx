import React, { useState } from 'react';
import { ContactoClass } from '../classContacto/contacto-class'
import Estado from '../componentes/estado';
import FormContact from '../new-contact/formContact';

const Contacto = () => {

    const contacto1 =  new ContactoClass('Nicolas', 'Origlia', 'noriglia@yahoo.com', true);
    const contacto2 =  new ContactoClass('Facundo', 'Beckam', 'pepito@gmail.com', false);

    const [contactos, setContactos] = useState([contacto1, contacto2]);
    
    function changeState(contacto){
        const index = contactos.indexOf(contacto);
        const tempContacto = [...contactos];
        tempContacto[index].conectado = !tempContacto[index].conectado;
        setContactos(tempContacto); 
    }

    function addContact(contacto){
        const index = contactos.indexOf(contacto);
        const tempContacto = [...contactos];
        tempContacto.push(contacto);
        setContactos(tempContacto);
    }

    return (
        <div className='col-12'>
            <div className='card'>
                <div className='card-header p-3'>
                    <h3>Your contacts:</h3>
                </div>
                <div className='card-body' data-mb-perfect-scrollbar='true' style={{position: 'relative', height:'400px'}}>
                    <thead>
                        <tr>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Apellido</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactos.map((contacto, index) => {
                            return <Estado 
                            key= {index}
                            contacto= {contacto}
                            change= {changeState}>
                            </Estado>
                        })}
                    </tbody>
                </div>
            </div>
            <FormContact add={addContact}></FormContact>
        </div>
    );
}

export default Contacto;

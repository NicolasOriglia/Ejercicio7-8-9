export class ContactoClass {
    nombre = '';
    apellido ='';
    email = '';
    conectado = false;

    constructor(nombre, email, apellido, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    };
    
};
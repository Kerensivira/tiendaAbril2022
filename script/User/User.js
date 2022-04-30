

export default class User {

    constructor(querys){
        this.urlUser = 'https://tiendadeviveres.herokuapp.com/usuarios';
        this.querys = querys;
        this.domContentLoaded();
    }

    domContentLoaded(){
        document.addEventListener('DOMContentLoaded', () => {
            this.querys.IdUsuario.style.display = 'none';
            this.querys.LabelIdUsuario.style.display = 'none';
        })
    }

    async registerUser(e){
        e.preventDefault()
    
        const name = this.querys.nombreUsuario.value
        const lastName = this.querys.apellidoUsuario.value
        const email = this.querys.emailUsuario.value
    
        if (name != '' || lastName != '' || email != '') {
    
            await fetch(this.urlUser, {
                method: 'POST',
                body: JSON.stringify({
                    nombre: name,
                    apellido: lastName,
                    correo: email
                }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
            Swal.fire({
                title: '¡Bienvenido!',
                text: 'La tienda ya abrió.',
                imageUrl: 'https://res.cloudinary.com/alexa01020304/image/upload/v1651280716/open_z2lbwy.jpg',
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'Custom image',
            })
    
    
            this.querys.formulario.reset()
    
        } else {
            Swal.fire(
                'Oops!',
                'Debes llenar todos los campos',
                'question'
            )
    
        }
    }

    async editUser(){
        document.getElementById('id').style.display = 'inline-block';
        document.getElementById('label-edit').style.display = 'inline-block';

        let email = document.getElementById('email').value;
    
        if (email != '') {
            let resp = await fetch(this.urlUser)
            let data = await resp.json()
    
            let modificar = data.find(user => user.correo.toLocaleLowerCase().includes(email.toLocaleLowerCase()))
    
            console.log(modificar);
    
            if (modificar != undefined) {
                const { nombre, apellido, correo, id } = modificar

                this.querys.nombreUsuario.value = nombre;
                this.querys.apellidoUsuario.value = apellido;
                this.querys.emailUsuario.value = correo;
                this.querys.IdUsuario.value = id;
            }
            else {
                Swal.fire(
                    'Oops! No te encontramos',
                    'El usuario que buscas no existe, intenta revisar si el correo ingresado es corecto',
                    'question'
                )
    
                this.querys.IdUsuario.style.display = 'none'
                this.querys.LabelIdUsuario.style.display = 'none'
            }
        } else {
            Swal.fire(
                'Oops!',
                'Debes ingresar un correo para ser buscado',
                'question'
            )
        }
    }
}
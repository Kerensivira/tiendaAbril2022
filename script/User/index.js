import UserRegister from './User.js';
// Se crea una clase para usuario y asì evitamos las innumerables exportaciones 
//que requerriría el uso de funciones, con esto conseguimos un código más limpio.
import querys from './querySelectors.js';

//Instancia de usuario
const user = new UserRegister(querys);

//Events
querys.formulario.addEventListener('submit', (e) => user.registerUser(e));
querys.btnCorreo.addEventListener('click', (e) => user.editUser(e));
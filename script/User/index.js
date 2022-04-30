import UserRegister from './User.js';

import querys from './querySelectors.js';

//Instancia de usuario
const user = new UserRegister(querys);

//Events
querys.formulario.addEventListener('submit', (e) => user.registerUser(e));
querys.btnCorreo.addEventListener('click', (e) => user.editUser(e));
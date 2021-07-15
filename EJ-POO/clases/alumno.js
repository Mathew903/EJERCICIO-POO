import Usuario from './usuario.js';

export default class alumno extends Usuario {
	constructor(nombre, apellido, correo, activo, cursosTomados) {
		super(nombre, apellido, correo, activo);
		this.cursosTomados = cursosTomados;
	}
}

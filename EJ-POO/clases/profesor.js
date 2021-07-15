import Usuario from './usuario.js';

export default class profesor extends Usuario {
	constructor(nombre, apellido, correo, activo, cursosDictados, calificacion) {
		super(nombre, apellido, correo, activo);
		this.curcursosDictados = cursosDictados;
		this.calificacion = calificacion;
	}
}

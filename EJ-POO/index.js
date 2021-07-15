import Curso from './clases/curso.js';
import profesor from './clases/profesor.js';
import alumno from './clases/alumno.js';

const elem = document.getElementById('cursos');

//Creamos un curso en el DOM
const crearCursos = curso => {
	const hijo = document.createElement('DIV');
	hijo.classList.add('card');
	hijo.innerHTML = /*html*/ `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src='${curso.getPoster()}' alt="${curso.getNombre()}" /> 
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
      <div class="s-center">
        <span class="small">Clases: ${curso.getClases()}</span>
      </div>
    </div>
      `;
	elem.appendChild(hijo);
};

const form = document.getElementById('formCursos');

form.addEventListener('submit', e => {
	e.preventDefault();
	const curso = new Curso( e.target.nombreCurso.value, e.target.posterCurso.value, e.target.clasesCurso.value);
	crearCursos(curso);
});

const profe = new profesor('Matias', 'Garcia', 'mgar@gmail.com', true, ['React', 'HTML'], 8);

const alumno1 = new alumno('pedro', "Garcia", "juan@gmail.com", true, ["CSS", "JS"]);
const alumno2 = new alumno('Maria', "jacinto", "mari@gmail.com", false, ["FIGMA", "NODE JS"]);

const html = new Curso("HTML desde cero", "mi-poster.pgn", 8);

html.setInscriptos([...html.getInscriptos(),alumno1]);
console.log(html);

html.setInscriptos([...html.getInscriptos(),alumno2]);
console.log(html);

// Definición de cursos con sus requisitos
const cursos = [
    { id: "CC1032", nombre: "Análisis Matemático I", ciclo: 1, requisitos: [] },
    { id: "EP2045", nombre: "Sociedad y Cultura Peruana", ciclo: 1, requisitos: [] },
    { id: "EGXXX", nombre: "Actividades Culturales/Deportivas", ciclo: 1, requisitos: [] },
    { id: "CC1024", nombre: "Ecología General", ciclo: 1, requisitos: [] },
    { id: "CC1018", nombre: "Química General", ciclo: 1, requisitos: [] },
    { id: "CC1025", nombre: "Intro Ing. Ambiental", ciclo: 1, requisitos: [] },

    { id: "CC2073", nombre: "Análisis Matemático II", ciclo: 2, requisitos: ["CC1032"] },
    { id: "EP2046", nombre: "Perú en el Contexto Internacional", ciclo: 2, requisitos: [] },
    { id: "CC2023", nombre: "Física General", ciclo: 2, requisitos: [] },
    { id: "EP1004", nombre: "Economía General", ciclo: 2, requisitos: ["CC1032"] },
    { id: "EP1051", nombre: "Lenguaje y Comunicación", ciclo: 2, requisitos: [] },
    { id: "CC1020", nombre: "Química Orgánica", ciclo: 2, requisitos: ["CC1018"] },
    { id: "AG1002", nombre: "Geología", ciclo: 2, requisitos: [] },
    { id: "IA1001", nombre: "Dibujo General", ciclo: 2, requisitos: [] },

    // Ciclo 3...
    { id: "EP2018", nombre: "Estadística General", ciclo: 3, requisitos: ["CC2073"] },
    { id: "EP1052", nombre: "Redacción y Argumentación", ciclo: 3, requisitos: ["EP1051"] },
    { id: "CC2076", nombre: "Cálculo para Ciencias", ciclo: 3, requisitos: ["CC2073"] },
    { id: "CC3047", nombre: "Meteorología General", ciclo: 3, requisitos: ["CC2023","CC2073"] },
    { id: "CC2004", nombre: "Bioquímica", ciclo: 3, requisitos: ["CC1020"] },
    { id: "IA2006", nombre: "Topografía", ciclo: 3, requisitos: ["IA1001"] },

    // ...Aquí seguirías agregando todos los cursos hasta ciclo 10 con sus requisitos...
];

// Estado de aprobación
let estado = {};
cursos.forEach(curso => estado[curso.id] = false);

const mallaDiv = document.getElementById("malla");

function renderMalla() {
    mallaDiv.innerHTML = "";
    let cicloActual = 0;
    cursos.forEach(curso => {
        if (curso.ciclo !== cicloActual) {
            cicloActual = curso.ciclo;
            const cicloDiv = document.createElement("div");
            cicloDiv.classList.add("ciclo");
            cicloDiv.textContent = `Ciclo ${cicloActual}`;
            mallaDiv.appendChild(cicloDiv);
        }
        const cursoDiv = document.createElement("div");
        cursoDiv.classList.add("curso");

        // Bloquear si no tiene requisitos cumplidos
        const requisitosCumplidos = curso.requisitos.every(req => estado[req]);
        if (!requisitosCumplidos && curso.requisitos.length > 0 && !estado[curso.id]) {
            cursoDiv.classList.add("bloqueado");
        }
        if (estado[curso.id]) {
            cursoDiv.classList.add("aprobado");
        }

        cursoDiv.textContent = curso.nombre;
        cursoDiv.onclick = () => toggleCurso(curso.id);
        mallaDiv.appendChild(cursoDiv);
    });
}

function toggleCurso(id) {
    const curso = cursos.find(c => c.id === id);
    const requisitosCumplidos = curso.requisitos.every(req => estado[req]);
    if (!requisitosCumplidos && !estado[id]) return; // No desbloqueado
    estado[id] = !estado[id];
    renderMalla();
}

renderMalla();

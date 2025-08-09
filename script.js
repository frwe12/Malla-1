// Definición de cursos con sus requisitos (id, nombre, ciclo, [prerrequisitos])
const cursos = [
    // CICLO 1
    { id: "CC1032", nombre: "Análisis Matemático I", ciclo: 1, requisitos: [] },
    { id: "EP2045", nombre: "Sociedad y Cultura Peruana", ciclo: 1, requisitos: [] },
    { id: "EGXXX", nombre: "Actividades Culturales/Deportivas", ciclo: 1, requisitos: [] },
    { id: "CC1024", nombre: "Ecología General", ciclo: 1, requisitos: [] },
    { id: "CC1018", nombre: "Química General", ciclo: 1, requisitos: [] },
    { id: "CC1025", nombre: "Introducción a la Ing. Ambiental", ciclo: 1, requisitos: [] },

    // CICLO 2
    { id: "CC2073", nombre: "Análisis Matemático II", ciclo: 2, requisitos: ["CC1032"] },
    { id: "EP2046", nombre: "Perú en el Contexto Internacional", ciclo: 2, requisitos: [] },
    { id: "CC2023", nombre: "Física General", ciclo: 2, requisitos: [] },
    { id: "EP1004", nombre: "Economía General", ciclo: 2, requisitos: ["CC1032"] },
    { id: "EP1051", nombre: "Lenguaje y Comunicación", ciclo: 2, requisitos: [] },
    { id: "CC1020", nombre: "Química Orgánica", ciclo: 2, requisitos: ["CC1018"] },
    { id: "AG1002", nombre: "Geología", ciclo: 2, requisitos: [] },
    { id: "IA1001", nombre: "Dibujo General", ciclo: 2, requisitos: [] },

    // CICLO 3
    { id: "EP2018", nombre: "Estadística General", ciclo: 3, requisitos: ["CC2073"] },
    { id: "EP1052", nombre: "Redacción y Argumentación", ciclo: 3, requisitos: ["EP1051"] },
    { id: "CC2076", nombre: "Cálculo para Ciencias", ciclo: 3, requisitos: ["CC2073"] },
    { id: "CC3047", nombre: "Meteorología General", ciclo: 3, requisitos: ["CC2023","CC2073"] },
    { id: "CC2004", nombre: "Bioquímica", ciclo: 3, requisitos: ["CC1020"] },
    { id: "IA2006", nombre: "Topografía", ciclo: 3, requisitos: ["IA1001"] },

    // CICLO 4
    { id: "EP2087", nombre: "Metodología de la Investigación", ciclo: 4, requisitos: ["EP2018"] },
    { id: "EP2088", nombre: "Ética y Ciudadanía", ciclo: 4, requisitos: [] },
    { id: "CC3040", nombre: "Geografía Física", ciclo: 4, requisitos: ["CC3047","AG1002"] },
    { id: "CC3111", nombre: "Ecuaciones Diferenciales", ciclo: 4, requisitos: ["CC2076"] },
    { id: "AG1001", nombre: "Edafología", ciclo: 4, requisitos: ["CC1024","CC1018"] },
    { id: "CC2074", nombre: "Física Ambiental", ciclo: 4, requisitos: ["CC2023","CC2076"] },

    // CICLO 5
    { id: "CC3110", nombre: "Matemática Aplicada a la Ing. Ambiental I", ciclo: 5, requisitos: ["CC3111"] },
    { id: "CC3103", nombre: "Mecánica de Fluidos e Hidráulica", ciclo: 5, requisitos: ["CC3111"] },
    { id: "CC2041", nombre: "Química Ambiental", ciclo: 5, requisitos: ["CC2004","CC2074"] },
    { id: "CC3102", nombre: "Climatología y Micrometeorología Aplicada", ciclo: 5, requisitos: ["CC3047"] },
    { id: "EP3042", nombre: "Métodos Estadísticos para la Investigación", ciclo: 5, requisitos: ["EP2018"] },

    // CICLO 6
    { id: "EP2037", nombre: "Derecho y Legislación Ambiental", ciclo: 6, requisitos: ["CC1025"] },
    { id: "CC3104", nombre: "Hidrología e Hidrogeología Ambiental", ciclo: 6, requisitos: ["CC3103","EP2018"] },
    { id: "CC4072", nombre: "Matemática Aplicada a la Ing. Ambiental II", ciclo: 6, requisitos: ["CC3110"] },
    { id: "CC3113", nombre: "Microbiología Ambiental", ciclo: 6, requisitos: ["CC1024","CC2041"] },
    { id: "CC3112", nombre: "Introducción a la Geomática", ciclo: 6, requisitos: ["CC3110","CC2074","CC3040"] },
    { id: "CC4000", nombre: "Procesos Industriales", ciclo: 6, requisitos: ["CC2041","CC3111"] },

    // CICLO 7
    { id: "AG4060", nombre: "Contaminación de Suelos", ciclo: 7, requisitos: ["AG1001","CC2041"] },
    { id: "CC4028", nombre: "Contaminación Atmosférica", ciclo: 7, requisitos: ["CC3102","CC3113"] },
    { id: "CC4034", nombre: "Contaminación de Aguas", ciclo: 7, requisitos: ["CC3113"] },
    { id: "CC4024", nombre: "Planificación Ambiental", ciclo: 7, requisitos: ["EP2037","CC3112"] },
    { id: "CC3105", nombre: "Gestión de Proyectos Ambientales", ciclo: 7, requisitos: ["EP1004"] },
    { id: "CC4063", nombre: "Geomática Aplicada I", ciclo: 7, requisitos: ["CC3112","CC4072"] },

    // CICLO 8
    { id: "CC4035", nombre: "Tratamiento y Abastecimiento de Agua", ciclo: 8, requisitos: ["CC3104","CC4034"] },
    { id: "CC5025", nombre: "Gestión de Residuos Sólidos", ciclo: 8, requisitos: ["AG4060","CC3113"] },
    { id: "CC4064", nombre: "Sistemas de Gestión Ambiental", ciclo: 8, requisitos: ["CC4000"] },
    { id: "CC6023", nombre: "Monitoreo y Control de la Contaminación Atmosférica", ciclo: 8, requisitos: ["CC4028"] },
    { id: "CC4065", nombre: "Ciudades Sostenibles", ciclo: 8, requisitos: ["CC4024"] },
    { id: "CC50XX", nombre: "Seminario I", ciclo: 8, requisitos: [] },

    // CICLO 9
    { id: "CC5000", nombre: "Ingeniería de Aguas Residuales", ciclo: 9, requisitos: ["CC4035"] },
    { id: "CC5008", nombre: "Evaluación de Impacto Ambiental", ciclo: 9, requisitos: ["CC3105","CC4000"] },
    { id: "CC4066", nombre: "Gestión de Seguridad y Salud Ocupacional", ciclo: 9, requisitos: ["CC4064"] },
    { id: "CCXXXX_ELECT", nombre: "Electivo", ciclo: 9, requisitos: [] },
    { id: "EP5022", nombre: "Economía Ambiental", ciclo: 9, requisitos: ["EP1004"] },
    { id: "PRACT", nombre: "Práctica Pre-profesional", ciclo: 9, requisitos: [] },

    // CICLO 10
    { id: "CC5051", nombre: "Auditoría de Sistemas Integrados de Gestión", ciclo: 10, requisitos: ["CC4066"] },
    { id: "CC50YY", nombre: "Seminario II", ciclo: 10, requisitos: ["CC50XX"] },
    { id: "CCXXXX_ELECT2", nombre: "Electivos (17 Cr)", ciclo: 10, requisitos: [] }
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
    if (!requisitosCumplidos && !estado[id]) return;
    estado[id] = !estado[id];
    renderMalla();
}

renderMalla();


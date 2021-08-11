const formulario = document.getElementById('formulario');
let registro = [];

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    const estudiante = document.getElementById('nom').value;
    const p1 = document.getElementById('p1').value;
    const p2 = document.getElementById('p2').value;
    const p3 = document.getElementById('p3').value;

    crearRegistro(estudiante, p1, p2, p3);
    guardarDatos();
});

const crearRegistro = (nombre, peri1, peri2, peri3) =>{
    const objEst = {
        Estudiante: nombre,
        "Periodo 1": peri1,
        "Periodo 2": peri2,
        "Periodo 3": peri3
    }

    registro.push(objEst);
    console.log(registro);
}

const guardarDatos = () =>{
    localStorage.setItem('notas', JSON.stringify(registro));
}
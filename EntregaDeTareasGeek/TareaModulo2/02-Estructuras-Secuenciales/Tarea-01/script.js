//Variables
let hombres;
let mujeres;
let totalEstudiantes;
let porcentajes;

//Captura de datos
hombres = Number(prompt('¿Cuantos hombres hay?'));
mujeres = Number(prompt('¿Cuantas mujeres hay?'));

//Procedimiento
totalEstudiantes = hombres + mujeres;

//Respuesta
alert(`Hay ${hombres * 100 / totalEstudiantes} porciento de hombres y ${mujeres * 100 / totalEstudiantes} porciento son mujeres`);
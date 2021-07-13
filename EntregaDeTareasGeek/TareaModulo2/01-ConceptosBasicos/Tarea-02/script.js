//Variables
let nombre;
let horas;
let vhoras;
let sueldo;

//Captura de datos
nombre = prompt('Nombre del empleado')
horas = Number(prompt('Cuantas horas trabajo'));
vhoras = Number(prompt('Ingrese el valor de la hora'));

//Procedimiento
sueldo = horas * vhoras;

//Respuesta
alert(`El sueldo de ${nombre} es de ${sueldo} correspondiente a ${horas} horas trabajadas`);
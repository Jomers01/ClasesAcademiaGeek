//Variables
let horas;
let precio;
const vHoras = 2000;

//Captura de datos
horas = Number(prompt('¿Cuantas horas ocupara el estacionamiento?'));

//Procedimiento
precio = horas * vHoras;

//Respuesta
alert(`Usted pagara ${precio} por ${horas} horas que utilizara el estacionamiento`);
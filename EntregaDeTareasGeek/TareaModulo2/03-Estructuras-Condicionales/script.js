//Variables
let horasTrabajadas;
let horasExtras;
let sueldoFinal;
let sueldoHoras = 16000;
let sueldoHorasExtas = 20000;
let salarioBase = 640000;

//Captura de datos
horasTrabajadas = Number(prompt('Digite Cuantas horas trabajó esta semana'));

//Procedimiento
if (horasTrabajadas <= 40) {
    alert(`Su salario de esta semana es ${horasTrabajadas * sueldoHoras} pesos`);
    } 
    else if (horasTrabajadas > 40) {
       horasExtras = horasTrabajadas - 40;
    alert(`Su salario de esta semana es ${horasExtras * sueldoHorasExtas + salarioBase} con las ${horasExtras} horas extras que hizo esta semana `)
    } else 
        alert('Usted ha ingresado un dato invalido')

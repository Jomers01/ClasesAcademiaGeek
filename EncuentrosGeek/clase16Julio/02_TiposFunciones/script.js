//Función simple sin retorno
function imprimirMensaje(){
    console.log('Hola soy una función simple sin retorno');
}
imprimirMensaje();

//Función simple con retorno
function calcularPromedio(num1,num2,num3){
    let promedio = (num1+num2+num3) / 3;
    return `El promedio es: ${promedio.toFixed(2)}`
}

let prom = calcularPromedio(3.5,4,5);
console.log(prom);


//Función anónima

const calcularSuma = function(num1,num2){
    const suma = num1 + num2;
    return suma;
}

console.log(`El resultado de la suma es: ${calcularSuma(10,50)}`);


//Función flecha
const calcularResta = (num1,num2) =>{
    const resta = num1 - num2;
    return resta;
}

console.log(`El resultado de la suma es: ${calcularResta(10,50)}`);
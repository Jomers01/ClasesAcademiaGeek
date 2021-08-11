import {data} from '../data/data.js';

let btn = document.getElementById('btn');
let result = document.getElementById('result');
let rango = document.getElementById('rango');
let condicion = document.getElementById('condicion');
let peso = 0;
let saludable = 0;
let sobrePeso = 0;
let obeso = 0;
let obecidadExtrema = 0;


btn.addEventListener('click', capturarDatos);

function capturarDatos(){
    let sex = document.querySelector('input[name=sex]:checked').value;
    let age = Number(document.getElementById('age').value);
    let peso = Number(document.getElementById('peso').value);
    let alt = Number(document.getElementById('alt').value);

    calcular(sex, age, peso, alt)
}

function calcular(sexo, edad, peso, altura){
    let imc = Number((peso / Math.pow(altura / 100, 2)).toFixed(1));
    let estado = 0;
    result.innerHTML = `Su masa corporal es ${imc}`;

    if (imc < 18.5) {
        condicion.innerHTML = "Por debajo de peso";
        rango.setAttribute('value', imc);
        estado = 1;
    }else if (imc >= 18.5 && imc <= 24.9) {
        condicion.innerHTML = "Saludable";
        rango.setAttribute('value', imc);
        estado = 2;
    }else if (imc >= 25 && imc <= 29.9){
        condicion.innerHTML = "Sobre Peso";
        rango.setAttribute('value', imc);
        estado = 3;
    }else if (imc >= 30 && imc <= 39.9){
        condicion.innerHTML = "Obecidad";
        rango.setAttribute('value', imc);
        estado = 4;
    }else {
        condicion.innerHTML = "Obesidad extrema o de alto riesgo";
        rango.setAttribute('value', imc);
        estado = 5;
    }
    data.push({
        Genero: sexo,
        Edad: edad,
        Peso: peso,
        Estatura: altura,
        "Masa Corporal": imc,
        Estado: estado
    });

    localStorage.setItem('Personas',JSON.stringify(data));
    console.log(estado);
    mostrarGrafica()
}

function mostrarGrafica(){
    let personas = data;
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].Estado);
    }
    
    let grafica = [
        {
          x: ['Bajo Peso', 'Saludable', 'Sobre Peso', 'Obeso', 'Obesidad Extrema'],
          y: [peso, saludable, sobrePeso, obeso, obecidadExtrema],
          type: 'bar'
        }
      ];
    
      Plotly.newPlot('plotlyChart', grafica);
}



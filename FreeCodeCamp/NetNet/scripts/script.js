//Importamos la data
import {data} from '../data/data.js';

//Replicamos las targetas de las peliculas que tengo en mi DATA
const fotos = document.getElementById('card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');


document.addEventListener('DOMContentLoaded', () => {
    cargarData(data);
})


const cargarData = data =>{

    data.forEach(pelicula => {

      const {id,title,image,description,clase} = pelicula;
      fotos.querySelector('h5').textContent = title;
      /*fotos.querySelector('p').textContent = description;*/
      fotos.querySelector('img').setAttribute('src',image);
      //Agregar un atributo a un elemento en html desde la data
      /*fotos.querySelector('h5').setAttribute('id', clase);*/

       const clone = fotos.cloneNode(true);

       fragment.appendChild(clone);

    })

    items.appendChild(fragment);

  }
/*
//Funcionalidad al boton de busqueda

const input = document.querySelector('#input-buscar');
const botonBuscar = document.querySelector('#boton-buscar');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    resultado.innerHTML = '';

    const texto = input.value.toLocaleLowerCase();

    for (let pelicula of data) {

        let nombre = pelicula.title.toLocaleLowerCase();

        //indexOf retorna el elemento del array y si no existe retorna -1
        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `<li>${pelicula.title}</li>`;
        }

        if (resultado.innerHTML === '') {
            resultado.innerHTML += `<li>La pelicula no se encuentra...</li>`;
        }
    }
    
}

botonBuscar.addEventListener('click', filtrar)
input.addEventListener('keyup', filtrar) */


//Funcion para capurar los datos del formulario

const botonSuscripcion = document.querySelector('#botonSuscripcion');
const alert = document.querySelector('#alert');
const bienvenida = document.querySelector('#h6');

botonSuscripcion.addEventListener('click', () => {
    let inputName = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#telefono').value;
    let inputLast = document.querySelector('#last-name').value;

    if (inputName ==="" || email === "" || phone === "" || inputLast === ""){

        alert.innerHTML = `Ingrese todos los campos`
    }else {

        localStorage.setItem('Nombre', inputName);
        localStorage.setItem('Apellido', inputLast);
        localStorage.setItem('Email', email);
        localStorage.setItem('Telefono', phone);
        obtenerLocal();
    }
})


function obtenerLocal() {
    let nombre = localStorage.getItem('Nombre')

    bienvenida.innerHTML = `Bienvenido ${nombre} `

}

//Funcion para capurar agregar lista de favoritos y ver mi lista de favoritos


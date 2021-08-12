//Consumo API
const URL_API = "https://rickandmortyapi.com/api/character";

const main = document.querySelector('.main');
const personajes = document.querySelector('.personajes');

//Obtenemos la info de la API
async function getPers(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    showPers(data.results);
}

//Llamamos a la funcion que obtendra la API
getPers(URL_API);

//
function showPers(person){

    main.innerHTML = '';

    person.forEach(personajes => {
        const {name, status, species, location, image,} = personajes;

        const persoEl = document.createElement('div');
        persoEl.classList.add('personajes');

        persoEl.innerHTML = 
        `<div class="img">
            <img src="${image}" alt="" width="170px">
        </div>
        <div class="contenido">
            <h3 class="title">${name}</h3>
            <h5 class="text">${status} - ${species}</h5>
            <h5 class="text">Last known location</h5>
            <p class="text">${location.name}</p>
         </div>`

        main.appendChild(persoEl);
    });
}



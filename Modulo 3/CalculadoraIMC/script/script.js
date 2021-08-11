let personas = [];
let btn = document.getElementById('btn');


btn.addEventListener('click', capturarDatos);

function capturarDatos(){
    let sex = document.querySelector('input[name=sex]:checked').value;
    let age = document.getElementById('age').value;
    let peso = document.getElementById('peso').value;
    let alt = document.getElementById('alt').value;
    
}

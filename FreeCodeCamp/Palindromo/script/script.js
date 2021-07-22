let frase;
let fraseReverse;


function frasePalindromo(){
    frase = document.querySelector('#frase').value; 
    console.log(frase)
    fraseReverse = frase;

    frase = frase.toLowerCase().replace(/[^a-zA-Z ]/g, "").split("");
    console.log(frase)
    fraseReverse = fraseReverse.toLowerCase().replace(/[^a-zA-Z ]/g, "").split("").reverse().toString();
    console.log(fraseReverse)

    if (frase == fraseReverse){
        document.querySelector('.result').innerHTML = `Es un palindromo`;
    }
    else {
        document.querySelector('.result').innerHTML = `No es un palindromo`;
    }
}
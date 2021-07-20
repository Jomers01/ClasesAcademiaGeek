let frase;
let fraseReverse;


function frasePalindromo(frase){
    frase = document.querySelector('#frase').value; 
    fraseReverse = frase;

    frase = frase.toLowerCase().replace(/[^a-zA-Z ]/g, "").split("");
    fraseReverse = fraseReverse.toLowerCase().replace(/[^a-zA-Z ]/g, "").split("").reverse().toString();

    if (frase == fraseReverse){
        document.querySelector('.result').innerHTML = `Es un palindromo`;
    }
    else {
        document.querySelector('.result').innerHTML = `No es un palindromo`;
    }
}

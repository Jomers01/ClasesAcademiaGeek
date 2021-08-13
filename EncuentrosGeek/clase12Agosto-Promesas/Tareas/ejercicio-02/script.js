let num1 = Number(prompt('Ingrese un numero'));
let num2 = Number(prompt('Ingrese un numero'));
let num3 = Number(prompt('Ingrese un numero'));

const promesa = new Promise((resolve, reject) =>{
    if (num1 + num2 + num3 > 25){
        resolve(num1 + num2 + num3);
    }else{
        reject('Los numeros son menores a 25');
    }
});

promesa.then(res =>{
    console.log(res);
})
.catch(error =>{
    console.log(error);
});

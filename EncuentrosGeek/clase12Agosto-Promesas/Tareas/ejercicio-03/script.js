let edad = Number(prompt('Ingrese su Edad'));
let peso = Number(prompt('Ingrese su peso en Kg'));

const promesa = new Promise((si, no) =>{
    if (peso > 100 && peso != '' && edad != '') {
        si('Usted tiene sobre peso')
    }else if (peso < 100 && peso != '' && edad != ''){
        no('usted esta saludable')
    }
});

promesa.then(res =>{
    console.log(res);
})
.catch(error =>{
    console.log(error);
});
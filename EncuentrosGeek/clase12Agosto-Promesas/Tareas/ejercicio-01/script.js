let nombre = prompt('Ingrese su nombre');

const promesa = new Promise((si, no) =>{
    if (nombre == '') {
        no('Nombre Invalido');
    }else{
        si(`Hola ${nombre}`);
    }
});

promesa.then(res => {
    console.log(res);
})
.catch(error =>{
    console.log(error);
});
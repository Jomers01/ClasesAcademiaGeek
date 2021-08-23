let usuarios = [];
let login = []
let btnBuscar = document.getElementById('btnBuscar');
let mostrarUsr = document.getElementById('container-login');
let citadoE;

document.addEventListener('DOMContentLoaded', ()=>{
    usuarios = JSON.parse(localStorage.getItem('Usuarios'))
    login = JSON.parse(localStorage.getItem('Login'))

    if (login == null){
        login = []
        dosCaminos()
    }else{
        mostrarUsr.innerHTML = `<h4 style="color: white;">Hola ${login[0].Nombre} Bienvenido</h4> 
        <button onclick="loginOut()">Cerrar Sesion</button>`
        mostrarAgenda()
    }

    if (usuarios == null){
        usuarios = []
    }
})

function dosCaminos(){

    Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        backdrop: true,
        title: `Bienvenido a EPS Sura`,
        confirmButtonText: `Login`,
        showDenyButton: true,
        denyButtonText: `Registrarse`
    }).then((result)=>{
        if (result.isConfirmed) {
            inicioSesion()
        }else{
            registrarse()
        }
    })
}

function loginOut(){
    login = null;
    localStorage.setItem('Login',JSON.stringify(login));
    location.reload()
}

function inicioSesion(){

    Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        backdrop: true,
        title: "Iniciar Sesion",
        confirmButtonText: `Login`,
        showCancelButton: true,
        cancelButtonText: 'Atras',
        html:
        `<input type="text" placeholder="Usuario" id="usr">
        <input type="password" placeholder="Contraseña" id="pass">`
    }).then((result)=>{
        if (result.isConfirmed) {
            usuario = document.getElementById('usr').value;
            contrasenia = document.getElementById('pass').value;

            for(let i = 0; i < usuarios.length; i++){

                const nameL = usuarios[i].Nombre
                const telL = usuarios[i].Telefono
                const usrL = usuarios[i].Usuario;
                const passL = usuarios[i].Contrasenia;
                
                if (usrL.toLowerCase() === usuario.toLowerCase() && passL == contrasenia) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sesion iniciada correctamente',
                        timer: 1000,
                        showConfirmButton: false
                    })
                    login = [{
                        Nombre: nameL,
                        Telefono: telL,
                        Usuario: usrL,
                        Contrasenia: passL
                    }]

                    localStorage.setItem('Login',JSON.stringify(login));

                    mostrarUsr.innerHTML = `<h4 style="color: white;">Hola ${nameL} Bienvenido</h4> 
                    <button onclick="loginOut()">Cerrar Sesion</button>`

                    mostrarAgenda()
                    i = 10000;
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Datos Incorrectos',
                        timer: 1500,
                        showConfirmButton: false
                    }).then((result)=>{
                        inicioSesion()
                    })
                }
            }
        }else{
            dosCaminos()
        }
        

    })
}

function registrarse(){

    Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        backdrop: true,
        title: "Registrarse",
        confirmButtonText: `Registrarse`,
        showCancelButton: true,
        cancelButtonText: 'Atras',
        html:
        `<input type="text" placeholder="Nombre y Apellido" id="name">
        <input type="text" placeholder="Teléfono" id="tel">
        <input type="text" placeholder="Usuario" id="usr">
        <input type="password" placeholder="Contraseña" id="pass">`
    }).then((result)=>{
        nombreN = document.getElementById('name').value;
        telefonoN = document.getElementById('tel').value;
        usuarioN = document.getElementById('usr').value;
        contraseniaN = document.getElementById('pass').value;
        if (result.isConfirmed) {
            if (nombreN, telefonoN, usuarioN, contraseniaN != '') {
                let registroN = {
                    Nombre: nombreN,
                    Telefono: telefonoN,
                    Usuario: usuarioN,
                    Contrasenia: contraseniaN,
                    Citas: null
                }
                usuarios.push(registroN)
                localStorage.setItem('Usuarios', JSON.stringify(usuarios));

                login = [{
                    Nombre: nombreN,
                    Telefono: telefonoN,
                    Usuario: usuarioN,
                    Contrasenia: contraseniaN
                }]
                localStorage.setItem('Login',JSON.stringify(login));

                mostrarUsr.innerHTML = `<h4 style="color: white;">Hola ${nombreN} Bienvenido</h4> 
            <button onclick="loginOut()">Cerrar Sesion</button>`

                mostrarAgenda()
            }else{
                Swal.fire({
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    stopKeydownPropagation: false,
                    backdrop: true,
                    icon: 'error',
                    title: "Porfavor llene todos los campos",
                    timer: 2000,
                    showConfirmButton: false
                }).then((result)=>{
                    registrarse()
                })
            }
        }else{
            dosCaminos()
        }
    })
}

document.addEventListener('submit', e =>{
    e.preventDefault()
    nombre = document.getElementById('nombre').value;
    fecha = document.getElementById('fecha').value;
    hora = document.getElementById('hora').value;
    sintoma = document.getElementById('sintomas').value;
    usuarios = JSON.parse(localStorage.getItem('Usuarios'))
        usuarios.map((valor, index, array)=>{
            if (login[0].Nombre == valor.Nombre) {
    
                copiaArray = array;
    
                let citaN = {
                    Nombre: login[0].Nombre,
                    Telefono: login[0].Telefono,
                    Usuario: login[0].Usuario,
                    Contrasenia: login[0].Contrasenia,
                    Citas:[{
                        Nombre: nombre,
                        Fecha: fecha,
                        Hora: hora,
                        Sintomas: sintoma
                    }]
                }
    
                if (copiaArray[index].Citas == null) {
                    copiaArray.splice(index, 1, citaN)
                    localStorage.setItem('Usuarios',JSON.stringify(copiaArray))
                }else{
                    let citaAd = {
                        Nombre: nombre,
                        Fecha: fecha,
                        Hora: hora,
                        Sintomas: sintoma
                    }
                    copiaArray[index].Citas.push(citaAd);
                    localStorage.setItem('Usuarios',JSON.stringify(copiaArray))
                }
            }
        })
    mostrarAgenda()
})

function mostrarAgenda(){
    let listarCitas = document.getElementById('listarCita');
    listarCitas.innerHTML = '';
        
    usuarios.map(UCita =>{
        if (login[0].Nombre == UCita.Nombre) {
            const {Citas} = UCita;
            if (Citas != null) {
                Citas.map(detalles =>{
                    const {Nombre, Fecha, Hora, Sintomas} = detalles;
    
                listarCita.innerHTML += `
                    <td>${Nombre}</td>
                    <td>${Fecha}</td>
                    <td>${Hora}</td>
                    <td>${Sintomas}</td>`
                })
            } 
        }
    })
}

btnBuscar.addEventListener('click', ()=>{

    let inputS = document.getElementById('inputBuscar').value;
    usuarios = JSON.parse(localStorage.getItem('Usuarios'));
    login = JSON.parse(localStorage.getItem('Login'));

    usuarios.map((value, index)=>{
        if (login[0].Nombre == value.Nombre){
            if (usuarios[index].Citas == false) {
                console.log("hola estoy vacio");
                Swal.fire({
                    backdrop: true,
                    showConfirmButton: false,
                    icon: 'error',
                    timer: 2500,
                    title: `No hay usuarios registrados`,
                    confirmButtonText: `Ok`
                })
            }else{
                usuarios[index].Citas.map((citado, index1) =>{
                    console.log(index1, citado);
                    if (citado.Nombre.toLowerCase() == inputS.toLowerCase() || index1 == citado.length) {
                        citadoE = citado.Nombre;
                        if (citadoE.toLowerCase() == inputS.toLowerCase()) {
                            Swal.fire({
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                allowEnterKey: false,
                                stopKeydownPropagation: false,
                                backdrop: true,
                                icon: 'success',
                                title: `${citado.Nombre} esta registrado correctamente para el dia ${citado.Fecha} a las ${citado.Hora}`,
                                confirmButtonText: `Todo Correcto`,
                                showDenyButton: true,
                                denyButtonText: `Eliminar Cita`
                            }).then((result)=>{
                                if (result.isDenied) { 
                                    usuarios[index].Citas.splice(index1, 1, );
                                    localStorage.setItem('Usuarios',JSON.stringify(usuarios));
                                    mostrarAgenda()
                                }  
                            })
                        }else{
                            Swal.fire({
                                backdrop: true,
                                showConfirmButton: false,
                                icon: 'error',
                                timer: 2500,
                                title: `${inputS} No se encuentra registrado en con ninguna cita`,
                                confirmButtonText: `Todo Correcto`
                            })
                        }
                        console.log(citadoE);
                    }
                })
            }
            
            
        }
    })
})
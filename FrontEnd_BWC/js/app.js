const campoNombre= document.querySelector('#name');
const campoApellidoP= document.querySelector('#first_lastanme');
const campoApellidoM= document.querySelector('#second_lastanme');
const campoEmail= document.querySelector('#email');
const campoPassword= document.querySelector('#password');
const repeatPassword= document.querySelector('#RepeatPassword'); 

campoNombre.addEventListener('input', validar)
campoApellidoP.addEventListener('input', validar)
campoApellidoM.addEventListener('input', validar)
campoEmail.addEventListener('input', validar)
campoPassword.addEventListener('input', validar)
repeatPassword.addEventListener('input', validar)

const btnSubmit= document.querySelector('#formulario button[type="submit"]')
console.log(btnSubmit)


const datos ={
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    email: '',
    contraseña: ''
};


function validar(e){

    //verifca que ningun campo este vacio 
    //trim elimina los espacios en blanco
   if(e.target.value.trim()===''){

        //parentElemnt = elemento padre
        mostrarAlerta(`El campo es obligatorio`, e.target.parentElement)
        //name es el nombre que tiene en el html 
        return;
    }

    //evalua email
    if(e.target.id==='email' && !validarEmail(e.target.value)){
        mostrarAlerta('El email no es valido', e.target.parentElement);
        datos[e.target.name]='';
        comprobarDatos();
        return;
    }
    limpiarAlerta(e.target.parentElement);
    
    //asignar los valores
    datos[e.target.name] = e.target.value.trim();
    //comprobar el email
    comprobarDatos();
}


function mostrarAlerta(mensaje, referencia){
    //comprueba si ya existe una alerta
    limpiarAlerta(referencia)

    //creacion de la alerta
    const error = document.createElement('P');
    error.textContent= mensaje;
    error.classList.add('error')

    //inyectar el error al formulario
    referencia.appendChild(error); //lo agrega al elemento pero al final
    
}


function limpiarAlerta(referencia){
    const alerta = referencia.querySelector('.error');
    if(alerta){
        alerta.remove();
    }
}


//valida el email
function validarEmail(email){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const resultado = regex.test(email);
    return resultado;

}

//comprueba si los datos están vacios y activa el botón
function comprobarDatos(){
    if(Object.values(datos).includes('')){
        btnSubmit.disabled = true;
        btnSubmit.classList.add('desabilitado')
        return
    }
    btnSubmit.disabled = false;
    btnSubmit.classList.remove('desabilitado')
}
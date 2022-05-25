
function validar(){
    let mail = document.contacto.email.value;
    let myRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let mensaje = ""
    if( !myRegex.test(mail) ){
        alert("email invalido");
    }

    if(document.contacto.nombre.value == ""){
        alert("debe ingresar un mombre");
    }
    mensaje = document.contacto.mensaje.value;
    if(document.contacto.mensaje.value == ""){
        alert("esccriba un mensaje de al menos 30 caracateres");
    }
}
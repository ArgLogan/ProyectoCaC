
function validar(){
    let mail = document.contacto.email.value;
    let myRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let flag = false;
    let mensaje = ""
    mensaje = document.contacto.mensaje.value;

    if( !myRegex.test(mail) ){
        alert("email invalido");
    }else{
        if(document.contacto.nombre.value == ""){
            alert("debe ingresar un mombre");
        }else{
            if(mensaje.length < 30 ){
                alert("esccriba un mensaje de al menos 30 caracateres");
            }else{
                alert("Su mensaje fue enviado")
            }
        }
    }

    
   
}
function eliminarRespuestas(){
    var respuesta = document.getElementById("respuestasIncorrecta");
    //var respuestaD = document.getElementById("respuestaD");
    respuesta.remove();
}
function respuestaVerdadera(){
    var respuestaA= document.getElementById("respuestaCorrecta");
    alert(respuestaA);
}
function setRadio(respuesta, respuestaVerdadera) {
    document.querySelectorAll(`input[name="${name}"]`).forEach(respuestaA => {
        if(element.respuestaA === respuestaA) {
            element.respuestaA = true;
        }
    });
}

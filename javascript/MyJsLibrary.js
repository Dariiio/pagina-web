(function(){

    var estado = document.getElementById('estado');
    var boxText = document.getElementById('boxText');

    /* ANTES ME SALIO, AHORA NO...
    var escribirTexto = function(elementoText, texto){
        var tamaño = texto.length
        elementoText.innerHTML = tamaño;
    }*/

    var nombre = "Neo";

    boxText.textContent = "Hola "+ nombre;
    //boxText.innerHTML ="ASDs";

}())

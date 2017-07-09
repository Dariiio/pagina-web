var stato = false;

function changeText(id){
    if (stato){
        estado.innerHTML = "_ONLINE";
        estado.style.color = "#52A679";
        stato = false;
    }else {
        estado.innerHTML = "_OFFLINE";
        estado.style.color = "#E0625F";
        stato = true;
    }
}

function blink(f) {
    setInterval(function() {
    f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 500);
}

function Hola(){
    document.write("HOla");
}

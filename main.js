var avion = {
    asientos : [
        {numero : "1A", ocupado : false},
        {numero : "1B", ocupado : false},
        {numero : "2A", ocupado : false},
        {numero : "2B", ocupado : false},
        {numero : "3A", ocupado : false},
        {numero : "3B", ocupado : false},
    ]
};

// Llamar al atributo asientos del objeto avion
// Hacer un for de los asientos
// Comprobar disponibilidad
// si es falso el asiento es verde
// Colocar asiento


var avionContainer = document.getElementById("avion-container");
avionContainer.innerHTML = "";
var asientos = avion.asientos;

var a, contador;
contador = 0;

var cajaPeq = document.createElement("div");
cajaPeq.setAttribute("class","col s4");

for (var i = 0; i < asientos.length; i++) {
    a = document.createElement("div");
    a.innerHTML = asientos[i].numero;

    //[i] posicion de i
    if (asientos[i].ocupado) { 
        a.setAttribute("class","ocupado asiento");
    }else {
        a.setAttribute("class","desocupado asiento");
    };

    // a.setAttribute("Onclick", "cambiarBack(this)")
    a.addEventListener("click", 
        function (){
            if(this.getAttribute("class") == "desocupado asiento"){
                this.setAttribute("class","ocupado asiento");
            }
        }
    );

    if(cajaPeq.children.length >= 2) {
        avionContainer.appendChild(cajaPeq);
        cajaPeq = document.createElement("div");
        cajaPeq.setAttribute("class","col s4");
        cajaPeq.appendChild(a);
    }else {
        cajaPeq.appendChild(a);
        contador++;
    };
    if (i == asientos.length - 1) {
        avionContainer.appendChild(cajaPeq);
    }
};

/* Esta funcion se reemplaza con el evento en linea 97
function cambiarBack(elemento){
    if(elemento.getAttribute("class") == "ocupado asiento"){
        elemento.setAttribute("class","desocupado asiento");
    }else{
        elemento.setAttribute("class","ocupado asiento");
    }
}
*/

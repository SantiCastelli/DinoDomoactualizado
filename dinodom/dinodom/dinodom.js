function divClicado() {
    console.log("me has clicado");
}
// Asociar evento click a un elemento del DOM

function ocultarDinoseto() {
    let dinoseto = document.querySelector("#dinoseto img");
    document.querySelector("#dinoseto").style.display = "none";

    
}
// 1. Selecciono el elemento del DOM
let botonDinoseto = document.querySelector("#dinoBoton");

// 2. Establecemos su propiedad onmouseclick; con la función que debe ejecutar.
botonDinoseto.onclick = ocultarDinoseto;

// Asociar evento click a un elemento con listeners

let titulo = document.querySelector("#title");
titulo.addEventListener("click", function () {
    document.querySelector("#title").style.color = "blue"  ;
})

// Ejercicio 1: Cielo Azul. Al hacer click en el botón, el body se pinta de color azul
// Ejercicio 1-BONUS(hacer al final): El texto del botón cambia a Cielo Blanco; y al hacer click en el, el body cambia al color blanco

let colorCielo = "white"

let pintarCielo = document.querySelector("#pintar");
pintarCielo.addEventListener("click", function (){
   if (colorCielo == "white") {
    document.querySelector("body").style.backgroundColor = "lightblue";
    document.querySelector("#pintar").textContent = "Cielo Blanco";
    colorCielo  = "lightblue"
}
else {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("#pintar").textContent = "Cielo Azul";
    colorCielo = "white"
}

})




// Ejercicio 2: Poner huevo. Al hacer click en el botón poner huevo, se crea un nodo del tipo 'img' y hay que añadirlo como hijo del contenedor #dinoseto

let ponerHuevo = document.querySelector("#nuevo-huevo");
ponerHuevo.addEventListener("click", function(){
    let imagen = document.createElement('img')
    imagen.src = "./img/dinohuevo.png"
    document.querySelector("#dinoseto").appendChild(imagen)
})

// Ejercicio 3- MEGA BONUS (es necesario utilizar el objeto evento  que mañana): Al hacer doble click en el huevo, hacer eclosionar.
// Asociar evento 'dblclick' cada vez que creais una 'img' del huevo
// en la función del 'dblclick' cambiar el atributo .src por la nueva imagen


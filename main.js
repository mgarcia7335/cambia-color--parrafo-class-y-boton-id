
//  parrafo con clase y boton con id
const colores = ["red", "blue", "orange", "Black", "yellow", "green"];

const parrafo = document.querySelector(".parrafo");
const boton = document.querySelector("#boton");

let i = 0;

boton.addEventListener("click", ()=> {
    parrafo.style.color = colores[i];
    i++
    if ( i >= colores.length){
        i = 0;
    }
});








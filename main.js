
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

       
container.style.margin = "100px";
container.style.textAlign = "center"; 
container.style.fontSize = "30px";  

boton.style.borderRadius = "30px";
boton.style.padding = "10px 20px";
boton.style.fontSize = "18px";
boton.style.backgroundColor = "yellow"; 
boton.style.fontFamily = "cursive";
boton.style.margin = "30px";


parrafo.style.fontFamily = "cursive";
parrafo.style.fontSize = "50px";
    
        
    








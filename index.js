/* CREAR UN ALGORITMO CON CONDICIONAL */

/* let maxSpeed = prompt ("max speed 120");

if (maxSpeed == 120){
    alert("Send a message");
} else if (maxSpeed == 100){
    alert("Gives a warning");
} else{
    alert ("nothing happens");
} */


/* CREAR UN ALGORITMO UTILIZANDO UN CICLO */

/* CICLO DE CONTEO */

/* let ingresarNumero = parseInt ( prompt ("Ingresar Numero")); 

for (let i = 2; i <= 10; i++){
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + " " + i + "=" + resultado ); */
/* }  */

/* CICLOS CONDICIONALES */

/* let data = 0;

do{
    console.log(data);
    if (data == 1){
        break;
    }
    data++;
} while(data <=10);

console.log ("End of cicle"); */


/* SIMULADOR INTERACTIVO */

/* PROCESO CALCULO DEL IVA */

/* var precio = 100;
var ivaEnFactura = 23;

var iva = precio * ivaEnFactura/100;
var precioTotal = precio + iva;

alert(precioTotal); */


/* CLASE 6 DESAFIO */

/* AGREGANDO ARRAYS */

const libros= ["Orgullo y Prejuicio", "El Perfume", "El color Purpura", "Metamorfosis", "Mujercitas"];

/* alert(libros[3]); */

let total="";

for (let index=0; index < 5; index++){
    console.log (libros[index]);
    total= total+ libros [index]

}
console.log (total);


/* AGREGANDO ARRAY AL SIMULADOR INTERACTIVO */

const factura= ["Base sin Iva", "Iva", "Total con Iva"];

factura.push ("descuento");

console.log ("suma de elementos:" + factura.length);


let facturaCompleta="";

for (let index= 0; index <3; index++){
    console.log (factura[index]);
    facturaCompleta= total + factura[index]

}
console.log (factura);





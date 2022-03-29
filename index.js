/* CREAR UN ALGORITMO CON CONDICIONAL */

let maxSpeed = prompt ("max speed 120");

if (maxSpeed == 120){
    alert("Send a message");
} else if (maxSpeed == 100){
    alert("Gives a warning");
} else{
    alert ("nothing happens");
}


/* CREAR UN ALGORITMO UTILIZANDO UN CICLO */

/* CICLO DE CONTEO */

let ingresarNumero = parseInt ( prompt ("Ingresar Numero")); 

for (let i = 2; i <= 10; i++){
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + " " + i + "=" + resultado );
} 

/* CICLOS CONDICIONALES */

let data = 0;

do{
    console.log(data);
    if (data == 1){
        break;
    }
    data++;
} while(data <=10);

console.log ("End of cicle");


/* SIMULADOR INTERACTIVO */

/* PROCESO CALCULO DEL IVA */

var precio = 100;
var ivaEnFactura = 23;

var iva = precio * ivaEnFactura/100;
var precioTotal = precio + iva;

alert(precioTotal);


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

alert(precioTotal);  */


/* AGREGANDO ARRAYS */



/* AGREGANDO ARRAY AL SIMULADOR INTERACTIVO */

/* const factura= ["Base sin Iva", "Iva", "Total con Iva"];

factura.push ("descuento");

console.log ("suma de elementos:" + factura.length);


let facturaCompleta="";

for (let index= 0; index <3; index++){
    console.log (factura[index]);
    facturaCompleta= total + factura[index]

}
console.log (factura);

 */
/* Ejemplo de Busqueda */

/* const facturas = [
    
    {numero: "00204", montoTotal: 1500},
    {numero: "00186", montoTotal: 2300},
    {numero: "00035", montoTotal: 5800},

]

const resultado = facturas.find((el)=> el.numero === "00186")
const resultado2 = facturas.find((el)=> el.numero === "00204")
const resultado3 = facturas.find((el)=> el.numero === "00087")

console.log (resultado)
console.log (resultado2)
console.log (resultado3) */


/* EJEMPLO DE FILTER */
/* 
const resultadoX = facturas.filter((el)=> el.numero.includes ("00186"))
const resultadoY = facturas.filter((el)=> el.numero.includes ("00204"))
const resultadoZ = facturas.filter((el)=> el.montoTotal < 2300) */

/* 2DA ENTREGA DE PROYECTO */

/* DOM */
/* console.log (document.body);

console.log(document.head);

document.getElementById ("titulo");

console.log (document.getElementById ("titulo"));


let clientes = document.getElementsByClassName ("clientes");

for (const el of clientes){
    console.log(el.innerHTML); */

/* } */

/* STORAGE */
/* localStorage.setItem("cliente", "Arturo");
localStorage.setItem("cliente1", "Vanessa"); */

/* JSON */

/* const cliente = { nombre: "Elizabeth", apellido: "Rojas", edad: 37};

console.log(JSON.stringify (cliente));

localStorage.setItem("arrayCliente", JSON.stringify(cliente)); */


/* Sweet Alert */
document.querySelector("#button").addEventListener("click",() => 
    Swal.fire({
        text:"Tu pedido fue procesado con exito",
        icon:"success",
        imageUrl: "	https://assets.ltkcontent.com/images/185509/appreciation-words_0066f46bde.jpg",
        imageWidth: 400,
        imageHeight: 200,
        showConfirmButton: false
    })

);

/* Toastify */

Toastify({
    text:"Ofertas de Verano",
    gravity: "bottom",
    position: "screenLeft",
    onClick: function (){
        Swal.fire({
            text:"25% De descuento en todas las piezas",
            imageUrl: "https://www.mistercomparador.com/noticias/wp-content/uploads/2018/08/ofertas-verano-2019.jpg",
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: "Ir a las ofertas",
        })
    }
}).showToast();

/* Escogi estas dos librerias porque me parece que sirven bien para el proyecto de tienda online que tengo en mente. Son faciles de usar y la informacion se muestra de manera clara */


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
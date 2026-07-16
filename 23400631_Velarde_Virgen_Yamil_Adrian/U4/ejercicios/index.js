/*
var nombre = "Juan";
let promedio = 9.5
const edad = 20;

if (true) {
    var libro = "libro 1";
    let animal = "perro";
    animal = 5;
}


let n1 = parseInt(prompt("Ingresa un número"))
console.log(n1);

let n2 = Number(prompt("Ingresa un número"))
console.log(n2);

let suma = 10+5;
let resta = 10-5;
let mult = 10*5;
let division = 10/5;
let residuo = 1%3;
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", mult);
console.log("División:", division);
console.log("Residuo:", residuo);

console.log(5>3);
console.log(5<3);
console.log(5>=5);
console.log(5<=4);
console.log(5=="5");
console.log(5==="5");
console.log(5 != 3);

let calificacion = 100;
if(calificacion >=90){
    console.log("Tremendo");
}else if(calificacion >= 70){
    console.log("Aprobado");
}else
    console.log("Reprobado")

let tabla = 5;
for(let i= 1; i <= 10; i++){
    console.log(`${tabla}x ${i} = ${tabla*i}`);
    console.log(tabla+ "x", i, "=" , tabla*i)
}

let contador = 1;
while(contador<=5){
    console.log(contador);
    contador ++;
}

function saludar(nombre){
    console.log("Hola", nombre);
}

saludar("Sho");

function aleatorio(){
    let n = Math.floor(Math.random()*100)+1;
    console.log(n);
}
aleatorio();

let numeros = [5,2];
numeros.push(20);
numeros.push(8);
numeros.push(53);

for(let i=0; i<numeros.length; i ++){
    console.log(numeros[i])
}

let persona = {
    nombre: "Juan",
    edad: 20,
    ciudad: "Tepic"
}

console.log(persona.nombre);
persona.nombre = "Carlos"
persona.carrera = "ISC";
console.log(persona)
≈
let numeros = [1,2,3,4,5]
numeros.forEach(numero => {
    console.log(numero)
});
*/
/*
let numeros = [1,2,3,4,5]
let dobles = numeros.map(numero => {
    return numero*2;
});
console.log(dobles);

console.log(typeof(10))
console.log(typeof("Hola"))
console.log(typeof(true))
console.log(typeof({}))

const edad = 17;
const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad"
console.log(mensaje)

//
const estudiante = {
   nombre: "Pedro"
}
console.log(estudiante.direccion?.calle)
// No marca error

//
const estudiante = {
   nombre: "Pedro",
   direccion: {
      calle: "calle"
   }
}

console.log(estudiante.edad ?? "Sin edad")
// Como un ternario, si no esta definido da "Sin edad"

//
let nombre = ""
console.log(nombre || "Invitado")

//
let edad = 19;
edad >= 18 && console.log("Puede entrar");
//La primera condición se debe cumplir para que se ejecute el log

//
let alumno = {
   nombre: "Juan",
   edad: 20,
   carrera: "ISC"
}

delete alumno.edad
console.log(alumno)
// Elimina atributos o propiedades

//
let alumno = {
   nombre: "Juan",
   edad: 20,
   carrera: "ISC"
}

delete alumno.edad
console.log(alumno)
console.log("nombre" in alumno);
console.log("edad" in alumno);
// Permite verrificar propiedades de un objeto

//
const numeros = [1, 2, 3];
const copia = [...numeros]

console.log(copia)
//Hace una copia del arreglo

//

const a = [1, 2]
const b = [3, 4]
const c = [...a, ...b]

console.log(c)
// Permite combinar arreglos

//
const productos = [
   { nomnre: "Laptop", precio: 1500, categoria: "Electrónica" },
   { nombre: "Celular", precio: 2900, categoria: "Telefonía" },
   { nombre: "TV", precio: 6000, categoria: "Electróncia" },
   { nombre: "Moto", precio: 28000, categoria: "Transporte" }
];
console.log(productos)
//

//
const productos = [
   { nomnre: "Laptop", precio: 1500, categoria: "Electrónica" },
   { nombre: "Celular", precio: 2900, categoria: "Telefonía" },
   { nombre: "TV", precio: 6000, categoria: "Electróncia" },
   { nombre: "Moto", precio: 28000, categoria: "Transporte" }
];

const caros = productos.filter(p => p.precio > 10000);
console.log(caros)
// Ps permite filtrar 

//
const productos = [
   { nombre: "Laptop", precio: 1500, categoria: "Electrónica" },
   { nombre: "Celular", precio: 2900, categoria: "Telefonía" },
   { nombre: "TV", precio: 6000, categoria: "Electróncia" },
   { nombre: "Moto", precio: 28000, categoria: "Transporte" }
];

const caros = productos.filter(p => p.precio > 10000);
const nombres = productos.map(p => p.nombre)
console.log(nombres)
console.log(caros)
// Ps da el nombre 

//
const productos = [
   { nombre: "Laptop", precio: 1500, categoria: "Electrónica" },
   { nombre: "Celular", precio: 2900, categoria: "Telefonía" },
   { nombre: "TV", precio: 6000, categoria: "Electróncia" },
   { nombre: "Moto", precio: 28000, categoria: "Transporte" }
];

const caros = productos.filter(p => p.precio > 10000);
const nombres = productos.map(p => p.nombre)
const total = productos.reduce((suma, p) => {
   return suma + p.precio;
}, 0)
console.log(total)
// Retorna una suma de precios
// El 0 es para ver en que variable iniciar 
*/



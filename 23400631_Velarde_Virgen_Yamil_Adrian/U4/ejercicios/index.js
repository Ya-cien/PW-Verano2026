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

let numeros = [1,2,3,4,5]
let dobles = numeros.map(numero => {
    return numero*2;
});
console.log(dobles);
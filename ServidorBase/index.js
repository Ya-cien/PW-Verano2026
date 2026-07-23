const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = 3000;

let peliculas = [
 {
        id: 1,
        titulo: "Interestelar",
        director: "Christopher Nolan",
        año: 2014  
    },
    {
        id:2,
        titulo:  "La Odisea",
        director: "Christopher Nolan",
        año: 2026
    }
]

let idActual = peliculas.length + 1;

app.get("/peliculas", (req, res)=>{
    res.json(peliculas);
})

app.get("/peliculas/:id",(req,res)=>{
    const id = Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id === id
    );
    if(!pelicula){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }
    res.json(pelicula);
})

app.post ("/peliculas", (req,res)=>{
    const {titulo,director,año} = req.body;
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Pelicula registrada correctamente",
        pelicula: nuevaPelicula
    });
});

//Actualizar una pelicula
app.put("/peliculas/:id",(req,res)=>{
    const id = Number(req.params.id);
    const {titulo, director, año} = req.body;
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    }
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        })
    }

    peliculas[indice] = {
        id:id,
        titulo:titulo,
        director:director,
        año:Number(año)
    };

    res.json({
        mensaje: "Pelicula actualizada correctamente",
        pelicula: peliculas[indice]
    });
})

//Eliminar una pelicula
app.delete("/peliculas/:id",(req,res)=>{
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        })
    }

    const peliculaEliminada = peliculas[indice];

    peliculas.splice(indice,1);

    res.json({
        mensaje: "Pelicula eliminada correctamente",
        pelicula: peliculaEliminada
    });
})



app.get("/",(req, res)=>{
    res.send("Bienvenido a mi primer servidor con express");
});

app.get("/pagina",(req, res)=>{
    res.send(`
        <style>
            h1 { color: red; }
        </style>
        <h1>Mi Pagina</h1>
        <p>Creada con Express</p>
        `)
});

app.get("/saludo/:nombre",(req,res) => {
    const nombre = req.params.nombre;
    res.send("Hola "+nombre);
})

// EJERCICIOS =======================================================

app.get("/par/:numero",(req,res) => {
    const numero = req.params.numero;
    if(numero % 2 == 0){
        res.send(numero + " es número par")
    }else{
        res.send(numero + " es número impar")
    }
});

app.get("/edad/:edad",(req,res) => {
    const edad = req.params.edad;
    if(edad >= 18){
        res.send("Eeres mayor de edad")
    }else{
        res.send("Eres menor de edad");
    }
})

app.get("/calculadora/:operacion/:a/:b", (req,res) => {
    const operacion = req.params.operacion;
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    var r;

    switch (operacion){
        case 'suma':
                r = a+b;
                break;
        case 'resta':
                r = a-b;
                break;
        case 'multiplicacion':
                r = a*b;
                break;
        case 'division':
                r = a/b;
                break;
        default:
                break;
    }
    res.send("Resultado: " + r);
});

app.get("/tabla/:numero", (req,res)=>{
    const numero = parseInt(req.params.numero);
    var datos = " ";
    var r;
    for(let i = 1; i<=10; i++){
        r = numero * i;
        datos += numero + " x " + i + " = " + r + "<br>";
    }
    res.send(datos);
})

app.get("/calificacion/:nota",(req,res)=>{
    const nota = req.params.nota;

    if(nota < 70){
        res.send("Reprobado");
    }else if(nota >= 70 && nota <= 79){
        res.send("Aprobado");
    }else if(nota >= 80 && nota <= 89){
        res.send("Muy bien");
    }else if(nota >= 90 && nota <= 100){
        res.send("Excelente");
    }
})

app.listen(PORT,()=>{
    console.log("Servidor inciado en http://localhost:"+PORT);
});

/*
let peliculas = [
    {
        id: 1,
        titulo: "Interestelar",
        director: "Christopher Nolan",
        año: 2014
    },
    {
        id:2,
        titulo:  "La Odisea",
        director: "Christopher Nolan",
        año: 2026
    }
];

let idActual = peliculas.length +1;

//Obtener todas las peliculas
app.get("/peliculas", (req, res) =>{
    res.json(peliculas);
});

//Obtener una pelicula por id
app.get("/peliculas/:id", (req, res)=>{
    const id = Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id ===id
    );
    if(!pelicula){
        return res.status(404).json(
            {mensaje: "Película no encontrada"}
        );
    }
    res.json(pelicula);
})

app.post("/peliculas", (req,res)=>{
    const {titulo, director, año} = req.body;
    if(!titulo || !director || año){
        return res.status(404).json({
            mensaje: "Faltan datos de la película"
        }); 
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Película registrada correctamente",
        pelicula: nuevaPelicula
    })
}) 


app.get("/", (req, res)=>{
    res.send("Bienvendio a mi primer servidor con express");
});

app.get("/pagina", (req, res) =>{
    res.send(`
        <style>
            h1{color:red;}
        </style>
        <h1>Mi página</h1>
        <p>Creada con Express</p>
        `)
});

app.get("/saludo/:nombre", (req, res)=>{
    const nombre = req.params.nombre;
    res.send("Hola "+ nombre); 
});


app.listen(PORT, () =>{ 
    console.log("Servidor iniciado en http://localhost:"+PORT)
});

// Numero par
app.get("/par/:numero", (req, res)=>{
    const numero = req.params.numero;
    const mensaje = numero%2==0? "El numero es par": "El numero es impar";
    res.send(mensaje)
});

// Mayor de edad
app.get("/edad/:edad", (req, res)=>{
    const edad = req.params.edad;
    const mensaje = edad>=18? "Eres mayor de edad": "Eres menor de edad";
    res.send(mensaje)

});

// Calculadora
app.get("/calculadora/:operacion/:a/:b", (req, res)=>{
    const operacion = req.params.operacion;
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    let mensaje ="";
    if(operacion == "suma"){
        mensaje = (a+b)
    }else if(operacion == "resta"){
        mensaje = (a-b)
    }else if(operacion == "multiplicacion"){
        mensaje = (a*b)
    }else if(operacion == "division"){
        mensaje = (a/b)
    }else{
        mensaje = ("Operación no reconocida")
    }
    res.send(mensaje)
});


// Tabla de multiplicar
app.get("/tabla/:numero", (req, res)=>{
    const numero = req.params.numero;
    let mensaje = "";
    for(let i=1; i<11; i++){
        mensaje += (numero +" x "+i+" = "+numero*i)
        mensaje += `<br>`
    }
    res.send(mensaje);
});

//Calificacion
app.get("/calificacion/:nota", (req, res)=>{
    const nota = req.params.nota;
    let mensaje = "";
    if(nota >100 && nota <0){
        mensaje = "Valor no válido"
    }else if(nota>=90){
        mensaje = "Excelente"
    }else if (nota>=80){
        mensaje = "Muy bien"
    }else if(nota>=70){
        mensaje = "Aprobado"
    }else{
        mensaje = "Reprobado"
    } 
    res.send(mensaje)
})
    */
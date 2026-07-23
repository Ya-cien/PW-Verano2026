
/*Ejercicio 1*/
function potencia(base, exponente) {

    var resultado = 1
    for (var i = 0; i < exponente; i++) {
        resultado *= base;
    }
    console.log(base, "elevado a", exponente, "es", resultado)

}

potencia(5, 5);

/*Ejercicio 2*/
function cajero() {
    var saldo = 5000;
    do {
        console.log("1. Consultar saldo \n" +
            "2. Depositar\n" +
            "3. Retirar\n" +
            "4. Salir"
        )
        var opcion = Number(prompt("Ingresa una opción"))
        switch (opcion) {
            case (1):
                console.log("$" + saldo)
                break;
            case (2):
                var deposito = Number(prompt("Ingrese el monto a depositar"));
                saldo += deposito;
                console.log("Operación realizada con éxito")
                break;
            case (3):
                var retiro = Number(prompt("Ingrese la cantidad a retirar"))
                if (retiro > saldo) {
                    console.log("Operación no realizadan\n" + "La cantidad a retirar es mayor a saldo")
                } else {
                    saldo -= retiro;
                    console.log("Operación realizada con éxito")
                }
                break
            case (4):
                console.log("SALIENDO")
                break;
        }
    } while (opcion != 4);

}
cajero();
/*Ejercicio 3*/
function dados() {
    var contador = 0;
    do {
        var n1 = Math.floor(Math.random() * 6) + 1;
        var n2 = Math.floor(Math.random() * 6) + 1;
        console.log(n1 + "-" + n2)
        contador++;
    } while (n1 != n2)

    console.log("Se necesitaron", contador, "lanzamientos")
}
dados();
/*Ejercicio 4*/
function adivinar() {
    var n1 = Math.floor(Math.random() * 100) + 1;
    for (var i = 0; i < 7; i++) {
        var intento = Number(prompt("Adivina el número"));
        if (i == 6) {
            console.log("Se acabaron los turnos")
        } else if (intento < n1) {
            console.log("Intenta mas arriba")
        } else if (intento > n1) {
            console.log("Intenta mas abajo")
        } else if (intento == n1) {
            console.log("Lo encontraste")
            break;
        }
    }
    console.log("El número era:", n1)

}
adivinar();

/*Ejercicio 5*/
function ventas() {


    var cantidadV = Number(prompt("Ingresa la cantidad de ventas a registar"))
    var totalIngresos = 0;
    var unidadesXProducto;
    var vtas = [];

    for (var i = 0; i < cantidadV; i++) {
        console.log("Venta", i + 1)
        var nombreV = prompt("Ingresa el nombre del vendedor");
        var nombreP = prompt("Ingresa el nombre del producto");
        var cVendida = prompt("Ingresa la cantidad vendida");
        var pUnitario = prompt("Ingresa el precio unitario");
        console.log("Vendiste $" + cVendida * pUnitario);

        var venta = {
            nombreVendedor: nombreV,
            nombreProducto: nombreP,
            cantidadVendida: cVendida,
            precioUnitario: pUnitario
        }
        vtas.push(venta)
        totalIngresos += cVendida * pUnitario;
    }
    console.log("===================================")
    console.log("Total de ventas realizadas:", cantidadV);
    console.log("Total de ingresos: $" + totalIngresos);
    console.log("Unidades vendidas por producto:")
    vtas.forEach(vta => {
        console.log("* " + vta.nombreProducto + ":", vta.cantidadVendida)
    });
    var mayor = 0;
    var vendedor = " ";
    vtas.forEach(vta => {
        if ((vta.cantidadVendida * vta.precioUnitario) > mayor) {
            mayor = vta.cantidadVendida * vta.precioUnitario;
            vendedor = vta.nombreVendedor;
        }
    })
    console.log("Vendedor con mas ventas:", vendedor, "($" + mayor + ")");
}




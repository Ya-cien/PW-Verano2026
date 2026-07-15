/*Ejercicio 1*/
function ejercicio1() {
    var n1 = Math.floor(Math.random() * 100) + 1;
    var n2 = Math.floor(Math.random() * 100) + 1;

    console.log(n1);
    console.log(n2);

    var sonIguales = n1 == n2;

    if (sonIguales == false) {
        if (n1 > n2) {
            console.log(n1, "Es mayor")
        } else {
            console.log(n2, "Es mayor")
        }
    } else {
        console.log("Son iguales")
    }
}
ejercicio1();

/*Ejercicio 2*/
function ejercicio2() {

    while (n != 0) {
        var n = Math.floor(Math.random() * 6);
        console.log(n)
    }
}
ejercicio2();


/*Ejercicio 3*/
function ejercicio3() {
    var n = Math.floor(Math.random() * (9)) + 2;
    console.log("Numero = ", n)

    for (var i = 1; i <= 10; i++) {
        console.log(i * n)
    }


}

ejercicio3();

/*Ejercicio 4*/
function ejercicio4() {
    var par = 0;
    var impar = 0;
    for (var i = 0; i < 10; i++) {
        do {
            var n = Number(prompt("Dame un numero entre 0-100"));
        } while (n > 100 || n < 0)

        if (n >= 0 && n <= 100) {
            if (n % 2 == 0) {
                console.log("El número", n, "es par")
                par ++;
            } else {
                console.log("El número", n, "es impar")
                impar ++;
            } 
        } else
            console.log("El número no es válido")
    }
    console.log("C. de Pares:", par)
    console.log("C. de Impares:", par)
}

ejercicio4();

/*Ejercicio 5*/
function ejercicio5() {
    var comision = 0;

    do {
        var n = Number(prompt("Dame tu cantidad de ventas ($5,000 - $30,000)"));
        if (n < 5000 || n > 30000) {
            console.log("Cantidad no válida")
        }

    } while (n < 5000 || n > 30000)

    if (n < 10000) {
        comision += 0.1 * n;

    } else {
        comision += 0.15 * n;
    }


    console.log("Ventas =", n)
    console.log("Comision = ", comision)
}
ejercicio5();
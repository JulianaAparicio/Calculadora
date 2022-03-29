//Hagamos una calculadora

//CALCULADORA NIVEL I

//SUMA
function sumar(num1, num2) {
    return (num1 + num2)
}

//console.log("La suma equivale a",sumar(2,2));

//RESTA
function restar(num1, num2) {
    return (num1 - num2)
}

//console.log("La resta equivale a",restar(5,2));

//MULTIPLICACION
function multiplicar(num1, num2) {
    return (num1 * num2)
}

//console.log("La multiplicacon equivale a",multiplicar(2,2));

//DIVISION
function dividir(num1, num2) {
    return (num1 / num2)
}

//console.log("La division equivale a",dividir(10,5));

//CALCULADORA NIVEL II


console.log("-------------- Testeo de Operaciones / Calculadora --------------");

//Ej. 2

console.log("2. La suma es", sumar(5, 3), ", la resta es", restar(5, 3));

//Ej. 3

console.log("3. La multiplicación es", multiplicar(8, 6));

//Ej. 4

console.log("4. La división es", dividir(25, 5));

//Ej. 5

console.log("5. La division del numero cero es", dividir(25, 0));

//CALCULADORA NIVEL III

//Ej 1

function cuadradoDeUnNumero(num) {
    return multiplicar(num, num);
}

console.log("El cuadrado del numero es", cuadradoDeUnNumero(5))

//Ej. 2

function promedioDeTresNumeros(a, b, c) {
    return dividir(sumar(a, b, c), 2);
}

console.log("El promedio de los tres numeros es", promedioDeTresNumeros(5, 5, 5));

//Ej. 3

function calcularPorcentaje(p1, p2) {
    return multiplicar(dividir(p2, 100), p1);
}

console.log("El resultado del porcentaje es", calcularPorcentaje(300, 15));

//Ej. 4

function generadorDePorcentaje(g1, g2) {
    return dividir(multiplicar(g1, 100), g2);
}

console.log("El porcentaje de es", GeneradorDePorcentaje(2, 200));
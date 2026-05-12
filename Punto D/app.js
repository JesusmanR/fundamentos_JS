let nombre = "Pepito"
const PI = 3.1416
console.log("Tu nombre es: ", nombre, "Pi: ", PI)

/* D. Actividades de transferencia del conocimiento. */

/* Ejercicio 1. Factura de compra simple */
alert("Calcularemos el total de una compra");
let producto = prompt("Ingrese el nombre del producto:");
let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let cantidad = parseInt(prompt("Ingrese la cantidad comprada:"));
let total = precio * cantidad;
alert("El total a pagar por " + cantidad + " " + producto + " es: " + total);

/* Ejercicio 2. Salario semanal */
alert("Calcularemos el salario semanal");
let horas = parseFloat(prompt("Ingrese las horas trabajadas:"));
let valorHora = parseFloat(prompt("Ingrese el valor por hora:"));
let salario = horas * valorHora;
alert("El salario semanal es: " + salario);
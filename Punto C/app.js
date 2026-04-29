let nombre = "Pepito"
const PI = 3.1416
console.log("Tu nombre es: ", nombre, "Pi: ", PI)

/* C. Actividades de apropiación del conocimiento. */

/* Ejercicio 1. Saludo personalizado */
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
alert("Hola " + nombre + ", tu edad es " + edad);

/* 2. Área de un rectángulo */
alert("Ahora calcularemos el area de un triangulo");
let base = parseFloat(prompt("Ingrese la base del triangulo: "));
let altura = parseFloat(prompt("Ingrese la altura: "));
let Area = (base * altura) / 2;
alert("El area del triangulo es: " + Area);

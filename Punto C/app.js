let nombre = "Pepito";
const PI = 3.1416;
console.log("Tu nombre es: ", nombre, "Pi: ", PI);

/* C. Actividades de apropiación del conocimiento. */

/* Ejercicio 1. Saludo personalizado */
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
alert("Hola " + nombre + ", tu edad es " + edad);

/* Ejercicio 2 Área de un rectángulo */
alert("Ahora calcularemos el area de un triangulo");
let base = parseFloat(prompt("Ingrese la base del triangulo: "));
let altura = parseFloat(prompt("Ingrese la altura: "));
let Area = (base * altura) / 2;
alert("El area del triangulo es: " + Area);

/* Ejercicio 3 Promedio de tres notas */
alert("Ahora el promedio de tres notas ");
let Nota1 = parseFloat(prompt("Ingrese la nota 1: "));
let Nota2 = parseFloat(prompt("Ingrese la nota 2: "));
let Nota3 = parseFloat(prompt("Ingrese la nota 3: "));
let promedio = (Nota1 + Nota2 + Nota3) / 3;
alert("El promedio de las notas es: " + promedio);

/* Ejercicio 4  Conversión de monedas*/
alert("Ahora convertiremos de dolares a cop");
let dol = parseFloat(prompt("Ingrese el valor en dolares: "));
let valor = dol * 3564.5;
alert("El valor de tus dolares a cop es: " + valor);

/* Ejercicio 5. Conversión de temperatura */
alert("Ahora convertiremos grados Celsius a Fahrenheit");
let celsius = parseFloat(prompt("Ingrese la temperatura en °C: "));
let fahrenheit = (celsius * 9) / 5 + 32;
alert("La temperatura en Fahrenheit es: " + fahrenheit);

/* Ejercicio 6. Calcular perímetro de un cuadrado */
alert("Ahora calcularemos el perímetro de un cuadrado");
let lado = parseFloat(prompt("Ingrese la longitud del lado: "));
let perimetro = lado * 4;
alert("El perímetro del cuadrado es: " + perimetro);

/* Ejercicio 7. Calcular el doble y el triple */
alert("Ahora calcularemos el doble y el triple de un número");
let numero = parseFloat(prompt("Ingrese un número: "));
let doble = numero * 2;
let triple = numero * 3;
alert("El doble es: " + doble + " y el triple es: " + triple);

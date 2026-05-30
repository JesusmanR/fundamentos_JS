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

/* Ejercicio 3. Promedio de edad en un grupo (Punto D) */
alert("Calcularemos el promedio de edad de 4 personas");
let edad1 = parseInt(prompt("Ingrese la edad 1:"));
let edad2 = parseInt(prompt("Ingrese la edad 2:"));
let edad3 = parseInt(prompt("Ingrese la edad 3:"));
let edad4 = parseInt(prompt("Ingrese la edad 4:"));
let promedio = (edad1 + edad2 + edad3 + edad4) / 4;
alert("El promedio de edad es: " + promedio);

/* Ejercicio 4. Consumo de gasolina */
alert("Calcularemos el consumo de gasolina");
let kilometros = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
let consumoPorKm = parseFloat(prompt("Ingrese el consumo por kilómetro (litros/km):"));
let litrosConsumidos = kilometros * consumoPorKm;
alert("Los litros consumidos son: " + litrosConsumidos);

/* Ejercicio 5. Tiempo de viaje */
let distancia = parseFloat(prompt("Ingrese la distancia del recorrido en km:"));
let velocidad = parseFloat(prompt("Ingrese la velocidad promedio en km/h:"));
let tiempo = distancia / velocidad;
alert("El tiempo estimado de viaje es: " + tiempo.toFixed(2) + " horas");

/* Ejercicio 6. Conversión de minutos a horas y minutos */
let minutosTotales = parseInt(prompt("Ingrese el número de minutos:"));
let horas = Math.floor(minutosTotales / 60);
let minutos = minutosTotales % 60;
alert(minutosTotales + " minutos equivalen a: " + horas + " horas y " + minutos + " minutos.");

/* Ejercicio 7. Cálculo de descuento simple */
let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let descuento = parseFloat(prompt("ingrese el descuento: "));
let precioFinal = precio - descuento;
alert("Precio original: $" + precio.toFixed(2) + "\nDescuento (10%): $" + descuento.toFixed(2) + "\nPrecio final: $" + precioFinal.toFixed(2));

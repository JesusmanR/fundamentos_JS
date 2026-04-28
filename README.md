# 📘 Actividades de Apropiación del Conocimiento — JavaScript Básico

Ejercicios secuenciales en JavaScript que practican entrada de datos, operaciones y salida por consola.

---

## 🗂️ Estructura del proyecto

```
📁 js-actividades/
├── 01_saludo_personalizado.js
├── 02_area_rectangulo.js
├── 03_promedio_notas.js
├── 04_conversion_moneda.js
├── 05_conversion_temperatura.js
├── 06_perimetro_cuadrado.js
├── 07_doble_triple.js
└── README.md
```

---

## 🧪 Ejercicios

### 1. Saludo personalizado
Solicita el nombre y la edad del usuario y muestra un mensaje de saludo.

```js
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
console.log("Hola " + nombre + ", tienes " + edad + " años.");
```

---

### 2. Área de un rectángulo
Solicita la base y la altura, calcula y muestra el área.

```js
let base = parseFloat(prompt("Ingresa la base:"));
let altura = parseFloat(prompt("Ingresa la altura:"));
let area = base * altura;
console.log("El área del rectángulo es: " + area);
```

---

### 3. Promedio de tres notas
Solicita tres calificaciones y calcula el promedio.

```js
let nota1 = parseFloat(prompt("Nota 1:"));
let nota2 = parseFloat(prompt("Nota 2:"));
let nota3 = parseFloat(prompt("Nota 3:"));
let promedio = (nota1 + nota2 + nota3) / 3;
console.log("El promedio es: " + promedio.toFixed(2));
```

---

### 4. Conversión de monedas
Convierte un valor en pesos colombianos a dólares (1 USD = 4000 COP).

```js
let pesos = parseFloat(prompt("Ingresa el valor en pesos colombianos:"));
let dolares = pesos / 4000;
console.log("Equivale a: $" + dolares.toFixed(2) + " USD");
```

---

### 5. Conversión de temperatura
Convierte grados Celsius a Fahrenheit usando `F = (C × 9/5) + 32`.

```js
let celsius = parseFloat(prompt("Ingresa la temperatura en Celsius:"));
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(celsius + "°C equivalen a " + fahrenheit + "°F");
```

---

### 6. Perímetro de un cuadrado
Solicita el lado y calcula el perímetro.

```js
let lado = parseFloat(prompt("Ingresa la longitud del lado:"));
let perimetro = lado * 4;
console.log("El perímetro del cuadrado es: " + perimetro);
```

---

### 7. Doble y triple de un número
Solicita un número y muestra su doble y triple.

```js
let numero = parseFloat(prompt("Ingresa un número:"));
console.log("Doble: " + (numero * 2));
console.log("Triple: " + (numero * 3));
```

---

## 🛠️ Herramientas utilizadas

| Herramienta | Uso |
|---|---|
| Visual Studio Code | Editor de código |
| Navegador web | Ejecución con `prompt()` y DevTools |
| Git / GitHub | Control de versiones y publicación |

---

## 📋 Evidencias de aprendizaje

- [x] Archivos `.js` con estructura clara y comentarios
- [x] Uso correcto de `prompt()`, `parseFloat()` y `console.log()`
- [x] Código fuente publicado en GitHub
- [ ] Archivos HTML/CSS con estructura BEM *(próxima fase)*

---

## 📚 Conceptos aplicados

- Variables y tipos de datos primitivos
- Entrada de datos con `prompt()`
- Operaciones aritméticas básicas
- Salida por consola con `console.log()`
- Conversión de tipos con `parseFloat()`

---

## 🏫 Información académica

**Institución:** SENA  
**Programa:** Tecnología en Análisis y Desarrollo de Software  
**Fase:** Apropiación del conocimiento  
**Formato:** GFPI-F-135 V04

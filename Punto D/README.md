# 📗 Actividades de Transferencia del Conocimiento — JavaScript Aplicado

Ejercicios prácticos en JavaScript orientados a situaciones reales: facturación, salarios, consumos y conversiones.

---

## 🗂️ Estructura del proyecto

```
📁 js-transferencia/
├── 01_factura_compra.js
├── 02_salario_semanal.js
├── 03_promedio_edad.js
├── 04_consumo_gasolina.js
├── 05_tiempo_viaje.js
├── 06_minutos_a_horas.js
├── 07_descuento_simple.js
└── README.md
```

---

## 🧪 Ejercicios

### 1. Factura de compra simple
Solicita producto, precio y cantidad; calcula y muestra el total a pagar.

```js
let producto = prompt("Nombre del producto:");
let precio = parseFloat(prompt("Precio unitario:"));
let cantidad = parseInt(prompt("Cantidad:"));
let total = precio * cantidad;
console.log("El total a pagar por " + cantidad + " " + producto + " es: $" + total.toFixed(2));
```

---

### 2. Salario semanal
Calcula el salario a partir de las horas trabajadas y el valor por hora.

```js
let horas = parseFloat(prompt("Horas trabajadas en la semana:"));
let valorHora = parseFloat(prompt("Valor por hora ($):"));
let salario = horas * valorHora;
console.log("Salario semanal: $" + salario.toFixed(2));
```

---

### 3. Promedio de edad en un grupo
Solicita las edades de 4 personas y calcula el promedio.

```js
let edad1 = parseFloat(prompt("Edad persona 1:"));
let edad2 = parseFloat(prompt("Edad persona 2:"));
let edad3 = parseFloat(prompt("Edad persona 3:"));
let edad4 = parseFloat(prompt("Edad persona 4:"));
let promedio = (edad1 + edad2 + edad3 + edad4) / 4;
console.log("Promedio de edad: " + promedio.toFixed(1) + " años");
```

---

### 4. Consumo de gasolina
Calcula los litros totales consumidos según kilómetros y consumo por km.

```js
let km = parseFloat(prompt("Kilómetros recorridos:"));
let consumoPorKm = parseFloat(prompt("Consumo (litros/km):"));
let litros = km * consumoPorKm;
console.log("Litros consumidos: " + litros.toFixed(2) + " L");
```

---

### 5. Tiempo de viaje
Estima el tiempo de viaje dado la distancia y la velocidad promedio.

```js
let distancia = parseFloat(prompt("Distancia del recorrido (km):"));
let velocidad = parseFloat(prompt("Velocidad promedio (km/h):"));
let tiempo = distancia / velocidad;
console.log("Tiempo estimado: " + tiempo.toFixed(2) + " horas");
```

---

### 6. Conversión de minutos a horas y minutos
Convierte un total de minutos al formato `X horas y Y minutos`.

```js
let totalMinutos = parseInt(prompt("Ingresa los minutos totales:"));
let horas = Math.floor(totalMinutos / 60);
let minutos = totalMinutos % 60;
console.log(totalMinutos + " minutos equivalen a: " + horas + " horas y " + minutos + " minutos");
```

---

### 7. Cálculo de descuento simple
Aplica un descuento del 10% al precio de un producto.

```js
let precio = parseFloat(prompt("Precio del producto ($):"));
let descuento = precio * 0.10;
let precioFinal = precio - descuento;
console.log("Descuento aplicado (10%): $" + descuento.toFixed(2));
console.log("Precio final: $" + precioFinal.toFixed(2));
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

- [x] Archivos `.js` con comentarios y estructura clara
- [x] Uso de `prompt()`, `parseInt()`, `parseFloat()` y `Math.floor()`
- [x] Operaciones aplicadas a contextos reales
- [x] Código fuente publicado en GitHub

---

## 📚 Conceptos aplicados

- Entrada de datos con `prompt()`
- Conversión de tipos: `parseInt()` y `parseFloat()`
- Operaciones aritméticas: multiplicación, división y módulo (`%`)
- Redondeo con `toFixed()` y truncado con `Math.floor()`
- Construcción de mensajes de salida con concatenación

---

## 🏫 Información académica

**Institución:** SENA  
**Programa:** Tecnología en Análisis y Desarrollo de Software  
**Fase:** Transferencia del conocimiento  
**Formato:** GFPI-F-135 V04

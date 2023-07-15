// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const mostrarTabla = (tabla) => {
  for (let i = 1; i <= 10; i++) {
    document.write(`${tabla} x ${i} = ${tabla * i}<br>`);
  }
};

const tabla = parseInt(prompt("Ingrese tabla de multiplicacion que desea ver"));

mostrarTabla(tabla);

// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// const ciudades = [];

const ciudades = [];

let city = prompt("Nombre de la ciudad:");

if (city) {
  ciudades.push(city);
  while (confirm("¿Desea Agregar una nueva ciudad?")) {
    const newCity = prompt("Nombre de la ciudad:");
    if (newCity) ciudades.push(newCity);
  }

  const longitud = ciudades.length;

  document.write(`Longitud del arreglo: ${longitud}<br>`);

  document.write(`${1} ${ciudades[0]}<br>`);

  if (longitud >= 2) document.write(`${3} ${ciudades[2]}<br>`);

  document.write(`Ultimo elemento ${ciudades.at(-1)}<br>`);

  ciudades.push("Paris");

  document.write(`Elemento de la segunda posicion: ${ciudades[1]}<br>`);

  ciudades.splice(1, 0, "Barcelona");

  ciudades.forEach((ciudad) => document.write(`* Elemento ${ciudad}<br>`));
}

// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces

const tirarDados = () => {
  let dado1 = Math.floor(Math.random() * 6 + 1);
  let dado2 = Math.floor(Math.random() * 6 + 1);
  return dado1 + dado2;
};

const opciones = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const sumas = [];
const resultado = {};

for (let i = 0; i < 50; i++) {
  sumas.push(tirarDados());
}

console.log(sumas);
sumas.forEach((suma) => {
  resultado[suma] = (resultado[suma] || 0) + 1;
});

for (const key in resultado) {
  document.write(`${key}- ${resultado[key]}<br>`);
}

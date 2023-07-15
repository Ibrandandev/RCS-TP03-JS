// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const header = document.createElement("h1");
header.innerText = "Lista de Meses";
document.body.append(header);

const container = document.createElement("ul");
document.body.append(container);

meses.forEach((mes) => {
  const li = document.createElement("li");
  li.innerText = mes;
  container.append(li);
});

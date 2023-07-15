// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

const calcularPerimetro = (lado1, lado2) => {
  document.write(
    `El perimetro de los lados ingresados es: ${2 * (lado1 + lado2)}`
  );
};

const lado1 = parseInt(prompt("Ingrese lado 1"));
const lado2 = parseInt(prompt("Ingrese lado 2"));

calcularPerimetro(lado1, lado2);

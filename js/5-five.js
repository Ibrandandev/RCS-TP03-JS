// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const analizarCadena = (cad) => {
  if (cad === cad.toUpperCase())
    console.log("La cadena esta compuesta por MAYUSCULAS");
  else if (cad === cad.toLowerCase())
    console.log("La cadena esta compuesta por minusculas");
  else console.log("La cadena esta compuesta por MAYUSCULAS y minusculas");
};

analizarCadena("HOLA");
analizarCadena("hola");
analizarCadena("Hola");

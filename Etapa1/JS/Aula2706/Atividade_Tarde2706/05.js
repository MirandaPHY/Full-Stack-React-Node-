/*
5. Crie uma função que recebe um array de strings 
como parâmetro e retorne um novo array apenas com 
as strings acima de 5 caracteres.
*/

function stringsAcimaDe5Caracteres(array) {
  let filtradas = [];
  for (let string of array) {
    if (string.length > 5) {
      filtradas.push(string);
    }
  }
  return filtradas;
}

console.log(stringsAcimaDe5Caracteres(["casa", "carro", "bicicleta", "moto", "ônibus", "avião"])); // [ 'bicicleta', 'ônibus' ]
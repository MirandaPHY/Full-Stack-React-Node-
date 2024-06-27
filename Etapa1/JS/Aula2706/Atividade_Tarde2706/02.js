/*
2. Crie uma função que recebe um array de números e 
retorna um array com todos os valores elevados ao quadrado.
*/

function quadradoArray(array) {
  let quadrados = [];
  for (let numero of array) {
    quadrados.push(numero ** 2);
  }
  return quadrados;
}
console.log(quadradoArray([1, 2, 3, 4, 5])); // [ 1, 4, 9, 16, 25 
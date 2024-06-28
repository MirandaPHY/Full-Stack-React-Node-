/*
4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.
*/

function exercicio4() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log("Mostrando os números com for-of: ");
  for(let n of numeros) {
      console.log(n);
  }
  console.log("Mostrando os números com for comum: ");
  for(let i = 0; i < numeros.length; i++) {
      console.log(numeros[i]);
  }
}

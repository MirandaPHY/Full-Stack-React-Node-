/*
6. Crie um array com 7 números. Percorra e indique qual o maior número deles.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7];

let maior = numeros[0];
for (let numero of numeros) {
  if (numero > maior) {
    maior = numero;
  }
}

console.log(maior); // 7



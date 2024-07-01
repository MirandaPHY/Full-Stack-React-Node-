/*
1. Crie uma função arrow que recebe dois números e retorna o maior deles.
*/

const maiorNumero = (num1, num2) => num1 > num2 ? num1 : num2; // ? : é o operador ternário, se a condição for verdadeira, retorna o

console.log(maiorNumero(5, 10)); // 10
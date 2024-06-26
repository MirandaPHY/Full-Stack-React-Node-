/*
9. Escreva uma função que receba uma string e um caractere
 e retorne o número de ocorrências desse caractere na string.
*/

function ocorrencias(texto, caractere) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caractere) {
      contador++;
    }
  }
  return contador;
}

console.log(ocorrencias("Olá mundo!", "o"));
console.log(ocorrencias("JavaScript", "a"));
console.log(ocorrencias("JavaScript", "J"));
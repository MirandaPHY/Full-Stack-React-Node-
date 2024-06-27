/*
9. Escreva uma função que receba uma palavra e um número.
 Retorne a palavra repetida a quantidade de vezes indicada pelo 
 segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". 
 OBS: Utilize um loop para resolver.
 */

function repetir(palavra, vezes) {
  let resultado = "";
  for (let i = 0; i < vezes; i++) {
    resultado += palavra;
  }
  return resultado;
}

console.log(repetir("batata", 3)); // batatabatatabatata
console.log(repetir("banana", 2)); // bananabanana
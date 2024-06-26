/*
2. Crie uma função que recebe um número (PARÂMETRO) 
de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%
*/

function percentual(num) {
  return num * 100;
}

let resultado = percentual(0.456);
let resultado1 = percentual(0.953);
let resultado2 = percentual(0.789);
console.log(`${resultado}%`);
console.log(`${resultado1}%`);
console.log(`${resultado2}%`);
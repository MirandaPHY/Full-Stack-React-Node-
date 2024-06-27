/*
8. Crie uma função que inverte uma string. Retorna ela invertida.
*/

function inverterString(string) {
  return string.split("").reverse().join("");
}

console.log(inverterString("casa")); // asac
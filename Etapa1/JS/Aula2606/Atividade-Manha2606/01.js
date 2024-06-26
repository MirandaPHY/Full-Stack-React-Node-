/*1. Escreva um programa que inverte uma string*/

let string = "soulcode";
let stringInvertida = "";
for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
}
console.log(stringInvertida);
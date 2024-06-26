/*1. Escreva um programa que inverte uma string*/

let nome = "soulcode";
let nomeInvertida = "";
console.log(nome);
for (let i = nome.length - 1; i >= 0; i--) {
    nomeInvertida += nome[i];
}
console.log(nomeInvertida);
/*
 Arrays -> armazenar multiplos valores/itens/elementos
// [] -> vazio
// [1, 2, 3, 4, 5] -> preenchido
// ["batata", "batata doce"] -> com strings
*/

let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
console.log(figuras);

let numeros = [1, 3.2, 5.4, 7.5, 9]
console.log(numeros);

// Acessando um elemento 
console.log(figuras[1]);
console.log(numeros[5]);
console.log(figuras[0]);
console.log(figuras[figuras.length - 1]); // Ultimo elemento da array
console.log(figuras[figuras.length - 2]); // Penultimo elemento da array

// Alterar os elementos
let notas = [6.5, 8.0, 9.0];
console.log("Antes: "notas);
notas[0] = 8.5;
notas[1] = notas[2] +  0.5;
notas[0]++;
console.log("Depois: "notas);]


//Tamanho (length)

let frutas = ["banana", "maçã", "uva", "pera"];
console.log(frutas.length);

// Adicionar elementos
let cores = ["azul", "vermelho", "verde"];
console.log(cores);
cores.push("amarelo");
console.log(cores);
cores.push("roxo", "rosa");
console.log(cores);


let arr1 = [];
let arr2 = [1, 2, 3, 4];

console.log(arr1.length);
console.log(arr2.length);


// Percorrer array
for(let i = 0; i < arr1.length; i++){
  console.log(i);
}


// Tamanho (length)
let arr1 = [];
let arr2 = [1, 2, 3, 4];

console.log(arr1.length);
console.log(arr2.length);

// Percorrer array
for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

let alunos = ["Alberto", "Ana", "Beatriz", "Carlos"];

for(let i = 0; i < alunos.length; i++) {
    console.log(`O aluno ${i} é ${alunos[i]}`);
}

// For-of
let frutas = ["abacaxi", "laranja", "manga", "abacate"];

for(let f of frutas) { // Percorre todos elementos, e "f" assume cada um dos valores por vez
    console.log(f);
}

for(let i in frutas) { // Percorre os índices
    console.log(frutas[i]);
}

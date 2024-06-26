// Strings = cadeias de carcteres

const nome = "Paulo"
const sobrenome = "Silva"

// Interpolação de String
const nomeCompleto = ´${nome} ${sobrenome}´;

console.log(nomeCompleto);

// Formação de strings

let meuPet = "Fred";
/*
  0 -> F
  1 -> r
  2 -> e
  3 -> d
  console.log(meuPet[0]); // F
  console.log(meuPet[1]); // r
  console.log(meuPet[2]); // e
  console.log(meuPet[3]); // d
*/

// Tamanho da string
//console.log(meuPet.length); // 4

// Percorrendo a string caractere por caractere
/*
for (let i = 0; i < meuPet.length; i++) {
  console.log(meuPet[i]);
}
*/
/*
// Função de string
let palavras = "Java Script";
console.log(palavras.toUpperCase()); // JAVA SCRIPT
console.log(palavras.toLowerCase()); // java script
console.log(palavras.charAt(0)); // palavras[0]
console.log(palavras.replace("Java", "Type"));
console.log(palavras.replace("J", "R")); // vai ser trocado J para o R
console.log(palavras.replace("a", "x")); // vai ser trocado a para o x mais somente o primeira letra que vai ser encontrada.
console.log(palavras.replace(/a/g, "x")); // vai ser trocado todas as letras a para o x
*/

let arquivo = "musica.mp3";
console.log(arquivo.endsWith("mp3")); // verifica se termina com 'mp3
console.log(arquivo.startsWith("musica")); // verifica se começa com 'musica'
console.log(arquivo.includes("musica")); // verifica se contém 'musica'
console.log(arquivo.indexOf("musica")); // retorna a posição que começa a palavra 'musica'
console.log(arquivo.endsWith('mp4'));
console.log(arquivo.slice(4, 6));


/*2. Crie uma variável que armazena uma frase, e utilize as 
funcionalidades de string para remover uma palavra específica 
da frase e trocar por "###"
*/

let frase = "Eu gosto de estudar na SoulCode Academy";
console.log(frase)
let novaFrase = frase.replace("Academy", "###");
console.log(novaFrase); // Eu gosto de estudar na SoulCode ###
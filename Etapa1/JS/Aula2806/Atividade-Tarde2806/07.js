/*
Exercício 7: Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.
*/

function contarCaracteres(string) {
    let contagem = {};
    for (let i = 0; i < string.length; i++) {
        if (contagem[string[i]]) {
            contagem[string[i]]++;
        } else {
            contagem[string[i]] = 1;
        }
    }
    return contagem;
}

console.log(contarCaracteres('banana')); // { b: 1, a: 3, n: 2 }
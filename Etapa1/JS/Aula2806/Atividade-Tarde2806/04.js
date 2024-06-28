/*
Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.
*/

/*
código efetivamente conta o número de vogais em uma determinada cadeia de 
caracteres iterando através da cadeia de caracteres, verificando cada caractere
 em relação a uma lista de vogais e incrementando um contador sempre que uma vogal é encontrada.
*/
function contarVogais(string) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i])) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVogais('aeiou')); // 5
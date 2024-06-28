/*
Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.
*/
/*
código localiza com eficiência o menor número em uma matriz iterando pelos
 elementos, comparando cada elemento com um menor valor atual e atualizando 
 o menor valor se um elemento menor for encontrado.
*/
function menorNumero(array) {
    let menor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    return menor;
}

console.log(menorNumero([1, 2, 3, 4, 5])); // 1
/*
Exercício 1: Escreva uma função que receba um array de números 
e retorne um novo array contendo apenas os números pares.
(Comentar em casa Linha)
*/

/*
A função itera pela matriz e verifica se cada elemento é uniforme.
 Se um elemento for par, ele será adicionado a uma nova matriz chamada 
 . Finalmente, a função retorna a  matriz, que contém todos os números 
 pares da matriz de entrada original.
 */
function pares(array) {  
    let pares = [];   
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}
console.log(pares([1, 2, 3, 4, 5,]));


/*
Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.
*/
/*
define uma função chamada  que calcula a soma de todos os elementos em uma 
determinada matriz. Em seguida, ele chama a função com uma matriz como entrada 
e imprime o resultado no console.

---

código calcula efetivamente a soma de todos os elementos em uma determinada 
matriz usando um  loop e retorna a soma como a saída da função.for
*/
function soma(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

console.log(soma([1, 2, 3, 4, 5])); // 15
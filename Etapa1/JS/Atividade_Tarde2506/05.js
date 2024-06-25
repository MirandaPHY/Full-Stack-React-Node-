/*5. Crie um programa que exiba todos os números 
múltiplos de 7 de 1 a 100 usando um loop for e 
uma estrutura condicional if para verificar se 
cada número é múltiplo de 7.
*/
let n = 100;
for (let i = 1; i <= n; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}

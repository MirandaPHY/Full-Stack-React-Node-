/*
3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. 
Utilize um if para verificar se o número é ímpar.
*/

let numero = 1;
let soma = 0;
while (numero <= 999) {
    if (numero % 2 !== 0) {
        soma += numero;
    }
    numero++;
}
console.log(soma);
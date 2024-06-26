/*4. Crie um programa que conta quantos números entre 1 e 1000 
são divisíveis por 9, mostre o número e ao final exiba o total 
de números divisíveis por 9.
*/

let numero = 1;
let total = 0;

while (numero <= 1000) {
    if (numero % 9 === 0) {
        console.log(numero + "é divisivel por 9");
        total++;
    }
    numero++;
}

console.log("Total de números divisíveis por 9: " + total);
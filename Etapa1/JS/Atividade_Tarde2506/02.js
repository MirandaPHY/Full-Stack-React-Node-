/*2. Use um laço for para imprimir na tela a série de
 Fibonacci até o décimo termo. A sequência de Fibonacci 
 é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.
 */

let a = 0;
let b = 1;
let c = 0;
let n = 10;
for (let i = 0; i < n; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}
/*2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70*/

let numero = 1;
let tabuada = 7;

while (numero <= 10) {
    console.log(`${tabuada} x ${numero} = ${tabuada * numero}`);
    numero++;
}

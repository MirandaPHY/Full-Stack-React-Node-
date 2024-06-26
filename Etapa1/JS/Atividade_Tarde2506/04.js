    /* 4. Faça um programa que calcule o fatorial de um 
    número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.
    */

    let n = 5;
    let fatorial = 1;
    for (let i = n; i > 0; i--) {
        fatorial *= i;
    }
    console.log(`${n}! = ${fatorial}`);


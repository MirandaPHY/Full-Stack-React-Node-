/* 7. Mostre a seguinte figura com utilização de laços:
*
**
***
****
*****
*/

let n = 5;
for (let i = 1; i <= n; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += '*';
    }
    console.log(linha);
}
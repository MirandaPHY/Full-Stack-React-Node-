/* 6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400.
*/

let ano = 2020;
let bissexto = false;

if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)) {
  bissexto = true;
  console.log('O ano ' + ano + ' é bissexto');
}

else {
  console.log('O ano ' + ano + ' não é bissexto');
}

// Output: O ano 2020 é bissexto

/* 1. Crie uma função para calcular e retorna o IMC, e outra função que 
recebe o valor de IMC e indica o status no terminal.
*/

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function statusIMC(imc) {
  if (imc < 18.5) {
    console.log('Abaixo do peso');
  } else if (imc >= 18.5 && imc < 24.9) {
    console.log('Peso normal');
  } else if (imc >= 25 && imc < 29.9) {
    console.log('Sobrepeso');
  } else if (imc >= 30 && imc < 34.9) {
    console.log('Obesidade grau 1');
  } else if (imc >= 35 && imc < 39.9) {
    console.log('Obesidade grau 2');
  } else {
    console.log('Obesidade grau 3');
  }
}

let imc1 = calcularIMC(87, 1.78);
statusIMC(imc1);
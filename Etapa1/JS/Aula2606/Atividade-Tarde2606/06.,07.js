/*
6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.
*/

function calcularAreaCirculo(raio) {
  return 3.14 * raio * raio; 
}

let area = calcularAreaCirculo(8);
console.log(`A Area do Circulo e ${area}`);
/*
7. Crie uma função que recebe a área de um circulo e mostra o nível:
Entre 1 e 20 => Nível I
Entre 21 e 40 => Nível II
Qualquer outro diâmetro => Nível inválido
*/

function nivelCirculo(area) {
  if (area >= 1 && area <= 20) {
    console.log('Nível I');
  } else if (area >= 21 && area <= 40) {
    console.log('Nível II');
  } else {
    console.log('Nível inválido');
  }
}

nivelCirculo(10);

/*7. Crie uma variável idade. Caso seja uma idade inválida 
(negativa ou maior que 130) mostre uma mensagem de aviso.
*/

let idade = 131;

if (idade < 0 || idade > 15) {
  console.log('Você e uma Criança');
}

else if (idade < 15 || idade > 30) {
  console.log('Você é um Jovem');
}

else if (idade < 30 || idade > 60) {
  console.log('Você é um Adulto');
}

else if (idade < 60 || idade > 130) {
  console.log('Você é um Idoso');
}

else {
  console.log('Idade válida');
}

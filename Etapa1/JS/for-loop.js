/*
  for (inicializacao; condicao; atualizacao) {
    // codigo que será repetido
  }

*/

  // Exemplo 1
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

// Adaptar os exercicios 
// Exercicio 1

for (let c = 2; c <= 10; c+=2){
  console.log(c);
}

//Exemplo 2 Imprimir a tabuada do 7

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// Exemplo 3 
let soma = 0;
for(let c = 1; <= 999; c++){
  if(c % 2 !== 0){
    soma += c;
  }
}

console.log(soma);


// Exemplo 4

let qt = 0;
for(let c = 1; c <= 1000; c++){
  if(c % 9 === 0){
      console.log(c + "é divisivel por 9 ")
      qt++;
  }
}

console.log("Quantidade de numeros divisíveis por 9: " + qt);

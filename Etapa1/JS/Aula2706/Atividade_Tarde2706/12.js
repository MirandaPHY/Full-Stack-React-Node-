/*
12. Crie uma função que recebe um array, um valor de 
busca e um valor padrão. Caso o elemento exista no array 
retorne o elemento, caso contrário retorne o valor padrão 
definido via parâmetro. Ex: busca(array, 'batata', 'não tem
 batata') -> 'não tem batata'
 */

function busca(array, valor, padrao) {
  if (array.includes(valor)) {
    
    return valor;
  }
  return padrao;
}

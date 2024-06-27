/*
11. Crie uma função que recebe um dia, mês e ano dentro de um array. 
Retorna a data utilizando o separador que também será definido via 
parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'
*/

function formatarData(data, separador) {
  return data.join(separador);
}
console.log(formatarData([20, 6, 2001], '.'));
console.log(formatarData([20, 6, 2024], '-'));
console.log(formatarData([20, 6, 2023], '/'));

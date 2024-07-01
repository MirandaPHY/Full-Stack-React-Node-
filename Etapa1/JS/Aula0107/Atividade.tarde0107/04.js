/*
4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.
*/

const idades = [12, 14, 18, 20, 22, 24, 26, 28, 30];
const idadesMaioresDeIdade = idades.filter((idade) => idade >= 18);
console.log(idadesMaioresDeIdade); // [18, 20, 22, 24, 26, 28, 30]
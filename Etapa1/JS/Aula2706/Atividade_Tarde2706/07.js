/*
7. Crie uma função que extrai os dígitos verificadores
 de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas 
 os dois últimos dígitos.
 */

function extrairDigitosVerificadores(cpf) {
  return cpf.slice(-2);
}

console.log(extrairDigitosVerificadores("056.985.990-23")); // 23
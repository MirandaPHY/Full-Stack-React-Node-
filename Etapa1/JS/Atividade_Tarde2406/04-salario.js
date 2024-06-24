/*4. Crie duas variáveis: salário e quantidadeDependentes. 
Siga a seguinte regra para aplicar ajustes salariais: Caso 
não possua dependentes não realizar ajustes no salário, se 
houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima
 de 5 aumentar em 40% o salário.
*/

let salario = 1000;
let quantidadeDependentes = 6;

if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
  salario = salario + (salario * 0.3);
  console.log('Salário com 30% de aumento: R$' + salario);
}

else if (quantidadeDependentes > 5) {
  salario = salario + (salario * 0.4);
  console.log('Salário com 40% de aumento: R$' + salario);
}

else {
  console.log('Salário sem ajustes: R$' + salario);
}

// Output: Salário com 40% de aumento: R$1400

/*
1. Crie uma função que recebe um array com os nomes dos 
alunos de uma turma, e outro array que recebe a lista de 
presença com os nomes. Retorne uma lista com quais alunos faltaram.
*/

function alunosFaltantes(alunos, presenca) {
  let faltantes = [];
  for (let aluno of alunos) {
    if (!presenca.includes(aluno)) {
      faltantes.push(aluno);
    }
  }
  return faltantes;
}

let alunos = ["João", "Maria", "José", "Ana"];
let presenca = ["João", "José"];
console.log(alunosFaltantes(alunos, presenca)); // [ 'Maria', 'Ana' ]

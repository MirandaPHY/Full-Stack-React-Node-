let pessoa = {
  nome: "Paulo Henderson",
  cpf:"999.999.999-99",
  dataNascimento: "10/01/1992",
  contato:{
    email: "paulo.henderson@unemat.br",
    telefone: "(66) 99999-9999",
    fax: "+9 999 999 9999",
  },
  endereço: {
    cidade: "Belem",
    estado: "PA",
    cep: "99999-999",
    rua: "Rua X",
    numero: "999",
  },
  objetivosProfissionais: ["Home Office", "Desenvolvedor Senior", "Exterior"]
}

console.log(pessoa.contato);
console.log(pessoa.contato.email);

// Exemplo: Crie um objeto para representar um aluno:
// nome
// serie
// materias (nome da materia, nome do professor)
// notas

const aluno = {
  nome: "Paulo",
  serie: "3º ano",
  materias: [
    {
      nome: "Matemática",
      professor: "João"
    },
    {
      nome: "Português",
      professor: "Maria"
    },
    {
      nome: "História",
      professor: "Carlos"
    }
  ],
  notas: [7.0, 8.5, 6.0]
}


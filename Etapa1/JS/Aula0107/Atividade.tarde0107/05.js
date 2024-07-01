/*
5. Dado um objeto representando um livro, que contém título, autor,
 e um objeto aninhado com informações de publicação (editora, ano),
  acesse o nome da editora.
*/

const livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
}
const publicacao = {
    editora: 'WMF Martins Fontes',
    ano: 2012,
}

livro.publicacao = publicacao;
const { editora } = livro.publicacao;
console.log(editora); // WMF Martins Fontes

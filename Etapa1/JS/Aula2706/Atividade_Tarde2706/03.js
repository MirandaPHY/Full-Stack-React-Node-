/*
3. Crie uma função que recebe um array de nomes de arquivos, 
e recebe também uma extensão, a função deve retornar apenas 
os nomes de arquivo que forem dessa extensão.
*/

function filtrarArquivos(arquivos, extensao) {
  let filtrados = [];
  for (let arquivo of arquivos) {
    if (arquivo.endsWith(extensao)) {
      filtrados.push(arquivo);
    }
  }
  return filtrados;
}

let arquivos = ["index.html", "style.css", "script.js", "imagem.jpg"];
let extensao = ".js";
console.log(filtrarArquivos(arquivos, extensao)); // [ 'script.js' ]

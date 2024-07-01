/*
2. Dado um array de palavras, use forEach para 
imprimir cada palavra com a primeira letra em maiúscula.
*/

const palavras = ['banana', 'maçã', 'uva', 'pera', 'melancia'];
palavras.forEach((palavra) => {
    console.log(palavra.charAt(0).toUpperCase() + palavra.slice(1));
}
);


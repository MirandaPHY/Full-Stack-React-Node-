/*Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.
*/

/*
 código verifica efetivamente se uma cadeia de caracteres é um palíndromo, 
 invertendo a cadeia de caracteres e, em seguida, comparando-a com a cadeia 
 de caracteres original.
*/
function isPalindrome(string) {
    let reversedString = string.split('').reverse().join('');
    return string === reversedString;
}
console.log(isPalindrome('arara'));
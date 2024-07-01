/*
7. Tente adaptar os exercícios da atividade da semana 03 
para utilizar arrow function, forEach, map e filter.

function isPalindrome(string) {
    let reversedString = string.split('').reverse().join('');
    return string === reversedString;
}
console.log(isPalindrome('arara'));
*/

const isPalindrome = (string) => {
    let reversedString = string.split('').reverse().join('');
    return string === reversedString;
}
console.log(isPalindrome('arara'));

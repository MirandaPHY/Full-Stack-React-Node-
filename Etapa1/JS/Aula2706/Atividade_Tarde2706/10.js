/*
10. Escreva uma função que receba duas strings e retorne true 
se elas forem iguais ou false caso contrário.
*/

function saoIguais(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  return false;
}
  
console.log(saoIguais("abc", "abc")); // true
console.log(saoIguais("abc", "def")); // false

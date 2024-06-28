/*
Exercício 8: Escreva uma função que recebe um email, e 
ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
*/

function ofuscaEmail(email) {
    let emailPartes = email.split('@');
    let emailUsuario = emailPartes[0];
    let emailDominio = emailPartes[1];
    let emailUsuarioOfuscado = emailUsuario[0] + '*'.repeat(emailUsuario.length - 1);
    return emailUsuarioOfuscado + '@' + emailDominio;
}

console.log(ofuscaEmail('paulohendersonmiranda1992@dev.com');
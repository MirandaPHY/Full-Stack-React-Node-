/*3. Crie uma variável que armazena um email, 
o programa deve indicar se este email é do domínio 
soulcode.com
*/

let email = "";
let dominio = "soulcode.com";
let emailSplit = email.split("@");
if (emailSplit[1] === dominio) {
    console.log("O email é do domínio soulcode.com");
}
else {
    console.log("O email não é do dominio da soulcode.com")
}

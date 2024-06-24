/* 8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N-
 Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor 
 Inválido!", conforme o caso.
*/

let turno = 'M';
let mensagem;

switch (turno) {
  case 'M':
    mensagem = 'Bom Dia!';
    break;
  case 'V':
    mensagem = 'Boa Tarde!';
    break;
  case 'N':
    mensagem = 'Boa Noite!';
    break;
  default:
    mensagem = 'Valor Inválido!';
}
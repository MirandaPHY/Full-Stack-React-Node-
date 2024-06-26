/*5. Crie uma variável para armazenar um dia da semana 
(1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no 
valor indique se é final de semana ou dia útil.
*/

let dia = 1;
let diaSemana;
switch (dia) {
  case 1:
    diaSemana = 'Domingo';
    break;
  case 2:
    diaSemana = 'Segunda';
    break;
  case 3:
    diaSemana = 'Terça';
    break;
  case 4:
    diaSemana = 'Quarta';
    break;
  case 5:
    diaSemana = 'Quinta';
    break;
  case 6:
    diaSemana = 'Sexta';
    break;
  case 7:
    diaSemana = 'Sábado';
    break;
  default:
    diaSemana = 'Dia inválido';
}
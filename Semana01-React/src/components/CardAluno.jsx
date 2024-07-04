/*
1. Crie um componente CardAluno que recebe as propriedades: nome, série, média. 
Você deve exibir estes dados dentro do componente e exibir o texto "Aprovado!"
 caso a média seja maior ou igual a 7 e "Reprovado!" caso a média seja menor.
  Tente aplicar classes diferentes dependendo da condição, verde e vermelho, para aprovado e reprovado.
*/

import "./CardAluno.css";

// <CardAluno nome="" serie="" media={0}/>
function CardAluno(props) {
    const classe = props.media >= 7 ? "aprovado" : "reprovado";

    return (
        <article className="card-aluno">
            <h4>{props.nome}</h4>
            <p>Série: {props.serie}</p>
            <strong className={classe}>Média: {props.media}</strong>
            <p className={classe}>{props.media >= 7 ? "Aprovado!" : "Reprovado!"}</p>
        </article>
    );
}

export default CardAluno;
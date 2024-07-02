// Titulo é o nome do componente
// Componentes são funções
// Retorno da função é a parte visual
// Exportar o componente

// 1. Crie um componente para representar o Rodapé, não esqueça de exportar e utilizar ele no componente App.
// 2. Crie um componente de Postagem, deve ter nele o título da postagem, um parágrafo de descrição e uma imagem (via link).
// 3. Crie um componente de Blog (dentro dele deve haver múltiplos componentes de Postagem). Não esqueça de exportar e utilizar ele no componente App.
// 4. Crie um arquivo de estilos para cada componente criado por você.

function Titulo() {

    // O conteúdo do return é o visual
    return (
        <h2>Frases do dia</h2>
    );
}

// Disponibilizar o componente para
// ser utilizado em outros arquivos do projeto.
export default Titulo;
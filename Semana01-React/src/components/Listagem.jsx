const Compras = ["Batata palha", "Batata Frita pronta", "Batata Doce", "Batata Chips", "Batata inglesa", "Batata rustica"];


const produtos= [
    {cod: 1, nome: "Batata palha", quantidade:300, precoUnitario: 5}, 
    {cod: 2, nome: "Batata Frita pronta", quantidade:100, precoUnitario: 10},
    {cod: 3, nome: "Batata Doce", quantidade:10, precoUnitario: 10},
    {cod: 4, nome: "Batata Chips", quantidade:900, precoUnitario: 10},
];

// gerar componenetes/elementos a partir de dados (array)

function Listagem(){
    const itensCompra = Compras.map((compra, index) => {
        return <li key= {index}>{compra}</li>
    })

const cardsProdutos = produtos.map((produto) => {
        return (
            // eslint-disable-next-line react/jsx-key
            <article>
                <h3>Nome do Produto</h3>
                <p>QUANTIDADE: {produto.quantidade}</p>
                <p>SUBTOTAL: {produto.quantidade * produto.precoUnitario}</p>
            </article>
        )
});

   
    return(
        <>
        <h2>Lista de Compras</h2>
        <ul>{itensCompra}</ul>
        <hr />
        <h2>Lista de Produtos</h2>
        <section>
            {cardsProdutos}
        </section>
        </>
    )
}

export default Listagem;
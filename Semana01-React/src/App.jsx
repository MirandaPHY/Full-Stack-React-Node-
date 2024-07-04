// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Mensagem from "./components/Mensagem";
import Navbar from "./components/NavBar";
import Aluno from "./components/CardAluno";
import CardAluno from './components/CardAluno';
import CardProduto from "./components/CardProduto";
import Listagem from "./components/Listagem";

// Componente principal da aplicação
function App() {
  return (
    <>
      {/*<CardAluno />

      <CardProduto nome="Celular" precoUnitario={2000} desconto={10}/>
      <CardProduto nome="Fone Wireles" precoUnitario={100} desconto={15}/>
      <CardProduto nome="Carro" precoUnitario={90000} desconto={0}/>*/}

      <Listagem/>

    </>
  );
}

export default App;
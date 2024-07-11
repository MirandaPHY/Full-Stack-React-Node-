import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda"
import NovaTarefa from "./pages/NovaTarefa";
import Notfound from "./pages/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Cadastro" element={<Cadastro/>}/>
      <Route path="/Ajuda" element={<Ajuda/>}/>
      <Route path="/NovaTarefa" element={<NovaTarefa/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Postagem from './components/Postagem'
import Blog from "./components/Blog"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Postagem/>
    <Postagem/>
    <Postagem/>
    <Postagem/>
    <Postagem/>
     <Rodape/>

    </>
  )
}

export default App

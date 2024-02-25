import { useState } from 'react'
import  BoardView  from './components/BoardView';
import './App.css'
import './main.scss'
import './styles.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoardView/>
    </>
  )
}

export default App

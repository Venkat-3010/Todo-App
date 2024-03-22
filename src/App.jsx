import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='container'>
        <p>To Do App</p>
        <AddTodo />
        <hr />
        <Todos />
      </div>
  )
}

export default App

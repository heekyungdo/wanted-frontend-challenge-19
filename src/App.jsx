import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './components/InputForm/InputForm'
import TodoList from './components/TodoList/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div>
  <h2>Todo List</h2>
  <InputForm/>
  <TodoList/>
 </div>
    </>
  )
}

export default App

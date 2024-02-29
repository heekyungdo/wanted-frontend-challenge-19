import './App.css'
import InputForm from './components/InputForm/InputForm'
import TodoList from './components/TodoList/TodoList'

function App() {

  return (
    <>
    <h1>Todo List</h1>
    <main>
      <InputForm/>
      <TodoList/>
    </main>
    </>
  )
}

export default App

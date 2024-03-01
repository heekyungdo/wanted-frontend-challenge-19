import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeTodo} from '../../store/todo'

const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state)=>state.todos)

    const deleteHandler = (id) =>{
      dispatch(removeTodo(id))
    }

  return (
    <div>
        <ul>
            {todoList.map(todo=>(
                <li key={todo.id}>{todo.todo}<button onClick={()=>deleteHandler(todo.id)}>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList

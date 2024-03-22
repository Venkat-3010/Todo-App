import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo } from '../App/TodoSlice'

const Todos = () => {
    const dispatch =useDispatch()
    const todos = useSelector(state => state.todos) || []
    //console.log(todos)

    const handleToggleTodo = (id) => {
      dispatch(toggleTodo(id));
    }

  return (
    <div className='todosList'>
        <ul className='todosItems'>
        {todos.map((todo) => (
            <li className={`listItem ${todo.checked ? 'checkedItem' : ''}`} key={todo.id} >
              <input type='checkbox' checked={todo.checked} onChange={() => handleToggleTodo(todo.id)}/>
              <p>{todo.text}</p>
              <AiFillDelete className='delete' onClick={() => {
                  dispatch(removeTodo(todo.id))
              }}/>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Todos
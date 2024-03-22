import React, { useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { addTodo } from '../App/TodoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleClick = () =>{
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div className='addATodo'>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='todos'/>
        <div className='button'><IoMdAddCircleOutline onClick={handleClick}/></div>
    </div>
  )
}

export default AddTodo
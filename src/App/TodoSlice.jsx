import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Math.random() * 1000,
                text: action.payload,
                checked: false,
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            const todoRemoveId = action.payload;
            state.todos = state.todos.filter((todo) => 
                todo.id !== todoRemoveId
            )
        },
        toggleTodo: (state, action) => {
            const todoId = action.payload;
            const todo = state.todos.find(todo => todo.id === todoId)
            if(todo){
                todo.checked = !todo.checked;
            }
        }
    }
})

export const {addTodo, removeTodo, toggleTodo} = TodoSlice.actions
export default TodoSlice.reducer

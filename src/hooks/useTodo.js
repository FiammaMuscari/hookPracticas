import { useEffect, useReducer } from 'react'
import {todoReducer} from '../09-reducer/todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)    
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))        
    }, [todos])
    
    const handleNewTodo = (todo)=>{
        dispatch({type: 'ADD_TODO', payload: todo})
    }

    const handleDeleteTodo = (id) => {        
        dispatch({type: 'REMOVE_TODO', payload: id})
    }

    const handleToggleTodo = (id) => {
        dispatch({type: 'TOGGLE_TODO', payload: id})
    }
    const handleEditTodo = (id, texto) => {
        dispatch({
            type: 'EDIT_TODO',
            payload: { id, texto }
        })

    }

  return {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    handleEditTodo,
    todoCount: todos.length,
    pendingTodoCount: todos.filter(todo => todo.done === false).length,
  }
}

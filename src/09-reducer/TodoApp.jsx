import React from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

// 1/8/22 const init = () => {
//  return JSON.parse(localStorage.getItem('todos')) || [];
//}

export const TodoApp = () => {
  const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, handleEditTodo, todosCount, pendingTodosCount} =
    useTodo();
    // 1/8/22 const [const [ todos, dispatch ] = useReducer( todoReducer,"initialState" es igual a un arreglo vacio[], init );]
    // useEffect(() => {
    //   localStorage.setItem('todos', JSON.stringify( todos ) );
    // }, [todos]) se ejecuta cada vez que cambian los todos
    


    //cuarto traemos el hook del usetodos con la funcionalidad de cada boton e input para irlos definiendo, a su vez agregamos en cada etiqueta los que van a usarse dentro de las mismas
  return (
    <>
      <h2>TodoApp {todosCount} -  Pendientes {pendingTodosCount}</h2>
      <hr />

      <section className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            onEditTodo={handleEditTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </section>
    </>
  );
};


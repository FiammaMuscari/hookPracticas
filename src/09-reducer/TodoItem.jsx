import { useState } from "react";
import TodoEdit from "./TodoEdit"


export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) => {
    //sexto traemos los todos que habiamos agregado en todolist
      // activar edit 
      const [editEnable, setEditEnable] = useState(false);

      //Habilitar edicion
      const editMode = () => {
          setEditEnable(true);
      }
  return (
    <li className="list-group-item d-flex justify-content-around">
      {
                !editEnable ?
        <><span
            className={`align-self-center  user-select-none ${(todo.done) ? 'text-decoration-line-through ' : ''}`}
            onDoubleClick={() => onToggleTodo(todo.id)}
            aria-label="span"
          >
            {todo.description}
          </span>
          <div className="d-flex gap-3">
          <button className="btn btn-info" onClick={() => editMode()}>✏️</button><button
            className="btn btn-danger"
            onClick={() => onDeleteTodo(todo.id)}
          >Borrar</button><button className="btn btn-success" onClick={() => onToggleTodo(todo.id)}>Listo</button></div></>
        :
                    <TodoEdit 
                    setEditEnable={setEditEnable} 
                    todo={todo}
                    onEditTodo={onEditTodo}
                    />
            }
    </li>
  )
}
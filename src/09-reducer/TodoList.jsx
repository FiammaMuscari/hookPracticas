import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo, onEditTodo}) => {
  //sexto traemos los todos que habiamos agregado en todoapp
  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem 
                  key={ todo.id } 
                  todo={ todo } 
                  onDeleteTodo={ onDeleteTodo } 
                  onToggleTodo={ onToggleTodo }
                  onEditTodo={onEditTodo}
                />
            ))
        }
    </ul>
  )
};

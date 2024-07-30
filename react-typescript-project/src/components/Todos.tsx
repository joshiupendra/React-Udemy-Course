import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from './Todos.module.css';

const Todos: React.FC<{}> = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => {
        return <TodoItem key={item.text} todoText={item.text} onRemoveTodo={todosContext.removeTodo.bind(null, item.id)} />
      })}
    </ul>
  );
}

export default Todos;
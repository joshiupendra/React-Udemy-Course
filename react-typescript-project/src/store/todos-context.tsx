import React, { useState } from "react";
import Todo from "../models/todo";
import { isPropertySignature } from "typescript";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(text: string) {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  function removeTodoHandler(todoId: string) {
    setTodos((prevState) => {
      return prevState.filter(todo => todo.id !== todoId)
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>);
}

export default TodosContextProvider;
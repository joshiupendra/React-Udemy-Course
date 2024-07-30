import React, { useRef, useContext } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC<{}> = () => {
  // Need to specify Generic and initial value in TypeScript
  const todoTextRef = useRef<HTMLInputElement>(null);
  const todosContext = useContext(TodosContext);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error/
      return;
    }

    todosContext.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextRef} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;
import React, { ChangeEvent, useState } from "react";
import { Item } from "../../Interfaces";

const TodoForm = (props: any) => {
  const [enteredTodo, setEnteredTodo] = useState<string>("");
  const onSubmitFormHandler = (event: any): void => {
    event.preventDefault();

    const newTodo: Item = {
      id: Math.floor(Math.random() * 100000000) + 1,
      todoText: enteredTodo,
      completed: false,
    };

    props.addNewTodo(newTodo);
    setEnteredTodo("");
  };

  const onAddTodoHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredTodo(event.target.value);
  };

  return (
    <form onSubmit={onSubmitFormHandler}>
      <input
        type="text"
        placeholder="Add a task to do"
        onChange={onAddTodoHandler}
        value={enteredTodo}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;

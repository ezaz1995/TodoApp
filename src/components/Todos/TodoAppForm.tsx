import React, { ChangeEvent, useState } from "react";

export default function TodoAppForm() {
  const [enteredTodo, setEnteredTodo] = useState("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTodo(event.target.value);
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="Add a task todo"
      />
      <button onSubmit={onSubmitHandler}>Add Todo</button>
    </form>
  );
}

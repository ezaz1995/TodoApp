import React, { ChangeEvent, useState } from "react";

interface Item {
  id: number;
  todoText: string;
  completed: boolean;
}

export default function TodoAppForm(props: any) {
  const [enteredTodo, setEnteredTodo] = useState<string>("");
  const randomNumber = Math.trunc(Math.random() * 10000000 + 1);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTodo(event.currentTarget.value);
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newTodo: Item = {
      id: randomNumber,
      todoText: enteredTodo,
      completed: false,
    };

    props.addTodo(newTodo);
    setEnteredTodo("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={enteredTodo}
        onChange={onChangeHandler}
        placeholder="Add a task todo"
      />
      <button onSubmit={onSubmitHandler}>Add Todo</button>
    </form>
  );
}

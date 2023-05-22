import { ChangeEvent, useState } from "react";
import { Item, Error } from "../../Interfaces";

const TodoForm = (props: any) => {
  const [enteredTodo, setEnteredTodo] = useState<string>("");
  const [error, setError] = useState<Error>();

  const onSubmitFormHandler = (event: any): void => {
    event.preventDefault();

    if (enteredTodo.trim().length === 0) {
      setError({
        title: "Empty string.",
        errorMessage: "Please enter a valid todo, empty todo is not valid.",
      });
      return;
    }
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

  const errorHandler = (): void => {
    setError(undefined);
  };

  return (
    <div className="todo__container">
      <form className="todo__form" onSubmit={onSubmitFormHandler}>
        <input
          className="todo__input"
          type="text"
          placeholder="Add a task to do"
          onChange={onAddTodoHandler}
          onClick={errorHandler}
          value={enteredTodo}
        />
        <button className="todo__btn" type="submit">
          Add Todo
        </button>
      </form>
      {error && (
        <div className="error__container">
          <p className="error__message">{error.errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default TodoForm;

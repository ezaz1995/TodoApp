import { Item } from "../../Interfaces";
import React from "react";

const TodoList = ({ selectedPath, todoList, setTodoList }: any) => {
  const LOCAL_STOREAGE_KEY = "todoList";
  let emptyListName;
  let filterTodo = todoList;

  switch (selectedPath) {
    case "":
      filterTodo = todoList.map((todo: Item) => todo);
      emptyListName = "";
      break;
    case "active":
      filterTodo = todoList.filter((todo: Item) => !todo.completed);
      emptyListName = "active";
      break;
    case "completed":
      filterTodo = todoList.filter((todo: Item) => todo.completed);
      emptyListName = "completed";
      break;
    default:
      break;
  }

  const blurHandler = (id: number, value: string) => {
    if (value.trim() === "") {
      setTodoList(todoList.filter((todo: Item) => todo.id !== id));
    } else {
      setTodoList(
        todoList.map((todo: Item) => {
          if (todo.id === id) {
            return {
              ...todo,
              todoText: value.trim(),
              editing: false,
            };
          }
          return todo;
        })
      );
    }
  };

  const keyDownHandler = (
    event: React.KeyboardEvent,
    id: number,
    value: string
  ) => {
    if (event.key === "Enter") {
      blurHandler(id, value);
    } else if (event.key === "Escape") {
      setTodoList(
        todoList.map((todo: Item) => {
          if (todo.id === id) {
            return {
              ...todo,
              editing: false,
            };
          }
          return todo;
        })
      );
    }
  };
  const onCompletedHandler = (id: number, completed: boolean) => {
    setTodoList(
      todoList.map((todo: Item) => {
        if (todo.id === id) return { ...todo, completed: !completed };

        return todo;
      })
    );
  };

  const onDeleteTodoHandler = (id: number) => {
    const deleteIndex = todoList.findIndex((todo: Item) => todo.id === id);

    if (deleteIndex !== -1) todoList.splice(deleteIndex, 1);

    localStorage.removeItem(LOCAL_STOREAGE_KEY);
    JSON.stringify(todoList);
    setTodoList(todoList.filter((todo: Item) => todo.id !== id));
  };

  const onTextDoubleClickHandler = (id: number) => {
    setTodoList(
      todoList.map((todo: Item) => {
        if (todo.id === id) return { ...todo, editing: true };

        return todo;
      })
    );
  };

  if (filterTodo.length === 0) {
    return <h2>{`Your ${emptyListName} list is empty`}</h2>;
  }

  return (
    <ul className="todo__list">
      {filterTodo.map((list: Item) => (
        <li
          className="todo__item"
          key={list.id}
          onClick={() => onCompletedHandler(list.id, list.completed)}
          style={{
            textDecoration: list.completed ? "line-through" : "",
            color: list.completed ? "#C6C6C6" : "#1d1d1d",
          }}
        >
          <div
            className="todo__mark"
            onClick={() => onCompletedHandler(list.id, list.completed)}
            style={{ backgroundColor: list.completed ? "#00ff00" : "" }}
          ></div>
          {list.editing ? (
            <input
              className="todo__input"
              type="text"
              defaultValue={list.todoText}
              onBlur={(event) => blurHandler(list.id, event.target.value)}
              onKeyDown={(event) =>
                keyDownHandler(event, list.id, event.currentTarget.value)
              }
              autoFocus
            />
          ) : (
            <p onDoubleClick={() => onTextDoubleClickHandler(list.id)}>
              {list.todoText}
            </p>
          )}

          <svg
            onClick={() => onDeleteTodoHandler(list.id)}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-trash-fill myTrash"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

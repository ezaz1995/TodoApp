import { useState } from "react";

interface Item {
  id: number;
  todoText: string;
  completed: boolean;
}

export default function TodoList(): any {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, todoText: "Hello world", completed: false },
    { id: 2, todoText: "test", completed: false },
    { id: 3, todoText: "Learn React", completed: false },
  ]);

  const onCompletHandler = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  //const addTodo = (newTodo) => {};

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => onCompletHandler(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.todoText}
        </li>
      ))}
    </ul>
  );
}

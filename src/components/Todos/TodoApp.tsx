import { useState } from "react";

import TodoAppForm from "./TodoAppForm";
import TodoList from "./TodoList";
import TodoNav from "./TodoNav";

interface Item {
  id: number;
  todoText: string;
  completed: boolean;
}

export default function TodoApp(props: any) {
  const [todo, setTodo] = useState<Item[]>([]);
  const randomNumber = Math.trunc(Math.random() * 10000000 + 1);

  const addTodo = (newTodo: Item) => {
    setTodo([
      ...todo,
      { id: randomNumber, todoText: newTodo.todoText, completed: false },
    ]);
    console.log(todo);
  };

  return (
    <div>
      <TodoAppForm addTodo={addTodo} />
      <TodoList todoValue={todo} />
      <TodoNav />
    </div>
  );
}

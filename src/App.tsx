import "./App.css";
import { Item } from "./Interfaces";
import React, { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoNav from "./components/Todos/TodoNav";

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Item[]>([]);

  const addTodo = (newTodo: Item) => {
    setTodoList([
      ...todoList,
      {
        id: Math.floor(Math.random() * 100000000) + 1,
        todoText: newTodo.todoText,
        completed: false,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoForm addNewTodo={addTodo} />
      <TodoList todoList={todoList} />
      <TodoNav />
    </div>
  );
};

export default App;

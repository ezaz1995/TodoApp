import { Item } from "./Interfaces";
import React, { useState, useEffect } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoNav from "./components/Todos/TodoNav";
import TodoClearAll from "./components/TodoClearAll";

const getLocalStorageTodoList = (key: string) => {
  const saveTodoList = localStorage.getItem(key);
  const initial = JSON.parse(String(saveTodoList));
  return initial || [];
};

const App: React.FC = () => {
  const LOCAL_STOREAGE_KEY = "todoList";

  const [todoList, setTodoList] = useState<Item[]>(() => {
    return getLocalStorageTodoList(LOCAL_STOREAGE_KEY);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STOREAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

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

  const completedTodoHandler = (id: number, completed: boolean) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        }
        return todo;
      })
    );
  };

  const deleteTodoHandler = (id: number) => {
    const deleteIndex = todoList.findIndex((todo) => todo.id === id);

    if (deleteIndex !== -1) todoList.splice(deleteIndex, 1);

    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoForm addNewTodo={addTodo} />
      <TodoList
        todoList={todoList}
        completedTodo={completedTodoHandler}
        deleteTodo={deleteTodoHandler}
      />
      <TodoClearAll />
      <TodoNav />
    </div>
  );
};

export default App;

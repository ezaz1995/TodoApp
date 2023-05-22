import { Item } from "./Interfaces";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoNav from "./components/Todos/TodoNav";
import TodoClearAll from "./components/Todos/TodoClearAll";

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

  const allTodoCounts = todoList.length;
  const allActiveTodoCounts = todoList.filter((todo) => !todo.completed).length;
  const allCompletedCountes = todoList.filter((todo) => todo.completed).length;

  return (
    <div className="App">
      <h1 className="todo__title">Todo app</h1>
      <TodoForm addNewTodo={addTodo} />
      <Routes>
        <Route
          path="/"
          element={
            <TodoList
              selectedPath=""
              todoList={todoList}
              setTodoList={setTodoList}
            />
          }
        />
        <Route
          path="/active"
          element={
            <TodoList
              selectedPath="active"
              todoList={todoList}
              setTodoList={setTodoList}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <TodoList
              selectedPath="completed"
              todoList={todoList}
              setTodoList={setTodoList}
            />
          }
        />
      </Routes>

      {todoList.length !== 0 && (
        <TodoClearAll todoList={todoList} setTodoList={setTodoList} />
      )}
      <TodoNav
        allTodos={allTodoCounts}
        allActive={allActiveTodoCounts}
        allCompleted={allCompletedCountes}
      />
    </div>
  );
};

export default App;

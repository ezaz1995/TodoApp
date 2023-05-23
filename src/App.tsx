import { Item } from "./Interfaces";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoNav from "./components/Todos/TodoNav";
import TodoClearAll from "./components/Todos/TodoClearAll";

//Will retrive the values from localstorage in the browser
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

  //AddTodo: Will set the new todo item into todolist
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

  /*
    CheckAllTodo: This function will mark all items in the todoList to completed if checkbox is clicked
    else if its not clicked it will unmark all the items.
  */
  const CheckAllTodos = (toggle: boolean) => {
    if (toggle) {
      setTodoList(
        todoList.map((todo: Item) => {
          if (!todo.completed) {
            return { ...todo, completed: toggle };
          }
          return todo;
        })
      );
    } else {
      setTodoList(
        todoList.map((todo: Item) => {
          if (todo.completed) {
            return { ...todo, completed: toggle };
          }
          return todo;
        })
      );
    }
  };

  //ClearAllTodos: will remove all all todo items
  const clearAllTodos = (todos: Item[]) => {
    setTodoList(todos.filter((todo: Item) => !todo.completed));
  };

  const allTodoCounts = todoList.length;
  const allActiveTodoCounts = todoList.filter((todo) => !todo.completed).length;
  const allCompletedCountes = todoList.filter((todo) => todo.completed).length;

  return (
    <div className="App">
      <>
        <h1 className="todo__title">Todo app</h1>
        <TodoForm addNewTodo={addTodo} CheckAllTodos={CheckAllTodos} />
        {allTodoCounts !== 0 && (
          <>
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
            <TodoClearAll todoList={todoList} setTodoList={setTodoList} />
            {allCompletedCountes !== 0 && (
              <button
                className="clear__completed__todos"
                onClick={() => clearAllTodos(todoList)}
              >
                Clear completed todos
              </button>
            )}
            <TodoNav
              allTodos={allTodoCounts}
              allActive={allActiveTodoCounts}
              allCompleted={allCompletedCountes}
            />
          </>
        )}
      </>
      <footer className="footer__container">
        <span>Double-click to edit a todo</span>
        <span>Created by ShaNawaz Hathalia</span>
      </footer>
    </div>
  );
};

export default App;

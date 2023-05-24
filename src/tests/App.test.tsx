import { screen, render, fireEvent } from "@testing-library/react";
import { Item } from "../Interfaces";
import App from "../App";
import TodoClearAll from "../components/Todos/TodoClearAll";

describe("App component", () => {
  let mockSetTodoList: jest.Mock;

  const todoList: Item[] = [
    { id: 1, todoText: "Go Shopping", completed: false },
    { id: 2, todoText: "Buy some new cloths", completed: false },
    { id: 3, todoText: "Shower before breakfast", completed: true },
  ];

  beforeEach(() => {
    mockSetTodoList = jest.fn();
    render(<App />);
  });

  test("Rendering Todo app title", () => {
    const text = screen.getByText(/Todo app/i);
    expect(text).toBeInTheDocument();
  });

  test("Render how to edit a todo item", () => {
    const editText = screen.getByText(/Double-click to edit a todo/i);
    expect(editText).toBeInTheDocument();
  });

  test("render clear completed todos in App component", () => {
    render(<TodoClearAll todoList={todoList} setTodoList={mockSetTodoList} />);
    const clearAllBtn = screen.getByRole("button", {
      name: /Clear all todos/i,
    });
    fireEvent.click(clearAllBtn);

    expect(mockSetTodoList).toHaveBeenCalledWith([]);
  });
});

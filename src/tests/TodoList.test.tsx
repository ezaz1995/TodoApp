import { Item } from "../Interfaces";
import { screen, render, fireEvent } from "@testing-library/react";
import TodoList from "../components/Todos/TodoList";
import userEvent from "@testing-library/user-event";

describe("TodoList component", () => {
  let mockSetTodoList: jest.Mock;
  const todoList: Item[] = [
    { id: 1, todoText: "Go Shopping", completed: false, editing: false },
    {
      id: 2,
      todoText: "Buy some new cloths",
      completed: false,
      editing: false,
    },
    {
      id: 3,
      todoText: "Shower before breakfast",
      completed: true,
      editing: false,
    },
    { id: 4, todoText: "", completed: false, editing: false },
  ];

  beforeEach(() => {
    mockSetTodoList = jest.fn();
    render(<TodoList todoList={todoList} setTodoList={mockSetTodoList} />);
  });

  test("Renders todoList based on filter method", () => {
    const todo = screen.getByText("Go Shopping");
    expect(todo).not.toBeNull();
    expect(todo).toBeInTheDocument();
  });

  test("User double clicked on todo item", () => {
    const todo = screen.getByText("Go Shopping");
    userEvent.dblClick(todo);
    expect(mockSetTodoList).toHaveBeenCalled();
  });
});

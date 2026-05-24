import type { Item } from "../Interfaces";
import { screen, render } from "@testing-library/react";
import TodoList from "../components/Todos/TodoList";
import userEvent from "@testing-library/user-event";

describe("TodoList component", () => {
  let mockSetTodoList: ReturnType<typeof vi.fn>;
  const todoList: Item[] = [
    { id: 1, title: "Go Shopping", completed: false, editing: false },
    {
      id: 2,
      title: "Buy some new cloths",
      completed: false,
      editing: false,
    },
    {
      id: 3,
      title: "Shower before breakfast",
      completed: true,
      editing: false,
    },
    { id: 4, title: "", completed: false, editing: false },
  ];

  beforeEach(() => {
    mockSetTodoList = vi.fn();
    render(<TodoList todoList={todoList} setTodoList={mockSetTodoList} />);
  });

  test("Renders todoList item", () => {
    const todo = screen.getByText("Go Shopping");
    expect(todo).not.toBeNull();
    expect(todo).toBeInTheDocument();
  });

  test("User double clicked on todo item", async () => {
    const user = userEvent.setup();
    const todo = screen.getByText("Go Shopping");
    await user.dblClick(todo);
    expect(mockSetTodoList).toHaveBeenCalled();
  });
});

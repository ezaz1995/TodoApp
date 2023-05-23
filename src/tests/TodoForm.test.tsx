import { render, screen, fireEvent } from "@testing-library/react";
import { Item } from "../Interfaces";
import TodoForm from "../components/Todos/TodoForm";

describe("TodoForm component", () => {
  let mockSetTodoList: jest.Mock;

  const todoList: Item[] = [
    { id: 1, todoText: "Go Shopping", completed: false },
    { id: 2, todoText: "Buy some new cloths", completed: false },
    { id: 3, todoText: "Shower before breakfast", completed: true },
  ];

  beforeEach(() => {
    mockSetTodoList = jest.fn();
    render(<TodoForm />);
  });

  test("text field and button should render correctly", () => {
    const textField = screen.getByRole("textbox");
    const addTodoBtn = screen.getByRole("button", { name: "Add Todo" });
    expect(textField).toBeInTheDocument();
    expect(addTodoBtn).toBeInTheDocument();
  });

  test("Label and checkbox should be rendered", () => {
    const label = screen.getByLabelText("Complete all");
    const checkbox = screen.getByRole("checkbox");
    expect(label).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });
});

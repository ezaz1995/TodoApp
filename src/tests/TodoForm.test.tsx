import { render, screen, fireEvent, cleanup } from "@testing-library/react";
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
    console.log(mockSetTodoList);
    render(<TodoForm todoList={todoList} setTodoList={mockSetTodoList} />);
  });

  afterEach(() => {
    cleanup();
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

  test("A new Item has been added when pressed 'Enter'", () => {
    const inputEl = screen.getByRole("textbox");
    const addTodoBtn = screen.getByRole("button", { name: "Add Todo" });

    fireEvent.change(inputEl, { target: { value: "New todo item" } });
    fireEvent.click(addTodoBtn);

    const newTodo: Item = {
      id: expect.any(Number),
      todoText: "New todo item",
      completed: false,
    };
    expect(mockSetTodoList).toHaveBeenCalledWith([...todoList, newTodo]);
  });
});

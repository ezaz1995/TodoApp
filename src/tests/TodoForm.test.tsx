import { fireEvent, render, screen } from "@testing-library/react";
import { Item } from "../Interfaces";
import TodoForm from "../components/Todos/TodoForm";

describe("TodoForm component", () => {
  let mockSetTodoList: jest.Mock;

  beforeEach(() => {
    mockSetTodoList = jest.fn();
    render(<TodoForm addNewTodo={mockSetTodoList} />);
  });

  test("text field and button should render correctly", () => {
    const textField = screen.getByRole("textbox");
    const addTodoBtn = screen.getByRole("button", { name: "Add Todo" });
    expect(textField).toBeInTheDocument();
    expect(addTodoBtn).toBeInTheDocument();
  });

  test("render todo form with only one 'Add todo' button", () => {
    const addTodoBtn = screen.getAllByRole("button");
    expect(addTodoBtn).toHaveLength(1);
    expect(addTodoBtn).not.toHaveLength(0);
  });

  test("Label and checkbox should be rendered", () => {
    const label = screen.getByLabelText("Complete all");
    const checkbox = screen.getByRole("checkbox");
    expect(label).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });

  test("Create a new todo on submit 'Add todo' button", () => {
    const textbox = screen.getByRole("textbox");
    const addTodoBtn = screen.getByRole("button", { name: "Add Todo" });

    fireEvent.change(textbox, { target: { value: "a new todo item" } });
    fireEvent.submit(addTodoBtn);

    const newTodo: Item = {
      id: expect.any(Number),
      title: "a new todo item",
      completed: false,
    };

    expect(mockSetTodoList).toHaveBeenCalledWith(newTodo);
  });

  test("Entered value shoud not be empty string", () => {
    const input = screen.getByPlaceholderText("Add a task to do");
    expect(input).not.toBe("");
  });
});

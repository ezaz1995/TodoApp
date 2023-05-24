import { screen, render } from "@testing-library/react";
import { Item } from "../Interfaces";
import App from "../App";

describe("App component", () => {
  const todoList: Item[] = [
    { id: 1, todoText: "Go Shopping", completed: false },
    { id: 2, todoText: "Buy some new cloths", completed: false },
    { id: 3, todoText: "Shower before breakfast", completed: true },
  ];

  beforeEach(() => {
    render(<App />);
  });

  test("Rendering Todo app title", () => {
    const text = screen.getByText(/Todo app/i);
    expect(text).toBeInTheDocument();
  });
});

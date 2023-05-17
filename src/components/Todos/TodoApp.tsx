import TodoAppForm from "./TodoAppForm";
import TodoList from "./TodoList";
import TodoNav from "./TodoNav";

interface Item {
  id: number;
  todoText: string;
  completed: boolean;
}

export default function TodoApp(props: any) {
  const addTodo = (newTodo: Item) => {};

  return (
    <div>
      <TodoAppForm />
      <TodoList />
      <TodoNav />
    </div>
  );
}

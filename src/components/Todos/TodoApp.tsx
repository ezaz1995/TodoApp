import TodoAppForm from "./TodoAppForm";
import TodoList from "./TodoList";
import TodoNav from "./TodoNav";

export default function TodoApp() {
  return (
    <div>
      <TodoAppForm />
      <TodoList />
      <TodoNav />
    </div>
  );
}

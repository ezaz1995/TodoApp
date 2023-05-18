import { Item } from "../../Interfaces";

const TodoList = (props: any) => {
  const onCompletedHandler = (id: number, completed: boolean) => {
    props.completedTodo(id, !completed);
  };

  const onDeleteTodoHandler = (id: number) => {
    props.deleteTodo(id);
  };

  if (props.todoList.length === 0) {
    return <h2>Your todo list is empty</h2>;
  }

  return (
    <ul>
      {props.todoList.map((list: Item) => (
        <li
          key={list.id}
          onClick={() => onCompletedHandler(list.id, list.completed)}
          style={{
            textDecoration: list.completed ? "line-through" : "none",
            color: list.completed ? "#999" : "#1d1d1d",
          }}
        >
          <div
            onClick={() => onCompletedHandler(list.id, list.completed)}
          ></div>
          {list.todoText}
          <svg
            onClick={() => onDeleteTodoHandler(list.id)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

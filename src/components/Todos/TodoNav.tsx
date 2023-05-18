import { Status } from "../../Interfaces";

const TodoNav = ({ allTodos, allActive, allCompleted }: Status) => {
  return (
    <div>
      <ul>
        <li>All ({allTodos})</li>
        <li>Active ({allActive})</li>
        <li>Completed ({allCompleted})</li>
      </ul>
    </div>
  );
};

export default TodoNav;

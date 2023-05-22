const TodoClearAll = (props: any) => {
  const onClearAllHandler = () => {
    localStorage.clear();
    props.setTodoList([]);
  };

  return (
    <button className="todo__clear_all" onClick={onClearAllHandler}>
      Clear all todos
    </button>
  );
};

export default TodoClearAll;

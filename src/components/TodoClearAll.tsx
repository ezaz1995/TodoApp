const TodoClearAll = (props: any) => {
  const onClearAllHandler = () => {
    localStorage.clear();
    props.setTodoList([]);
  };

  return (
    <div>
      <button onClick={onClearAllHandler}>Clear all Todos</button>
    </div>
  );
};

export default TodoClearAll;

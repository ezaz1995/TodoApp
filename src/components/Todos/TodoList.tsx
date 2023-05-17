import React from "react";
import { Item } from "../../Interfaces";

const TodoList = (props: any) => {
  return (
    <ul>
      {props.todoList.map((list: Item) => {
        return <li key={list.id}>{list.todoText}</li>;
      })}
    </ul>
  );
};

export default TodoList;

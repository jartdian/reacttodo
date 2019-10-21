import React from "react";
import { ButtonX, TodoContainer, Todo } from "./TodoSC";

export default props => (
  <TodoContainer>
    <Todo
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
        borderBottom: props.todo.complete ? "none" : ""
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </Todo>
    <ButtonX onClick={props.onDelete}>&#x2718;</ButtonX>
  </TodoContainer>
);

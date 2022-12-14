import React from "react";
import { todoListProps } from "../types/componentTypes";
import Todo from "./Todo";


const TodoList: React.FunctionComponent<todoListProps> = ({ todo, onCheck, onDelete }) => {
  return (
    <div>
      {todo.map((tdo) => (
        <Todo
          key={tdo.id}
          title={tdo.title}
          assginedTo={tdo.assginedTo}
          onDelete={onDelete}
          onCheck={onCheck}
          id={tdo.id}
          isComplete={tdo.isComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;

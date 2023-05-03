import "./todo.scss";
import clsx from "clsx";
import { useState } from "react";

interface TodoItemProps {
  id?: number;
  text?: string;
  completed?: boolean;
  onToggle?: (id: number) => void;
  onClick?: boolean;
}

const TodoItem = ({
  id,
  text,
  completed,
  onToggle,
  onClick,
}: TodoItemProps) => {

  

  return (
    <div
     className={`todo-item-container ` + clsx(completed && "completed")}
     >
      <input
        className="todo-item-checkbox"
        type="checkbox"
        id={id?.toString()}
        checked={completed}
        // onChange={() => onToggle && onToggle(id)}
      />

      <label className="todo-item" htmlFor={id?.toString()}>
        {text}
      </label>

      <button className="delete-todo-button">
        <svg
          width="30"
          height="34"
          viewBox="0 0 30 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.413 15.6522C11.9533 15.6522 12.3913 16.1043 12.3913 16.662V25.0771C12.3913 25.6348 11.9533 26.087 11.413 26.087C10.8728 26.087 10.4348 25.6348 10.4348 25.0771V16.662C10.4348 16.1043 10.8728 15.6522 11.413 15.6522Z"
            fill="#8C8E93"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.587 15.6522C19.1272 15.6522 19.5652 16.1043 19.5652 16.662V25.0771C19.5652 25.6348 19.1272 26.087 18.587 26.087C18.0467 26.087 17.6087 25.6348 17.6087 25.0771V16.662C17.6087 16.1043 18.0467 15.6522 18.587 15.6522Z"
            fill="#8C8E93"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 8.15217C0 7.6119 0.468539 7.17391 1.04651 7.17391H28.9535C29.5315 7.17391 30 7.6119 30 8.15217C30 8.69245 29.5315 9.13043 28.9535 9.13043H1.04651C0.468539 9.13043 0 8.69245 0 8.15217Z"
            fill="#8C8E93"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.95059 12.3913C5.52362 12.3913 5.98814 12.8508 5.98814 13.4177V27.1026C5.98814 29.3701 7.84625 31.2081 10.1383 31.2081H20.5138C22.806 31.2081 24.664 29.3701 24.664 27.1026V13.4177C24.664 12.8508 25.1286 12.3913 25.7016 12.3913C26.2746 12.3913 26.7391 12.8508 26.7391 13.4177V27.1026C26.7391 30.5038 23.952 33.2609 20.5138 33.2609H10.1383C6.70022 33.2609 3.91304 30.5038 3.91304 27.1026V13.4177C3.91304 12.8508 4.37757 12.3913 4.95059 12.3913Z"
            fill="#8C8E93"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.6051 2.10702C12.2744 2.10702 11.1957 3.20759 11.1957 4.56522V7.02341H19.4565V4.56522C19.4565 3.20758 18.3778 2.10702 17.0471 2.10702H13.6051ZM9.13043 4.56522C9.13043 2.04392 11.1338 0 13.6051 0H17.0471C19.5184 0 21.5217 2.04393 21.5217 4.56522V8.07692C21.5217 8.65876 21.0594 9.13043 20.4891 9.13043H10.163C9.59275 9.13043 9.13043 8.65876 9.13043 8.07692V4.56522Z"
            fill="#8C8E93"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;

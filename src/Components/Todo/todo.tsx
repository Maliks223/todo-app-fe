import "./todo.scss";

interface TodoItemProps {
  id?: number;
  text?: string;
  completed?: boolean;
  onToggle?: (id: number) => void;
}

const TodoItem = ({ id, text, completed, onToggle }: TodoItemProps) => {
  return (
    <div className="todo-item-container">
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
    </div>
  );
};

export default TodoItem;

import "./button.scss";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({ text, onClick, className, disabled }: ButtonProps) => {
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
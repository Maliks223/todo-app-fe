import "./textInput.scss";
import { ChangeEvent } from "react";

interface TextInputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  placeHolder?: string;
  name?: string;
  id?: string;
}

const TextInput = ({
  value,
  onChange,
  className,
  type,
  placeHolder,
  name,
  id,
}: TextInputProps) => {
  return (
    <input
      className="text-input-container"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      name={name}
      id={id}
    />
  );
};

export default TextInput;
